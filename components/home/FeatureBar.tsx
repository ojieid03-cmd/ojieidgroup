import Image from "next/image";

const features = [
  {
    icon: "/icons/shield.png",
    title: "KUALITAS TERJAMIN",
    desc: "Produk berkualitas tinggi\ndan bergaransi resmi",
  },
  {
    icon: "/icons/support.png",
    title: "SUPPORT 24 JAM",
    desc: "Tim kami siap membantu\nkapan pun Anda butuhkan",
  },
  {
    icon: "/icons/technician.png",
    title: "TEKNISI PROFESIONAL",
    desc: "Berpengalaman & bersertifikat\ndi bidangnya",
  },
  {
    icon: "/icons/handshake.png",
    title: "LAYANAN TERPERCAYA",
    desc: "Kepuasan pelanggan adalah\nprioritas utama kami",
  },
];

export default function FeatureBar() {
  return (
    <section className="relative z-40 -mt-8 w-full px-6 lg:px-8">
      <div
        className="
          overflow-hidden
          rounded-2xl
          border border-green-600/30
          bg-gradient-to-r
          from-[#041b0b]
          via-[#083614]
          to-[#041b0b]
          shadow-[0_18px_50px_rgba(0,0,0,.35)]
        "
      >
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">

          {features.map((item, index) => (

            <div
              key={index}
              className={`
                group
                flex
                items-center
                gap-3
                px-6
                py-5
                transition-all
                duration-300
                hover:bg-white/5
                ${
                  index !== features.length - 1
                    ? "border-b xl:border-b-0 xl:border-r border-green-700/40"
                    : ""
                }
              `}
            >

              <Image
                src={item.icon}
                alt={item.title}
                width={89}
                height={89}
                className="
                  shrink-0
                  transition-all
                  duration-300
                  group-hover:scale-110
                "
              />

              <div>

                <h3 className="text-base font-bold uppercase tracking-wide text-white">
                  {item.title}
                </h3>

                <p className="mt-1 whitespace-pre-line text-sm leading-5 text-green-100">
                  {item.desc}
                </p>

              </div>

            </div>

          ))}

        </div>
      </div>
    </section>
  );
}