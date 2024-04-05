"use client";

import { createQRCode } from "@/server-action/qrcode";
import React from "react";

export const FormSaveQR = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const url = formData.get("url");

    const res = await createQRCode({ url: url as string });
    console.log(res);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="URL" name="url" className="text-black" />
      <button>Save</button>
    </form>
  );
};
