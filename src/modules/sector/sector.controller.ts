import { ErrorRequestResponse } from '@common/factories/make-error-request-response'
import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common'

import { CreateOrUpdateDto } from './dto/create-or-update.dto'
import { SectorEntity } from './sector.entity'
import { SectorService } from './sector.service'

@Controller('sector')
export class SectorController {
    constructor (private readonly sectorService: SectorService) {}

  @Post()
    create (@Body() data: CreateOrUpdateDto): Promise<SectorEntity | ErrorRequestResponse> {
        return this.sectorService.create(data)
    }

  @Get()
  findAll (): Promise<SectorEntity[] | ErrorRequestResponse> {
      return this.sectorService.findAll()
  }

  @Get(':idSector')
  findOne (@Param('idSector') idSector: string): Promise<SectorEntity | ErrorRequestResponse> {
      return this.sectorService.findOne(idSector)
  }

  @Put(':idSector')
  update (@Param('idSector') idSector: string, @Body() data: CreateOrUpdateDto): Promise<SectorEntity | ErrorRequestResponse> {
      return this.sectorService.update(idSector, data)
  }

  @Delete(':idSector')
  remove (@Param('idSector') idSector: string): Promise<SectorEntity | ErrorRequestResponse> {
      return this.sectorService.remove(idSector)
  }
}