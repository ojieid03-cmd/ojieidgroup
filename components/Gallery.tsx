import Image from "next/image";

export default function Gallery() {
  const projects = [
    { title: "Videotron Indoor", image: "/gallery/project1.jpg" },
    { title: "Videotron Outdoor", image: "/gallery/project2.jpg" },
    { title: "Running Text", image: "/gallery/project3.jpg" },
    { title: "LED Display Event", image: "/gallery/project4.jpg" },
    { title: "WiFi & Networking", image: "/gallery/project5.jpg" },
    { title: "Maintenance", image: "/gallery/project6.jpg" },
  ];

  return (
    <section className="bg-white py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-4xl font-bold text-green-700">
          Galeri Project
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project) => (
            <div
              key={project.title}
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
                dark:bg-gray-800
              "
            >

              {/* IMAGE */}
              <div className="relative h-64 overflow-hidden">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
                  className="
                    object-cover
                    transition-all
                    duration-700
                    group-hover:scale-110
                  "
                />

                {/* Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-black/0
                    transition-all
                    duration-500
                    group-hover:bg-black/25
                  "
                />

              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold text-green-700">
                  {project.title}
                </h3>

                <p className="mt-3 text-gray-600 dark:text-gray-300">
                  Dokumentasi hasil pekerjaan OJIEID GROUP SEJAHTERA.
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}