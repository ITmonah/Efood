/*
  Warnings:

  - Added the required column `img` to the `restaurants` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "restaurants" ADD COLUMN     "img" TEXT NOT NULL;
