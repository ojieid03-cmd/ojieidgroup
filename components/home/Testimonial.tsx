"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    name: "PT Maju Jaya",
    position: "Videotron Indoor",
    text:
      "Pelayanan sangat profesional, pemasangan cepat dan hasil videotron sangat memuaskan.",
  },
  {
    name: "Masjid Al-Hikmah",
    position: "Running Text",
    text:
      "Tim OJIEID GROUP sangat ramah dan hasil running text sangat bagus.",
  },
  {
    name: "CV Sumber Makmur",
    position: "Networking",
    text:
      "Instalasi jaringan kantor sangat rapi, internet menjadi lebih stabil.",
  },
];
export default function Testimonial() {
  return (
    <section className="py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-green-100 px-5 py-2 text-sm font-bold text-green-700">
            TESTIMONIAL
          </span>

          <h2 className="mt-5 text-4xl font-extrabold text-white">
            Apa Kata Klien Kami
          </h2>

          <p className="mt-4 text-gray-400">
            Kepuasan pelanggan adalah prioritas utama kami.
          </p>

        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {testimonials.map((item) => (

            <div
              key={item.name}
              className="
                rounded-3xl
                bg-[#1b2432]
                p-8
                transition
                hover:-translate-y-2
                hover:shadow-2xl
              "
            >

              <div className="mb-5 flex gap-1 text-yellow-400">

                <Star fill="currentColor" size={20}/>
                <Star fill="currentColor" size={20}/>
                <Star fill="currentColor" size={20}/>
                <Star fill="currentColor" size={20}/>
                <Star fill="currentColor" size={20}/>

              </div>

              <p className="leading-8 text-gray-300">
                "{item.text}"
              </p>

              <div className="mt-8">

                <h3 className="font-bold text-white">
                  {item.name}
                </h3>

                <p className="text-green-500">
                  {item.position}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}