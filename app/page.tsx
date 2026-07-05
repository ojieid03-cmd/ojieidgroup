import Hero from "@/components/Hero";
import FeatureBar from "@/components/home/FeatureBar";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import MapLocation from "@/components/MapLocation";
import ContactForm from "@/components/ContactForm";
import DarkModeToggle from "@/components/DarkModeToggle";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";
import Testimonial from "@/components/home/Testimonial";
export default function Home() {
  return (
    <main className="bg-gray-100 transition-colors dark:bg-gray-900 dark:text-white">

      {/* HERO */}
      <Hero />

      {/* FEATURE BAR */}
      <FeatureBar />

      {/* SERVICES */}
      <section className="pt-10 pb-20">
        <Services />
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-20 dark:bg-gray-800">
        <WhyChooseUs />
      </section>

      {/* GALLERY */}
      <section className="py-20 dark:bg-gray-900">
        <Gallery />
      </section>

      {/* MAP */}
      <section className="bg-white py-20 dark:bg-gray-800">
        <MapLocation />
      </section>
<Testimonial />
      {/* CONTACT */}
      <section className="py-20 dark:bg-gray-900">
        <ContactForm />
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-green-700 to-green-600 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">

          <h2 className="text-4xl font-extrabold md:text-5xl">
            Siap Memulai Project Anda?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-green-100">
            Tim OJIEID GROUP siap membantu dalam hal Videotron,
            Running Text, LED Display, WiFi Network,
            Maintenance & Instalasi.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link
              href="/penawaran"
              className="rounded-xl bg-white px-8 py-4 font-bold text-green-700 transition hover:scale-105"
            >
              📄 Minta Penawaran
            </Link>
<Link
  href="/kalkulator-led"
  className="rounded-xl bg-yellow-400 px-8 py-4 font-bold text-black transition hover:scale-105"
>
  🧮 Kalkulator LED
</Link>
            <a
              href="https://wa.me/6285231353155"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border-2 border-white px-8 py-4 font-bold transition hover:bg-white hover:text-green-700"
            >
              💬 Chat WhatsApp
            </a>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 py-12 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">

          <h3 className="text-2xl font-bold">
            OJIEID GROUP
          </h3>

          <p className="mt-4 text-gray-400">
            Videotron • Running Text • LED Display • WiFi Networking
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/">Home</Link>
            <Link href="/produk">Produk</Link>
            <Link href="/galeri">Galeri</Link>
            <Link href="/kontak">Kontak</Link>
            <Link href="/penawaran">Penawaran</Link>
          </div>

          <p className="mt-8 text-xs text-gray-500">
            © {new Date().getFullYear()} OJIEID GROUP. All Rights Reserved.
          </p>

        </div>
      </footer>

      {/* FLOATING BUTTONS */}
      <DarkModeToggle />
      <WhatsAppButton />

    </main>
  );
}