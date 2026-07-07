import DashboardLayout from "@/components/dashboard/Layout";
import Link from "next/link";

export default function TambahPelangganPage() {
  const packages = [
    {
      id: "PKG001",
      name: "Basic",
      speed: 10,
    },
    {
      id: "PKG002",
      name: "Silver",
      speed: 20,
    },
    {
      id: "PKG003",
      name: "Gold",
      speed: 30,
    },
    {
      id: "PKG004",
      name: "Platinum",
      speed: 50,
    },
  ];

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">
        Tambah Pelanggan
      </h1>

      <div className="bg-white p-6 rounded-xl shadow space-y-4">

        <input
          type="text"
          placeholder="Nama Lengkap"
          className="w-full border rounded-lg p-3"
        />

        <input
          type="text"
          placeholder="Nomor WhatsApp"
          className="w-full border rounded-lg p-3"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded-lg p-3"
        />

        <textarea
          placeholder="Alamat"
          rows={3}
          className="w-full border rounded-lg p-3"
        />

        <select
          className="w-full border rounded-lg p-3"
          defaultValue=""
        >
          <option value="">
            Pilih Paket Internet
          </option>

          {packages.map((pkg) => (
            <option
              key={pkg.id}
              value={pkg.id}
            >
              {pkg.name} - {pkg.speed} Mbps
            </option>
          ))}
        </select>

        <input
          type="number"
          placeholder="Tanggal Jatuh Tempo (1-31)"
          className="w-full border rounded-lg p-3"
        />

        <input
          type="text"
          placeholder="Username PPPoE"
          className="w-full border rounded-lg p-3"
        />

        <input
          type="password"
          placeholder="Password PPPoE"
          className="w-full border rounded-lg p-3"
        />

        <textarea
          placeholder="Catatan"
          rows={3}
          className="w-full border rounded-lg p-3"
        />

        <div className="flex gap-4">

          <button
            type="button"
            className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg transition"
          >
            Simpan (Demo)
          </button>

          <Link
            href="/produk/wifi/4link/admin/pelanggan"
            className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition"
          >
            Kembali
          </Link>

        </div>

        <p className="text-sm text-gray-500">
          Mode Demo GitHub Pages - Data tidak akan disimpan.
        </p>

      </div>
    </DashboardLayout>
  );
}