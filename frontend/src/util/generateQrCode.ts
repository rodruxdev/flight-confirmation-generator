import * as QRCode from "qrcode";

export const generateQrCode = async (checkInUrl?: string) => {
  if (!checkInUrl) {
    return "";
  }

  return await QRCode.toDataURL(checkInUrl, { width: 200 });
};
