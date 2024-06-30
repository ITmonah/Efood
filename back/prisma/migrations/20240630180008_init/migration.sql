/*
  Warnings:

  - Added the required column `userid` to the `reviews` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "reviews" ADD COLUMN     "userid" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "img" TEXT NOT NULL,
ADD COLUMN     "status" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_userid_fkey" FOREIGN KEY ("userid") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
