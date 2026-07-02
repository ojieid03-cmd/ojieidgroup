export default function Clients() {
  const clients = [
    "PERTAMINA",
    "PLN",
    "TELKOM",
    "BANK BRI",
    "BANK BNI",
    "PEMERINTAH",
    "SEKOLAH",
    "MASJID",
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="rounded-full bg-green-100 px-4 py-2 font-semibold text-green-700">
            Dipercaya Oleh
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-gray-900">
            Client & Partner
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Kami siap melayani perusahaan, instansi pemerintah,
            sekolah, rumah ibadah, UMKM, dan berbagai sektor lainnya.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">

          {clients.map((client) => (
            <div
              key={client}
              className="flex h-28 items-center justify-center rounded-2xl border bg-gray-50 text-center text-lg font-bold text-gray-700 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              {client}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
