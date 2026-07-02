import Image from "next/image";

export default function HeroBackground() {
  return (
    <>
      {/* Background Image */}
      <Image
        src="/images/hero-new.png"
        alt="OJIEID GROUP"
        fill
        priority
        className="object-cover object-center -z-30"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 -z-20 hero-overlay" />

      {/* Glow Effect */}
      <div className="absolute -left-40 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-green-500/20 blur-[140px]" />

      <div className="absolute bottom-0 right-0 -z-10 h-[450px] w-[450px] rounded-full bg-emerald-400/20 blur-[140px]" />

      {/* Bottom Fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white dark:from-[#08111D] to-transparent" />
    </>
  );
}