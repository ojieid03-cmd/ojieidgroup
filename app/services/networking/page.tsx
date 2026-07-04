import Image from "next/image";
import Link from "next/link";

export default function NetworkingPage() {
  return (
    <main className="bg-[#101826] text-white">

      {/* HERO */}

      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid items-center gap-14 lg:grid-cols-2">

          <div>

            <p className="font-semibold text-green-500">
              HOME / SERVICES / NETWORKING
            </p>

            <h1 className="mt-5 text-5xl font-extrabold leading-tight">
              Networking
              <br />
              Infrastructure Solution
            </h1>

            <p className="mt-8 text-lg leading-8 text-gray-300">
              OJIEID GROUP menyediakan layanan pembangunan
              jaringan komputer profesional mulai dari LAN,
              WAN, Fiber Optic, Mikrotik, Server hingga
              konfigurasi perangkat jaringan perusahaan.
            </p>

            <Link
              href="/penawaran"
              className="mt-10 inline-block rounded-xl bg-green-600 px-8 py-4 font-bold transition hover:bg-green-700"
            >
              📄 Request Networking
            </Link>

          </div>

          <Image
            src="/images/services/networking.webp"
            alt="Networking"
            width={900}
            height={700}
            className="rounded-3xl shadow-2xl"
          />

        </div>

      </section>

      {/* LAYANAN */}

      <section className="mx-auto max-w-7xl px-6 pb-24">

        <div className="grid gap-10 lg:grid-cols-2">

          <div className="rounded-3xl bg-[#182232] p-10">

            <h2 className="text-3xl font-bold text-green-400">
              Layanan Networking
            </h2>

            <ul className="mt-8 space-y-4 text-lg text-gray-300">

              <li>✅ Instalasi LAN</li>

              <li>✅ Instalasi WAN</li>

              <li>✅ Fiber Optic</li>

              <li>✅ Mikrotik Configuration</li>

              <li>✅ Router Configuration</li>

              <li>✅ Managed Switch</li>

              <li>✅ Server Setup</li>

              <li>✅ VPN & Remote Access</li>

            </ul>

          </div>

          <div className="rounded-3xl bg-[#182232] p-10">

            <h2 className="text-3xl font-bold text-green-400">
              Keunggulan Kami
            </h2>

            <p className="mt-8 leading-8 text-gray-300">

              ✔ Teknisi Bersertifikat

              <br /><br />

              ✔ Perangkat Berkualitas

              <br /><br />

              ✔ Instalasi Cepat & Rapi

              <br /><br />

              ✔ Dokumentasi Lengkap

              <br /><br />

              ✔ Support Seluruh Indonesia

            </p>

          </div>

        </div>

      </section>

      {/* PROSES */}

      <section className="bg-[#182232] py-20">

        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-center text-4xl font-bold text-green-400">
            Tahapan Pengerjaan
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-4">

            <div className="rounded-2xl bg-[#101826] p-8 text-center">

              <div className="text-5xl">
                1️⃣
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Survey
              </h3>

            </div>

            <div className="rounded-2xl bg-[#101826] p-8 text-center">

              <div className="text-5xl">
                2️⃣
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Design Network
              </h3>

            </div>

            <div className="rounded-2xl bg-[#101826] p-8 text-center">

              <div className="text-5xl">
                3️⃣
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Installation
              </h3>

            </div>

            <div className="rounded-2xl bg-[#101826] p-8 text-center">

              <div className="text-5xl">
                4️⃣
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Testing
              </h3>

            </div>

          </div>

        </div>

      </section>

      {/* SOLUSI */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <h2 className="text-center text-4xl font-bold text-green-400">
          Solusi Yang Kami Kerjakan
        </h2>

        <div className="mt-14 grid gap-8 md:grid-cols-3">

          <div className="rounded-3xl bg-[#182232] p-8">

            <h3 className="text-2xl font-bold">
              Office Network
            </h3>

            <p className="mt-4 text-gray-300 leading-8">

              Instalasi jaringan kantor,
              meeting room,
              server room
              hingga CCTV Network.

            </p>

          </div>

          <div className="rounded-3xl bg-[#182232] p-8">

            <h3 className="text-2xl font-bold">
              School Network
            </h3>

            <p className="mt-4 text-gray-300 leading-8">

              Jaringan sekolah,
              laboratorium komputer,
              hotspot siswa
              dan guru.

            </p>

          </div>

          <div className="rounded-3xl bg-[#182232] p-8">

            <h3 className="text-2xl font-bold">
              Factory Network
            </h3>

            <p className="mt-4 text-gray-300 leading-8">

              Infrastruktur jaringan
              industri,
              gudang,
              pabrik
              dan manufacturing.

            </p>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-green-700 py-20">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2 className="text-4xl font-extrabold">
            Siap Membangun Infrastruktur Jaringan?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-green-100">

            Tim Networking OJIEID GROUP siap membantu
            kebutuhan jaringan perusahaan,
            sekolah,
            hotel,
            rumah sakit
            hingga pemerintahan.

          </p>

          <a
            href="https://wa.me/6285231353155"
            className="mt-10 inline-block rounded-xl bg-white px-8 py-4 font-bold text-green-700 transition hover:scale-105"
          >
            💬 Konsultasi Sekarang
          </a>

        </div>

      </section>

    </main>
  );
}