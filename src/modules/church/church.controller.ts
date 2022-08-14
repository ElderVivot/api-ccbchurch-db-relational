import { ErrorRequestResponse } from '@common/factories/make-error-request-response'
import { ValidationPipeCustom } from '@common/pipe/validation-custom.pipe'
import { Controller, Get, Post, Body, Param, Delete, Put, ParseUUIDPipe } from '@nestjs/common'

import { ChurchEntity } from './church.entity'
import { ChurchService } from './church.service'
import { CreateOrUpdateDto } from './dto/create-or-update.dto'

@Controller('church')
export class ChurchController {
    constructor (private readonly churchService: ChurchService) {}

  @Post()
    create (@Body(ValidationPipeCustom) data: CreateOrUpdateDto): Promise<ChurchEntity | ErrorRequestResponse> {
        return this.churchService.create(data)
    }

  @Get()
  findAll (): Promise<ChurchEntity[] | ErrorRequestResponse> {
      return this.churchService.findAll()
  }

  @Get(':idChurch')
  findOne (@Param('idChurch', ParseUUIDPipe) idChurch: string): Promise<ChurchEntity | ErrorRequestResponse> {
      return this.churchService.findOne(idChurch)
  }

  @Put(':idChurch')
  update (@Param('idChurch', ParseUUIDPipe) idChurch: string, @Body(ValidationPipeCustom) data: CreateOrUpdateDto): Promise<ChurchEntity | ErrorRequestResponse> {
      return this.churchService.update(idChurch, data)
  }

  @Delete(':idChurch')
  remove (@Param('idChurch', ParseUUIDPipe) idChurch: string): Promise<ChurchEntity | ErrorRequestResponse> {
      return this.churchService.remove(idChurch)
  }
}