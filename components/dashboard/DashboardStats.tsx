type Props = {
  totalCustomer: number;
  totalPackage: number;
  unpaidInvoice: number;
  paidInvoice: number;
  totalIncome: number;
  totalUnpaid: number;
};

export default function DashboardStats({
  totalCustomer,
  totalPackage,
  unpaidInvoice,
  paidInvoice,
  totalIncome,
  totalUnpaid,
}: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-6">

      <div className="bg-white rounded-xl shadow p-6">
        <p className="text-gray-500">👥 Total Pelanggan</p>
        <h2 className="text-4xl font-bold text-cyan-600 mt-2">
          {totalCustomer}
        </h2>
      </div>

      <div className="bg-white rounded-xl shadow p-6">
        <p className="text-gray-500">📦 Paket Internet</p>
        <h2 className="text-4xl font-bold text-green-600 mt-2">
          {totalPackage}
        </h2>
      </div>

      <div className="bg-white rounded-xl shadow p-6">
        <p className="text-gray-500">📄 Belum Bayar</p>
        <h2 className="text-4xl font-bold text-red-600 mt-2">
          {unpaidInvoice}
        </h2>
      </div>

      <div className="bg-white rounded-xl shadow p-6">
        <p className="text-gray-500">✅ Sudah Bayar</p>
        <h2 className="text-4xl font-bold text-green-600 mt-2">
          {paidInvoice}
        </h2>
      </div>

      <div className="bg-white rounded-xl shadow p-6">
        <p className="text-gray-500">💰 Total Omzet</p>
        <h2 className="text-2xl font-bold text-indigo-600 mt-2">
          Rp {totalIncome.toLocaleString("id-ID")}
        </h2>
      </div>

      <div className="bg-white rounded-xl shadow p-6">
        <p className="text-gray-500">💸 Total Tunggakan</p>
        <h2 className="text-2xl font-bold text-red-600 mt-2">
          Rp {totalUnpaid.toLocaleString("id-ID")}
        </h2>
      </div>

    </div>
  );
}