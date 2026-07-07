import DashboardLayout from "@/components/dashboard/Layout";
import Link from "next/link";

export default function PembayaranPage() {
  return (
    <DashboardLayout>

      <div className="max-w-xl mx-auto bg-white rounded-xl shadow p-8 mt-10 text-center">

        <div className="text-6xl mb-4">
          ✅
        </div>

        <h1 className="text-3xl font-bold text-green-600 mb-4">
          Pembayaran Berhasil
        </h1>

        <p className="text-gray-600 mb-8">
          Mode Demo GitHub Pages.
          <br />
          Status pembayaran belum tersimpan ke database.
        </p>

        <div className="flex justify-center gap-4">

          <button
  type="button"
  className="bg-cyan-600 text-white px-6 py-3 rounded-lg"
>
  ✔ Tandai Lunas
</button>

          <Link
            href="/produk/wifi/4link/admin/tagihan"
            className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition"
          >
            Kembali
          </Link>

        </div>

      </div>

    </DashboardLayout>
  );
}