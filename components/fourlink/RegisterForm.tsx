export default function RegisterForm() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-10">
          Daftar Berlangganan
        </h2>

        <form className="space-y-5">

          <input
            type="text"
            placeholder="Nama Lengkap"
            className="w-full border rounded-xl p-4"
          />

          <input
            type="text"
            placeholder="Nomor WhatsApp"
            className="w-full border rounded-xl p-4"
          />

          <textarea
            placeholder="Alamat Lengkap"
            rows={4}
            className="w-full border rounded-xl p-4"
          />

          <select className="w-full border rounded-xl p-4">
            <option>Pilih Paket Internet</option>
            <option>Basic - 10 Mbps</option>
            <option>Silver - 20 Mbps</option>
            <option>Gold - 30 Mbps</option>
            <option>Platinum - 50 Mbps</option>
          </select>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700"
          >
            Kirim Pendaftaran
          </button>

        </form>

      </div>
    </section>
  );
}