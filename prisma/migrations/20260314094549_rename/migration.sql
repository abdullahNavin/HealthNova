/*
  Warnings:

  - You are about to drop the `specialites` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "specialites";

-- CreateTable
CREATE TABLE "specalites" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "description" TEXT,
    "icon" VARCHAR(225),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "specalites_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "specalites_title_key" ON "specalites"("title");

-- CreateIndex
CREATE INDEX "idx_specality_isDeleted" ON "specalites"("isDeleted");

-- CreateIndex
CREATE INDEX "idx_specality_title" ON "specalites"("title");
