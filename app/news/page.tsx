"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { news } from "@/lib/news";

import HeroNews from "@/components/news/HeroNews";
import Statistics from "@/components/news/Statistics";
import FilterNews from "@/components/news/FilterNews";
import SearchNews from "@/components/news/SearchNews";
import FadeUp from "@/components/Animation/FadeUp";
import ProjectTimeline from "@/components/news/ProjectTimeline";
import ProjectCoverage from "@/components/news/ProjectCoverage";

export default function NewsPage() {

  const [kategori, setKategori] = useState("Semua");
  const [keyword, setKeyword] = useState("");

  const filteredNews = useMemo(() => {
    return news.filter((item) => {

      const cocokKategori =
        kategori === "Semua" ||
        item.category === kategori;

      const cocokKeyword =
        item.title
          .toLowerCase()
          .includes(keyword.toLowerCase()) ||

        item.excerpt
          .toLowerCase()
          .includes(keyword.toLowerCase());

      return cocokKategori && cocokKeyword;

    });
  }, [kategori, keyword]);

  return (
    <main className="min-h-screen bg-[#101827] py-16">

      <div className="mx-auto max-w-7xl px-6">

        {/* HEADING */}

        <div className="mb-14 text-center">

          <span className="rounded-full bg-green-100 px-5 py-2 text-sm font-bold text-green-700">
            OJIEID GROUP
          </span>

          <h1 className="mt-5 text-5xl font-extrabold text-green-500">
            NEWS & PROJECTS
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-300">
            Dokumentasi pekerjaan terbaru kami mulai dari pemasangan
            Videotron, Running Text, Networking, WiFi, Installation,
            Maintenance hingga Digital Signage.
          </p>

        </div>

        {/* HERO */}

       <FadeUp>
  <HeroNews />
</FadeUp>
        {/* STATISTIK */}

        <FadeUp>
  <Statistics />
</FadeUp>

        {/* TITLE */}

        <div className="mt-20 mb-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <h2 className="text-3xl font-black text-white">

              Semua Project

            </h2>

            <p className="mt-2 text-gray-400">

              Dokumentasi seluruh pekerjaan OJIEID GROUP

            </p>

          </div>

          <SearchNews
            value={keyword}
            onChange={setKeyword}
          />

        </div>

        <FilterNews
          selected={kategori}
          onChange={setKategori}
        />

        {/* GRID */}

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                      {filteredNews
            .filter((item) => item.slug !== news[0].slug)
            .map((item) => (

              <FadeUp>

<Link
                key={item.slug}
                href={`/news/${item.slug}`}
                className="
                  group
                  overflow-hidden
                  rounded-3xl
                  bg-[#1b2432]
                  shadow-xl
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-green-900/40
                "
              >

                {/* FOTO */}

                <div className="relative h-60 overflow-hidden">

                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />

                  <div className="absolute left-4 top-4 rounded-full bg-green-600 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white">

                    {item.category}

                  </div>

                </div>

                {/* CONTENT */}

                <div className="p-7">

                  <span className="text-sm font-semibold text-green-500">
                    {item.date}
                  </span>

                  <h3 className="mt-3 text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-300">
                    {item.excerpt}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-5 text-sm text-gray-400">

                    <span>📍 {item.location}</span>

                    <span>⏱ {item.duration}</span>

                  </div>

                  <div className="mt-8">

                    <span className="inline-flex rounded-xl bg-green-600 px-6 py-3 font-bold text-white transition group-hover:bg-green-700">

                      Baca Selengkapnya →

                    </span>

                  </div>

                </div>

              </Link>
              </FadeUp>

            ))}

        </div>

        {/* CTA */}
        <ProjectTimeline />
        <ProjectCoverage />

        <FadeUp>

<section className="mt-24 overflow-hidden rounded-3xl bg-gradient-to-r from-green-700 to-green-600 p-12">

          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">

            <div>

              <h2 className="text-4xl font-black text-white">

                Butuh Konsultasi Project?

              </h2>

              <p className="mt-4 max-w-2xl text-lg leading-8 text-green-100">

                Tim OJIEID GROUP siap membantu kebutuhan
                Videotron, Running Text, Installation,
                Networking, WiFi Internet, Digital Signage
                maupun Maintenance.

              </p>

            </div>

            <div className="flex flex-wrap gap-4">

              <a
                href="https://wa.me/6285231353155"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-white px-8 py-4 font-bold text-green-700 transition hover:scale-105"
              >
                💬 WhatsApp Kami
              </a>

              

<FadeUp>

<Link
                href="/penawaran"
                className="rounded-xl border-2 border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-green-700"
              >
                📄 Request Penawaran
              </Link>
              </FadeUp>

            </div>

          </div>

        </section>
        </FadeUp>

      </div>

    </main>
  );
}