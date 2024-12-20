/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Made the column `cohort` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `dateJoined` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `lastLogin` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `status` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `studentName` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "cohort" SET NOT NULL,
ALTER COLUMN "dateJoined" SET NOT NULL,
ALTER COLUMN "dateJoined" SET DATA TYPE TEXT,
ALTER COLUMN "lastLogin" SET NOT NULL,
ALTER COLUMN "lastLogin" SET DATA TYPE TEXT,
ALTER COLUMN "status" SET NOT NULL,
ALTER COLUMN "studentName" SET NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");
