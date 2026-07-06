import Image from "next/image";
import Link from "next/link";
import { ADMIN_LOGIN_URL } from "@/lib/config";

const team = [
  {
    nama: "Admin",
    jabatan: "Customer Service",
    wa: "6285204879946",
    foto: "/images/team/admin.webp",
  },
  {
    nama: "Marketing",
    jabatan: "Marketing Executive",
    wa: "62818436159",
    foto: "/images/team/marketing.webp",
  },
  {
    nama: "Networking",
    jabatan: "Network Engineer",
    wa: "6285231353155",
    foto: "/images/team/networking.webp",
  },
  {
    nama: "Teknisi",
    jabatan: "Senior Technician",
    wa: "6283844782333",
    foto: "/images/team/teknisi.webp",
  },
];

export default function WifiPage() {
  return (
    <main className="bg-[#0f172a] text-white">

      {/* HERO */}

      <section className="relative overflow-hidden">

        <Image
          src="/images/services/wifi.webp"
          alt="WiFi Internet"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-24">

          <p className="text-green-400 font-semibold uppercase tracking-[4px]">
            4LINK
          </p>

          <h1 className="mt-5 text-5xl font-black lg:text-7xl">
            WiFi Internet
            <br />
            Solution
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-9 text-gray-300">

            Kami menyediakan layanan instalasi WiFi
            untuk rumah,
            kantor,
            sekolah,
            hotel,
            cafe,
            pabrik,
            hingga area publik
            menggunakan perangkat profesional.

          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <Link
              href="/penawaran"
              className="rounded-xl bg-green-600 px-8 py-4 font-bold hover:bg-green-700 transition"
            >
              📄 Request Installation
            </Link>

            <a
              href="https://wa.me/6285231353155"
              target="_blank"
              className="rounded-xl border border-white px-8 py-4 font-bold hover:bg-white hover:text-black transition"
            >
              💬 Chat WhatsApp
            </a>

          </div>

        </div>

      </section>

      {/* SERVICES */}

      <section className="mx-auto max-w-7xl px-6 py-20">

        <h2 className="text-center text-4xl font-bold text-green-400">
          Layanan WiFi Internet
        </h2>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-3xl bg-[#182232] p-8">
            <div className="text-5xl">🏠</div>

            <h3 className="mt-5 text-2xl font-bold">
              WiFi Rumah
            </h3>

            <p className="mt-4 text-gray-300">
              Instalasi internet rumah dengan jangkauan maksimal.
            </p>

          </div>

          <div className="rounded-3xl bg-[#182232] p-8">

            <div className="text-5xl">🏢</div>

            <h3 className="mt-5 text-2xl font-bold">
              WiFi Kantor
            </h3>

            <p className="mt-4 text-gray-300">
              Solusi jaringan stabil untuk perusahaan.
            </p>

          </div>

          <div className="rounded-3xl bg-[#182232] p-8">

            <div className="text-5xl">🏫</div>

            <h3 className="mt-5 text-2xl font-bold">
              WiFi Sekolah
            </h3>

            <p className="mt-4 text-gray-300">
              Hotspot sekolah dengan manajemen pengguna.
            </p>

          </div>

          <div className="rounded-3xl bg-[#182232] p-8">

            <div className="text-5xl">📡</div>

            <h3 className="mt-5 text-2xl font-bold">
              Outdoor WiFi
            </h3>

            <p className="mt-4 text-gray-300">
              Jaringan area luas menggunakan perangkat outdoor.
            </p>

          </div>

        </div>

      </section>
            {/* TEAM */}

      <section className="bg-[#182232] py-20">

        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-center text-4xl font-bold text-green-400">
            Tim Networking 4LINK
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-gray-300">
            Tim profesional kami siap membantu instalasi,
            konfigurasi jaringan,
            troubleshooting,
            maintenance,
            hingga konsultasi WiFi Internet.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {team.map((item) => (

              <div
                key={item.nama}
                className="rounded-3xl bg-[#101826] p-8 text-center transition hover:-translate-y-2 hover:shadow-2xl"
              >

                <Image
                  src={item.foto}
                  alt={item.nama}
                  width={180}
                  height={180}
                  className="mx-auto h-36 w-36 rounded-full object-cover border-4 border-green-500"
                />

                <h3 className="mt-6 text-2xl font-bold">
                  {item.nama}
                </h3>

                <p className="mt-2 text-green-400">
                  {item.jabatan}
                </p>

                <a
                  href={`https://wa.me/${item.wa}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block rounded-xl bg-green-600 px-6 py-3 font-bold transition hover:bg-green-700"
                >
                  💬 WhatsApp
                </a>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* WHY */}

      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-10 lg:grid-cols-2">

          <div className="rounded-3xl bg-[#182232] p-10">

            <h2 className="text-3xl font-bold text-green-400">
              Kenapa Memilih Kami?
            </h2>

            <ul className="mt-8 space-y-5 text-lg text-gray-300">

              <li>✅ Teknisi Berpengalaman</li>

              <li>✅ Instalasi Cepat & Rapi</li>

              <li>✅ Perangkat Original</li>

              <li>✅ Garansi Pekerjaan</li>

              <li>✅ Support Seluruh Indonesia</li>

            </ul>

          </div>

          <div className="rounded-3xl bg-[#182232] p-10">

            <h2 className="text-3xl font-bold text-green-400">
              Area Layanan
            </h2>

            <p className="mt-8 leading-9 text-gray-300">

              Kami melayani instalasi
              WiFi Internet,
              Networking,
              Access Point,
              Hotspot,
              Fiber Optic
              dan berbagai kebutuhan jaringan
              untuk rumah,
              kantor,
              sekolah,
              hotel,
              rumah sakit,
              pemerintahan,
              hingga industri.

            </p>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-green-700 py-20">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2 className="text-4xl font-extrabold">
            Siap Memasang WiFi Internet?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-green-100">

            Konsultasikan kebutuhan jaringan Anda
            bersama tim 4LINK.
            Kami siap memberikan solusi terbaik
            dengan kualitas profesional.

          </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">

  <Link
    href="https://wa.me/628xxxxxxxxxx"
    target="_blank"
    className="inline-flex min-w-[220px] items-center justify-center rounded-xl bg-green-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-orange-500"
  >
    💬 Chat WhatsApp
  </Link>

  <Link
    href="/kontak"
    className="inline-flex min-w-[220px] items-center justify-center rounded-xl bg-green-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-orange-500"
  >
    📞 Hubungi Kami
  </Link>

  <Link
    href={ADMIN_LOGIN_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex min-w-[220px] items-center justify-center rounded-xl bg-green-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-orange-500"
  >
    🔐 Login Admin 4LINK
  </Link>

</div>
        </div>

      </section>

    </main>
  );
}