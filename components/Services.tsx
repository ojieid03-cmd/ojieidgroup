export default function Services() {
  const services = [
    {
      icon: "📺",
      title: "Videotron",
      description:
        "Penyediaan Videotron Indoor & Outdoor untuk kebutuhan bisnis, event, sekolah, pemerintahan dan tempat ibadah.",
    },
    {
      icon: "📟",
      title: "Running Text",
      description:
        "Display LED Running Text untuk masjid, toko, instansi, kantor, rumah sakit dan berbagai kebutuhan informasi.",
    },
    {
      icon: "🌐",
      title: "WiFi & Networking",
      description:
        "Instalasi jaringan internet, access point, router, mikrotik dan infrastruktur jaringan profesional.",
    },
    {
      icon: "🛠️",
      title: "Maintenance",
      description:
        "Perawatan, perbaikan, troubleshooting serta penggantian modul dan sparepart Videotron.",
    },
    {
      icon: "🎛️",
      title: "Controller System",
      description:
        "Konfigurasi NovaStar, Colorlight, Huidu, Linsn dan berbagai controller LED Display lainnya.",
    },
    {
      icon: "💡",
      title: "Konsultasi",
      description:
        "Konsultasi gratis sebelum pembelian agar mendapatkan solusi yang paling sesuai dengan kebutuhan Anda.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="rounded-full bg-green-100 px-4 py-2 font-semibold text-green-700">
            Layanan Profesional
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-gray-900 md:text-5xl">
            Layanan Kami
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            OJIEID GROUP SEJAHTERA menyediakan berbagai solusi teknologi
            digital mulai dari Videotron, Running Text, WiFi, Maintenance
            hingga Technical Support untuk kebutuhan perusahaan,
            instansi pemerintah maupun UMKM.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-green-600 hover:shadow-2xl"
            >
              <div className="text-6xl">
                {service.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-green-700">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {service.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
