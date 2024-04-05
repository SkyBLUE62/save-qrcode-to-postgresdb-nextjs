"use server";

import { z } from "zod";
import { action } from "@/lib/safe-action";
import QRCode from "qrcode";
import prisma from "@/prisma/db/prisma";

const schema = z.object({
  url: z.string(),
});

export const createQRCode = action(schema, async ({ url }) => {
  console.log(url);

  try {
    // Générer les données binaires du QR code
    const qrCodeData = await QRCode.toBuffer(url);

    // Enregistrer les données binaires dans la base de données
    const createdQRCode = await prisma.qRCode.create({
      data: {
        url: url,
        imageData: qrCodeData,
      },
    });

    return createdQRCode;
  } catch (error) {
    console.error("Erreur lors de la création du QR code :", error);
    throw error;
  }
});
