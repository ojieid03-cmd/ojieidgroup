"use client";

import { useState } from "react";
import { generatePdf } from "@/lib/generatePdf";

export default function LedCalculatorPage() {
    const [jenis, setJenis] = useState("Outdoor");
const [pitch, setPitch] = useState("P4");
const [cabinet, setCabinet] = useState("960x960");

const [lebar, setLebar] = useState("");
const [tinggi, setTinggi] = useState("");

const [hasil, setHasil] = useState<any>(null);
const cabinetData = {
  "500x500": {
  width: 0.5,
  height: 0.5,
  moduleX: 2,
  moduleY: 2,
  moduleSize: "250 × 250 mm",
},

  "500x1000": {
  width: 0.5,
  height: 1,
  moduleX: 2,
  moduleY: 4,
  moduleSize: "250 × 250 mm",
},

  "576x576": {
  width: 0.576,
  height: 0.576,
  moduleX: 3,
  moduleY: 3,
  moduleSize: "192 × 192 mm",
},

  "640x480": {
  width: 0.64,
  height: 0.48,
  moduleX: 4,
  moduleY: 3,
  moduleSize: "160 × 160 mm",
},

  "960x960": {
  width: 0.96,
  height: 0.96,
  moduleX: 3,
  moduleY: 3,
  moduleSize: "320 × 320 mm",
},
};
const handleCalculate = () => {
  const width = Number(lebar);
  const height = Number(tinggi);

  if (!width || !height) {
    alert("Isi lebar dan tinggi terlebih dahulu.");
    return;
  }

  // Luas
  const luas = width * height;

  // Ukuran cabinet (meter)
  const c = cabinetData[cabinet as keyof typeof cabinetData];

const cabinetHorizontal = Math.ceil(width / c.width);
const cabinetVertical = Math.ceil(height / c.height);

const totalCabinet = cabinetHorizontal * cabinetVertical;

const modulePerCabinet = c.moduleX * c.moduleY;
const totalModule = totalCabinet * modulePerCabinet;
const realWidth = cabinetHorizontal * c.width;
const realHeight = cabinetVertical * c.height;

const sisaWidth = realWidth - width;
const sisaHeight = realHeight - height;

// Pixel Pitch
const pitchValue = Number(pitch.replace("P", ""));

const resolusiX = Math.round((width * 1000) / pitchValue);
const resolusiY = Math.round((height * 1000) / pitchValue);

// Estimasi daya
const daya = Math.round(luas * 250);

setHasil({
  luas,
  resolusiX,
  resolusiY,
  cabinetHorizontal,
  cabinetVertical,
  totalCabinet,
  modulePerCabinet,
  totalModule,
  moduleSize: c.moduleSize,

  realWidth,
  realHeight,
  sisaWidth,
  sisaHeight,

  daya,
});
};
  return (
    <main className="bg-gray-50">

      {/* Hero */}
      <section className="bg-gradient-to-r from-green-700 to-green-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">

          <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold">
            LED Calculator
          </span>

          <h1 className="mt-6 text-5xl font-extrabold">
            Kalkulator Videotron LED
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-green-100">
            Hitung kebutuhan Videotron Indoor maupun Outdoor dengan cepat.
            Mulai dari luas display, resolusi, jumlah cabinet hingga estimasi
            daya listrik.
          </p>

        </div>
      </section>

      {/* Calculator */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-white p-10 shadow-xl">

          <h2 className="mb-10 text-3xl font-bold text-green-700">
  Hitung Kebutuhan Videotron
</h2>

<div className="grid gap-6 md:grid-cols-2">

  {/* Jenis */}
  <div>
    <label className="mb-2 block font-semibold">
      Jenis LED
    </label>

    <select
  value={jenis}
  onChange={(e) => {
    const value = e.target.value;
    setJenis(value);

    if (value === "Indoor") {
      setPitch("P2.5");
      setCabinet("640x480");
    } else {
      setPitch("P4");
      setCabinet("960x960");
    }
  }}
  className="w-full rounded-xl border p-4"
>
  <option>Outdoor</option>
  <option>Indoor</option>
</select>
  </div>

  {/* Pixel Pitch */}
  <div>
    <label className="mb-2 block font-semibold">
      Pixel Pitch
    </label>

    <select
  value={pitch}
  onChange={(e) => setPitch(e.target.value)}
  className="w-full rounded-xl border p-4"
>
{jenis === "Indoor" ? (
  <>
    <option value="P1.25">P1.25</option>
    <option value="P1.53">P1.53</option>
    <option value="P1.86">P1.86</option>
    <option value="P2">P2</option>
    <option value="P2.5">P2.5</option>
    <option value="P3">P3</option>
    <option value="P4">P4</option>
  </>
) : (
  <>
    <option value="P3">P3</option>
    <option value="P4">P4</option>
    <option value="P5">P5</option>
    <option value="P6.67">P6.67</option>
    <option value="P8">P8</option>
    <option value="P10">P10</option>
  </>
)}
</select>
  </div>

  {/* Cabinet */}
  <div>
    <label className="mb-2 block font-semibold">
      Ukuran Cabinet
    </label>

    <select
  value={cabinet}
  onChange={(e) => setCabinet(e.target.value)}
  className="w-full rounded-xl border p-4"
>
  <option>500x500</option>
  <option>500x1000</option>
  <option>576x576</option>
  <option>640x480</option>
  <option>960x960</option>
</select>
  </div>

  {/* Lebar */}
  <div>
    <label className="mb-2 block font-semibold">
      Lebar Display (meter)
    </label>
tify-center
    <input
  type="number"
  value={lebar}
  onChange={(e) => setLebar(e.target.value)}
  placeholder="Contoh : 6"
  className="w-full rounded-xl border p-4"
/>
  </div>

  {/* Tinggi */}
  <div>
    <label className="mb-2 block font-semibold">
      Tinggi Display (meter)
    </label>

    <input
  type="number"
  value={tinggi}
  onChange={(e) => setTinggi(e.target.value)}
  placeholder="Contoh : 3"
  className="w-full rounded-xl border p-4"
/>
  </div>

</div>

<button
  onClick={handleCalculate}
  className="mt-10 w-full rounded-xl bg-green-700 py-4 text-lg font-bold text-white transition hover:bg-green-800"
>
  Hitung Sekarang
</button>
{hasil && (
  <div className="mt-10 rounded-3xl border border-green-200 bg-green-50 p-8">

    <h3 className="mb-8 text-3xl font-bold text-green-700">
      Hasil Perhitungan
    </h3>

    <div className="grid gap-6 md:grid-cols-2">

      <div className="rounded-2xl bg-white p-6 shadow">
        <p className="text-gray-500">Luas Display</p>
        <h4 className="mt-2 text-3xl font-bold text-green-700">
          {hasil.luas} m²
        </h4>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow">
        <p className="text-gray-500">Resolusi Display</p>
        <h4 className="mt-2 text-3xl font-bold text-green-700">
          {hasil.resolusiX} × {hasil.resolusiY}
        </h4>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow">
  <p className="text-gray-500">Jumlah Cabinet</p>

  <h4 className="mt-2 text-3xl font-bold text-green-700">
    {hasil.totalCabinet} Unit
  </h4>
</div>
<div className="rounded-2xl bg-white p-6 shadow">
  <p className="text-gray-500">
    Susunan Cabinet
  </p>

  <h4 className="mt-2 text-3xl font-bold text-green-700">
    {hasil.cabinetHorizontal} × {hasil.cabinetVertical}
  </h4>

  <p className="mt-2 text-sm text-gray-500">
    {hasil.cabinetHorizontal} cabinet horizontal × {hasil.cabinetVertical} cabinet vertikal
  </p>
</div>

<div className="rounded-2xl bg-white p-6 shadow">
  <p className="text-gray-500">
    Modul per Cabinet
  </p>

  <h4 className="mt-2 text-3xl font-bold text-green-700">
    {hasil.modulePerCabinet} Modul
  </h4>

  <p className="mt-2 text-sm text-gray-500">
    Total modul dalam satu cabinet.
  </p>
</div>
<div className="rounded-2xl bg-white p-6 shadow">
  <p className="text-gray-500">
    Total Modul LED
  </p>

  <h4 className="mt-2 text-3xl font-bold text-green-700">
    {hasil.totalModule} Modul
  </h4>

  <p className="mt-2 text-sm text-gray-500">
    Jumlah keseluruhan modul LED.
  </p>
</div>

<div className="rounded-2xl bg-white p-6 shadow">
  <p className="text-gray-500">
    Ukuran Real Display
  </p>

  <h4 className="mt-2 text-3xl font-bold text-green-700">
    {hasil.realWidth.toFixed(2)} × {hasil.realHeight.toFixed(2)} m
  </h4>

  <p className="mt-2 text-sm text-gray-500">
    Ukuran sebenarnya setelah disesuaikan dengan jumlah cabinet.
  </p>
</div>

<div className="rounded-2xl bg-white p-6 shadow">
  <p className="text-gray-500">
    Penambahan Ukuran
  </p>
 
  <h4 className="mt-2 text-3xl font-bold text-green-700">
    +{hasil.sisaWidth.toFixed(2)} m × +{hasil.sisaHeight.toFixed(2)} m
  </h4>

  <p className="mt-2 text-sm text-gray-500">
    Penambahan ukuran agar display dapat tersusun penuh menggunakan cabinet.
  </p>
</div>

      <div className="rounded-2xl bg-white p-6 shadow">
  <p className="text-gray-500">
    Estimasi Daya Operasional
  </p>

  <h4 className="mt-2 text-3xl font-bold text-green-700">
    {hasil.daya.toLocaleString("id-ID")} Watt
  </h4>

  <p className="mt-2 text-xs text-gray-500">
    Estimasi dihitung menggunakan konsumsi rata-rata
    <b> 250 Watt/m²</b>. Konsumsi aktual dapat berubah
    tergantung tingkat brightness dan konten yang ditampilkan.
  </p>
</div>

    </div>
<div className="mt-8">
  <a
    href={`https://wa.me/6285231353155?text=${encodeURIComponent(
`Halo Admin OJIEID GROUP,

Saya telah menggunakan Kalkulator LED.

Berikut hasilnya :

Jenis LED : ${jenis}
Pixel Pitch : ${pitch}
Ukuran Cabinet : ${cabinet}

Lebar Display : ${lebar} Meter
Tinggi Display : ${tinggi} Meter

Luas Display : ${hasil.luas} m²
Resolusi : ${hasil.resolusiX} x ${hasil.resolusiY}
Jumlah Cabinet : ${hasil.totalCabinet} Unit
Estimasi Daya : ${hasil.daya} Watt

Mohon dibuatkan penawaran harga.
Terima kasih.`)}
`}
    target="_blank"
    rel="noopener noreferrer"
    className="block w-full rounded-2xl bg-green-700 py-5 text-center text-lg font-bold text-white transition hover:bg-green-800"
  >
    📲 Kirim Hasil ke WhatsApp
  </a>

  <button
  onClick={async () => {
    await generatePdf({
      jenis,
      pitch,
      cabinet,
      lebar,
      tinggi,
      ...hasil,
    });
  }}
  className="mt-4 w-full rounded-2xl bg-red-600 py-5 text-lg font-bold text-white transition hover:bg-red-700"
>
  📄 Download Hasil PDF
</button>
</div>
  </div>
)}

        </div>
      </section>

    </main>
  );
}