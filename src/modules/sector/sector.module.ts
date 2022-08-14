import { PrismaService } from '@database/prisma-service'
import { Module } from '@nestjs/common'

import { SectorController } from './sector.controller'
import { SectorService } from './sector.service'

@Module({
    imports: [],
    controllers: [SectorController],
    providers: [PrismaService, SectorService]
})
export class SectorModule {}