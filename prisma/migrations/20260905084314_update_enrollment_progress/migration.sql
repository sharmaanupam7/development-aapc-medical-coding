/*
  Warnings:

  - You are about to drop the column `courseId` on the `courseprogress` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `courseprogress` table. All the data in the column will be lost.
  - You are about to drop the column `progress` on the `enrollment` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[enrollmentId]` on the table `courseprogress` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `enrollmentId` to the `courseprogress` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `courseprogress` DROP FOREIGN KEY `CourseProgress_courseId_fkey`;

-- DropForeignKey
ALTER TABLE `courseprogress` DROP FOREIGN KEY `CourseProgress_userId_fkey`;

-- DropIndex
DROP INDEX `CourseProgress_courseId_idx` ON `courseprogress`;

-- DropIndex
DROP INDEX `CourseProgress_userId_courseId_key` ON `courseprogress`;

-- DropIndex
DROP INDEX `CourseProgress_userId_idx` ON `courseprogress`;

-- AlterTable
ALTER TABLE `courseprogress` DROP COLUMN `courseId`,
    DROP COLUMN `userId`,
    ADD COLUMN `enrollmentId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `enrollment` DROP COLUMN `progress`,
    ADD COLUMN `completedAt` DATETIME(3) NULL,
    ADD COLUMN `endDate` DATETIME(3) NULL,
    ADD COLUMN `startDate` DATETIME(3) NULL;

-- CreateIndex
CREATE INDEX `CourseProgress_progress_idx` ON `courseprogress`(`progress`);

-- CreateIndex
CREATE UNIQUE INDEX `CourseProgress_enrollmentId_key` ON `courseprogress`(`enrollmentId`);

-- CreateIndex
CREATE INDEX `Enrollment_enrolledAt_idx` ON `enrollment`(`enrolledAt`);

-- CreateIndex
CREATE INDEX `Enrollment_startDate_idx` ON `enrollment`(`startDate`);

-- CreateIndex
CREATE INDEX `Enrollment_endDate_idx` ON `enrollment`(`endDate`);

-- AddForeignKey
ALTER TABLE `courseprogress` ADD CONSTRAINT `CourseProgress_enrollmentId_fkey` FOREIGN KEY (`enrollmentId`) REFERENCES `enrollment`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
