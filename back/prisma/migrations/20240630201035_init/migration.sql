/*
  Warnings:

  - You are about to drop the column `genderid` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `genders` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_genderid_fkey";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "genderid";

-- DropTable
DROP TABLE "genders";
