import { Module } from '@nestjs/common'

import { AdministrationModule } from './modules/administration/administration.module'
import { ChurchModule } from './modules/church/church.module'
import { SectorModule } from './modules/sector/sector.module'

@Module({
    imports: [AdministrationModule, SectorModule, ChurchModule]
})
export class AppModule {}