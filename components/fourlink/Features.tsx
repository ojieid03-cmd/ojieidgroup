export default function Features() {
  const features = [
    {
      title: "Fiber Optik",
      desc: "Koneksi cepat dan stabil dengan jaringan fiber optik.",
      icon: "⚡",
    },
    {
      title: "Unlimited",
      desc: "Internet tanpa batas kuota untuk kebutuhan harian.",
      icon: "🌐",
    },
    {
      title: "Support 24/7",
      desc: "Tim teknisi siap membantu kapan saja.",
      icon: "🛠️",
    },
    {
      title: "Pembayaran Mudah",
      desc: "Bayar melalui QRIS, transfer bank, atau e-wallet.",
      icon: "💳",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Kenapa Memilih 4LINK?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}