-- AlterTable
ALTER TABLE `user` ADD COLUMN `countryId` INTEGER NULL;

-- CreateTable
CREATE TABLE `country` (
    `country_id` INTEGER NOT NULL AUTO_INCREMENT,
    `country_name` VARCHAR(100) NOT NULL,
    `country_code` CHAR(2) NOT NULL,
    `phoneCode` VARCHAR(10) NOT NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Country_code_key`(`country_code`),
    INDEX `Country_isActive_idx`(`isActive`),
    INDEX `Country_name_idx`(`country_name`),
    PRIMARY KEY (`country_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `User_countryId_idx` ON `user`(`countryId`);

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `User_countryId_fkey` FOREIGN KEY (`countryId`) REFERENCES `country`(`country_id`) ON DELETE SET NULL ON UPDATE CASCADE;
