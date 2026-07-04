import {
  MapPin,
  Phone,
  Mail,
  Wrench,
  MessageCircle,
  Send,
} from "lucide-react";

export default function KontakPage() {
  return (
    <main className="min-h-screen bg-gray-100 py-20">
      <div className="mx-auto max-w-6xl px-6">

        {/* Heading */}
        <div className="mb-14 text-center">

          <span className="rounded-full bg-green-100 px-5 py-2 font-semibold text-green-700">
            KONTAK OJIEID GROUP
          </span>

          <h1 className="mt-6 text-5xl font-black text-gray-900">
            Hubungi <span className="text-green-600">Kami</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
            Kami siap membantu kebutuhan Videotron, LED Display,
            Running Text, Networking dan Maintenance di seluruh Indonesia.
          </p>

        </div>

        {/* Card */}
        <div className="grid gap-8 rounded-3xl bg-white p-8 shadow-2xl lg:grid-cols-2">

          {/* Left */}
          <div className="space-y-7">

            <div className="flex items-start gap-4">
              <MapPin className="text-green-600" size={30} />
              <div>
                <h3 className="font-bold text-xl">Alamat</h3>
                <p className="text-gray-600">
                  Asembagus, Wringinanom,
                  Situbondo, Jawa Timur
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-green-600" size={30} />
              <div>
                <h3 className="font-bold text-xl">Admin</h3>
                <p className="text-gray-600">
                  085231353155
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-green-600" size={30} />
              <div>
                <h3 className="font-bold text-xl">Marketing</h3>
                <p className="text-gray-600">
                  0818436159
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Wrench className="text-green-600" size={30} />
              <div>
                <h3 className="font-bold text-xl">Teknisi</h3>
                <p className="text-gray-600">
                  085700839896
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-green-600" size={30} />
              <div>
                <h3 className="font-bold text-xl">Email</h3>
                <p className="text-gray-600">
                  ojieid05@gmail.com
                </p>
              </div>
            </div>

          </div>

          {/* Right */}
          <div className="rounded-3xl bg-gradient-to-br from-green-50 to-white p-8">

            <div className="mb-8 text-center">

              <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-green-100">

                <MessageCircle
                  size={46}
                  className="text-green-600"
                />

              </div>

              <h2 className="text-3xl font-bold">
                Butuh Bantuan Cepat?
              </h2>

              <p className="mt-3 text-gray-600">
                Tim OJIEID GROUP siap membantu Anda
                melalui WhatsApp maupun Email.
              </p>

            </div>

            <div className="space-y-4">

              <a
                href="https://wa.me/6285231353155"
                target="_blank"
                className="
                  flex
                  items-center
                  justify-center
                  gap-3
                  rounded-2xl
                  bg-green-600
                  px-6
                  py-5
                  text-lg
                  font-bold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-green-700
                  hover:shadow-xl
                "
              >
                <MessageCircle size={24} />
                Chat WhatsApp Admin
              </a>

              <a
                href="mailto:ojieid05@gmail.com"
                className="
                  flex
                  items-center
                  justify-center
                  gap-3
                  rounded-2xl
                  bg-blue-600
                  px-6
                  py-5
                  text-lg
                  font-bold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-blue-700
                  hover:shadow-xl
                "
              >
                <Send size={22} />
                Kirim Email
              </a>

            </div>

          </div>

        </div>

      </div>
    </main>
  );
}