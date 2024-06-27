/*
  Warnings:

  - You are about to drop the column `genderId` on the `users` table. All the data in the column will be lost.
  - Added the required column `genderid` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_genderId_fkey";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "genderId",
ADD COLUMN     "genderid" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_genderid_fkey" FOREIGN KEY ("genderid") REFERENCES "genders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
