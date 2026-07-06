export default function Packages() {
  const packages = [
    {
      name: "Basic",
      speed: "10 Mbps",
      price: "Rp100.000",
      color: "border-green-500",
    },
    {
      name: "Silver",
      speed: "20 Mbps",
      price: "Rp150.000",
      color: "border-blue-500",
    },
    {
      name: "Gold",
      speed: "30 Mbps",
      price: "Rp200.000",
      color: "border-yellow-500",
    },
    {
      name: "Platinum",
      speed: "50 Mbps",
      price: "Rp300.000",
      color: "border-purple-500",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Paket Internet
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`border-2 ${pkg.color} rounded-2xl p-8 shadow-lg hover:scale-105 transition`}
            >
              <h3 className="text-2xl font-bold mb-3">{pkg.name}</h3>

              <p className="text-4xl font-bold text-blue-600 mb-4">
                {pkg.speed}
              </p>

              <p className="text-2xl font-semibold mb-6">
                {pkg.price}/bulan
              </p>

              <ul className="space-y-2 mb-8">
                <li>✅ Unlimited</li>
                <li>✅ Fiber Optik</li>
                <li>✅ Support 24 Jam</li>
                <li>✅ Tanpa FUP</li>
              </ul>

              <button className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700">
                Berlangganan
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
