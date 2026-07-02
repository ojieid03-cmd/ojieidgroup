"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { serviceMenu } from "./menu";

export default function MegaMenuServices() {
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
            Our Services
          </span>

          <h2 className="mt-2 text-3xl font-black text-gray-900">
            Professional Technology Services
          </h2>

          <p className="mt-3 max-w-2xl text-gray-500">
            Kami menyediakan layanan instalasi, maintenance,
            networking, konsultasi hingga system integration
            untuk seluruh produk digital technology.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">

            {serviceMenu.map((item) => {

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
                      Professional Service
                    </p>

                  </div>

                  <ArrowRight
                    size={18}
                    className="
                      text-gray-400
                      transition-all
                      duration-300
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

        <div className="relative overflow-hidden rounded-r-3xl">

          <Image
            src="/images/menu-service.jpg"
            alt="Service"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

          <div className="absolute bottom-0 left-0 z-10 p-8 text-white">

            <span className="rounded-full bg-green-600 px-3 py-1 text-xs font-semibold uppercase tracking-[2px]">
              OJIEID GROUP
            </span>

            <h2 className="mt-5 text-3xl font-black leading-tight">
              Professional
              <br />
              Services
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-200">
              Instalasi Videotron,
              Maintenance,
              Networking,
              Controller Setup,
              Commissioning,
              Training Operator,
              dan Technical Support.
            </p>

            <Link
              href="/services"
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
              Explore Services

              <ArrowRight size={18} />

            </Link>

          </div>

        </div>

      </div>
    </div>
  );
}