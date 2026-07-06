export default function Coverage() {
  const areas = [
    "Situbondo",
    "Asembagus",
    "Banyuputih",
    "Banyuglugur",
    "Besuki",
    "Panarukan",
    "Kapongan",
    "Suboh",
  ];

  return (
    <section className="py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Area Layanan
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {areas.map((area, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-5 text-center font-semibold hover:shadow-xl transition"
            >
              📍 {area}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}