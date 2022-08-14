export class ChurchEntity {
    idChurch: string
    codeChurch: string
    nameChurch: string
    statusChurch: 'ACTIVE' | 'INACTIVE'
    createdAt: Date
    updatedAt: Date
    idSector: string
}