"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function DigitalSignagePage() {

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
    Digital Signage
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
            Digital Signage
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-green-100 leading-8">
            Solusi Digital Signage modern untuk promosi bisnis,
informasi perusahaan, pusat perbelanjaan, hotel,
rumah sakit, restoran, sekolah, bandara, dan berbagai
kebutuhan komunikasi digital secara profesional.
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
    src="/produk/digital-signage.webp"
    alt="Digital Signage"
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
        Mengapa Memilih Digital Signage Kami?
      </h2>

      <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">
        Menggunakan teknologi LED berkualitas tinggi dengan instalasi profesional
        untuk menghasilkan tampilan visual yang tajam dan elegan.
      </p>

    </div>

    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

      <div className="rounded-3xl border border-gray-200 p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
        <h3 className="text-xl font-bold text-green-700">
          Konten Dinamis
        </h3>

        <p className="mt-4 text-gray-600">
          Menampilkan gambar, video, animasi dan informasi secara real-time.
        </p>
      </div>

      <div className="rounded-3xl border border-gray-200 p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
        <h3 className="text-xl font-bold text-green-700">
          Remote Management
        </h3>

        <p className="mt-4 text-gray-600">
          Konten dapat diperbarui dari mana saja melalui jaringan internet.
        </p>
      </div>

      <div className="rounded-3xl border border-gray-200 p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
        <h3 className="text-xl font-bold text-green-700">
          Instalasi Profesional
        </h3>

        <p className="mt-4 text-gray-600">
          Didukung instalasi profesional dengan konfigurasi sistem yang lengkap.
        </p>
      </div>

      <div className="rounded-3xl border border-gray-200 p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
        <h3 className="text-xl font-bold text-green-700">
          Garansi Resmi
        </h3>

        <p className="mt-4 text-gray-600">
          Garansi resmi serta layanan maintenance dan after sales terbaik.
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
        Spesifikasi Digital Signage
      </h2>

    </div>

    <div className="mt-14 overflow-hidden rounded-3xl bg-white shadow-xl">

      <table className="w-full">

        <tbody>

  <tr className="border-b">
    <td className="bg-gray-50 p-5 font-bold w-1/3">
      Panel
    </td>
    <td className="p-5">
      LCD / LED Commercial
    </td>
  </tr>

  <tr className="border-b">
    <td className="bg-gray-50 p-5 font-bold">
      Ukuran
    </td>
    <td className="p-5">
      32" – 98"
    </td>
  </tr>

  <tr className="border-b">
    <td className="bg-gray-50 p-5 font-bold">
      Resolusi
    </td>
    <td className="p-5">
      Full HD / 4K UHD
    </td>
  </tr>

  <tr className="border-b">
    <td className="bg-gray-50 p-5 font-bold">
      Operating System
    </td>
    <td className="p-5">
      Android / Windows
    </td>
  </tr>

  <tr className="border-b">
    <td className="bg-gray-50 p-5 font-bold">
      Connectivity
    </td>
    <td className="p-5">
      LAN / WiFi / HDMI / USB
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
        Beberapa hasil instalasi Digital Signage yang telah kami kerjakan.
      </p>

    </div>

    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

      {[
  "/produk/digital/digital1.webp",
  "/produk/digital/digital2.webp",
  "/produk/digital/digital3.webp",
  "/produk/digital/digital4.webp",
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
            alt="Project Digital Signage"
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
      Siap Memasang Digital Signage?
    </h2>

    <p className="mx-auto mt-6 max-w-3xl text-lg text-green-100">
      Tim OJIEID GROUP siap membantu mulai dari konsultasi, pengadaan perangkat, instalasi, konfigurasi software hingga maintenance Digital Signage di seluruh Indonesia.
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
    q: "Apa itu Digital Signage?",
    a: "Digital Signage adalah media display digital yang digunakan untuk menampilkan informasi, promosi, iklan, maupun konten multimedia secara profesional di berbagai lokasi."
  },
  {
    q: "Apakah tersedia jasa instalasi?",
    a: "Ya. Kami menyediakan instalasi Digital Signage lengkap beserta konfigurasi software dan training penggunaan."
  },
  {
    q: "Apakah ada garansi?",
    a: "Semua produk mendapatkan garansi resmi serta didukung layanan maintenance dan after sales dari OJIEID GROUP."
  },
  {
    q: "Bisakah ukuran disesuaikan?",
    a: "Bisa. Kami menyediakan berbagai ukuran dan spesifikasi Digital Signage sesuai kebutuhan proyek Anda."
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
    src="/produk/videotron-indoor.webp"
    alt="Videotron Indoor"
    width={500}
    height={350}
    className="h-52 w-full object-cover transition duration-700 group-hover:scale-110"
  />

  <div className="p-6">

    <h3 className="text-xl font-bold text-gray-900">
      videotron Indoor
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
          src="/produk/running-text.webp"
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
          src="/produk/digital-signage.webp"
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
          src="/produk/video-wall.webp"
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