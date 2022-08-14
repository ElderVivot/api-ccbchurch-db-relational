/*
  Warnings:

  - The `statusChurch` column on the `churchs` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `statusSector` column on the `sectors` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "StatusActiveInactive" AS ENUM ('ACTIVE', 'INACTIVE');

-- CreateEnum
CREATE TYPE "MachineSupplier" AS ENUM ('CIELO');

-- AlterTable
ALTER TABLE "churchs" DROP COLUMN "statusChurch",
ADD COLUMN     "statusChurch" "StatusActiveInactive" NOT NULL DEFAULT E'ACTIVE';

-- AlterTable
ALTER TABLE "sectors" DROP COLUMN "statusSector",
ADD COLUMN     "statusSector" "StatusActiveInactive" NOT NULL DEFAULT E'ACTIVE';

-- DropEnum
DROP TYPE "StatusChurch";

-- DropEnum
DROP TYPE "StatusSector";

-- CreateTable
CREATE TABLE "churchs_card_machines" (
    "idChurchCardMachine" TEXT NOT NULL,
    "numberCardMachine" TEXT NOT NULL,
    "status" "StatusActiveInactive" NOT NULL DEFAULT E'ACTIVE',
    "machineSupplier" "MachineSupplier" NOT NULL DEFAULT E'CIELO',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "idChurch" TEXT NOT NULL,

    CONSTRAINT "churchs_card_machines_pkey" PRIMARY KEY ("idChurchCardMachine")
);

-- CreateIndex
CREATE UNIQUE INDEX "churchs_card_machines_numberCardMachine_key" ON "churchs_card_machines"("numberCardMachine");

-- AddForeignKey
ALTER TABLE "churchs_card_machines" ADD CONSTRAINT "churchs_card_machines_idChurch_fkey" FOREIGN KEY ("idChurch") REFERENCES "churchs"("idChurch") ON DELETE RESTRICT ON UPDATE CASCADE;
