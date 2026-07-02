export default function ProdukPage() {
  const produk = [
    {
      nama: "Videotron Indoor",
      deskripsi: "Display LED berkualitas tinggi untuk ruang indoor.",
    },
    {
      nama: "Videotron Outdoor",
      deskripsi: "Tahan cuaca dengan tingkat kecerahan tinggi.",
    },
    {
      nama: "Running Text",
      deskripsi: "Cocok untuk masjid, toko, sekolah dan instansi.",
    },
    {
      nama: "Digital Signage",
      deskripsi: "Media promosi digital yang modern.",
    },
    {
      nama: "WiFi Internet",
      deskripsi: "Instalasi jaringan internet rumah maupun perusahaan.",
    },
    {
      nama: "Maintenance",
      deskripsi: "Perawatan dan perbaikan videotron profesional.",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100 py-16">
      <div className="mx-auto max-w-7xl px-6">

        <h1 className="mb-4 text-center text-4xl font-bold text-green-700">
          Produk & Layanan
        </h1>

        <p className="mb-12 text-center text-gray-600">
          Solusi Digital Technology dari OJIEID GROUP SEJAHTERA
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {produk.map((item) => (
            <div
              key={item.nama}
              className="rounded-xl bg-white p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="mb-5 flex h-40 items-center justify-center rounded-lg bg-green-100 text-6xl">
                📺
              </div>

              <h2 className="text-2xl font-bold text-green-700">
                {item.nama}
              </h2>

              <p className="mt-4 text-gray-600">
                {item.deskripsi}
              </p>

              <button className="mt-6 w-full rounded-lg bg-green-700 py-3 font-bold text-white hover:bg-green-800">
                Minta Penawaran
              </button>

            </div>
          ))}

        </div>

      </div>
    </main>
  );
}
