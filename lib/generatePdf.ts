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
// Watermark
doc.setTextColor(235, 235, 235);

doc.setFont("helvetica", "bold");

doc.setFontSize(48);

doc.text(
  "OJIEID GROUP",
  105,
  150,
  {
    angle: 45,
    align: "center",
  }
);

// Kembalikan warna teks
doc.setTextColor(0, 0, 0);
  // Header Hijau
doc.setFillColor(0, 153, 255);
doc.rect(0, 0, 210, 28, "F");

// Judul
doc.setTextColor(255, 255, 255);

doc.setFont("helvetica", "bold");

doc.setFontSize(18);

doc.text("OJIEID GROUP", 105, 11, {
  align: "center",
});

doc.setFontSize(11);

doc.text(
  "HASIL PERHITUNGAN VIDEOTRON LED",
  105,
  19,
  {
    align: "center",
  }
);

// Reset warna
doc.setTextColor(0, 0, 0);

  doc.setFontSize(10);

  doc.text(
    `Tanggal : ${new Date().toLocaleString("id-ID")}`,
    14,
    34
  );
doc.text(
  `No. Dokumen : LED-${Date.now().toString().slice(-6)}`,
  14,
  40
);
  autoTable(doc, {
  startY: 45,

  theme: "grid",

  headStyles: {
    fillColor: [0, 153, 255],
    textColor: 255,
    halign: "center",
  },

  styles: {
    fontSize: 10,
    cellPadding: 3,
  },

  alternateRowStyles: {
    fillColor: [245, 250, 245],
  },

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

// Garis pembatas
doc.setDrawColor(0, 153, 255);

doc.line(
  20,
  finalY + 12,
  190,
  finalY + 12
);

// Nama perusahaan
doc.setFont("helvetica", "bold");
doc.setFontSize(13);

doc.text(
  "OJIEID GROUP",
  105,
  finalY + 16,
  {
    align: "center",
  }
);

// Deskripsi
doc.setFont("helvetica", "normal");
doc.setFontSize(10);

doc.text(
  "Videotron • Running Text • LED Display",
  105,
  finalY + 21,
  {
    align: "center",
  }
);

// WhatsApp
doc.text(
  "WhatsApp : 0852-3135-3155",
  105,
  finalY + 35,
  {
    align: "center",
  }
);

doc.addImage(
  qr,
  "PNG",
  87,
  finalY + 36,
  35,
  35
);

doc.setFontSize(10);

doc.text(
  "Scan QR Code untuk langsung mengirim hasil perhitungan ke WhatsApp.",
  105,
  finalY + 75,
  {
    align: "center",
  }
);
doc.setFontSize(8);

doc.setTextColor(100);

doc.text(
  [
    "Dokumen ini dibuat otomatis oleh Kalkulator Videotron OJIEID GROUP.",
    "Hasil merupakan estimasi berdasarkan data yang dimasukkan.",
    "Survey lapangan diperlukan sebelum proses produksi dan instalasi."
  ],
  105,
  finalY + 83,
  {
    align: "center",
  }
);

doc.setTextColor(0);
const today = new Date();

const fileName =
  `OJIEID-${data.pitch}-${data.lebar}x${data.tinggi}-${today.getFullYear()}${String(today.getMonth() + 1).padStart(2, "0")}${String(today.getDate()).padStart(2, "0")}.pdf`;

const totalPages = doc.getNumberOfPages();

for (let i = 1; i <= totalPages; i++) {
  doc.setPage(i);

  doc.setFontSize(9);

  doc.text(
    `Halaman ${i} / ${totalPages}`,
    195,
    287,
    {
      align: "right",
    }
  );
}
doc.save(fileName);
}