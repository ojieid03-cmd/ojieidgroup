import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-green-900 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3">

        {/* Profil */}
        <div>
          <h2 className="text-2xl font-bold">
            OJIEID GROUP SEJAHTERA
          </h2>

          <p className="mt-4 text-green-100 leading-7">
            Solusi profesional untuk Videotron Indoor & Outdoor,
            Running Text, Digital Signage, Instalasi WiFi,
            Networking, Maintenance, dan Technical Support.
          </p>
        </div>

        {/* Menu */}
        <div>
          <h3 className="text-xl font-bold">
            Menu
          </h3>

          <div className="mt-4 flex flex-col gap-3">
            <Link href="/">Home</Link>
            <Link href="/produk">Produk</Link>
            <Link href="/galeri">Galeri</Link>
            <Link href="/tentang">Tentang</Link>
            <Link href="/kontak">Kontak</Link>
            <Link href="/penawaran">Penawaran</Link>
          </div>
        </div>

        {/* Kontak */}
        <div>
          <h3 className="text-xl font-bold">
            Hubungi Kami
          </h3>

          <div className="mt-4 space-y-3 text-green-100">
            <p>📞 0852-3135-3155</p>
            <p>💬 WhatsApp: 0852-3135-3155</p>
            <p>📧 Email: info@ojieidgroup.com</p>
            <p>🌐 Indonesia</p>
          </div>
        </div>

      </div>

      <div className="border-t border-green-800 py-6 text-center text-green-200">
        © {year} OJIEID GROUP SEJAHTERA. All Rights Reserved.
      </div>
    </footer>
  );
}
