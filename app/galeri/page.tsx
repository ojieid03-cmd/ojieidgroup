import Image from "next/image";

const galeri = [
  {
    title: "Proyek Videotron Indoor",
    image: "/galeri/project11.jpg",
  },
  {
    title: "Proyek Videotron Outdoor",
    image: "/galeri/project12.jpg",
  },
  {
    title: "Running Text",
    image: "/galeri/project13.jpg",
  },
  {
    title: "Digital Signage",
    image: "/galeri/project14.jpg",
  },
  {
    title: "Instalasi WiFi",
    image: "/galeri/project15.jpg",
  },
  {
    title: "Maintenance",
    image: "/galeri/project16.jpg",
  },
];

export default function GaleriPage() {
  return (
    <main className="min-h-screen bg-gray-100 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">

          <h1 className="text-5xl font-black text-green-700">
            GALERI PROYEK
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Dokumentasi pekerjaan OJIEID GROUP SEJAHTERA
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {galeri.map((item) => (

            <div
              key={item.title}
              className="
                group
                overflow-hidden
                rounded-3xl
                bg-white
                shadow-xl
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-2xl
              "
            >

              <div className="relative h-72 overflow-hidden">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

              </div>

              <div className="p-6">

                <h2 className="text-2xl font-bold text-green-700">
                  {item.title}
                </h2>

                <p className="mt-3 text-gray-600">
                  Dokumentasi pemasangan dan hasil pekerjaan
                  OJIEID GROUP SEJAHTERA.
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </main>
  );
}