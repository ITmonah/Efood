/*
  Warnings:

  - You are about to drop the column `userId` on the `genders` table. All the data in the column will be lost.
  - Added the required column `genderId` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "genders" DROP CONSTRAINT "genders_userId_fkey";

-- AlterTable
ALTER TABLE "genders" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "genderId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_genderId_fkey" FOREIGN KEY ("genderId") REFERENCES "genders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
