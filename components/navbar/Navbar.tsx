"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Phone } from "lucide-react";

import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
      <div className="mx-auto flex h-[92px] w-full max-w-[1800px] items-center justify-between px-6 lg:px-10">

        {/* ================= LOGO ================= */}

        <Link
          href="/"
          className="flex items-center gap-4"
        >
          <Image
            src="/logo/logo.png"
            alt="OJIEID GROUP"
            width={68}
            height={68}
            priority
            className="h-16 w-auto"
          />

          <div>

            <h1 className="text-[30px] font-black leading-none">

              <span className="text-green-600">
                OJIEID
              </span>

              <span className="text-gray-900">
                {" "}GROUP
              </span>

            </h1>

            <p className="mt-1 text-[11px] uppercase tracking-[4px] text-gray-500">
              Smart Digital Technology
            </p>

          </div>

        </Link>

        {/* ================= MENU ================= */}

        <DesktopMenu />

        {/* ================= RIGHT ================= */}

        <div className="hidden xl:flex items-center gap-4">

          <button
            className="
              flex
              h-12
              w-12
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
              px-7
              py-3.5
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

        {/* ================= MOBILE ================= */}

        <MobileMenu />

      </div>
    </header>
  );
}