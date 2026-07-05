"use client";

const kategori = [
  "Semua",
  "Videotron",
  "Running Text",
  "Digital Signage",
  "Installation",
  "Maintenance",
  "Networking",
  "WiFi",
];

type Props = {
  selected: string;
  onChange: (value: string) => void;
};

export default function FilterNews({
  selected,
  onChange,
}: Props) {
  return (
    <div className="flex flex-wrap gap-3">

      {kategori.map((item) => (

        <button
          key={item}
          onClick={() => onChange(item)}
          className={`rounded-full px-5 py-3 text-sm font-bold transition-all

          ${
            selected === item
              ? "bg-green-600 text-white"
              : "bg-[#1b2432] text-gray-300 hover:bg-green-600 hover:text-white"
          }`}
        >
          {item}
        </button>

      ))}

    </div>
  );
}