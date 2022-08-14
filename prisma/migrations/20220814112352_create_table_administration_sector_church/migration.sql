-- CreateTable
CREATE TABLE "administrations" (
    "idAdministration" TEXT NOT NULL,
    "nameAdministration" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "administrations_pkey" PRIMARY KEY ("idAdministration")
);

-- CreateTable
CREATE TABLE "sectors" (
    "idSector" TEXT NOT NULL,
    "nameSector" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "idAdministration" TEXT NOT NULL,

    CONSTRAINT "sectors_pkey" PRIMARY KEY ("idSector")
);

-- CreateTable
CREATE TABLE "churchs" (
    "idChurch" TEXT NOT NULL,
    "codeChurch" TEXT NOT NULL,
    "nameChurch" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "idSector" TEXT NOT NULL,

    CONSTRAINT "churchs_pkey" PRIMARY KEY ("idChurch")
);

-- CreateIndex
CREATE UNIQUE INDEX "churchs_codeChurch_key" ON "churchs"("codeChurch");

-- AddForeignKey
ALTER TABLE "sectors" ADD CONSTRAINT "sectors_idAdministration_fkey" FOREIGN KEY ("idAdministration") REFERENCES "administrations"("idAdministration") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "churchs" ADD CONSTRAINT "churchs_idSector_fkey" FOREIGN KEY ("idSector") REFERENCES "sectors"("idSector") ON DELETE RESTRICT ON UPDATE CASCADE;
