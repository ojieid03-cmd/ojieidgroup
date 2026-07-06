import DashboardLayout from "@/components/dashboard/Layout";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

async function tambahPaket(formData: FormData) {
  "use server";

  await prisma.package.create({
    data: {
      id: formData.get("id") as string,
      name: formData.get("name") as string,
      speed: Number(formData.get("speed")),
      price: Number(formData.get("price")),
    },
  });

  redirect("/4link/admin/paket");
}

export default function TambahPaketPage() {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">
        Tambah Paket Internet
      </h1>

      <form
        action={tambahPaket}
        className="space-y-4 bg-white p-6 rounded-xl shadow"
      >
        <input
          name="id"
          placeholder="ID Paket (contoh: PKG001)"
          className="w-full border rounded-lg p-3"
          required
        />

        <input
          name="name"
          placeholder="Nama Paket"
          className="w-full border rounded-lg p-3"
          required
        />

        <input
          type="number"
          name="speed"
          placeholder="Kecepatan (Mbps)"
          className="w-full border rounded-lg p-3"
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Harga"
          className="w-full border rounded-lg p-3"
          required
        />

        <button
          type="submit"
          className="bg-cyan-600 text-white px-6 py-3 rounded-lg"
        >
          Simpan
        </button>
      </form>
    </DashboardLayout>
  );
}