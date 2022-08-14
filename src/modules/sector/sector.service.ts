import { ErrorRequestResponse, MakeErrorRequestResponseV2 } from '@common/factories/make-error-request-response'
import { PrismaService } from '@database/prisma-service'
import { Injectable } from '@nestjs/common'

import { CreateOrUpdateDto } from './dto/create-or-update.dto'
import { FilterDto } from './dto/filter.dto'
import { SectorEntity } from './sector.entity'

@Injectable()
export class SectorService {
    constructor (private prisma: PrismaService) {}

    async create (data: CreateOrUpdateDto): Promise<SectorEntity | ErrorRequestResponse> {
        try {
            return await this.prisma.sector.create({
                data
            })
        } catch (error) {
            return MakeErrorRequestResponseV2('create', __filename, error)
        }
    }

    async findAll (filterDto: FilterDto): Promise<SectorEntity[] | ErrorRequestResponse> {
        try {
            const { numberSector, idAdministration } = filterDto
            let sql = `
                SELECT sectors.*
                  FROM public.sectors AS sectors
                 WHERE "idSector" IS NOT NULL
            `
            if (numberSector) sql += `AND sectors."numberSector" = ${numberSector}`
            if (idAdministration) sql += `AND sectors."idAdministration" = ${idAdministration}`

            return await this.prisma.$queryRawUnsafe<SectorEntity[]>(sql)
        } catch (error) {
            return MakeErrorRequestResponseV2('findAll', __filename, error)
        }
    }

    async findOne (idSector: string): Promise<SectorEntity | ErrorRequestResponse> {
        try {
            return await this.prisma.sector.findUnique({ where: { idSector } })
        } catch (error) {
            return MakeErrorRequestResponseV2('findOne', __filename, error)
        }
    }

    async update (idSector: string, createOrUpdateDto: CreateOrUpdateDto): Promise<SectorEntity | ErrorRequestResponse> {
        try {
            return await this.prisma.sector.update({
                data: createOrUpdateDto,
                where: { idSector }
            })
        } catch (error) {
            return MakeErrorRequestResponseV2('update', __filename, error)
        }
    }

    async remove (idSector: string): Promise<SectorEntity | ErrorRequestResponse> {
        try {
            return await this.prisma.sector.delete({ where: { idSector } })
        } catch (error) {
            return MakeErrorRequestResponseV2('remove', __filename, error)
        }
    }
}