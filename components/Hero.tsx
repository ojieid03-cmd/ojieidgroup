"use client";

import HeroSlider from "@/components/home/HeroSlider";
import HeroContent from "@/components/home/HeroContent";

export default function Hero() {
  return (
    <section className="relative h-[850px] overflow-hidden bg-black">

      {/* Background Slider */}
      <HeroSlider />

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/75 via-black/45 to-transparent" />

      {/* Hero Content */}
      <div className="relative z-20 h-full">

        <div className="flex h-full items-center">

          {/* LEFT CONTENT */}
          <div className="w-full lg:w-[45%] pl-6 sm:pl-10 md:pl-16 lg:pl-20 xl:pl-28">

            <HeroContent />

          </div>

          {/* RIGHT EMPTY */}
          <div className="hidden lg:block flex-1"></div>

        </div>

      </div>

    </section>
  );
}