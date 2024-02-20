import { JsonSchemaToTsProvider } from '@fastify/type-provider-json-schema-to-ts'
import { FastifyPluginAsync } from 'fastify'
import { signInBodySchema } from '../schemas/sign-in'
import userRepository from '../../../repositories/user-repository'
import { compareHash } from '../../../utils/hash'
import { TokenPayload } from '../../../utils/auth-commons/protocols'
import { generateJwtAccessToken } from '../../../utils/jwt/jwt'

const signIn: FastifyPluginAsync = async (
  app,
) => {
  app.withTypeProvider<JsonSchemaToTsProvider>().post('/sign-in', {
    schema: {
      body: signInBodySchema,
      response: {
        200: signInBodySchema,
        401: {},
      },
    },
  }, async (req, rep) => {
    const { body } = req

    const user = await userRepository.findByEmail(body.email)
    if (!user) {
      return rep.status(401).send()
    }

    const validPassword = compareHash(body.password, user.password)
    if (!validPassword) {
      return rep.status(401).send()
    }

    const accessToken = generateJwtAccessToken<TokenPayload>({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    })
    return rep.status(200).send({ accessToken })
  })
}

export default signIn
