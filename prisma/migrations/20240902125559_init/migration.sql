/*
  Warnings:

  - You are about to drop the `DeviceInfo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "DeviceInfo" DROP CONSTRAINT "DeviceInfo_userId_fkey";

-- DropTable
DROP TABLE "DeviceInfo";
