"use client";

import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Clock3,
} from "lucide-react";

export default function TopBar() {
  return (
    <div className="hidden lg:block w-full border-b border-green-900/30 bg-[#06120D] text-white">

      <div className="mx-auto flex h-8 w-full max-w-[1900px] items-center justify-between px-6 lg:px-10">

        {/* LEFT */}
        <div className="flex items-center gap-8 text-[13px] text-gray-300">

          <div className="flex items-center gap-2">
            <Phone
              size={14}
              className="text-green-400"
            />
            <span>+62 852-3135-3155</span>
          </div>

          <div className="flex items-center gap-2">
            <Mail
              size={14}
              className="text-green-400"
            />
            <span>info@ojieidgroup.com</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin
              size={14}
              className="text-green-400"
            />
            <span>Indonesia</span>
          </div>

        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-8 text-[13px] text-gray-300">

          <div className="flex items-center gap-2">
            <Clock3
              size={14}
              className="text-green-400"
            />
            <span>Senin - Sabtu 08:00 - 17:00</span>
          </div>

          <Link
            href="/kontak"
            className="font-semibold text-green-400 transition hover:text-green-300"
          >
            Hubungi Kami
          </Link>

        </div>

      </div>

    </div>
  );
}