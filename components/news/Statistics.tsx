"use client";

import {
  BriefcaseBusiness,
  Users,
  Building2,
  Star,
} from "lucide-react";

const stats = [
  {
    icon: BriefcaseBusiness,
    value: "120+",
    title: "Project Selesai",
  },
  {
    icon: Users,
    value: "35+",
    title: "Klien Puas",
  },
  {
    icon: Building2,
    value: "7+",
    title: "Kota di Indonesia",
  },
  {
    icon: Star,
    value: "99%",
    title: "Kepuasan Klien",
  },
];

export default function Statistics() {
  return (
    <section className="mb-16">

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

        {stats.map((item, index) => {

          const Icon = item.icon;

          return (

            <div
              key={index}
              className="
                rounded-2xl
                border
                border-gray-700
                bg-[#1b2432]
                p-8
                shadow-lg
                transition
                duration-300
                hover:-translate-y-2
                hover:border-green-500
              "
            >

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-600/20 text-green-500">

                <Icon size={34} />

              </div>

              <h2 className="text-5xl font-black text-white">
                {item.value}
              </h2>

              <p className="mt-2 text-gray-300">
                {item.title}
              </p>

            </div>

          );

        })}

      </div>

    </section>
  );
}