import DashboardLayout from "@/components/dashboard/Layout";
import DashboardStats from "@/components/dashboard/DashboardStats";
import RevenueChart from "@/components/dashboard/RevenueChart";

export default function DashboardPage() {
  // Dummy Data (Mode Demo GitHub)
  const totalCustomer = 50;
  const totalPackage = 6;
  const unpaidInvoice = 5;
  const paidInvoice = 45;

  const totalIncome = 11250000;
  const totalUnpaid = 1250000;

  const chartLabels = [
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

  const chartData = [
    8500000,
    9000000,
    9300000,
    9700000,
    10100000,
    10500000,
    11250000,
    0,
    0,
    0,
    0,
    0,
  ];

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
        totalIncome={totalIncome}
        totalUnpaid={totalUnpaid}
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
                Rp {totalIncome.toLocaleString("id-ID")}
              </td>
            </tr>

            <tr>
              <td className="py-3">Total Tunggakan</td>
              <td className="font-bold text-red-600">
                Rp {totalUnpaid.toLocaleString("id-ID")}
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}