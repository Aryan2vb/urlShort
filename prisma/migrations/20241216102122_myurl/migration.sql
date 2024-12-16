-- CreateTable
CREATE TABLE `myurl` (
    `q_id` INTEGER NOT NULL AUTO_INCREMENT,
    `shortUrl` VARCHAR(191) NOT NULL,
    `longUrl` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`q_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
