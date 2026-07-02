import Counter from "@/components/Counter";

export default function WhyChooseUs() {
  return (
    <section className="bg-gradient-to-br from-green-700 to-green-900 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold">
            Mengapa Memilih Kami
          </span>

          <h2 className="mt-6 text-4xl font-extrabold md:text-5xl">
            Solusi Digital Terpercaya
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-green-100">
            OJIEID GROUP SEJAHTERA berkomitmen memberikan pelayanan terbaik,
            produk berkualitas, instalasi profesional, dan dukungan teknis
            yang cepat untuk setiap pelanggan.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-3xl bg-white/10 p-8 text-center backdrop-blur">
            <div className="text-5xl font-extrabold">
              <Counter end={100} suffix="+" />
            </div>

            <h3 className="mt-4 text-xl font-bold">
              Project
            </h3>

            <p className="mt-3 text-green-100">
              Berbagai proyek telah berhasil kami selesaikan.
            </p>
          </div>

          <div className="rounded-3xl bg-white/10 p-8 text-center backdrop-blur">
            <div className="text-5xl font-extrabold">
              <Counter end={250} suffix="+" />
            </div>

            <h3 className="mt-4 text-xl font-bold">
              Pelanggan
            </h3>

            <p className="mt-3 text-green-100">
              Dipercaya oleh pelanggan dari berbagai bidang usaha.
            </p>
          </div>

          <div className="rounded-3xl bg-white/10 p-8 text-center backdrop-blur">
            <div className="text-5xl font-extrabold">
              <Counter end={24} />
            </div>

            <h3 className="mt-4 text-xl font-bold">
              Jam Support
            </h3>

            <p className="mt-3 text-green-100">
              Siap membantu ketika dibutuhkan.
            </p>
          </div>

          <div className="rounded-3xl bg-white/10 p-8 text-center backdrop-blur">
            <div className="text-5xl font-extrabold">
              <Counter end={5} suffix="+" />
            </div>

            <h3 className="mt-4 text-xl font-bold">
              Tahun Pengalaman
            </h3>

            <p className="mt-3 text-green-100">
              Berpengalaman dalam instalasi dan maintenance.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
