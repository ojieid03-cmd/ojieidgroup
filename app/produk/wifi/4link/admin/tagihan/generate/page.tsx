import DashboardLayout from "@/components/dashboard/Layout";
import Link from "next/link";

export default function GenerateTagihanPage() {
  const now = new Date();

  return (
    <DashboardLayout>
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow p-8 mt-10 text-center">

        <div className="text-6xl mb-6">
          📄
        </div>

        <h1 className="text-3xl font-bold text-cyan-600 mb-4">
          Generate Tagihan
        </h1>

        <p className="text-gray-600 leading-8">
          Mode Demo GitHub Pages.
          <br />
          Tagihan untuk bulan <b>{now.getMonth() + 1}</b> tahun{" "}
          <b>{now.getFullYear()}</b> belum benar-benar dibuat karena
          website berjalan tanpa database.
        </p>

        <div className="mt-8 flex justify-center gap-4">

          <button
            type="button"
            disabled
            className="bg-cyan-400 text-white px-6 py-3 rounded-lg cursor-not-allowed"
          >
            Generate (Demo)
          </button>

          <Link
            href="/produk/wifi/4link/admin/tagihan"
            className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition"
          >
            Kembali
          </Link>

        </div>

        <div className="mt-8 border-t pt-6 text-sm text-gray-500">
          Pada versi online nantinya, tombol ini akan membuat seluruh
          tagihan pelanggan secara otomatis setiap awal bulan.
        </div>

      </div>
    </DashboardLayout>
  );
}