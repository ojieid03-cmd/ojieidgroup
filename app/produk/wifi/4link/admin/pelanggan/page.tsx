import DashboardLayout from "@/components/dashboard/Layout";
import Link from "next/link";

export default function PelangganPage() {
  const customers = [
    {
      id: "CUST001",
      fullName: "Budi Santoso",
      phone: "081234567890",
      package: {
        name: "Basic 10 Mbps",
      },
      status: "ACTIVE",
      dueDate: 10,
    },
    {
      id: "CUST002",
      fullName: "Andi Wijaya",
      phone: "081345678901",
      package: {
        name: "Silver 20 Mbps",
      },
      status: "ACTIVE",
      dueDate: 15,
    },
    {
      id: "CUST003",
      fullName: "Siti Aminah",
      phone: "082233445566",
      package: {
        name: "Gold 30 Mbps",
      },
      status: "NONAKTIF",
      dueDate: 20,
    },
  ];

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Data Pelanggan
        </h1>

        <Link
          href="/produk/wifi/4link/admin/pelanggan/tambah"
          className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg transition"
        >
          + Tambah Pelanggan
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-slate-100">
            <tr>
              <th className="p-4 text-left">Nama</th>
              <th className="p-4 text-left">WhatsApp</th>
              <th className="p-4 text-left">Paket</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Jatuh Tempo</th>
              <th className="p-4 text-center">Aksi</th>
            </tr>
          </thead>

          <tbody>

            {customers.map((customer) => (

              <tr
                key={customer.id}
                className="border-t hover:bg-slate-50"
              >

                <td className="p-4 font-semibold">
                  {customer.fullName}
                </td>

                <td className="p-4">
                  {customer.phone}
                </td>

                <td className="p-4">
                  {customer.package.name}
                </td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      customer.status === "ACTIVE"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {customer.status}
                  </span>
                </td>

                <td className="p-4">
                  Tanggal {customer.dueDate}
                </td>

                <td className="p-4">
                  <div className="flex justify-center gap-2">

                    <Link
                      href={`/produk/wifi/4link/admin/pelanggan/edit/${customer.id}`}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded transition"
                    >
                      Edit
                    </Link>

                    <Link
                      href={`/produk/wifi/4link/admin/pelanggan/hapus/${customer.id}`}
                      className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded transition"
                    >
                      Hapus
                    </Link>

                    <a
                      href={`https://wa.me/62${customer.phone.replace(
                        /^0/,
                        ""
                      )}?text=${encodeURIComponent(
`Halo ${customer.fullName},

Tagihan Internet 4LINK Anda.

Status : ${customer.status}

Silakan melakukan pembayaran sesuai tagihan yang berlaku.

Terima kasih.

Admin 4LINK`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded transition"
                    >
                      WA
                    </a>

                  </div>
                </td>

              </tr>

            ))}

            {customers.length === 0 && (
              <tr>
                <td
                  colSpan={6}
                  className="text-center p-8 text-gray-500"
                >
                  Belum ada pelanggan.
                </td>
              </tr>
            )}

          </tbody>

        </table>

      </div>
    </DashboardLayout>
  );
}