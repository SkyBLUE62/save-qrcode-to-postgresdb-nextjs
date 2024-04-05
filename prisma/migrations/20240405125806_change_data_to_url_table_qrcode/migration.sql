/*
  Warnings:

  - You are about to drop the column `data` on the `QRCode` table. All the data in the column will be lost.
  - Added the required column `url` to the `QRCode` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "QRCode" DROP COLUMN "data",
ADD COLUMN     "url" TEXT NOT NULL;
