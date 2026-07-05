"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { news } from "@/lib/news";

export default function HeroNews() {
  const [current, setCurrent] = useState(0);

useEffect(() => {

  const timer = setInterval(() => {

    setCurrent((prev) =>
      prev === news.length - 1 ? 0 : prev + 1
    );

  }, 5000);

  return () => clearInterval(timer);

}, []);

const latest = news[current];

  return (
    <section className="mb-16">

      <div className="overflow-hidden rounded-3xl bg-[#1b2432] shadow-2xl">
<div className="absolute right-8 top-8 z-20 flex gap-3">

<button
onClick={()=>
setCurrent(current===0?news.length-1:current-1)
}
className="
h-12
w-12
rounded-full
bg-black/50
text-white
transition
hover:bg-green-600
"
>

←

</button>

<button
onClick={()=>
setCurrent(
current===news.length-1?0:current+1
)
}
className="
h-12
w-12
rounded-full
bg-black/50
text-white
transition
hover:bg-green-600
"
>

→

</button>
<div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">

{news.map((_,index)=>(

<button

key={index}

onClick={()=>setCurrent(index)}

className={`
h-3
w-3
rounded-full
transition-all

${
current===index
?"bg-green-500 w-8"
:"bg-white/50"
}

`}

/>

))}

</div>
</div>
        <div className="grid lg:grid-cols-2">

          {/* FOTO */}

          <div className="relative h-[520px]">

            <Image
              src={latest.image}
              alt={latest.title}
              fill
              priority
              className="object-cover"
            />

          </div>

          {/* CONTENT */}

          <div className="flex flex-col justify-center p-10">

            <span className="inline-block w-fit rounded-full bg-green-600 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white">
              PROJECT TERBARU
            </span>

            <h2 className="mt-6 text-5xl font-extrabold leading-tight text-white">
              {latest.title}
            </h2>

            <div className="mt-6 flex flex-wrap gap-6 text-green-400">

              <span>📅 {latest.date}</span>

              <span>📍 {latest.location}</span>

              <span>⏱ {latest.duration}</span>

            </div>

            <p className="mt-8 text-lg leading-8 text-gray-300">
              {latest.excerpt}
            </p>

            <Link
              href={`/news/${latest.slug}`}
              className="mt-10 w-fit rounded-xl bg-green-600 px-8 py-4 font-bold text-white transition hover:bg-green-700"
            >
              Baca Selengkapnya →
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}