/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "email",
DROP COLUMN "name",
ADD COLUMN     "cohort" TEXT,
ADD COLUMN     "courses" TEXT[],
ADD COLUMN     "dateJoined" TIMESTAMP(3),
ADD COLUMN     "lastLogin" TIMESTAMP(3),
ADD COLUMN     "status" BOOLEAN,
ADD COLUMN     "studentName" TEXT,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "User_id_seq";
