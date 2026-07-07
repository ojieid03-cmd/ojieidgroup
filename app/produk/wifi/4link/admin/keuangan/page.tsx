import DashboardLayout from "@/components/dashboard/Layout";

export default function KeuanganPage() {
  // Dummy Data (sementara)
  const incomeToday = 750000;
  const incomeMonth = 11250000;
  const totalIncome = 58250000;
  const totalUnpaid = 1250000;

  const latestPayments = [
    {
      id: 1,
      tanggal: "07/07/2026",
      customer: "Budi Santoso",
      month: 7,
      year: 2026,
      amount: 250000,
    },
    {
      id: 2,
      tanggal: "07/07/2026",
      customer: "Andi Wijaya",
      month: 7,
      year: 2026,
      amount: 300000,
    },
    {
      id: 3,
      tanggal: "06/07/2026",
      customer: "Siti Aminah",
      month: 7,
      year: 2026,
      amount: 200000,
    },
  ];

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
            Rp {incomeToday.toLocaleString("id-ID")}
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-gray-500">
            Pendapatan Bulan Ini
          </p>

          <h2 className="text-2xl font-bold text-blue-600 mt-2">
            Rp {incomeMonth.toLocaleString("id-ID")}
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-gray-500">
            Total Omzet
          </p>

          <h2 className="text-2xl font-bold text-cyan-600 mt-2">
            Rp {totalIncome.toLocaleString("id-ID")}
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-gray-500">
            Total Tunggakan
          </p>

          <h2 className="text-2xl font-bold text-red-600 mt-2">
            Rp {totalUnpaid.toLocaleString("id-ID")}
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
                  {item.tanggal}
                </td>

                <td className="p-4">
                  {item.customer}
                </td>

                <td className="p-4">
                  {item.month}/{item.year}
                </td>

                <td className="p-4 font-semibold text-green-600">
                  Rp {item.amount.toLocaleString("id-ID")}
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </DashboardLayout>
  );
}