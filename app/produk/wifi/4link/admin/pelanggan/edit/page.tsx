import DashboardLayout from "@/components/dashboard/Layout";
import Link from "next/link";

export default async function EditPelangganPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const customer = {
    id,
    fullName: "Budi Santoso",
    phone: "081234567890",
    email: "budi@gmail.com",
    address: "Jl. Raya Situbondo",
    dueDate: 10,
    status: "ACTIVE",
  };

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">
        Edit Pelanggan
      </h1>

      <div className="bg-white p-6 rounded-xl shadow space-y-4">

        <input
          defaultValue={customer.fullName}
          className="w-full border rounded-lg p-3"
        />

        <input
          defaultValue={customer.phone}
          className="w-full border rounded-lg p-3"
        />

        <input
          defaultValue={customer.email}
          className="w-full border rounded-lg p-3"
        />

        <textarea
          defaultValue={customer.address}
          rows={3}
          className="w-full border rounded-lg p-3"
        />

        <input
          type="number"
          defaultValue={customer.dueDate}
          className="w-full border rounded-lg p-3"
        />

        <select
          defaultValue={customer.status}
          className="w-full border rounded-lg p-3"
        >
          <option value="ACTIVE">ACTIVE</option>
          <option value="NONAKTIF">NONAKTIF</option>
        </select>

        <div className="flex gap-4">

          <button
            type="button"
            className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg"
          >
            Update (Demo)
          </button>

          <Link
            href="/produk/wifi/4link/admin/pelanggan"
            className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg"
          >
            Kembali
          </Link>

        </div>

        <p className="text-sm text-gray-500">
          Mode Demo GitHub Pages - Perubahan tidak akan disimpan.
        </p>

      </div>
    </DashboardLayout>
  );
}