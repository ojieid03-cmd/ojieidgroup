import Image from "next/image";
import Link from "next/link";
import { news } from "@/lib/news";

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-gray-100 py-16 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">

          <span className="rounded-full bg-green-100 px-5 py-2 text-sm font-bold text-green-700">
            OJIEID GROUP
          </span>

          <h1 className="mt-5 text-5xl font-extrabold text-green-700">
            News & Project
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600 dark:text-gray-300">
            Berita terbaru, dokumentasi pemasangan, maintenance,
            instalasi jaringan serta berbagai project yang telah
            dikerjakan oleh OJIEID GROUP.
          </p>

        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {news.map((item) => (

            <Link
              key={item.slug}
              href={`/news/${item.slug}`}
              className="group overflow-hidden rounded-3xl bg-white shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl dark:bg-gray-800"
            >

              <div className="relative h-60 overflow-hidden">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

              </div>

              <div className="p-6">

                <span className="text-sm font-semibold text-green-600">
                  {item.date}
                </span>

                <h2 className="mt-3 text-2xl font-bold text-green-700">
                  {item.title}
                </h2>

                <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
                  {item.excerpt}
                </p>

                <div className="mt-8">

                  <span className="inline-flex rounded-xl bg-green-700 px-6 py-3 font-bold text-white transition group-hover:bg-green-800">
                    Baca Selengkapnya →
                  </span>

                </div>

              </div>

            </Link>

          ))}

        </div>

      </div>
    </main>
  );
}