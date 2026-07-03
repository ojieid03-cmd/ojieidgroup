"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { mainMenu, productMenu, serviceMenu } from "./menu";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  // Lock body scroll saat menu terbuka
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [open]);

  return (
    <>
      {/* BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 xl:hidden"
      >
        <Menu size={24} />
      </button>

      {/* OVERLAY */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* DRAWER */}
      <aside
        className={`fixed top-0 right-0 z-50 h-[100dvh] w-[330px] max-w-[90vw] bg-white shadow-2xl transform transition-transform duration-300 will-change-transform ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between border-b px-6 py-5">

          <h2 className="text-xl font-bold text-green-600">
            OJIEID GROUP
          </h2>

          <button onClick={() => setOpen(false)}>
            <X size={28} />
          </button>

        </div>

        {/* MENU */}
        <div className="h-[calc(100dvh-80px)] overflow-y-auto pb-10">

          {mainMenu.map((item) => {

            // PRODUCTS
            if (item.mega === "products") {
              return (
                <div key={item.title} className="border-b">

                  <button
                    onClick={() => setProductOpen(!productOpen)}
                    className="flex w-full items-center justify-between px-6 py-4 font-semibold"
                  >
                    {item.title}

                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${
                        productOpen ? "rotate-180" : ""
                      }`}
                    />

                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      productOpen ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="bg-gray-50">

                      {productMenu.map((p) => (
                        <Link
                          key={p.title}
                          href={p.href}
                          onClick={() => setOpen(false)}
                          className="block px-10 py-3 text-sm hover:text-green-600"
                        >
                          {p.title}
                        </Link>
                      ))}

                    </div>
                  </div>

                </div>
              );
            }

            // SERVICES
            if (item.mega === "services") {
              return (
                <div key={item.title} className="border-b">

                  <button
                    onClick={() => setServiceOpen(!serviceOpen)}
                    className="flex w-full items-center justify-between px-6 py-4 font-semibold"
                  >
                    {item.title}

                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${
                        serviceOpen ? "rotate-180" : ""
                      }`}
                    />

                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      serviceOpen ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="bg-gray-50">

                      {serviceMenu.map((s) => (
                        <Link
                          key={s.title}
                          href={s.href}
                          onClick={() => setOpen(false)}
                          className="block px-10 py-3 text-sm hover:text-green-600"
                        >
                          {s.title}
                        </Link>
                      ))}

                    </div>
                  </div>

                </div>
              );
            }

            // MENU BIASA
            return (
              <Link
                key={item.title}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block border-b px-6 py-4 font-semibold hover:text-green-600"
              >
                {item.title}
              </Link>
            );

          })}

        </div>

      </aside>
    </>
  );
}