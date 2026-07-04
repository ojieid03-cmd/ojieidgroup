"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

import { mainMenu } from "./menu";
import MegaMenuProducts from "./MegaMenuProducts";

export default function DesktopMenu() {
  const pathname = usePathname();

  return (
    <nav className="hidden xl:flex items-center">

      {mainMenu.map((item) => {

        const active =
          item.href !== "#" &&
          pathname === item.href;

        // ================= PRODUCTS =================

        if (item.mega === "products") {
          return (
            <div
              key={item.title}
              className="group relative"
            >
              <button
                className="
                  flex
                  items-center
                  gap-1
                  px-2 lg:px-5
                  py-4 lg:py-9
                  text-[13px] lg:text-[15px]
                  font-semibold
                  text-gray-800
                  transition-all
                  duration-300
                  hover:text-green-600
                "
              >
                {item.title}

                <ChevronDown
                  size={17}
                  className="
                    transition-transform
                    duration-300
                    group-hover:rotate-180
                  "
                />

              </button>

              <MegaMenuProducts />

            </div>
          );
        }

        // ================= MENU NORMAL =================

        return (
          <Link
            key={item.title}
            href={item.href}
            className={`
              relative
              px-2 lg:px-5
              py-4 lg:py-9
              text-[13px] lg:text-[15px]
              font-semibold
              transition-all
              duration-300
              ${
                active
                  ? "text-green-600"
                  : "text-gray-800 hover:text-green-600"
              }
            `}
          >
            {item.title}

            <span
              className={`
                absolute
                bottom-2 lg:bottom-7
                left-2 lg:left-5
                h-[2px]
                rounded-full
                bg-green-600
                transition-all
                duration-300
                ${
                  active
                    ? "w-8"
                    : "w-0"
                }
              `}
            />

          </Link>
        );

      })}

    </nav>
  );
}