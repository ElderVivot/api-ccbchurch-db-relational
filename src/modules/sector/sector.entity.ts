export class SectorEntity {
    idSector: string
    numberSector: number
    nameSector: string
    statusSector: 'ACTIVE' | 'INACTIVE'
    createdAt: Date
    updatedAt: Date
    idAdministration: String
}