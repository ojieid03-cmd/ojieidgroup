import DashboardLayout from "@/components/dashboard/Layout";
import Link from "next/link";

export default function PaketPage() {
  const packages = [
    {
      id: 1,
      name: "Paket Basic",
      speed: 10,
      price: 150000,
      isActive: true,
    },
    {
      id: 2,
      name: "Paket Silver",
      speed: 20,
      price: 200000,
      isActive: true,
    },
    {
      id: 3,
      name: "Paket Gold",
      speed: 30,
      price: 250000,
      isActive: true,
    },
    {
      id: 4,
      name: "Paket Platinum",
      speed: 50,
      price: 350000,
      isActive: true,
    },
    {
      id: 5,
      name: "Paket Bisnis",
      speed: 100,
      price: 750000,
      isActive: false,
    },
  ];

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Paket Internet
        </h1>

        <Link
          href="/produk/wifi/4link/admin/paket/tambah"
          className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg transition"
        >
          + Tambah Paket
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-slate-100">

            <tr>
              <th className="text-left p-4">Nama Paket</th>
              <th className="text-left p-4">Kecepatan</th>
              <th className="text-left p-4">Harga</th>
              <th className="text-left p-4">Status</th>
            </tr>

          </thead>

          <tbody>

            {packages.map((pkg) => (

              <tr
                key={pkg.id}
                className="border-t hover:bg-slate-50"
              >

                <td className="p-4 font-semibold">
                  {pkg.name}
                </td>

                <td className="p-4">
                  {pkg.speed} Mbps
                </td>

                <td className="p-4">
                  Rp {pkg.price.toLocaleString("id-ID")}
                </td>

                <td className="p-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      pkg.isActive
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {pkg.isActive ? "Aktif" : "Nonaktif"}
                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>
    </DashboardLayout>
  );
}