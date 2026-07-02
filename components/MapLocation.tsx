export default function MapLocation() {
  const lat = -7.7486505;
  const lng = 114.2342188;

  const googleMapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;

  return (
    <section className="bg-white py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="rounded-full bg-green-100 px-4 py-2 font-semibold text-green-700">
            Lokasi Kami
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-gray-900 dark:text-white">
            Kantor OJIEID GROUP SEJAHTERA
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-300">
            Kami siap melayani Anda langsung di lokasi atau via online.
          </p>
        </div>

        {/* MAP EMBED */}
        <div className="mt-12 overflow-hidden rounded-3xl shadow-lg">
          <iframe
            src={`https://www.google.com/maps?q=${lat},${lng}&output=embed`}
            width="100%"
            height="450"
            loading="lazy"
            className="border-0"
          />
        </div>

        {/* BUTTON OPEN MAP */}
        <div className="mt-8 text-center">
          <a
            href={googleMapsUrl}
            target="_blank"
            className="inline-block rounded-xl bg-green-700 px-6 py-3 font-bold text-white transition hover:scale-105"
          >
            📍 Buka di Google Maps
          </a>
        </div>

        {/* COORDINATE INFO */}
        <div className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
          Koordinat: {lat}, {lng}
        </div>

      </div>
    </section>
  );
}
