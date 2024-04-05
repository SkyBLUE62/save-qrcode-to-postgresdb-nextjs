import { FormSaveQR } from "@/components/FormSaveQR";
import prisma from "@/prisma/db/prisma";
import Image from "next/image";
export default async function Home() {
  const qrCodeId2 = await prisma.qRCode.findUnique({
    where: { id: 2 },
  });
  console.log(qrCodeId2?.imageData?.toString("base64"));
  return (
    <div>
      <h1>Save QR DB</h1>
      <FormSaveQR />
      <div className="h-96 w-96 ">
        <Image
          src={`data:image/png;base64, ${qrCodeId2?.imageData?.toString(
            "base64"
          )}`}
          alt="QR Code"
          width={300}
          height={300}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
