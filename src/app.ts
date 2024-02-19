import fastify from 'fastify'

export interface CreateAppOptions {
  initialNamespace: string
  logger: boolean
  corsOrigin: string
}

export default async function createApp(options: CreateAppOptions) {
  const app = fastify(options)

  app.get('/health', () => 'OK')

  return app
}
