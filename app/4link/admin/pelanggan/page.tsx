import DashboardLayout from "@/components/dashboard/Layout";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function PelangganPage() {
  const customers = await prisma.customer.findMany({
    include: {
      package: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Data Pelanggan</h1>

        <Link
          href="/4link/admin/pelanggan/tambah"
          className="bg-cyan-600 text-white px-4 py-2 rounded-lg"
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
            {customers.map((customer: any) => (
              <tr key={customer.id} className="border-t">
                <td className="p-4">{customer.fullName}</td>
                <td className="p-4">{customer.phone}</td>
                <td className="p-4">{customer.package.name}</td>
                <td className="p-4">{customer.status}</td>
                <td className="p-4">Tanggal {customer.dueDate}</td>
                <td className="p-4 text-center">
  <div className="flex justify-center gap-2">

  <Link
    href={`/4link/admin/pelanggan/edit/${customer.id}`}
    className="bg-blue-600 text-white px-3 py-1 rounded"
  >
    Edit
  </Link>

  <Link
    href={`/4link/admin/pelanggan/hapus/${customer.id}`}
    className="bg-red-600 text-white px-3 py-1 rounded"
  >
    Hapus
  </Link>

  <a
    href={`https://wa.me/62${customer.phone.replace(/^0/, "")}?text=${encodeURIComponent(
      `Halo ${customer.fullName},

Tagihan internet 4LINK Anda.

Status : ${customer.status}

Silakan melakukan pembayaran sesuai tagihan yang berlaku.

Terima kasih.

Admin 4LINK`
    )}`}
    target="_blank"
    className="bg-green-600 text-white px-3 py-1 rounded"
  >
    WA
  </a>

</div>
</td>
              </tr>
            ))}

            {customers.length === 0 && (
              <tr>
                <td colSpan={6} className="text-center p-8 text-gray-500">
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