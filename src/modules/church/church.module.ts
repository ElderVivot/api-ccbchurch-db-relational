import { PrismaService } from '@database/prisma-service'
import { SectorService } from '@modules/sector/sector.service'
import { Module } from '@nestjs/common'

import { ChurchController } from './church.controller'
import { ChurchService } from './church.service'

@Module({
    imports: [],
    controllers: [ChurchController],
    providers: [PrismaService, ChurchService, SectorService]
})
export class ChurchModule {}