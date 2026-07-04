import {
  Building2,
  Target,
  Eye,
  CheckCircle2,
} from "lucide-react";

export default function TentangPage() {
  return (
    <main className="min-h-screen bg-gray-100 py-20">
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}

        <div className="mb-14 text-center">

          <span className="rounded-full bg-green-100 px-5 py-2 font-semibold text-green-700">
            TENTANG OJIEID GROUP
          </span>

          <h1 className="mt-6 text-5xl font-black text-gray-900">
            OJIEID GROUP{" "}
            <span className="text-green-600">
              SEJAHTERA
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">
            Smart Digital Technology Solution untuk Videotron,
            LED Display, Running Text, Networking,
            Digital Signage, Maintenance serta berbagai
            kebutuhan teknologi digital di Indonesia.
          </p>

        </div>

        {/* Company */}

        <div className="grid gap-8 lg:grid-cols-2">

          <div className="rounded-3xl bg-white p-8 shadow-xl">

            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100">

              <Building2
                size={34}
                className="text-green-600"
              />

            </div>

            <h2 className="text-3xl font-bold text-gray-900">
              Siapa Kami?
            </h2>

            <p className="mt-6 leading-9 text-gray-600">

              OJIEID GROUP SEJAHTERA merupakan perusahaan
              yang bergerak di bidang teknologi digital,
              menyediakan solusi Videotron, LED Display,
              Running Text, Digital Signage, WiFi Internet,
              instalasi, maintenance hingga Technical
              Support profesional.

            </p>

            <p className="mt-5 leading-9 text-gray-600">

              Kami melayani perusahaan, instansi pemerintah,
              sekolah, rumah ibadah, UMKM hingga berbagai
              kebutuhan industri di seluruh Indonesia.

            </p>

          </div>

          <div className="rounded-3xl bg-gradient-to-br from-green-600 to-green-800 p-10 text-white shadow-xl">

            <h2 className="text-3xl font-bold">
              Kenapa Memilih Kami?
            </h2>

            <div className="mt-8 space-y-5">

              <div className="flex gap-3">
                <CheckCircle2 />
                Produk berkualitas tinggi
              </div>

              <div className="flex gap-3">
                <CheckCircle2 />
                Tim teknisi profesional
              </div>

              <div className="flex gap-3">
                <CheckCircle2 />
                Garansi & after sales
              </div>

              <div className="flex gap-3">
                <CheckCircle2 />
                Support seluruh Indonesia
              </div>

              <div className="flex gap-3">
                <CheckCircle2 />
                Respon cepat melalui WhatsApp
              </div>

            </div>

          </div>

        </div>

        {/* Vision Mission */}

        <div className="mt-10 grid gap-8 lg:grid-cols-2">

          <div className="rounded-3xl bg-white p-8 shadow-xl">

            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100">

              <Eye
                size={34}
                className="text-green-600"
              />

            </div>

            <h2 className="text-3xl font-bold">
              Visi
            </h2>

            <p className="mt-6 leading-9 text-gray-600">

              Menjadi perusahaan teknologi digital terpercaya
              di Indonesia yang mampu memberikan solusi terbaik,
              produk berkualitas tinggi serta pelayanan yang
              profesional kepada seluruh pelanggan.

            </p>

          </div>

          <div className="rounded-3xl bg-white p-8 shadow-xl">

            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100">

              <Target
                size={34}
                className="text-green-600"
              />

            </div>

            <h2 className="text-3xl font-bold">
              Misi
            </h2>

            <ul className="mt-6 space-y-4 text-gray-600">

              <li>✅ Menyediakan produk LED Display berkualitas.</li>

              <li>✅ Memberikan pelayanan terbaik kepada pelanggan.</li>

              <li>✅ Mengembangkan solusi teknologi digital inovatif.</li>

              <li>✅ Menjalin kerja sama jangka panjang.</li>

              <li>✅ Menjadi partner teknologi terpercaya.</li>

            </ul>

          </div>

        </div>

      </div>
    </main>
  );
}