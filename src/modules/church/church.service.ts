import { ErrorRequestResponse, MakeErrorRequestResponseV2 } from '@common/factories/make-error-request-response'
import { PrismaService } from '@database/prisma-service'
import { FilterDto as FilterDtoSector } from '@modules/sector/dto/filter.dto'
import { SectorEntity } from '@modules/sector/sector.entity'
import { SectorService } from '@modules/sector/sector.service'
import { Injectable, NotFoundException } from '@nestjs/common'

import { ChurchEntity } from './church.entity'
import { CreateOrUpdateDto } from './dto/create-or-update.dto'

@Injectable()
export class ChurchService {
    constructor (
        private prisma: PrismaService,
        private sectorSercie: SectorService
    ) {}

    private async getSector (filterSector: FilterDtoSector): Promise<SectorEntity> {
        const sectors = await this.sectorSercie.findAll({ ...filterSector })
        if (sectors instanceof ErrorRequestResponse) throw sectors
        if (sectors.length === 0) throw new NotFoundException('Dont find sector with this filter')
        return sectors[0]
    }

    async create (data: CreateOrUpdateDto): Promise<ChurchEntity | ErrorRequestResponse> {
        try {
            const sector = await this.getSector(data)
            delete data.numberSector

            return await this.prisma.church.create({
                data: {
                    ...data,
                    idSector: sector.idSector
                }
            })
        } catch (error) {
            return MakeErrorRequestResponseV2('create', __filename, error)
        }
    }

    async findAll (): Promise<ChurchEntity[] | ErrorRequestResponse> {
        try {
            return await this.prisma.church.findMany()
        } catch (error) {
            return MakeErrorRequestResponseV2('findAll', __filename, error)
        }
    }

    async findOne (idChurch: string): Promise<ChurchEntity | ErrorRequestResponse> {
        try {
            return await this.prisma.church.findUnique({ where: { idChurch } })
        } catch (error) {
            return MakeErrorRequestResponseV2('findOne', __filename, error)
        }
    }

    async update (idChurch: string, data: CreateOrUpdateDto): Promise<ChurchEntity | ErrorRequestResponse> {
        try {
            const sector = await this.getSector(data)
            delete data.numberSector

            return await this.prisma.church.update({
                data: { ...data, idSector: sector.idSector },
                where: { idChurch }
            })
        } catch (error) {
            return MakeErrorRequestResponseV2('update', __filename, error)
        }
    }

    async remove (idChurch: string): Promise<ChurchEntity | ErrorRequestResponse> {
        try {
            return await this.prisma.church.delete({ where: { idChurch } })
        } catch (error) {
            return MakeErrorRequestResponseV2('remove', __filename, error)
        }
    }
}