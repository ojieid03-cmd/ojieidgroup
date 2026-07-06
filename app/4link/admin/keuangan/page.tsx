import DashboardLayout from "@/components/dashboard/Layout";
import { prisma } from "@/lib/prisma";

export default async function KeuanganPage() {
  const today = new Date();

  const startToday = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );

  const startMonth = new Date(
    today.getFullYear(),
    today.getMonth(),
    1
  );

  const incomeToday = await prisma.invoice.aggregate({
    where: {
      status: "PAID",
      paidAt: {
        gte: startToday,
      },
    },
    _sum: {
      amount: true,
    },
  });

  const incomeMonth = await prisma.invoice.aggregate({
    where: {
      status: "PAID",
      paidAt: {
        gte: startMonth,
      },
    },
    _sum: {
      amount: true,
    },
  });

  const totalIncome = await prisma.invoice.aggregate({
    where: {
      status: "PAID",
    },
    _sum: {
      amount: true,
    },
  });

  const totalUnpaid = await prisma.invoice.aggregate({
    where: {
      status: "UNPAID",
    },
    _sum: {
      amount: true,
    },
  });

  const latestPayments = await prisma.invoice.findMany({
    where: {
      status: "PAID",
    },
    include: {
      customer: true,
    },
    orderBy: {
      paidAt: "desc",
    },
    take: 10,
  });

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-8">
        Laporan Keuangan
      </h1>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-gray-500">
            Pendapatan Hari Ini
          </p>

          <h2 className="text-2xl font-bold text-green-600 mt-2">
            Rp {Number(incomeToday._sum.amount ?? 0).toLocaleString("id-ID")}
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-gray-500">
            Pendapatan Bulan Ini
          </p>

          <h2 className="text-2xl font-bold text-blue-600 mt-2">
            Rp {Number(incomeMonth._sum.amount ?? 0).toLocaleString("id-ID")}
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-gray-500">
            Total Omzet
          </p>

          <h2 className="text-2xl font-bold text-cyan-600 mt-2">
            Rp {Number(totalIncome._sum.amount ?? 0).toLocaleString("id-ID")}
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-gray-500">
            Total Tunggakan
          </p>

          <h2 className="text-2xl font-bold text-red-600 mt-2">
            Rp {Number(totalUnpaid._sum.amount ?? 0).toLocaleString("id-ID")}
          </h2>
        </div>

      </div>

      <div className="mt-10 bg-white rounded-xl shadow overflow-hidden">

        <div className="p-6 border-b">
          <h2 className="text-xl font-bold">
            10 Pembayaran Terakhir
          </h2>
        </div>

        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-4 text-left">Tanggal</th>
              <th className="p-4 text-left">Pelanggan</th>
              <th className="p-4 text-left">Bulan</th>
              <th className="p-4 text-left">Nominal</th>
            </tr>
          </thead>

          <tbody>
            {latestPayments.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="p-4">
                  {item.paidAt
                    ? item.paidAt.toLocaleDateString("id-ID")
                    : "-"}
                </td>

                <td className="p-4">
                  {item.customer.fullName}
                </td>

                <td className="p-4">
                  {item.month}/{item.year}
                </td>

                <td className="p-4 font-semibold text-green-600">
                  Rp {Number(item.amount).toLocaleString("id-ID")}
                </td>
              </tr>
            ))}

            {latestPayments.length === 0 && (
              <tr>
                <td
                  colSpan={4}
                  className="text-center p-8 text-gray-500"
                >
                  Belum ada pembayaran.
                </td>
              </tr>
            )}
          </tbody>
        </table>

      </div>

    </DashboardLayout>
  );
}