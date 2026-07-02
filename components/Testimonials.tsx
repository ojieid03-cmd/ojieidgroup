export default function Testimonials() {
  const testimonials = [
    {
      name: "PT Maju Bersama",
      job: "Instalasi Videotron",
      text: "Pelayanan sangat profesional, pemasangan rapi, dan hasil videotron sangat memuaskan.",
    },
    {
      name: "Masjid Al-Hikmah",
      job: "Running Text",
      text: "Proses pemasangan cepat dan tim sangat responsif ketika kami membutuhkan bantuan.",
    },
    {
      name: "CV Sukses Mandiri",
      job: "Jaringan WiFi",
      text: "Instalasi jaringan berjalan lancar. Koneksi stabil dan support teknis sangat baik.",
    },
  ];

  return (
    <section className="bg-gray-100 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="rounded-full bg-green-100 px-4 py-2 font-semibold text-green-700">
            Testimoni
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-gray-900">
            Apa Kata Pelanggan Kami
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Kepuasan pelanggan adalah prioritas utama OJIEID GROUP SEJAHTERA.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="mb-4 text-4xl">⭐⭐⭐⭐⭐</div>

              <p className="leading-7 text-gray-600">
                "{item.text}"
              </p>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-green-700">
                  {item.name}
                </h3>

                <p className="text-gray-500">
                  {item.job}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
