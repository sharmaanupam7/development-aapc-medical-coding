-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_countryId_fkey` FOREIGN KEY (`countryId`) REFERENCES `country`(`country_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_stateId_fkey` FOREIGN KEY (`stateId`) REFERENCES `state`(`state_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_cityId_fkey` FOREIGN KEY (`cityId`) REFERENCES `city`(`city_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_postalCodeId_fkey` FOREIGN KEY (`postalCodeId`) REFERENCES `postal_code`(`postal_code_id`) ON DELETE SET NULL ON UPDATE CASCADE;
