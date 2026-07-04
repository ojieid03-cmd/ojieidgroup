"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, PhoneCall } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[92vh] min-h-[760px] w-full overflow-hidden">

      {/* Background */}

      <Image
        src="/images/hero-bg.webp"
        alt="OJIEID GROUP"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}

      <div className="relative z-10 mx-auto flex h-full max-w-[1800px] items-center px-6 lg:px-12">

        <div className="max-w-3xl">

          <span className="rounded-full border border-green-500 bg-green-600/20 px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-green-300">
            Smart Digital Technology
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight text-white lg:text-7xl">

            LED DISPLAY
            <br />

            VIDEOTRON
            <br />

            DIGITAL SOLUTION

          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-9 text-gray-200">

            OJIEID GROUP menyediakan solusi Videotron,
            LED Display, Running Text, Digital Signage,
            Networking, Maintenance hingga Smart Technology
            untuk perusahaan, pemerintahan dan industri.

          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <Link
              href="/produk"
              className="flex items-center gap-3 rounded-xl bg-green-600 px-8 py-4 font-semibold text-white transition hover:bg-green-700"
            >
              Explore Products

              <ArrowRight size={20} />

            </Link>

            <Link
              href="/kontak"
              className="flex items-center gap-3 rounded-xl border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-black"
            >
              <PhoneCall size={20} />

              Contact Us

            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}