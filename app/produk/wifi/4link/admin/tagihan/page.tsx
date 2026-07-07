import DashboardLayout from "@/components/dashboard/Layout";
import Link from "next/link";

export default function TagihanPage() {
  const invoices = [
    {
      id: "INV001",
      customer: {
        fullName: "Budi Santoso",
      },
      month: 7,
      year: 2026,
      amount: 250000,
      status: "UNPAID",
    },
    {
      id: "INV002",
      customer: {
        fullName: "Andi Wijaya",
      },
      month: 7,
      year: 2026,
      amount: 350000,
      status: "PAID",
    },
    {
      id: "INV003",
      customer: {
        fullName: "Siti Aminah",
      },
      month: 7,
      year: 2026,
      amount: 450000,
      status: "UNPAID",
    },
  ];

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">

        <h1 className="text-3xl font-bold">
          Tagihan Pelanggan
        </h1>

        <Link
          href="/produk/wifi/4link/admin/tagihan/generate"
          className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg transition"
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

            {invoices.map((invoice) => (

              <tr
                key={invoice.id}
                className="border-t hover:bg-slate-50"
              >

                <td className="p-4 font-semibold">
                  {invoice.customer.fullName}
                </td>

                <td className="p-4">
                  {invoice.month}
                </td>

                <td className="p-4">
                  {invoice.year}
                </td>

                <td className="p-4">
                  Rp {invoice.amount.toLocaleString("id-ID")}
                </td>

                <td className="p-4">

                  {invoice.status === "PAID" ? (
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">
                      ✔ PAID
                    </span>
                  ) : (
                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full font-semibold">
                      UNPAID
                    </span>
                  )}

                </td>

                <td className="p-4 text-center">

                  {invoice.status === "UNPAID" ? (

                    <Link
                      href="/produk/wifi/4link/admin/pembayaran"
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition"
                    >
                      Bayar
                    </Link>

                  ) : (

                    <span className="text-green-600 font-bold">
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