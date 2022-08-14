import { PrismaService } from '@database/prisma-service'
import { Module } from '@nestjs/common'

import { AdministrationController } from './administration.controller'
import { AdministrationService } from './administration.service'

@Module({
    imports: [],
    controllers: [AdministrationController],
    providers: [PrismaService, AdministrationService]
})
export class AdministrationModule {}