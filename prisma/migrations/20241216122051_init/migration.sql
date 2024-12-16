/*
  Warnings:

  - A unique constraint covering the columns `[shortUrl]` on the table `myurl` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `myurl_shortUrl_key` ON `myurl`(`shortUrl`);
