import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="bg-[#101826] text-white">

      {/* HERO */}

      <section className="mx-auto max-w-7xl px-6 py-20">
{/* SERVICES */}

<section className="mx-auto max-w-7xl px-6 pb-24">

  <div className="grid gap-8 md:grid-cols-2">

    {/* INSTALLATION */}

    <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#182232] shadow-xl transition duration-500 hover:-translate-y-2 hover:shadow-green-600/20">

      <Image
        src="/images/services/installation.webp"
        alt="Installation"
        width={900}
        height={500}
        className="h-72 w-full object-cover"
      />

      <div className="p-8">

        <h2 className="text-3xl font-bold text-green-400">
          Installation
        </h2>

        <p className="mt-2 text-lg font-semibold text-green-500">
          Pemasangan Profesional
        </p>

        <p className="mt-5 leading-8 text-gray-300">

          Instalasi Videotron,
          Running Text,
          Digital Signage,
          Controller dan perangkat
          pendukung dengan teknisi
          berpengalaman.

        </p>

        <ul className="mt-6 space-y-3 text-gray-300">

          <li>✅ Survey lokasi</li>

          <li>✅ Instalasi cepat</li>

          <li>✅ Commissioning</li>

          <li>✅ Garansi pemasangan</li>

        </ul>

        <Link
          href="/services/installation"
          className="mt-8 block rounded-xl border border-green-500 py-4 text-center font-bold text-green-400 transition hover:bg-green-600 hover:text-white"
        >
          Lihat Detail →
        </Link>

      </div>

    </div>

    {/* MAINTENANCE */}

    <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#182232] shadow-xl transition duration-500 hover:-translate-y-2 hover:shadow-green-600/20">

      <Image
        src="/images/services/maintenance.webp"
        alt="Maintenance"
        width={900}
        height={500}
        className="h-72 w-full object-cover"
      />

      <div className="p-8">

        <h2 className="text-3xl font-bold text-green-400">
          Maintenance
        </h2>

        <p className="mt-2 text-lg font-semibold text-green-500">
          Perawatan Berkala
        </p>

        <p className="mt-5 leading-8 text-gray-300">

          Perawatan rutin,
          troubleshooting,
          perbaikan modul,
          controller hingga
          kalibrasi videotron.

        </p>

        <ul className="mt-6 space-y-3 text-gray-300">

          <li>✅ Pemeriksaan berkala</li>

          <li>✅ Troubleshooting</li>

          <li>✅ Penggantian sparepart</li>

          <li>✅ Garansi service</li>

        </ul>

        <Link
          href="/services/maintenance"
          className="mt-8 block rounded-xl border border-green-500 py-4 text-center font-bold text-green-400 transition hover:bg-green-600 hover:text-white"
        >
          Lihat Detail →
        </Link>

      </div>

    </div>

  </div>

</section>
        <div className="grid items-center gap-12 lg:grid-cols-2">

          <div>

            <p className="mb-3 font-semibold text-green-500">
              HOME / SERVICES
            </p>

            <h1 className="text-5xl font-extrabold leading-tight">
              Professional Digital
              <br />
              Technology Services
            </h1>

            <p className="mt-6 text-lg text-gray-300 leading-8">

              OJIEID GROUP menyediakan layanan
              instalasi, maintenance,
              networking serta solusi WiFi
              profesional untuk perusahaan,
              pemerintahan maupun UMKM.

            </p>

          </div>

          <div>

            <Image
              src="/images/services/hero-services.webp"
              alt="Services"
              width={900}
              height={700}
              className="rounded-3xl object-cover shadow-2xl"
            />

          </div>

        </div>

      </section>
<section className="mx-auto max-w-7xl px-6 pb-24">

  <div className="grid gap-8 md:grid-cols-2">

    {/* NETWORKING */}

    <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#182232] shadow-xl transition duration-500 hover:-translate-y-2 hover:shadow-green-600/20">

      <Image
        src="/images/services/networking.webp"
        alt="Networking"
        width={900}
        height={500}
        className="h-72 w-full object-cover"
      />

      <div className="p-8">

        <h2 className="text-3xl font-bold text-green-400">
          Networking
        </h2>

        <p className="mt-2 text-lg font-semibold text-green-500">
          Jaringan Komputer & Internet
        </p>

        <p className="mt-5 leading-8 text-gray-300">
          Instalasi jaringan LAN, WAN,
          Fiber Optic, Mikrotik,
          Router, Switch, Server,
          serta infrastruktur jaringan profesional.
        </p>

        <ul className="mt-6 space-y-3 text-gray-300">

          <li>✅ Instalasi LAN & WAN</li>

          <li>✅ Konfigurasi Router</li>

          <li>✅ Mikrotik & Access Point</li>

          <li>✅ Maintenance jaringan</li>

        </ul>

        <Link
          href="/services/networking"
          className="mt-8 block rounded-xl border border-green-500 py-4 text-center font-bold text-green-400 transition hover:bg-green-600 hover:text-white"
        >
          Lihat Detail →
        </Link>

      </div>

    </div>

    {/* WIFI */}

    <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#182232] shadow-xl transition duration-500 hover:-translate-y-2 hover:shadow-green-600/20">

      <Image
        src="/images/services/wifi.webp"
        alt="WiFi"
        width={900}
        height={500}
        className="h-72 w-full object-cover"
      />

      <div className="p-8">

        <h2 className="text-3xl font-bold text-green-400">
          WiFi Internet
        </h2>

        <p className="mt-2 text-lg font-semibold text-green-500">
          Solusi WiFi Stabil & Cepat
        </p>

        <p className="mt-5 leading-8 text-gray-300">
          Instalasi WiFi rumah,
          kantor, sekolah,
          hotel, cafe,
          maupun area publik
          dengan jangkauan luas.
        </p>

        <ul className="mt-6 space-y-3 text-gray-300">

          <li>✅ Indoor & Outdoor WiFi</li>

          <li>✅ Hotspot Management</li>

          <li>✅ Long Range WiFi</li>

          <li>✅ Monitoring & Maintenance</li>

        </ul>

        <Link
          href="/services/wifi"
          className="mt-8 block rounded-xl border border-green-500 py-4 text-center font-bold text-green-400 transition hover:bg-green-600 hover:text-white"
        >
          Lihat Detail →
        </Link>

      </div>

    </div>

  </div>

</section>
    </main>
  );
}