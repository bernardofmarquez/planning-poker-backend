import { FastifyPluginAsync } from 'fastify'
import signIn from './routes/sign-in'

const authController: FastifyPluginAsync = async (
  app,
) => {
  const prefix = '/v1/auth'
  app.register(signIn, { prefix })
}

export default authController
