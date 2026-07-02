export default function About() {
  return (
    <section className="bg-white py-24 dark:bg-gray-900 dark:text-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-12 md:grid-cols-2">

          {/* TEXT */}
          <div>
            <h2 className="text-4xl font-extrabold text-green-700">
              Tentang Kami
            </h2>

            <p className="mt-6 text-gray-600 dark:text-gray-300 leading-7">
              OJIEID GROUP SEJAHTERA adalah perusahaan yang bergerak di bidang
              videotron, LED display, running text, instalasi jaringan WiFi,
              serta maintenance sistem digital.
              Kami berfokus pada kualitas, kecepatan, dan kepuasan pelanggan.
            </p>

            <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7">
              Dengan pengalaman di berbagai project instansi, toko, masjid,
              dan perusahaan, kami siap memberikan solusi teknologi terbaik
              untuk kebutuhan digital Anda.
            </p>

            <div className="mt-8 flex gap-4">
              <div className="rounded-xl bg-green-100 px-4 py-3 text-green-700 font-bold">
                Profesional
              </div>

              <div className="rounded-xl bg-green-100 px-4 py-3 text-green-700 font-bold">
                Berpengalaman
              </div>

              <div className="rounded-xl bg-green-100 px-4 py-3 text-green-700 font-bold">
                Terpercaya
              </div>
            </div>
          </div>

          {/* IMAGE BOX (placeholder dulu) */}
          <div className="relative h-[400px] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-green-600 to-green-400 shadow-xl">
            <div className="flex h-full items-center justify-center text-2xl font-bold text-white">
              PROJECT DISPLAY IMAGE
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
