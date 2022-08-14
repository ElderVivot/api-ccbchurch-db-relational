/* eslint-disable indent */
import { IsNumber, IsOptional, IsString } from 'class-validator'

export class FilterDto {
    @IsNumber()
    @IsOptional()
    numberSector?: number

    @IsString()
    @IsOptional()
    idAdministration?: string
}