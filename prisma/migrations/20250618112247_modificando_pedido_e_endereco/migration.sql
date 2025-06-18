/*
  Warnings:

  - You are about to drop the `AddressList` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OrdersList` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "AddressList" DROP CONSTRAINT "AddressList_addressId_fkey";

-- DropForeignKey
ALTER TABLE "AddressList" DROP CONSTRAINT "AddressList_userId_fkey";

-- DropForeignKey
ALTER TABLE "OrdersList" DROP CONSTRAINT "OrdersList_orderId_fkey";

-- DropForeignKey
ALTER TABLE "OrdersList" DROP CONSTRAINT "OrdersList_userId_fkey";

-- AlterTable
ALTER TABLE "Address" ADD COLUMN     "userId" TEXT;

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "userId" TEXT;

-- DropTable
DROP TABLE "AddressList";

-- DropTable
DROP TABLE "OrdersList";

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
