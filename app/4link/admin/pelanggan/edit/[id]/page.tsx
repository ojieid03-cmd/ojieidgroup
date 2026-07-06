import DashboardLayout from "@/components/dashboard/Layout";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

async function updatePelanggan(formData: FormData) {
  "use server";

  const id = formData.get("id") as string;

  await prisma.customer.update({
    where: { id },
    data: {
      fullName: formData.get("fullName") as string,
      phone: formData.get("phone") as string,
      email: (formData.get("email") as string) || null,
      address: formData.get("address") as string,
      dueDate: Number(formData.get("dueDate")),
      status: formData.get("status") as string,
    },
  });

  redirect("/4link/admin/pelanggan");
}

export default async function EditPelangganPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const customer = await prisma.customer.findUnique({
    where: {
      id,
    },
  });

  if (!customer) {
    return (
      <DashboardLayout>
        <div className="p-6">
          <h1 className="text-2xl font-bold">
            Pelanggan tidak ditemukan
          </h1>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">
        Edit Pelanggan
      </h1>

      <form
        action={updatePelanggan}
        className="bg-white p-6 rounded-xl shadow space-y-4"
      >
        <input
          type="hidden"
          name="id"
          defaultValue={customer.id}
        />

        <input
          name="fullName"
          defaultValue={customer.fullName}
          className="w-full border rounded-lg p-3"
        />

        <input
          name="phone"
          defaultValue={customer.phone}
          className="w-full border rounded-lg p-3"
        />

        <input
          name="email"
          defaultValue={customer.email ?? ""}
          className="w-full border rounded-lg p-3"
        />

        <textarea
          name="address"
          defaultValue={customer.address}
          className="w-full border rounded-lg p-3"
        />

        <input
          type="number"
          name="dueDate"
          defaultValue={customer.dueDate}
          className="w-full border rounded-lg p-3"
        />

        <select
          name="status"
          defaultValue={customer.status}
          className="w-full border rounded-lg p-3"
        >
          <option value="ACTIVE">ACTIVE</option>
          <option value="NONAKTIF">NONAKTIF</option>
        </select>

        <button
          type="submit"
          className="bg-cyan-600 text-white px-6 py-3 rounded-lg"
        >
          Update Pelanggan
        </button>
      </form>
    </DashboardLayout>
  );
}