"use client";

import Link from "next/link";
import { mainMenu } from "./menu";

export default function MobileTopMenu() {
  return (
    <div className="xl:hidden border-t border-gray-200 bg-white">
      <div
        className="
          flex
          overflow-x-auto
          whitespace-nowrap
          px-3
          py-3
          gap-5
          scrollbar-hide
        "
      >
        {mainMenu
          .filter((item) => item.href !== "#")
          .map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="
                shrink-0
                text-sm
                font-semibold
                text-gray-700
                hover:text-green-600
              "
            >
              {item.title}
            </Link>
          ))}
      </div>
    </div>
  );
}