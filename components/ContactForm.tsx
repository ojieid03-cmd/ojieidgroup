"use client";

import { useState } from "react";

export default function ContactForm() {
  const phone = "6285231353155";

  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `
Halo OJIEID GROUP SEJAHTERA 👋

Nama : ${name}
Layanan : ${service}

Pesan :
${message}
    `;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  };

  return (
    <section className="bg-gray-100 py-24">
      <div className="mx-auto max-w-3xl px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="rounded-full bg-green-100 px-5 py-2 font-semibold text-green-700">
            Form Penawaran
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-gray-900">
            Minta Penawaran Sekarang
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Isi formulir berikut dan tim OJIEID GROUP akan segera
            menghubungi Anda melalui WhatsApp.
          </p>

        </div>

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="
            mt-12
            space-y-6
            rounded-3xl
            border
            border-gray-200
            bg-white
            p-8
            shadow-xl
          "
        >

          {/* Nama */}

          <div>

            <label className="text-sm font-semibold text-gray-700">
              Nama Lengkap
            </label>

            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Masukkan nama lengkap"
              className="
                mt-2
                w-full
                rounded-xl
                border
                border-gray-300
                bg-white
                px-4
                py-4
                text-gray-800
                transition-all
                duration-300
                outline-none
                focus:border-green-600
                focus:ring-4
                focus:ring-green-100
              "
            />

          </div>

          {/* Layanan */}

          <div>

            <label className="text-sm font-semibold text-gray-700">
              Pilih Layanan
            </label>

            <select
              required
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="
                mt-2
                w-full
                rounded-xl
                border
                border-gray-300
                bg-white
                px-4
                py-4
                text-gray-800
                transition-all
                duration-300
                outline-none
                focus:border-green-600
                focus:ring-4
                focus:ring-green-100
              "
            >
              <option value="">Pilih Layanan</option>

              <option>Videotron Indoor</option>
              <option>Videotron Outdoor</option>
              <option>LED Display Event</option>
              <option>Digital Signage</option>
              <option>Running Text</option>
              <option>Video Wall</option>
              <option>Controller LED</option>
              <option>Instalasi</option>
              <option>Maintenance</option>
              <option>WiFi & Networking</option>
              <option>Konsultasi</option>
              <option>Lainnya</option>

            </select>

          </div>

          {/* Pesan */}

          <div>

            <label className="text-sm font-semibold text-gray-700">
              Pesan
            </label>

            <textarea
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tuliskan kebutuhan atau proyek yang ingin Anda konsultasikan..."
              className="
                mt-2
                w-full
                resize-none
                rounded-xl
                border
                border-gray-300
                bg-white
                px-4
                py-4
                text-gray-800
                transition-all
                duration-300
                outline-none
                focus:border-green-600
                focus:ring-4
                focus:ring-green-100
              "
            />

          </div>

          {/* Button */}

          <button
            type="submit"
            className="
              w-full
              rounded-xl
              bg-gradient-to-r
              from-green-600
              to-green-700
              py-4
              text-lg
              font-bold
              text-white
              shadow-lg
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-2xl
            "
          >
            Kirim ke WhatsApp 💬
          </button>

        </form>

      </div>
    </section>
  );
}