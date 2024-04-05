-- CreateTable
CREATE TABLE "QRCode" (
    "id" SERIAL NOT NULL,
    "data" TEXT NOT NULL,
    "imageData" BYTEA,

    CONSTRAINT "QRCode_pkey" PRIMARY KEY ("id")
);
