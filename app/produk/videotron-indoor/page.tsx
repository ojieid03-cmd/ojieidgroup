"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function VideotronIndoorPage() {
  return (
    <main>

      {/* HERO */}

      <section className="relative overflow-hidden bg-gradient-to-r from-green-700 via-green-600 to-green-500 py-24 text-white">

  <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
    <div>

          <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold">
            OJIEID GROUP
          </span>

          <h1 className="mt-6 text-5xl font-black">
            Videotron Indoor
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-green-100 leading-8">
            Solusi LED Display Indoor dengan kualitas gambar tajam,
            warna cerah, dan teknologi terbaru untuk ruang meeting,
            auditorium, showroom, mall, hotel, rumah ibadah,
            command center, hingga studio.
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
    src="/produk/videotron-indoor.jpg"
    alt="Videotron Indoor"
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
        Mengapa Memilih Videotron Indoor Kami?
      </h2>

      <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">
        Menggunakan teknologi LED berkualitas tinggi dengan instalasi profesional
        untuk menghasilkan tampilan visual yang tajam dan elegan.
      </p>

    </div>

    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

      <div className="rounded-3xl border border-gray-200 p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
        <h3 className="text-xl font-bold text-green-700">
          Full HD Display
        </h3>

        <p className="mt-4 text-gray-600">
          Gambar tajam dengan warna hidup untuk berbagai kebutuhan indoor.
        </p>
      </div>

      <div className="rounded-3xl border border-gray-200 p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
        <h3 className="text-xl font-bold text-green-700">
          Hemat Energi
        </h3>

        <p className="mt-4 text-gray-600">
          Konsumsi daya rendah dengan performa tinggi.
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
        Spesifikasi Videotron Indoor
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
              P1.25 / P1.53 / P1.86 / P2 / P2.5 / P3
            </td>
          </tr>

          <tr className="border-b">
            <td className="bg-gray-50 p-5 font-bold">
              Brightness
            </td>
            <td className="p-5">
              600–1200 nits
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
              Horizontal 160° • Vertical 160°
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
        Beberapa hasil instalasi Videotron Indoor yang telah kami kerjakan.
      </p>

    </div>

    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

      {[
        "/produk/indoor/indoor1.jpg",
        "/produk/indoor/indoor2.jpg",
        "/produk/indoor/indoor3.jpg",
        "/produk/indoor/indoor4.jpg",
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
            alt="Project Videotron Indoor"
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
      Siap Memasang Videotron Indoor?
    </h2>

    <p className="mx-auto mt-6 max-w-3xl text-lg text-green-100">
      Tim OJIEID GROUP siap membantu mulai dari konsultasi,
      desain, pengadaan, instalasi hingga maintenance.
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
    </main>
  );
}