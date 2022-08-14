import { Module } from '@nestjs/common'

import { AdministrationModule } from './modules/administration/administration.module'

@Module({
    imports: [AdministrationModule]
})
export class AppModule {}