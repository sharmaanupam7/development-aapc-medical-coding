-- AlterTable
ALTER TABLE `user` ADD COLUMN `cityId` INTEGER NULL,
    ADD COLUMN `postalCodeId` INTEGER NULL,
    ADD COLUMN `stateId` INTEGER NULL;

-- CreateTable
CREATE TABLE `state` (
    `state_id` INTEGER NOT NULL AUTO_INCREMENT,
    `state_name` VARCHAR(100) NOT NULL,
    `country_id` INTEGER NOT NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `State_countryId_idx`(`country_id`),
    INDEX `State_isActive_idx`(`isActive`),
    INDEX `State_name_idx`(`state_name`),
    UNIQUE INDEX `State_country_name_key`(`country_id`, `state_name`),
    PRIMARY KEY (`state_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `city` (
    `city_id` INTEGER NOT NULL AUTO_INCREMENT,
    `city_name` VARCHAR(150) NOT NULL,
    `state_id` INTEGER NOT NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `City_stateId_idx`(`state_id`),
    INDEX `City_isActive_idx`(`isActive`),
    INDEX `City_name_idx`(`city_name`),
    UNIQUE INDEX `City_state_name_key`(`state_id`, `city_name`),
    PRIMARY KEY (`city_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `postal_code` (
    `postal_code_id` INTEGER NOT NULL AUTO_INCREMENT,
    `postal_code` VARCHAR(20) NOT NULL,
    `city_id` INTEGER NOT NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `PostalCode_cityId_idx`(`city_id`),
    INDEX `PostalCode_code_idx`(`postal_code`),
    INDEX `PostalCode_isActive_idx`(`isActive`),
    UNIQUE INDEX `PostalCode_city_code_key`(`city_id`, `postal_code`),
    PRIMARY KEY (`postal_code_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `User_stateId_idx` ON `user`(`stateId`);

-- CreateIndex
CREATE INDEX `User_cityId_idx` ON `user`(`cityId`);

-- CreateIndex
CREATE INDEX `User_postalCodeId_idx` ON `user`(`postalCodeId`);

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `User_stateId_fkey` FOREIGN KEY (`stateId`) REFERENCES `state`(`state_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `User_cityId_fkey` FOREIGN KEY (`cityId`) REFERENCES `city`(`city_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `User_postalCodeId_fkey` FOREIGN KEY (`postalCodeId`) REFERENCES `postal_code`(`postal_code_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `state` ADD CONSTRAINT `state_country_id_fkey` FOREIGN KEY (`country_id`) REFERENCES `country`(`country_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `city` ADD CONSTRAINT `city_state_id_fkey` FOREIGN KEY (`state_id`) REFERENCES `state`(`state_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `postal_code` ADD CONSTRAINT `postal_code_city_id_fkey` FOREIGN KEY (`city_id`) REFERENCES `city`(`city_id`) ON DELETE CASCADE ON UPDATE CASCADE;
