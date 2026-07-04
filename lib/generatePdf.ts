import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { generateQRCode } from "./generateQRCode";

export async function generatePdf(data: any) {
  const doc = new jsPDF();
  const waText = `Halo Admin OJIEID GROUP,

Saya telah menggunakan Kalkulator LED.

===== HASIL PERHITUNGAN =====

Jenis LED : ${data.jenis}
Pixel Pitch : ${data.pitch}
Ukuran Cabinet : ${data.cabinet}

Lebar Display : ${data.lebar} Meter
Tinggi Display : ${data.tinggi} Meter

Luas Display : ${data.luas} m²
Resolusi : ${data.resolusiX} × ${data.resolusiY}
Jumlah Cabinet : ${data.totalCabinet}
Susunan Cabinet : ${data.cabinetHorizontal} × ${data.cabinetVertical}
Ukuran Modul : ${data.moduleSize}
Modul per Cabinet : ${data.modulePerCabinet}
Total Modul : ${data.totalModule}

Ukuran Real : ${data.realWidth.toFixed(2)} × ${data.realHeight.toFixed(2)} Meter

Penambahan Ukuran :
+${data.sisaWidth.toFixed(2)} × +${data.sisaHeight.toFixed(2)} Meter

Estimasi Daya :
${data.daya} Watt

Mohon dibuatkan penawaran harga.

Terima kasih.`;

const qr = await generateQRCode(
  `https://wa.me/6285231353155?text=${encodeURIComponent(waText)}`
);

  doc.setFontSize(18);
  doc.text("OJIEID GROUP", 105, 20, {
    align: "center",
  });

  doc.setFontSize(14);
  doc.text("HASIL PERHITUNGAN VIDEOTRON LED", 105, 30, {
    align: "center",
  });

  doc.setFontSize(10);

  doc.text(
    `Tanggal : ${new Date().toLocaleString("id-ID")}`,
    14,
    40
  );

  autoTable(doc, {
    startY: 48,
    head: [["Item", "Hasil"]],
    body: [
      ["Jenis LED", data.jenis],
      ["Pixel Pitch", data.pitch],
      ["Ukuran Cabinet", data.cabinet],
      ["Lebar Display", `${data.lebar} Meter`],
      ["Tinggi Display", `${data.tinggi} Meter`],
      ["Luas Display", `${data.luas} m²`],
      ["Resolusi", `${data.resolusiX} × ${data.resolusiY}`],
      ["Jumlah Cabinet", `${data.totalCabinet} Unit`],
      ["Susunan Cabinet", `${data.cabinetHorizontal} × ${data.cabinetVertical}`],
      ["Ukuran Modul", data.moduleSize],
      ["Modul per Cabinet", `${data.modulePerCabinet}`],
      ["Total Modul", `${data.totalModule}`],
      [
        "Ukuran Real",
        `${data.realWidth.toFixed(2)} × ${data.realHeight.toFixed(2)} m`,
      ],
      [
        "Penambahan Ukuran",
        `+${data.sisaWidth.toFixed(2)} × +${data.sisaHeight.toFixed(2)} m`,
      ],
      ["Estimasi Daya", `${data.daya} Watt`],
    ],
  });

  doc.setFontSize(11);

  const finalY = (doc as any).lastAutoTable.finalY;

doc.text(
  "OJIEID GROUP",
  105,
  finalY + 20,
  {
    align: "center",
  }
);

doc.text(
  "WhatsApp : 0852-3135-3155",
  105,
  finalY + 28,
  {
    align: "center",
  }
);

// QR Code
doc.addImage(
  qr,
  "PNG",
  80,
  finalY + 38,
  50,
  50
);

doc.setFontSize(10);

doc.text(
  "Scan QR Code untuk langsung mengirim hasil perhitungan ke WhatsApp.",
  105,
  finalY + 95,
  {
    align: "center",
  }
);

doc.save("Perhitungan-Videotron-OJIEID.pdf");
}