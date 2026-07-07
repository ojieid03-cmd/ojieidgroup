import DashboardLayout from "@/components/dashboard/Layout";
import Link from "next/link";

export default function HapusPelangganPage() {
  return (
    <DashboardLayout>
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow p-8 mt-10">

        <h1 className="text-3xl font-bold text-red-600 mb-4">
          Hapus Pelanggan
        </h1>

        <p className="text-gray-600 mb-8">
          Ini adalah halaman demo GitHub Pages.
          <br />
          Penghapusan pelanggan belum diaktifkan.
        </p>

        <div className="flex gap-4">

          <button
            type="button"
            disabled
            className="bg-red-400 text-white px-6 py-3 rounded-lg cursor-not-allowed"
          >
            🗑 Hapus (Demo)
          </button>

          <Link
            href="/produk/wifi/4link/admin/pelanggan"
            className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition"
          >
            Kembali
          </Link>

        </div>

      </div>
    </DashboardLayout>
  );
}