import DashboardLayout from "@/components/dashboard/Layout";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function PaketPage() {
  const packages = await prisma.package.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Paket Internet
        </h1>

        <Link
          href="/4link/admin/paket/tambah"
          className="bg-cyan-600 text-white px-4 py-2 rounded-lg"
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
              <tr key={pkg.id} className="border-t">
                <td className="p-4">{pkg.name}</td>
                <td className="p-4">{pkg.speed} Mbps</td>
                <td className="p-4">
                  Rp {Number(pkg.price).toLocaleString("id-ID")}
                </td>
                <td className="p-4">
                  {pkg.isActive ? "Aktif" : "Nonaktif"}
                </td>
              </tr>
            ))}

            {packages.length === 0 && (
              <tr>
                <td
                  colSpan={4}
                  className="text-center p-8 text-gray-500"
                >
                  Belum ada paket internet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}