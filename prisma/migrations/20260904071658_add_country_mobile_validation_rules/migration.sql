-- AlterTable
ALTER TABLE `country` ADD COLUMN `mobileMaxLength` INTEGER NULL,
    ADD COLUMN `mobileMinLength` INTEGER NULL,
    ADD COLUMN `mobilePattern` VARCHAR(255) NULL;
