import Link from "next/link";

export default function GalleryPreview() {
  const items = [
    "Videotron Indoor",
    "Videotron Outdoor",
    "Running Text",
    "WiFi Internet",
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-4 text-center text-4xl font-bold text-green-700">
          Galeri Proyek
        </h2>

        <p className="mb-12 text-center text-gray-600">
          Dokumentasi beberapa pekerjaan OJIEID GROUP SEJAHTERA
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {items.map((item) => (
            <div
              key={item}
              className="overflow-hidden rounded-xl bg-gray-100 shadow-lg"
            >
              <div className="flex h-52 items-center justify-center bg-green-100 text-6xl">
                📸
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold text-green-700">
                  {item}
                </h3>

                <p className="mt-3 text-gray-600">
                  Foto proyek akan ditampilkan di sini.
                </p>
              </div>
            </div>
          ))}

        </div>

        <div className="mt-12 text-center">
          <Link
            href="/galeri"
            className="rounded-lg bg-green-700 px-8 py-3 font-bold text-white"
          >
            Lihat Semua Galeri
          </Link>
        </div>

      </div>
    </section>
  );
}
