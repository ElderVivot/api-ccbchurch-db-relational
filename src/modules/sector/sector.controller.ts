import { ErrorRequestResponse } from '@common/factories/make-error-request-response'
import { ValidationPipeCustom } from '@common/pipe/validation-custom.pipe'
import { Controller, Get, Post, Body, Param, Delete, Put, Query, ParseUUIDPipe } from '@nestjs/common'

import { CreateOrUpdateDto } from './dto/create-or-update.dto'
import { FilterDto } from './dto/filter.dto'
import { SectorEntity } from './sector.entity'
import { SectorService } from './sector.service'

@Controller('sector')
export class SectorController {
    constructor (private readonly sectorService: SectorService) {}

  @Post()
    create (@Body(ValidationPipeCustom) data: CreateOrUpdateDto): Promise<SectorEntity | ErrorRequestResponse> {
        return this.sectorService.create(data)
    }

  @Get()
  findAll (@Query(ValidationPipeCustom) filterDto: FilterDto): Promise<SectorEntity[] | ErrorRequestResponse> {
      return this.sectorService.findAll(filterDto)
  }

  @Get(':idSector')
  findOne (@Param('idSector', ParseUUIDPipe) idSector: string): Promise<SectorEntity | ErrorRequestResponse> {
      return this.sectorService.findOne(idSector)
  }

  @Put(':idSector')
  update (
    @Param('idSector', ParseUUIDPipe) idSector: string,
    @Body(ValidationPipeCustom) data: CreateOrUpdateDto
  ): Promise<SectorEntity | ErrorRequestResponse> {
      return this.sectorService.update(idSector, data)
  }

  @Delete(':idSector')
  remove (@Param('idSector', ParseUUIDPipe) idSector: string): Promise<SectorEntity | ErrorRequestResponse> {
      return this.sectorService.remove(idSector)
  }
}