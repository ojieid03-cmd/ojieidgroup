export default function PenawaranPage() {
  return (
    <main className="min-h-screen bg-gray-100 py-16">
      <div className="mx-auto max-w-3xl rounded-xl bg-white p-8 shadow-lg">

        <h1 className="mb-8 text-center text-4xl font-bold text-green-700">
          Request Penawaran
        </h1>

        <p className="mb-8 text-center text-gray-600">
          Silakan isi formulir di bawah ini. Tim OJIEID GROUP SEJAHTERA akan segera menghubungi Anda.
        </p>

        <form className="space-y-5 text-black">

          <input
            type="text"
            placeholder="Nama Lengkap"
            className="w-full rounded-lg border border-gray-300 p-3 text-black placeholder:text-gray-500"
          />

          <input
            type="tel"
            placeholder="Nomor WhatsApp"
            className="w-full rounded-lg border border-gray-300 p-3 text-black placeholder:text-gray-500"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-lg border border-gray-300 p-3 text-black placeholder:text-gray-500"
          />

          <select
            className="w-full rounded-lg border border-gray-300 p-3 text-black"
          >
            <option>Videotron Indoor</option>
            <option>Videotron Outdoor</option>
            <option>Running Text</option>
            <option>Digital Signage</option>
            <option>WiFi Internet</option>
          </select>

          <textarea
            rows={6}
            placeholder="Jelaskan kebutuhan Anda..."
            className="w-full rounded-lg border border-gray-300 p-3 text-black placeholder:text-gray-500"
          ></textarea>

          <button
            type="submit"
            className="w-full rounded-lg bg-green-700 py-3 font-bold text-white transition hover:bg-green-800"
          >
            Kirim Permintaan
          </button>

        </form>

      </div>
    </main>
  );
}
