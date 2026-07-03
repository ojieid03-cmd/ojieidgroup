"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Phone } from "lucide-react";
import MobileTopMenu from "./MobileTopMenu";
import { BASE_PATH } from "@/lib/basePath";

import DesktopMenu from "./DesktopMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        sticky
        top-0
        z-50
        w-full
        border-b
        transition-all
        duration-300
        ${
          scrolled
            ? "border-gray-200 bg-white/95 shadow-xl backdrop-blur-lg"
            : "border-transparent bg-white"
        }
      `}
    >
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1800px]
          flex-col
          items-center
          gap-3
          px-4
          py-3
          lg:h-[92px]
          lg:flex-row
          lg:justify-between
          lg:gap-6
          lg:px-10
        "
      >
        {/* ================= LOGO ================= */}

        <Link
          href="/"
          className="flex items-center justify-center gap-3 lg:justify-start"
        >
          <Image
            src={`${BASE_PATH}/logo/logo.png`}
            alt="OJIEID GROUP"
            width={60}
            height={60}
            priority
            className="h-14 w-auto lg:h-16"
          />

          <div>
            <h1 className="text-2xl font-black leading-none lg:text-[30px]">
              <span className="text-green-600">OJIEID</span>
              <span className="text-gray-900"> GROUP</span>
            </h1>

            <p className="mt-1 text-[10px] uppercase tracking-[3px] text-gray-500 lg:text-[11px]">
              Smart Digital Technology
            </p>
          </div>
        </Link>

        {/* ================= MENU ================= */}

        <DesktopMenu />

        {/* ================= RIGHT ================= */}

        <div className="hidden lg:flex items-center gap-4">
          <button
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              border
              border-gray-200
              text-gray-700
              transition-all
              duration-300
              hover:border-green-600
              hover:bg-green-600
              hover:text-white
            "
          >
            <Search size={20} />
          </button>

          <Link
            href="/penawaran"
            className="
              flex
              items-center
              gap-2
              rounded-xl
              bg-green-600
              px-6
              py-3
              font-semibold
              text-white
              transition-all
              duration-300
              hover:bg-green-700
              hover:shadow-xl
            "
          >
            <Phone size={18} />
            REQUEST QUOTE
          </Link>
        </div>
      ...
</div>

<MobileTopMenu />

</header>
  );
}