import { json, urlencoded } from 'body-parser'

import { PrismaService } from '@database/prisma-service'
import { NestFactory } from '@nestjs/core'

import { AppModule } from './app.module'

async function bootstrap () {
    const app = await NestFactory.create(AppModule, { cors: true })
    app.setGlobalPrefix('v1')
    app.use(json({ limit: '50mb' }))
    app.use(urlencoded({ limit: '50mb', extended: true }))

    const prismaService = app.get(PrismaService)
    await prismaService.enableShutdownHooks(app)

    await app.listen(process.env.API_PORT)
}
bootstrap()