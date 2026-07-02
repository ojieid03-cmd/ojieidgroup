export default function GaleriPage() {
  const galeri = [
    "Proyek Videotron Indoor",
    "Proyek Videotron Outdoor",
    "Running Text",
    "Digital Signage",
    "Instalasi WiFi",
    "Maintenance",
  ];

  return (
    <main className="min-h-screen bg-gray-100 py-16">
      <div className="mx-auto max-w-7xl px-6">

        <h1 className="mb-4 text-center text-4xl font-bold text-green-700">
          Galeri Proyek
        </h1>

        <p className="mb-12 text-center text-gray-600">
          Beberapa dokumentasi pekerjaan OJIEID GROUP SEJAHTERA
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {galeri.map((item) => (
            <div
              key={item}
              className="overflow-hidden rounded-xl bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="flex h-56 items-center justify-center bg-green-100 text-7xl">
                🖼️
              </div>

              <div className="p-6">
                <h2 className="text-xl font-bold text-green-700">
                  {item}
                </h2>

                <p className="mt-3 text-gray-600">
                  Foto proyek akan ditampilkan di sini.
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </main>
  );
}
