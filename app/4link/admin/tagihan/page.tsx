import DashboardLayout from "@/components/dashboard/Layout";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function TagihanPage() {
  const invoices = await prisma.invoice.findMany({
    include: {
      customer: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Tagihan Pelanggan
        </h1>

        <Link
          href="/4link/admin/tagihan/generate"
          className="bg-cyan-600 text-white px-4 py-2 rounded-lg"
        >
          Generate Tagihan Bulan Ini
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-4 text-left">Pelanggan</th>
              <th className="p-4 text-left">Bulan</th>
              <th className="p-4 text-left">Tahun</th>
              <th className="p-4 text-left">Tagihan</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-center">Aksi</th>
            </tr>
          </thead>

          <tbody>
            {invoices.map((invoice: any) => (
              <tr key={invoice.id} className="border-t">
                <td className="p-4">{invoice.customer.fullName}</td>

                <td className="p-4">{invoice.month}</td>

                <td className="p-4">{invoice.year}</td>

                <td className="p-4">
                  Rp {Number(invoice.amount).toLocaleString("id-ID")}
                </td>

                <td className="p-4">
                  {invoice.status === "PAID" ? (
                    <span className="text-green-600 font-semibold">
                      PAID
                    </span>
                  ) : (
                    <span className="text-red-600 font-semibold">
                      UNPAID
                    </span>
                  )}
                </td>

                <td className="p-4 text-center">
                  {invoice.status === "UNPAID" ? (
                    <Link
                      href={`/4link/admin/pembayaran/${invoice.id}`}
                      className="bg-green-600 text-white px-3 py-1 rounded"
                    >
                      Lunas
                    </Link>
                  ) : (
                    <span className="text-green-700 font-bold">
                      ✔ Sudah Lunas
                    </span>
                  )}
                </td>
              </tr>
            ))}

            {invoices.length === 0 && (
              <tr>
                <td
                  colSpan={6}
                  className="text-center p-8 text-gray-500"
                >
                  Belum ada tagihan.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}