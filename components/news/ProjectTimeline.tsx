"use client";

import Link from "next/link";
import { news } from "@/lib/news";

export default function ProjectTimeline() {
  return (
    <section className="mt-24">

      <div className="mb-14 text-center">

        <span className="rounded-full bg-green-100 px-5 py-2 text-sm font-bold text-green-700">
          OJIEID GROUP
        </span>

        <h2 className="mt-5 text-4xl font-extrabold text-white">
          Timeline Project
        </h2>

        <p className="mt-3 text-gray-400">
          Riwayat project yang telah kami selesaikan.
        </p>

      </div>

      <div className="relative mx-auto max-w-4xl">

        {/* Garis Tengah */}

        <div className="absolute left-5 top-0 h-full w-1 rounded-full bg-green-600"></div>

        {news.map((item) => (

          <div
            key={item.slug}
            className="relative mb-14 pl-16"
          >

            {/* Titik */}

            <div className="absolute left-1 top-1 flex h-10 w-10 items-center justify-center rounded-full border-4 border-[#101827] bg-green-600 text-white">

              ✓

            </div>

            {/* Card */}

            <div className="rounded-3xl bg-[#1b2432] p-8 shadow-xl transition hover:-translate-y-1 hover:shadow-green-900/40">

              <div className="flex flex-wrap items-center gap-4">

                <span className="rounded-full bg-green-600 px-4 py-1 text-xs font-bold uppercase text-white">

                  {item.category}

                </span>

                <span className="text-sm text-gray-400">

                  {item.date}

                </span>

              </div>

              <h3 className="mt-5 text-2xl font-bold text-white">

                {item.title}

              </h3>

              <p className="mt-4 leading-7 text-gray-300">

                {item.excerpt}

              </p>

              <div className="mt-6 flex flex-wrap gap-6 text-sm text-gray-400">

                <span>📍 {item.location}</span>

                <span>⏱ {item.duration}</span>

                <span>👷 {item.team}</span>

              </div>

              <Link
                href={`/news/${item.slug}`}
                className="mt-8 inline-block rounded-xl bg-green-600 px-6 py-3 font-bold text-white transition hover:bg-green-700"
              >
                Detail Project →
              </Link>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}