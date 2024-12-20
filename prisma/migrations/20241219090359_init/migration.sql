/*
  Warnings:

  - Changed the type of `dateJoined` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `lastLogin` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "dateJoined",
ADD COLUMN     "dateJoined" TIMESTAMP(3) NOT NULL,
DROP COLUMN "lastLogin",
ADD COLUMN     "lastLogin" TIMESTAMP(3) NOT NULL;
