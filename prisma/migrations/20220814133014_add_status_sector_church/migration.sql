/*
  Warnings:

  - Added the required column `numberSector` to the `sectors` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "StatusSector" AS ENUM ('ACTIVE', 'INACTIVE');

-- CreateEnum
CREATE TYPE "StatusChurch" AS ENUM ('ACTIVE', 'INACTIVE');

-- AlterTable
ALTER TABLE "churchs" ADD COLUMN     "statusChurch" "StatusChurch" NOT NULL DEFAULT E'ACTIVE';

-- AlterTable
ALTER TABLE "sectors" ADD COLUMN     "numberSector" INTEGER NOT NULL,
ADD COLUMN     "statusSector" "StatusSector" NOT NULL DEFAULT E'ACTIVE';
