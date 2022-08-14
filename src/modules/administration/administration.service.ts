import { PrismaService } from '@database/prisma-service'
import { Injectable } from '@nestjs/common'

import { AdministrationEntity } from './administration.entity'
import { CreateOrUpdateDto } from './dto/create-or-update.dto'

@Injectable()
export class AdministrationService {
    constructor (private prisma: PrismaService) {}

    async create (data: CreateOrUpdateDto): Promise<AdministrationEntity> {
        return await this.prisma.administration.create({
            data
        })
    }

    async findAll (): Promise<AdministrationEntity[]> {
        return await this.prisma.administration.findMany()
    }

    async findOne (idAdministration: string): Promise<AdministrationEntity> {
        return await this.prisma.administration.findUnique({ where: { idAdministration } })
    }

    async update (idAdministration: string, createOrUpdateDto: CreateOrUpdateDto): Promise<AdministrationEntity> {
        return await this.prisma.administration.update({
            data: createOrUpdateDto,
            where: { idAdministration }
        })
    }

    async remove (idAdministration: string): Promise<AdministrationEntity> {
        return await this.prisma.administration.delete({ where: { idAdministration } })
    }
}