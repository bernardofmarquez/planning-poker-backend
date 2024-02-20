import createApp from './app'
import { prisma } from './config/db'

const main = async () => {
  const app = await createApp({
    initialNamespace: 'planning-poker:server',
    logger: false,
    corsOrigin: process.env.CORS_ORIGIN as string,
  })

  const address = await app.listen({
    port: Number(process.env.PORT),
    host: '0.0.0.0',
  })
  await app.ready()

  /* eslint-disable no-console */
  console.log(address)
}

main().catch(async (err) => {
  try {
    /* eslint-disable no-console */
    console.error(`webserver crashed: ${err.stack || err.toString()}`)
    await prisma.$disconnect()
  } finally {
    process.exit(1)
  }
})
