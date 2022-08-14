/* eslint-disable indent */
import { IsNumber, IsString } from 'class-validator'

export class CreateOrUpdateDto {
    @IsString()
    nameSector: string

    @IsNumber()
    numberSector: number

    @IsString()
    idAdministration: string
}