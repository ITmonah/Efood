-- CreateTable
CREATE TABLE "foods" (
    "id" SERIAL NOT NULL,
    "img" TEXT NOT NULL,
    "stars" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "foods_pkey" PRIMARY KEY ("id")
);
