import Button from "@/components/ui/Button";

export default function HeroContent() {
  return (
    <div className="w-full max-w-[720px]">

      {/* Badge */}
      <div className="mb-7">
        <span className="inline-flex rounded-lg border border-green-500/50 bg-green-500/10 px-5 py-2 text-sm font-bold uppercase tracking-[2px] text-green-400 backdrop-blur">
          Welcome To OJIEID GROUP SEJAHTERA
        </span>
      </div>

      {/* Heading */}
      <h1 className="leading-[0.95]">

        <span className="block text-[60px] font-black text-white xl:text-[78px]">
          SMART LED DISPLAY &
        </span>

        <span className="block text-[60px] font-black text-green-500 xl:text-[78px]">
          DIGITAL TECHNOLOGY
        </span>

        <span className="block text-[60px] font-black text-white xl:text-[78px]">
          SOLUTIONS
        </span>

      </h1>

      {/* Description */}
      <p className="mt-8 max-w-[640px] text-[21px] leading-9 text-gray-200">
        Kami menyediakan produk berkualitas tinggi dan layanan profesional
        untuk kebutuhan <span className="font-semibold text-white">LED Display</span>,
        <span className="font-semibold text-white"> Internet</span>,
        <span className="font-semibold text-white"> Digital Signage</span>,
        <span className="font-semibold text-white"> Controller</span>,
        Instalasi, dan Maintenance di seluruh Indonesia.
      </p>

      {/* Button */}
      <div className="mt-10 flex flex-wrap gap-5">

        <Button href="/produk">
          📺 LIHAT PRODUK
        </Button>

        <Button href="/kontak" variant="outline">
          💬 HUBUNGI KAMI
        </Button>

      </div>

    </div>
  );
}