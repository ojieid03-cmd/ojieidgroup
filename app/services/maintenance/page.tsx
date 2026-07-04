import Image from "next/image";
import Link from "next/link";

export default function MaintenancePage() {
  return (
    <main className="bg-[#101826] text-white">

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid items-center gap-14 lg:grid-cols-2">

          <div>

            <p className="font-semibold text-green-500">
              HOME / SERVICES / MAINTENANCE
            </p>

            <h1 className="mt-5 text-5xl font-extrabold leading-tight">
              Maintenance
              <br />
              Videotron & LED Display
            </h1>

            <p className="mt-8 text-lg leading-8 text-gray-300">
              Kami melayani perawatan, perbaikan, troubleshooting,
              kalibrasi warna, penggantian sparepart serta service
              Videotron Indoor, Outdoor, Running Text dan Digital Signage.
            </p>

            <Link
              href="/penawaran"
              className="mt-10 inline-block rounded-xl bg-green-600 px-8 py-4 font-bold transition hover:bg-green-700"
            >
              📄 Request Maintenance
            </Link>

          </div>

          <Image
            src="/images/services/maintenance.webp"
            alt="Maintenance"
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
              Layanan Maintenance
            </h2>

            <ul className="mt-8 space-y-4 text-lg text-gray-300">

              <li>✅ Pemeriksaan Berkala</li>
              <li>✅ Cleaning Modul LED</li>
              <li>✅ Kalibrasi Warna</li>
              <li>✅ Perbaikan Receiving Card</li>
              <li>✅ Perbaikan Power Supply</li>
              <li>✅ Penggantian Modul LED</li>
              <li>✅ Penggantian Sparepart</li>
              <li>✅ Update Software</li>

            </ul>

          </div>

          <div className="rounded-3xl bg-[#182232] p-10">

            <h2 className="text-3xl font-bold text-green-400">
              Kenapa Maintenance Penting?
            </h2>

            <p className="mt-8 leading-8 text-gray-300">

              ✔ Memperpanjang umur Videotron.

              <br /><br />

              ✔ Menghindari kerusakan besar.

              <br /><br />

              ✔ Menjaga kualitas warna tetap maksimal.

              <br /><br />

              ✔ Mengurangi biaya perbaikan.

              <br /><br />

              ✔ Menjamin performa LED tetap stabil.

            </p>

          </div>

        </div>

      </section>

      {/* PROSES */}
      <section className="bg-[#182232] py-20">

        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-center text-4xl font-bold text-green-400">
            Proses Maintenance
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-4">

            <div className="rounded-2xl bg-[#101826] p-8 text-center">
              <div className="text-5xl">1️⃣</div>
              <h3 className="mt-5 text-xl font-bold">
                Survey
              </h3>
            </div>

            <div className="rounded-2xl bg-[#101826] p-8 text-center">
              <div className="text-5xl">2️⃣</div>
              <h3 className="mt-5 text-xl font-bold">
                Diagnosa
              </h3>
            </div>

            <div className="rounded-2xl bg-[#101826] p-8 text-center">
              <div className="text-5xl">3️⃣</div>
              <h3 className="mt-5 text-xl font-bold">
                Perbaikan
              </h3>
            </div>

            <div className="rounded-2xl bg-[#101826] p-8 text-center">
              <div className="text-5xl">4️⃣</div>
              <h3 className="mt-5 text-xl font-bold">
                Testing
              </h3>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-green-700 py-20">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2 className="text-4xl font-extrabold">
            Videotron Bermasalah?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-green-100">
            Hubungi teknisi OJIEID GROUP sekarang juga.
            Kami siap melayani maintenance seluruh Indonesia.
          </p>

          <a
            href="https://wa.me/6285231353155"
            className="mt-10 inline-block rounded-xl bg-white px-8 py-4 font-bold text-green-700 transition hover:scale-105"
          >
            💬 Chat Teknisi
          </a>

        </div>

      </section>

    </main>
  );
}