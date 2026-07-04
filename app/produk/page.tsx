import Link from "next/link";

export default function ProdukPage() {
  const produk = [
    {
      nama: "Videotron Indoor",
      deskripsi:
        "Display LED berkualitas tinggi untuk ruang indoor seperti ruang meeting, ballroom, mall, showroom dan tempat ibadah.",
      icon: "📺",
      href: "/produk/videotron-indoor",
    },
    {
      nama: "Videotron Outdoor",
      deskripsi:
        "LED Display tahan cuaca dengan tingkat kecerahan tinggi untuk billboard, event, stadion dan area outdoor.",
      icon: "🌞",
      href: "/produk/videotron-outdoor",
    },
    {
      nama: "Running Text",
      deskripsi:
        "Display LED Running Text untuk masjid, toko, sekolah, instansi dan berbagai kebutuhan informasi.",
      icon: "📝",
      href: "/produk/running-text",
    },
    {
      nama: "Digital Signage",
      deskripsi:
        "Media promosi digital modern untuk perusahaan, hotel, rumah sakit dan pusat perbelanjaan.",
      icon: "🖥️",
      href: "/produk/digital-signage",
    },
    {
      nama: "WiFi Internet",
      deskripsi:
        "Instalasi jaringan internet profesional untuk rumah, kantor maupun perusahaan.",
      icon: "📡",
      href: "/services",
    },
    {
      nama: "Maintenance",
      deskripsi:
        "Perawatan, troubleshooting dan perbaikan Videotron oleh teknisi berpengalaman.",
      icon: "🛠️",
      href: "/services",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100 py-16 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-14 text-center">

          <span className="rounded-full bg-green-100 px-5 py-2 text-sm font-bold text-green-700">
            OJIEID GROUP
          </span>

          <h1 className="mt-5 text-4xl font-extrabold text-green-700 md:text-5xl">
            Produk & Layanan
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600 dark:text-gray-300">
            Kami menyediakan berbagai solusi Smart Digital Technology mulai
            dari Videotron, Running Text, Digital Signage, Networking hingga
            Maintenance profesional.
          </p>

        </div>

        {/* Grid */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {produk.map((item) => (

            <Link
              key={item.nama}
              href={item.href}
              className="
                group
                overflow-hidden
                rounded-2xl
                bg-white
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-3
                hover:shadow-2xl
                dark:bg-gray-800
              "
            >

              {/* Icon */}

              <div className="flex h-52 items-center justify-center bg-gradient-to-br from-green-100 to-green-50 text-7xl transition duration-300 group-hover:scale-105">

                {item.icon}

              </div>

              {/* Content */}

              <div className="p-7">

                <h2 className="text-2xl font-bold text-green-700">
                  {item.nama}
                </h2>

                <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
                  {item.deskripsi}
                </p>

                <div className="mt-8">

                  <span
                    className="
                      block
                      rounded-xl
                      bg-green-700
                      py-3
                      text-center
                      font-bold
                      text-white
                      transition
                      group-hover:bg-green-800
                    "
                  >
                    Lihat Detail →
                  </span>

                </div>

              </div>

            </Link>

          ))}

        </div>

        {/* CTA */}

        <div className="mt-20 rounded-3xl bg-gradient-to-r from-green-700 to-green-600 px-10 py-16 text-center text-white">

          <h2 className="text-4xl font-extrabold">
            Butuh Konsultasi?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-green-100">
            Tim OJIEID GROUP siap membantu menentukan produk yang paling sesuai
            dengan kebutuhan Anda.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link
              href="/penawaran"
              className="rounded-xl bg-white px-8 py-4 font-bold text-green-700 transition hover:scale-105"
            >
              📄 Minta Penawaran
            </Link>

            <a
              href="https://wa.me/6285231353155"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border-2 border-white px-8 py-4 font-bold transition hover:bg-white hover:text-green-700"
            >
              💬 WhatsApp Admin
            </a>

          </div>

        </div>

      </div>
    </main>
  );
}