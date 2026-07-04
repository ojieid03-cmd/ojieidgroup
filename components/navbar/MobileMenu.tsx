"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  Menu,
  X,
  ChevronRight,
  ArrowLeft,
  Phone,
} from "lucide-react";

import {
  mainMenu,
  productMenu,
  serviceMenu,
} from "./menu";

type View = "main" | "products" | "services";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
  const closeMenu = () => setOpen(false);

  window.addEventListener("resize", closeMenu);

  return () => {
    window.removeEventListener("resize", closeMenu);
  };
}, []);
  const [view, setView] = useState<View>("main");

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setView("main");
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* MENU BUTTON */}
      <button
  type="button"
  onClick={(e) => {
    e.stopPropagation();
    setOpen((prev) => !prev);
  }}
  className="xl:hidden flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white"
>
  {open ? <X size={24} /> : <Menu size={24} />}
</button>

      {/* OVERLAY */}
      <div
  onClick={() => setOpen(false)}
  className={`fixed inset-0 z-40 bg-black/50 transition-all duration-300 ${
    open
      ? "visible opacity-100"
      : "invisible opacity-0"
  }`}
/>

      {/* DRAWER */}
      <aside
  className={`fixed top-0 right-0 z-50 h-screen w-[320px] bg-white shadow-2xl transform transition-transform duration-300 ${
    open ? "translate-x-0" : "translate-x-full"
  }`}
>
        {/* HEADER */}
        <div
  className="
    flex
    items-center
    justify-between
    border-b
    bg-green-600
    px-6
    py-5
    text-white
  "
>
          {view === "main" ? (
            <h2 className="text-xl font-bold">
              OJIEID GROUP
            </h2>
          ) : (
            <button
              onClick={() => setView("main")}
              className="flex items-center gap-2 font-semibold"
            >
              <ArrowLeft size={18} />
              Kembali
            </button>
          )}

          <button
  onClick={() => setOpen(false)}
  className="rounded-lg p-1 hover:bg-white/20"
>
            <X size={28} />
          </button>

        </div>

        {/* MAIN MENU */}
        {view === "main" && (
          <div className="flex h-[calc(100vh-80px)] flex-col">

            {mainMenu.map((item) => {

              if (item.mega === "products") {
                return (
                  <button
                    key={item.title}
                    onClick={() => setView("products")}
                    className="flex w-full items-center justify-between px-6 py-4 text-left font-semibold hover:bg-gray-100"
                  >
                    {item.title}
                    <ChevronRight size={18} />
                  </button>
                );
              }

              if (item.mega === "services") {
                return (
                  <button
                    key={item.title}
                    onClick={() => setView("services")}
                    className="flex w-full items-center justify-between px-6 py-4 text-left font-semibold hover:bg-gray-100"
                  >
                    {item.title}
                    <ChevronRight size={18} />
                  </button>
                );
              }

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="
block
border-b
px-6
py-5
font-semibold
transition
hover:bg-green-50
hover:text-green-600
"
                >
                  {item.title}
                </Link>
              );
            })}

          </div>
        )}

        {/* PRODUCT PAGE */}
{view === "products" && (
  <div className="flex h-full flex-col">

    <h3 className="border-b px-6 py-5 text-xl font-bold text-green-600">
      Produk
    </h3>

    <div className="flex-1 overflow-y-auto">

      {productMenu.map((item) => (

        <Link
          key={item.title}
          href={item.href}
          onClick={() => setOpen(false)}
          className="
            flex
            items-center
            justify-between
            border-b
            px-6
            py-4
            font-medium
            transition
            hover:bg-green-50
            hover:text-green-600
          "
        >
          <span>{item.title}</span>

          <ChevronRight size={18} />

        </Link>

      ))}

    </div>

    <div className="border-t p-6">

      <Link
        href="/penawaran"
        onClick={() => setOpen(false)}
        className="
          flex
          items-center
          justify-center
          gap-2
          rounded-xl
          bg-green-600
          px-5
          py-3
          font-semibold
          text-white
          transition
          hover:bg-green-700
        "
      >
        <Phone size={18} />
        REQUEST QUOTE
      </Link>

    </div>

  </div>
)}
        {/* SERVICE PAGE */}
{view === "services" && (
  <div className="flex h-full flex-col">

    <h3 className="border-b px-6 py-5 text-xl font-bold text-green-600">
      Services
    </h3>

    <div className="flex-1 overflow-y-auto">

      {serviceMenu.map((item) => (

        <Link
          key={item.title}
          href={item.href}
          onClick={() => setOpen(false)}
          className="
            flex
            items-center
            justify-between
            border-b
            px-6
            py-4
            font-medium
            transition
            hover:bg-green-50
            hover:text-green-600
          "
        >
          <span>{item.title}</span>

          <ChevronRight size={18} />

        </Link>

      ))}

    </div>

    <div className="border-t p-6">

      <Link
        href="/penawaran"
        onClick={() => setOpen(false)}
        className="
          flex
          items-center
          justify-center
          gap-2
          rounded-xl
          bg-green-600
          px-5
          py-3
          font-semibold
          text-white
          transition
          hover:bg-green-700
        "
      >
        <Phone size={18} />
        REQUEST QUOTE
      </Link>

    </div>

  </div>
)}

      </aside>
    </>
  );
}