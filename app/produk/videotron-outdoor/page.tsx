"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function VideotronOutdoorPage() {

  const [open, setOpen] = useState<number | null>(0);
  return (
    <main>
        {/* BREADCRUMB */}

<section className="border-b bg-gray-50">

  <div className="mx-auto flex max-w-7xl items-center gap-2 px-6 py-5 text-sm">

    <Link
      href="/"
      className="text-gray-500 transition hover:text-green-600"
    >
      Home
    </Link>

    <span className="text-gray-400">
      /
    </span>

    <Link
      href="/produk"
      className="text-gray-500 transition hover:text-green-600"
    >
      Produk
    </Link>

    <span className="text-gray-400">
      /
    </span>
    <span className="font-semibold text-green-700">
    Videotron outdoor
    </span>

  </div>

</section>

      {/* HERO */}

      <section className="relative overflow-hidden bg-gradient-to-r from-green-700 via-green-600 to-green-500 py-24 text-white">

  <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
    <div>

          <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold">
            OJIEID GROUP
          </span>

          <h1 className="mt-6 text-5xl font-black">
            Videotron Outdoor
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-green-100 leading-8">
            Solusi Outdoor LED Display dengan tingkat kecerahan tinggi,
tahan terhadap panas, hujan, dan cuaca ekstrem untuk
billboard digital, videotron jalan, stadion, gedung,
pusat kota, event outdoor, hingga berbagai kebutuhan
promosi berskala besar.
          </p>

          <Link
            href="/penawaran"
            className="mt-10 inline-flex rounded-xl bg-white px-8 py-4 font-bold text-green-700 transition hover:scale-105"
          >
            Minta Penawaran
          </Link>

</div>

{/* IMAGE */}

<div className="relative">

  <Image
    src="/produk/videotron-outdoor.jpg"
    alt="Videotron Outdoor"
    width={700}
    height={700}
    className="
      mx-auto
      rounded-3xl
      shadow-2xl
    "
    priority
  />

</div>

</div>

</section>
{/* KEUNGGULAN */}

<section className="bg-white py-24">

  <div className="mx-auto max-w-7xl px-6">

    <div className="text-center">

      <span className="rounded-full bg-green-100 px-5 py-2 font-semibold text-green-700">
        Keunggulan
      </span>

      <h2 className="mt-6 text-4xl font-black text-gray-900">
        Mengapa Memilih Videotron Outdoor Kami?
      </h2>

      <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">
        Menggunakan teknologi LED berkualitas tinggi dengan instalasi profesional
        untuk menghasilkan tampilan visual yang tajam dan elegan.
      </p>

    </div>

    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

      <div className="rounded-3xl border border-gray-200 p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
        <h3 className="text-xl font-bold text-green-700">
          Brightness Tinggi
        </h3>

        <p className="mt-4 text-gray-600">
          Tetap terlihat jelas meskipun terkena sinar matahari langsung.
        </p>
      </div>

      <div className="rounded-3xl border border-gray-200 p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
        <h3 className="text-xl font-bold text-green-700">
          Tahan Cuaca
        </h3>

        <p className="mt-4 text-gray-600">
          Memiliki perlindungan IP65 sehingga aman digunakan di luar ruangan.
        </p>
      </div>

      <div className="rounded-3xl border border-gray-200 p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
        <h3 className="text-xl font-bold text-green-700">
          Instalasi Profesional
        </h3>

        <p className="mt-4 text-gray-600">
          Dikerjakan oleh teknisi berpengalaman di seluruh Indonesia.
        </p>
      </div>

      <div className="rounded-3xl border border-gray-200 p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
        <h3 className="text-xl font-bold text-green-700">
          Garansi Resmi
        </h3>

        <p className="mt-4 text-gray-600">
          Produk bergaransi dan didukung layanan after sales terbaik.
        </p>
      </div>

    </div>

  </div>

</section>
{/* SPESIFIKASI */}

<section className="bg-gray-100 py-24">

  <div className="mx-auto max-w-7xl px-6">

    <div className="text-center">

      <span className="rounded-full bg-green-100 px-5 py-2 font-semibold text-green-700">
        Spesifikasi
      </span>

      <h2 className="mt-6 text-4xl font-black text-gray-900">
        Spesifikasi Videotron Outdoor
      </h2>

    </div>

    <div className="mt-14 overflow-hidden rounded-3xl bg-white shadow-xl">

      <table className="w-full">

        <tbody>

          <tr className="border-b">
            <td className="bg-gray-50 p-5 font-bold w-1/3">
              Pixel Pitch
            </td>
            <td className="p-5">
              P3 / P4 / P5 / P6 / P8 / P10
            </td>
          </tr>

          <tr className="border-b">
            <td className="bg-gray-50 p-5 font-bold">
              Brightness
            </td>
            <td className="p-5">
              5500–10000 nits
            </td>
          </tr>

          <tr className="border-b">
            <td className="bg-gray-50 p-5 font-bold">
              Refresh Rate
            </td>
            <td className="p-5">
              3840Hz
            </td>
          </tr>

          <tr className="border-b">
            <td className="bg-gray-50 p-5 font-bold">
              Viewing Angle
            </td>
            <td className="p-5">
              Horizontal 160° • Vertical 140°
            </td>
          </tr>

          <tr className="border-b">
            <td className="bg-gray-50 p-5 font-bold">
              Lifetime
            </td>
            <td className="p-5">
              ≥100.000 Jam
            </td>
          </tr>

          <tr>
            <td className="bg-gray-50 p-5 font-bold">
              Garansi
            </td>
            <td className="p-5">
              Hingga 1 Tahun
            </td>
          </tr>

        </tbody>

      </table>

    </div>

  </div>

</section>
{/* GALERI */}

<section className="bg-white py-24">

  <div className="mx-auto max-w-7xl px-6">

    <div className="text-center">

      <span className="rounded-full bg-green-100 px-5 py-2 font-semibold text-green-700">
        Galeri Project
      </span>

      <h2 className="mt-6 text-4xl font-black text-gray-900">
        Dokumentasi Pemasangan
      </h2>

      <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">
        Beberapa hasil instalasi Videotron Outdoor yang telah kami kerjakan.
      </p>

    </div>

    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

      {[
        "/produk/outdoor/outdoor1.jpg",
        "/produk/outdoor/outdoor2.jpg",
        "/produk/outdoor/outdoor3.jpg",
        "/produk/outdoor/outdoor4.jpg",
      ].map((img) => (

        <div
          key={img}
          className="
            group
            overflow-hidden
            rounded-3xl
            shadow-xl
          "
        >

          <Image
            src={img}
            alt="Project Videotron Outdoor"
            width={500}
            height={500}
            className="
              h-72
              w-full
              object-cover
              transition
              duration-700
              group-hover:scale-110
            "
          />

        </div>

      ))}

    </div>

  </div>

</section>
{/* CTA */}

<section className="bg-gradient-to-r from-green-700 to-green-600 py-24 text-white">

  <div className="mx-auto max-w-5xl px-6 text-center">

    <h2 className="text-4xl font-black">
      Siap Memasang Videotron Outdoor?
    </h2>

    <p className="mx-auto mt-6 max-w-3xl text-lg text-green-100">
      Tim OJIEID GROUP siap membantu kebutuhan Outdoor LED Display,
mulai dari survey lokasi, desain konstruksi, instalasi,
commissioning hingga layanan maintenance profesional.
    </p>

    <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

      <Link
        href="/penawaran"
        className="rounded-xl bg-white px-8 py-4 font-bold text-green-700 transition hover:scale-105"
      >
        Minta Penawaran
      </Link>

      <a
        href="https://wa.me/6285231353155"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-xl border-2 border-white px-8 py-4 font-bold transition hover:bg-white hover:text-green-700"
      >
        Hubungi WhatsApp
      </a>

    </div>

  </div>

</section>
{/* FAQ */}

<section className="bg-gray-100 py-24">

  <div className="mx-auto max-w-4xl px-6">

    <div className="text-center">

      <span className="rounded-full bg-green-100 px-5 py-2 font-semibold text-green-700">
        FAQ
      </span>

      <h2 className="mt-6 text-4xl font-black text-gray-900">
        Pertanyaan yang Sering Ditanyakan
      </h2>

      <p className="mt-5 text-gray-600">
        Berikut beberapa pertanyaan yang sering diajukan pelanggan kami.
      </p>

    </div>

    <div className="mt-14 space-y-4">

      {[
      {
  q: "Apa itu Videotron Outdoor?",
  a: `Videotron Outdoor adalah layar LED digital dengan tingkat
kecerahan tinggi yang dirancang khusus untuk penggunaan
di luar ruangan. Cocok digunakan untuk billboard digital,
reklame, stadion, pusat kota, dan media informasi publik.`
},
{
  q: "Apakah tersedia jasa instalasi?",
  a: `Ya. Kami menyediakan jasa instalasi Outdoor LED Display
lengkap mulai dari pondasi, rangka besi, pemasangan panel,
hingga konfigurasi sistem.`
},
        {
          q: "Apakah ada garansi?",
          a: "Semua produk mendapatkan garansi resmi sesuai tipe produk serta dukungan after sales."
        },
        {
          q: "Bisakah dibuat ukuran custom?",
          a: "Bisa. Kami melayani pembuatan videotron Outdoor dengan ukuran sesuai kebutuhan proyek Anda."
        }
      ].map((item, index) => (

        <div
          key={index}
          className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow"
        >

          <button
            onClick={() =>
              setOpen(open === index ? null : index)
            }
            className="flex w-full items-center justify-between px-6 py-5 text-left"
          >

            <span className="font-bold text-gray-900">
              {item.q}
            </span>

            <ChevronDown
              className={`transition ${
                open === index ? "rotate-180" : ""
              }`}
            />

          </button>

          {open === index && (

            <div className="border-t px-6 py-5 text-gray-600 leading-7">

              {item.a}

            </div>

          )}

        </div>

      ))}

    </div>

  </div>

</section>
{/* PRODUK TERKAIT */}

<section className="bg-white py-24">

  <div className="mx-auto max-w-7xl px-6">

    <div className="text-center">

      <span className="rounded-full bg-green-100 px-5 py-2 font-semibold text-green-700">
        Produk Lainnya
      </span>

      <h2 className="mt-6 text-4xl font-black text-gray-900">
        Produk Terkait
      </h2>

      <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">
        Temukan berbagai solusi LED Display dan Digital Technology
        dari OJIEID GROUP.
      </p>

    </div>

    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

    {/* Indoor */}

<Link
  href="/produk/videotron-indoor"
  className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
>

  <Image
    src="/produk/videotron-indoor.jpg"
    alt="Videotron Indoor"
    width={500}
    height={350}
    className="h-52 w-full object-cover transition duration-700 group-hover:scale-110"
  />

  <div className="p-6">

    <h3 className="text-xl font-bold text-gray-900">
      Videotron Indoor
    </h3>

    <p className="mt-3 text-gray-600">
      LED Display berkualitas tinggi untuk meeting room, auditorium, showroom dan berbagai kebutuhan indoor.
    </p>

  </div>

</Link>

      {/* Running Text */}

      <Link
        href="/produk/running-text"
        className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
      >

        <Image
          src="/produk/running-text.jpg"
          alt="Running Text"
          width={500}
          height={350}
          className="h-52 w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="p-6">

          <h3 className="text-xl font-bold text-gray-900">
            Running Text
          </h3>

          <p className="mt-3 text-gray-600">
            Media informasi digital untuk toko, kantor dan instansi.
          </p>

        </div>

      </Link>

      {/* Digital Signage */}

      <Link
        href="/produk/digital-signage"
        className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
      >

        <Image
          src="/produk/digital-signage.jpg"
          alt="Digital Signage"
          width={500}
          height={350}
          className="h-52 w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="p-6">

          <h3 className="text-xl font-bold text-gray-900">
            Digital Signage
          </h3>

          <p className="mt-3 text-gray-600">
            Solusi display digital modern untuk promosi bisnis Anda.
          </p>

        </div>

      </Link>

      {/* Video Wall */}

      <Link
        href="/produk/video-wall"
        className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
      >

        <Image
          src="/produk/video-wall.jpg"
          alt="Video Wall"
          width={500}
          height={350}
          className="h-52 w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="p-6">

          <h3 className="text-xl font-bold text-gray-900">
            Video Wall
          </h3>

          <p className="mt-3 text-gray-600">
            Display premium untuk control room dan meeting room profesional.
          </p>

        </div>

      </Link>

    </div>

  </div>

</section>

    </main>
  );
}