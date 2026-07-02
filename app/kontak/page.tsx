export default function KontakPage() {
  return (
    <main className="min-h-screen bg-gray-100 py-16 text-gray-800">
      <div className="mx-auto max-w-5xl px-6">

        <h1 className="mb-10 text-center text-4xl font-bold text-green-700">
          Hubungi Kami
        </h1>

        <div className="rounded-xl bg-white p-8 shadow-lg">

          <div className="space-y-4 text-lg text-black">

            <p className="font-medium">
              📍 Asembagus, Wringinanom, Situbondo, Jawa Timur
            </p>

            <p className="font-medium">
              📞 Admin : 0818436159
            </p>

            <p className="font-medium">
              📞 Marketing : 085204879946
            </p>

            <p className="font-medium">
              📞 Teknisi : 085231353155
            </p>

            <p className="font-medium">
              ✉️ Email : ojieid05@gmail.com
            </p>

          </div>

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="https://wa.me/6285231652754"
              className="rounded-lg bg-green-600 px-6 py-3 font-bold text-white"
            >
              WhatsApp Admin
            </a>

            <a
              href="mailto:ojieid05@gmail.com"
              className="rounded-lg bg-blue-600 px-6 py-3 font-bold text-white"
            >
              Kirim Email
            </a>

          </div>

        </div>
      </div>
    </main>
  );
}
