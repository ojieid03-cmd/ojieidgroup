"use client";

export default function WhatsAppButton() {
  const phone = "6285231353155";

  const message = encodeURIComponent(
    "Halo OJIEID GROUP SEJAHTERA, saya ingin bertanya mengenai layanan Videotron, Running Text, WiFi, dan Maintenance."
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-green-600 px-5 py-4 text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-green-700"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-3xl">
        💬
      </div>

      <div className="hidden sm:block">
        <p className="text-xs text-green-100">
          Hubungi Kami
        </p>

        <p className="text-lg font-bold">
          WhatsApp
        </p>
      </div>
    </a>
  );
}
