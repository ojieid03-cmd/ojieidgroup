import Button from "@/components/ui/Button";

export default function HeroContent() {
  return (
    <div className="w-full max-w-[720px]">

      {/* Badge */}
      <div className="mb-5 sm:mb-7">
        <span className="inline-flex rounded-lg border border-green-500/50 bg-green-500/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[1px] text-green-400 backdrop-blur sm:px-5 sm:py-2 sm:text-sm sm:tracking-[2px]">
          Welcome To OJIEID GROUP SEJAHTERA
        </span>
      </div>

      {/* Heading */}
      <h1 className="leading-[1.05] lg:leading-[0.95]">

        <span className="block text-[34px] font-black text-white sm:text-[42px] lg:text-[60px] xl:text-[78px]">
          SMART LED DISPLAY &
        </span>

        <span className="block text-[34px] font-black text-green-500 sm:text-[42px] lg:text-[60px] xl:text-[78px]">
          DIGITAL TECHNOLOGY
        </span>

        <span className="block text-[34px] font-black text-white sm:text-[42px] lg:text-[60px] xl:text-[78px]">
          SOLUTIONS
        </span>

      </h1>

      {/* Description */}
      <p className="mt-6 max-w-[640px] text-[15px] leading-7 text-gray-200 sm:mt-8 sm:text-[18px] sm:leading-8 lg:text-[21px] lg:leading-9">
        Kami menyediakan produk berkualitas tinggi dan layanan profesional
        untuk kebutuhan{" "}
        <span className="font-semibold text-white">LED Display</span>,
        <span className="font-semibold text-white"> Internet</span>,
        <span className="font-semibold text-white"> Digital Signage</span>,
        <span className="font-semibold text-white"> Controller</span>,
        Instalasi, dan Maintenance di seluruh Indonesia.
      </p>

      {/* Button */}
      <div className="mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-5">

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