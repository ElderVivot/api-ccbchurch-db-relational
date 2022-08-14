import { Module } from '@nestjs/common'

import { AdministrationModule } from './modules/administration/administration.module'
import { SectorModule } from './modules/sector/sector.module'

@Module({
    imports: [AdministrationModule, SectorModule]
})
export class AppModule {}