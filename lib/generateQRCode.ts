import QRCode from "qrcode";

export async function generateQRCode(text: string) {
  return await QRCode.toDataURL(text, {
  width: 800,
  margin: 2,
  errorCorrectionLevel: "M",
});
}