import {
  MapPin,
  Building2,
  CheckCircle,
} from "lucide-react";

export default function ProjectCoverage() {
  return (
    <section className="mt-28">

      <div className="text-center">

        <span className="rounded-full bg-green-100 px-5 py-2 text-sm font-bold text-green-700">
          OJIEID GROUP
        </span>

        <h2 className="mt-5 text-4xl font-extrabold text-white">

          Project Coverage

        </h2>

        <p className="mt-4 text-gray-400">

          Area pelayanan dan project yang telah kami kerjakan.

        </p>

      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-2">

        {/* MAP */}

        <div className="overflow-hidden rounded-3xl bg-[#1b2432] p-8">

          <img
            src="/images/map/indonesia.webp"
            alt="Indonesia"
            className="w-full"
          />

        </div>

        {/* CITY */}

        <div className="rounded-3xl bg-[#1b2432] p-10">

          <h3 className="text-2xl font-bold text-white">

            Kota yang Sudah Kami Layani

          </h3>

          <div className="mt-8 space-y-6">

            {[
              "Situbondo",
              "Bondowoso",
              "Jember",
              "Banyuwangi",
              "Probolinggo",
              "Lumajang",
            ].map((kota) => (

              <div
                key={kota}
                className="flex items-center gap-4"
              >

                <div className="rounded-full bg-green-600 p-2">

                  <MapPin
                    size={18}
                    className="text-white"
                  />

                </div>

                <span className="text-lg text-gray-300">

                  {kota}

                </span>

              </div>

            ))}

          </div>

          <div className="mt-12 grid grid-cols-3 gap-5">

            <div className="rounded-2xl bg-green-700 p-5 text-center">

              <Building2
                className="mx-auto text-white"
              />

              <h2 className="mt-3 text-3xl font-black text-white">

                35+

              </h2>

              <p className="text-green-100">

                Client

              </p>

            </div>

            <div className="rounded-2xl bg-green-700 p-5 text-center">

              <CheckCircle
                className="mx-auto text-white"
              />

              <h2 className="mt-3 text-3xl font-black text-white">

                120+

              </h2>

              <p className="text-green-100">

                Project

              </p>

            </div>

            <div className="rounded-2xl bg-green-700 p-5 text-center">

              <MapPin
                className="mx-auto text-white"
              />

              <h2 className="mt-3 text-3xl font-black text-white">

                7

              </h2>

              <p className="text-green-100">

                Kota

              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}