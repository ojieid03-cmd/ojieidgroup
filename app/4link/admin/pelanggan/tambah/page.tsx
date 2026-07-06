import DashboardLayout from "@/components/dashboard/Layout";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

async function tambahPelanggan(formData: FormData) {
  "use server";

  await prisma.customer.create({
    data: {
      fullName: formData.get("fullName") as string,
      phone: formData.get("phone") as string,
      email: (formData.get("email") as string) || null,
      address: formData.get("address") as string,
      packageId: formData.get("packageId") as string,
      dueDate: Number(formData.get("dueDate")),
      mikrotikUser: (formData.get("mikrotikUser") as string) || null,
      mikrotikPass: (formData.get("mikrotikPass") as string) || null,
      notes: (formData.get("notes") as string) || null,
    },
  });

  redirect("/4link/admin/pelanggan");
}

export default async function TambahPelangganPage() {
  const packages = await prisma.package.findMany({
    where: {
      isActive: true,
    },
    orderBy: {
      name: "asc",
    },
  });

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">
        Tambah Pelanggan
      </h1>

      <form action={tambahPelanggan} className="bg-white p-6 rounded-xl shadow space-y-4">

        <input
          name="fullName"
          placeholder="Nama Lengkap"
          className="w-full border rounded-lg p-3"
          required
        />

        <input
          name="phone"
          placeholder="Nomor WhatsApp"
          className="w-full border rounded-lg p-3"
          required
        />

        <input
          name="email"
          placeholder="Email"
          className="w-full border rounded-lg p-3"
        />

        <textarea
          name="address"
          placeholder="Alamat"
          className="w-full border rounded-lg p-3"
          required
        />

        <select
          name="packageId"
          className="w-full border rounded-lg p-3"
          required
        >
          <option value="">Pilih Paket</option>

          {packages.map((pkg: any) => (
            <option key={pkg.id} value={pkg.id}>
              {pkg.name} - {pkg.speed} Mbps
            </option>
          ))}
        </select>

        <input
          type="number"
          name="dueDate"
          placeholder="Tanggal Jatuh Tempo (1-31)"
          className="w-full border rounded-lg p-3"
          required
        />

        <input
          name="mikrotikUser"
          placeholder="Username PPPoE"
          className="w-full border rounded-lg p-3"
        />

        <input
          name="mikrotikPass"
          placeholder="Password PPPoE"
          className="w-full border rounded-lg p-3"
        />

        <textarea
          name="notes"
          placeholder="Catatan"
          className="w-full border rounded-lg p-3"
        />

        <button
          className="bg-cyan-600 text-white px-6 py-3 rounded-lg"
        >
          Simpan Pelanggan
        </button>

      </form>
    </DashboardLayout>
  );
}