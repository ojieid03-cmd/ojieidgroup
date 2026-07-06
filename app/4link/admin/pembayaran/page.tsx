import DashboardLayout from "@/components/dashboard/Layout";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

async function bayar(formData: FormData) {
  "use server";

  const id = formData.get("id") as string;

  await prisma.invoice.update({
    where: {
      id,
    },
    data: {
      status: "PAID",
      paidAt: new Date(),
    },
  });

  redirect("/4link/admin/pembayaran");
}

export default async function PembayaranPage() {
  const invoices = await prisma.invoice.findMany({
    include: {
      customer: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">
        Pembayaran
      </h1>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-4 text-left">Pelanggan</th>
              <th className="p-4 text-left">Tagihan</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-center">Aksi</th>
            </tr>
          </thead>

          <tbody>
            {invoices.map((invoice: any) => (
              <tr key={invoice.id} className="border-t">

                <td className="p-4">
                  {invoice.customer.fullName}
                </td>

                <td className="p-4">
                  Rp {Number(invoice.amount).toLocaleString("id-ID")}
                </td>

                <td className="p-4">
                  {invoice.status}
                </td>

                <td className="p-4 text-center">

                  {invoice.status === "UNPAID" ? (

                    <form action={bayar}>
                      <input
                        type="hidden"
                        name="id"
                        value={invoice.id}
                      />

                      <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
                        Bayar
                      </button>
                    </form>

                  ) : (

                    <span className="text-green-600 font-semibold">
                      ✔ Sudah Lunas
                    </span>

                  )}

                </td>

              </tr>
            ))}

            {invoices.length === 0 && (
              <tr>
                <td
                  colSpan={4}
                  className="text-center p-8 text-gray-500"
                >
                  Belum ada pembayaran.
                </td>
              </tr>
            )}

          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}