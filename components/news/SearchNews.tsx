"use client";

import { Search } from "lucide-react";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchNews({
  value,
  onChange,
}: Props) {
  return (
    <div className="relative w-full lg:w-80">

      <Search
        size={18}
        className="absolute left-4 top-4 text-gray-400"
      />

      <input
        type="text"
        placeholder="Cari project..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          w-full
          rounded-xl
          border
          border-gray-700
          bg-[#1b2432]
          py-4
          pl-12
          pr-4
          text-white
          outline-none
          transition
          focus:border-green-500
        "
      />

    </div>
  );
}