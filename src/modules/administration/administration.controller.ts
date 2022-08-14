import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common'

import { AdministrationEntity } from './administration.entity'
import { AdministrationService } from './administration.service'
import { CreateOrUpdateDto } from './dto/create-or-update.dto'

@Controller('administration')
export class AdministrationController {
    constructor (private readonly administrationService: AdministrationService) {}

  @Post()
    create (@Body() data: CreateOrUpdateDto): Promise<AdministrationEntity> {
        return this.administrationService.create(data)
    }

  @Get()
  findAll (): Promise<AdministrationEntity[]> {
      return this.administrationService.findAll()
  }

  @Get(':idAdministration')
  findOne (@Param('idAdministration') idAdministration: string): Promise<AdministrationEntity> {
      return this.administrationService.findOne(idAdministration)
  }

  @Put(':idAdministration')
  update (@Param('idAdministration') idAdministration: string, @Body() data: CreateOrUpdateDto): Promise<AdministrationEntity> {
      return this.administrationService.update(idAdministration, data)
  }

  @Delete(':idAdministration')
  remove (@Param('idAdministration') idAdministration: string): Promise<AdministrationEntity> {
      return this.administrationService.remove(idAdministration)
  }
}