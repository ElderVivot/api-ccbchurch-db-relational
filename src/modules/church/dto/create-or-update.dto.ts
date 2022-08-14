/* eslint-disable indent */
import { IsNumber, IsNumberString, IsString } from 'class-validator'

export class CreateOrUpdateDto {
    @IsNumberString()
    codeChurch: string

    @IsString()
    nameChurch: string

    @IsNumber()
    numberSector: number
}