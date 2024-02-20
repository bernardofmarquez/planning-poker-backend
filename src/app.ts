import fastify from 'fastify'
import authController from './modules/auth/auth-controller'

export interface CreateAppOptions {
  initialNamespace: string
  logger: boolean
  corsOrigin: string
}

export default async function createApp(options: CreateAppOptions) {
  const app = fastify(options)

  app.get('/health', () => 'OK')

  app.register(authController)

  return app
}
