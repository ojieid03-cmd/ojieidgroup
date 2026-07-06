export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-700 to-cyan-500 text-white">
      <div className="max-w-7xl mx-auto px-6 py-24">

        <h1 className="text-5xl font-bold mb-6">
          4LINK INTERNET
        </h1>

        <p className="text-xl max-w-2xl mb-8">
          Internet Fiber Optik Cepat, Stabil, Unlimited untuk Rumah,
          Kantor, Sekolah dan Pesantren.
        </p>

        <div className="flex gap-4 flex-wrap">
          <button className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold">
            Cek Paket
          </button>

          <button className="border border-white px-6 py-3 rounded-xl">
            Daftar Sekarang
          </button>
        </div>

      </div>
    </section>
  );
}