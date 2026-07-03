"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronRight, ArrowLeft } from "lucide-react";
import { mainMenu, productMenu, serviceMenu } from "./menu";

type View = "main" | "products" | "services";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
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
        onClick={() => setOpen(true)}
        className="xl:hidden flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200"
      >
        <Menu size={24} />
      </button>

      {/* OVERLAY */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/50 transition-all duration-300 ${
          open
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      {/* DRAWER */}
      <aside
        className={`fixed right-0 top-0 z-50 h-screen w-[320px] bg-white shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between border-b px-6 py-5">

          {view === "main" ? (
            <h2 className="text-xl font-bold text-green-600">
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

          <button onClick={() => setOpen(false)}>
            <X size={28} />
          </button>

        </div>

        {/* MAIN MENU */}
        {view === "main" && (
          <div className="py-2">

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
                  className="block px-6 py-4 font-semibold hover:bg-gray-100"
                >
                  {item.title}
                </Link>
              );
            })}

          </div>
        )}

        {/* PRODUCT PAGE */}
        {view === "products" && (
          <div className="py-2">

            <h3 className="px-6 py-3 text-lg font-bold text-green-600">
              Produk
            </h3>

            {productMenu.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-6 py-4 hover:bg-gray-100"
              >
                {item.title}
              </Link>
            ))}

          </div>
        )}

        {/* SERVICE PAGE */}
        {view === "services" && (
          <div className="py-2">

            <h3 className="px-6 py-3 text-lg font-bold text-green-600">
              Services
            </h3>

            {serviceMenu.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-6 py-4 hover:bg-gray-100"
              >
                {item.title}
              </Link>
            ))}

          </div>
        )}

      </aside>
    </>
  );
}