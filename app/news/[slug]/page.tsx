import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { news } from "@/lib/news";

export function generateStaticParams() {
  return news.map((item) => ({
    slug: item.slug,
  }));
}

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function NewsDetail({ params }: Props) {
  const { slug } = await params;

  const article = news.find((item) => item.slug === slug);

  if (!article) return notFound();

  return (
    <main className="min-h-screen bg-gray-100 py-16 dark:bg-gray-900">
      <div className="mx-auto max-w-5xl px-6">

        <Link
          href="/news"
          className="font-semibold text-green-700"
        >
          ← Kembali ke News
        </Link>

        <div className="mt-8 overflow-hidden rounded-3xl bg-white shadow-xl dark:bg-gray-800">

          <div className="relative h-[420px]">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="p-10">

            <span className="font-semibold text-green-600">
              {article.date}
            </span>

            <h1 className="mt-4 text-5xl font-extrabold text-green-700">
              {article.title}
            </h1>

            <div className="mt-10 space-y-6 text-lg leading-9 text-gray-700 dark:text-gray-300">
              {article.content
                .trim()
                .split("\n")
                .map((text, index) => (
                  <p key={index}>{text}</p>
                ))}
            </div>

            {/* PROJECT INFO */}

            <div className="mt-12 rounded-2xl bg-green-50 p-8">

              <h2 className="text-2xl font-bold text-green-700">
                Project Information
              </h2>

              <div className="mt-6 grid gap-6 md:grid-cols-2">

                <div>
                  <p className="font-bold">📍 Lokasi</p>
                  <p>{article.location}</p>
                </div>

                <div>
                  <p className="font-bold">📺 Kategori</p>
                  <p>{article.category}</p>
                </div>

                <div>
                  <p className="font-bold">⏱ Durasi</p>
                  <p>{article.duration}</p>
                </div>

                <div>
                  <p className="font-bold">👷 Tim</p>
                  <p>{article.team}</p>
                </div>

              </div>

            </div>

            {/* GALLERY */}

            <h2 className="mt-16 text-3xl font-bold text-green-700">
              Galeri Project
            </h2>

            <div className="mt-8 grid gap-5 md:grid-cols-2">

              {article.gallery.map((img) => (

                <div
                  key={img}
                  className="relative h-72 overflow-hidden rounded-2xl"
                >

                  <Image
                    src={img}
                    alt={article.title}
                    fill
                    className="object-cover transition duration-300 hover:scale-110"
                  />

                </div>

              ))}

            </div>

            {/* CTA */}

            <div className="mt-12 rounded-2xl bg-green-50 p-8">

              <h3 className="text-2xl font-bold text-green-700">
                Butuh Konsultasi?
              </h3>

              <p className="mt-3 text-gray-700">
                Tim OJIEID GROUP siap membantu kebutuhan Videotron,
                Running Text, Digital Signage, Networking,
                Maintenance maupun Instalasi.
              </p>

              <a
                href="https://wa.me/6285231353155"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block rounded-xl bg-green-700 px-8 py-4 font-bold text-white transition hover:bg-green-800"
              >
                💬 Hubungi Kami
              </a>

            </div>

          </div>

        </div>

      </div>
    </main>
  );
}