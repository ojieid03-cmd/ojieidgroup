"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menus = [
  { name: "Dashboard", href: "/produk/wifi/4link/admin/dashboard" },
  { name: "Pelanggan", href: "/produk/wifi/4link/admin/pelanggan" },
  { name: "Paket Internet", href: "/produk/wifi/4link/admin/paket" },
  { name: "Tagihan", href: "/produk/wifi/4link/admin/tagihan" },
  { name: "Pembayaran", href: "/produk/wifi/4link/admin/pembayaran" },
  { name: "Keuangan", href: "/produk/wifi/4link/admin/keuangan" },
  { name: "MikroTik", href: "/produk/wifi/4link/admin/mikrotik" },
  { name: "Pengaturan", href: "/produk/wifi/4link/admin/pengaturan" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white flex flex-col">
      <div className="p-6 border-b border-slate-700">
        <h1 className="text-2xl font-bold text-cyan-400">
          4LINK
        </h1>

        <p className="text-xs text-gray-400">
          Powered by OJIEID GROUP
        </p>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menus.map((menu) => (
          <Link
            key={menu.href}
            href={menu.href}
            className={`block rounded-lg px-4 py-3 transition ${
              pathname === menu.href
                ? "bg-cyan-600"
                : "hover:bg-slate-800"
            }`}
          >
            {menu.name}
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-700">
        <Link
          href="/produk/wifi/4link/logout"
          className="block w-full rounded-lg bg-red-600 hover:bg-red-700 px-4 py-3 text-center transition"
        >
          Logout
        </Link>
      </div>
    </aside>
  );
}