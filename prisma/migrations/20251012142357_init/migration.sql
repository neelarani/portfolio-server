-- AlterTable
ALTER TABLE "User" ADD COLUMN     "needPasswordChange" BOOLEAN NOT NULL DEFAULT true,
ALTER COLUMN "role" SET DEFAULT 'USER';
