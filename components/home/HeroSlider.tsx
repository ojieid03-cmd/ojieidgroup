
"use client";

import { useEffect, useState } from "react";

import { BASE_PATH } from "@/lib/basePath";

const slides = [
  `${BASE_PATH}/images/hero/hero-new1-v2.webp`,
  `${BASE_PATH}/images/hero/hero-new2-v2.webp`,
  `${BASE_PATH}/images/hero/hero-new3-v2.webp`,
  `${BASE_PATH}/images/hero/hero-new4-v2.webp`,
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Background */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-[1800ms] ${
            current === index
              ? "opacity-100 scale-110"
              : "opacity-0 scale-100"
          }`}
          style={{
            backgroundImage: `url(${slide})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/25" />

      {/* Prev */}
      

      {/* Next */}
      
      {/* Dot Indicator */}
      <div className="absolute bottom-11 left-1/2 z-40 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 rounded-full transition-all duration-500 ${
              current === index
                ? "w-12 bg-green-500"
                : "w-3 bg-white/70 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </>
  );
}