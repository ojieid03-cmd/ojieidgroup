import Image from "next/image";
import Link from "next/link";

export default function InstallationPage() {
  return (
    <main className="bg-[#101826] text-white">

      {/* HERO */}

      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid items-center gap-14 lg:grid-cols-2">

          <div>

            <p className="font-semibold text-green-500">
              HOME / SERVICES / INSTALLATION
            </p>

            <h1 className="mt-5 text-5xl font-extrabold leading-tight">
              Installation
              <br />
              Digital Technology
            </h1>

            <p className="mt-8 text-lg leading-8 text-gray-300">

              OJIEID GROUP menyediakan layanan
              instalasi profesional untuk
              Videotron, Running Text,
              Digital Signage,
              Controller,
              Networking
              dan Smart Display.

            </p>

            <Link
              href="/penawaran"
              className="mt-10 inline-block rounded-xl bg-green-600 px-8 py-4 font-bold transition hover:bg-green-700"
            >
              📄 Request Installation
            </Link>

          </div>

          <Image
            src="/images/services/installation.webp"
            alt="Installation"
            width={900}
            height={700}
            className="rounded-3xl shadow-2xl"
          />

        </div>

      </section>

      {/* CONTENT */}

      <section className="mx-auto max-w-7xl px-6 pb-24">

        <div className="grid gap-10 lg:grid-cols-2">

          <div className="rounded-3xl bg-[#182232] p-10">

            <h2 className="text-3xl font-bold text-green-400">
              Layanan Kami
            </h2>

            <ul className="mt-8 space-y-4 text-lg text-gray-300">

              <li>✅ Survey Lokasi</li>

              <li>✅ Instalasi Videotron</li>

              <li>✅ Instalasi Running Text</li>

              <li>✅ Digital Signage</li>

              <li>✅ Controller Setting</li>

              <li>✅ Testing & Commissioning</li>

              <li>✅ Training Operator</li>

            </ul>

          </div>

          <div className="rounded-3xl bg-[#182232] p-10">

            <h2 className="text-3xl font-bold text-green-400">
              Mengapa Memilih Kami?
            </h2>

            <p className="mt-8 leading-8 text-gray-300">

              ✔ Teknisi Berpengalaman

              <br /><br />

              ✔ Instalasi Cepat & Rapi

              <br /><br />

              ✔ Garansi Pekerjaan

              <br /><br />

              ✔ Support Seluruh Indonesia

            </p>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-green-700 py-20">

        <div className="mx-auto max-w-5xl text-center">

          <h2 className="text-4xl font-extrabold">
            Siap Memulai Project?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-green-100">

            Hubungi tim OJIEID GROUP sekarang
            untuk konsultasi gratis.

          </p>

          <a
            href="https://wa.me/6285231353155"
            className="mt-10 inline-block rounded-xl bg-white px-8 py-4 font-bold text-green-700 transition hover:scale-105"
          >
            💬 Chat WhatsApp
          </a>

        </div>

      </section>

    </main>
  );
}