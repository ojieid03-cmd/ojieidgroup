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

Nama: ${name}
Layanan: ${service}
Pesan: ${message}
    `;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  };

  return (
    <section className="bg-gray-100 py-24">
      <div className="mx-auto max-w-3xl px-6">

        <div className="text-center">
          <span className="rounded-full bg-green-100 px-4 py-2 font-semibold text-green-700">
            Form Penawaran
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-gray-900">
            Minta Penawaran Sekarang
          </h2>

          <p className="mt-4 text-gray-600">
            Isi form di bawah ini, dan tim kami akan langsung menghubungi Anda via WhatsApp.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-12 space-y-6 rounded-3xl bg-white p-8 shadow-lg"
        >

          <div>
            <label className="text-sm font-semibold text-gray-700">
              Nama
            </label>

            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 w-full rounded-xl border p-4 outline-none focus:border-green-500"
              placeholder="Nama Anda"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-700">
              Layanan
            </label>

            <select
              required
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="mt-2 w-full rounded-xl border p-4 outline-none focus:border-green-500"
            >
              <option value="">Pilih Layanan</option>
              <option>Videotron</option>
              <option>Running Text</option>
              <option>WiFi & Networking</option>
              <option>Maintenance</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-700">
              Pesan
            </label>

            <textarea
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="mt-2 w-full rounded-xl border p-4 outline-none focus:border-green-500"
              placeholder="Jelaskan kebutuhan Anda..."
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-green-700 py-4 font-bold text-white transition hover:scale-105 hover:bg-green-800"
          >
            Kirim ke WhatsApp 💬
          </button>

        </form>

      </div>
    </section>
  );
}
