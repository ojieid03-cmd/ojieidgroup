import DashboardLayout from "@/components/dashboard/Layout";
import Link from "next/link";

export default function TambahPaketPage() {
  return (
    <DashboardLayout>

      <h1 className="text-3xl font-bold mb-6">
        Tambah Paket Internet
      </h1>

      <div className="bg-white p-6 rounded-xl shadow space-y-4">

        <input
          placeholder="ID Paket (contoh: PKG001)"
          className="w-full border rounded-lg p-3"
        />

        <input
          placeholder="Nama Paket"
          className="w-full border rounded-lg p-3"
        />

        <input
          type="number"
          placeholder="Kecepatan (Mbps)"
          className="w-full border rounded-lg p-3"
        />

        <input
          type="number"
          placeholder="Harga"
          className="w-full border rounded-lg p-3"
        />

        <div className="flex gap-4">

          <button
  type="button"
  className="bg-cyan-600 text-white px-6 py-3 rounded-lg"
>
  Simpan (Demo)
</button>

          <Link
            href="/produk/wifi/4link/admin/paket"
            className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition"
          >
            Kembali
          </Link>

        </div>

      </div>

    </DashboardLayout>
  );
}