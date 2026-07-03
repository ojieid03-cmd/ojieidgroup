"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { BASE_PATH } from "@/lib/basePath";
import { productMenu } from "./menu";

export default function MegaMenuProducts() {
  return (
    <div
      className="
        invisible
        absolute
        left-1/2
        top-full
        z-50
        mt-5
        w-[1080px]
        -translate-x-1/2
        rounded-3xl
        border
        border-gray-200
        bg-white
        opacity-0
        shadow-[0_30px_80px_rgba(0,0,0,.18)]
        transition-all
        duration-300
        group-hover:visible
        group-hover:translate-y-0
        group-hover:opacity-100
      "
    >
      <div className="grid grid-cols-3">

        {/* ================= LEFT ================= */}

        <div className="col-span-2 p-8">

          <span className="text-sm font-semibold uppercase tracking-[3px] text-green-600">
            Products
          </span>

          <h2 className="mt-2 text-3xl font-black text-gray-900">
            Smart LED Display Solutions
          </h2>

          <p className="mt-3 max-w-2xl text-gray-500">
            Kami menyediakan berbagai solusi LED Display, Videotron,
            Digital Signage dan perangkat pendukung untuk kebutuhan
            bisnis, pemerintahan dan industri.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {productMenu.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="
                    group/item
                    flex
                    items-center
                    gap-4
                    rounded-2xl
                    border
                    border-gray-200
                    p-5
                    transition-all
                    duration-300
                    hover:border-green-600
                    hover:bg-green-50
                  "
                >
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-green-100
                      text-green-600
                      transition-all
                      duration-300
                      group-hover/item:bg-green-600
                      group-hover/item:text-white
                    "
                  >
                    <Icon size={28} />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      Professional LED Solution
                    </p>
                  </div>

                  <ArrowRight
                    size={18}
                    className="
                      text-gray-400
                      transition-all
                      group-hover/item:translate-x-1
                      group-hover/item:text-green-600
                    "
                  />
                </Link>
              );
            })}
          </div>
        </div>

        {/* ================= RIGHT ================= */}

        <div className="relative min-h-[620px] overflow-hidden rounded-r-3xl">

          <Image
  src={`${BASE_PATH}/images/menu-product.jpg`}
  alt="LED Display"
  fill
  sizes="360px"
  className="object-cover"
/>

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

          <div className="absolute bottom-0 left-0 z-10 p-8 text-white">

            <span className="rounded-full bg-green-600 px-3 py-1 text-xs font-semibold uppercase tracking-[2px]">
              OJIEID GROUP
            </span>

            <h2 className="mt-5 text-3xl font-black leading-tight">
              Smart Digital
              <br />
              Technology
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-200">
              Solusi Videotron Indoor,
              Outdoor, Digital Signage,
              Running Text hingga
              Controller LED Display.
            </p>

            <Link
              href="/produk"
              className="
                mt-6
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-green-600
                px-6
                py-3
                font-semibold
                text-white
                transition
                hover:bg-green-500
              "
            >
              Explore Products
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </div>
    </div>
  );
}