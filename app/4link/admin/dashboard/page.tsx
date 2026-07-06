import DashboardLayout from "@/components/dashboard/Layout";
import { prisma } from "@/lib/prisma";
import DashboardStats from "@/components/dashboard/DashboardStats";
import RevenueChart from "@/components/dashboard/RevenueChart";

export default async function DashboardPage() {
  const totalCustomer = await prisma.customer.count();

  const totalPackage = await prisma.package.count();

  const unpaidInvoice = await prisma.invoice.count({
    where: {
      status: "UNPAID",
    },
  });

  const paidInvoice = await prisma.invoice.count({
    where: {
      status: "PAID",
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

  // Grafik Pendapatan
  const monthlyRevenue = await prisma.invoice.groupBy({
    by: ["month"],
    where: {
      status: "PAID",
    },
    _sum: {
      amount: true,
    },
    orderBy: {
      month: "asc",
    },
  });

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Agu",
    "Sep",
    "Okt",
    "Nov",
    "Des",
  ];

  const chartLabels = monthlyRevenue.map(
    (item) => monthNames[item.month - 1]
  );

  const chartData = monthlyRevenue.map(
    (item) => Number(item._sum.amount ?? 0)
  );

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-8">
        Dashboard 4LINK
      </h1>

      <DashboardStats
        totalCustomer={totalCustomer}
        totalPackage={totalPackage}
        unpaidInvoice={unpaidInvoice}
        paidInvoice={paidInvoice}
        totalIncome={Number(totalIncome._sum.amount ?? 0)}
        totalUnpaid={Number(totalUnpaid._sum.amount ?? 0)}
      />

      <div className="mt-10 bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-bold mb-6">
          Grafik Pendapatan Bulanan
        </h2>

        <RevenueChart
          labels={chartLabels}
          data={chartData}
        />
      </div>

      <div className="mt-10 bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-bold mb-4">
          Ringkasan Sistem
        </h2>

        <table className="w-full">
          <tbody>

            <tr className="border-b">
              <td className="py-3">Total Pelanggan</td>
              <td className="font-bold">{totalCustomer}</td>
            </tr>

            <tr className="border-b">
              <td className="py-3">Total Paket</td>
              <td className="font-bold">{totalPackage}</td>
            </tr>

            <tr className="border-b">
              <td className="py-3">Invoice Belum Bayar</td>
              <td className="font-bold text-red-600">
                {unpaidInvoice}
              </td>
            </tr>

            <tr className="border-b">
              <td className="py-3">Invoice Sudah Bayar</td>
              <td className="font-bold text-green-600">
                {paidInvoice}
              </td>
            </tr>

            <tr className="border-b">
              <td className="py-3">Total Omzet</td>
              <td className="font-bold text-cyan-600">
                Rp {Number(totalIncome._sum.amount ?? 0).toLocaleString("id-ID")}
              </td>
            </tr>

            <tr>
              <td className="py-3">Total Tunggakan</td>
              <td className="font-bold text-red-600">
                Rp {Number(totalUnpaid._sum.amount ?? 0).toLocaleString("id-ID")}
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}