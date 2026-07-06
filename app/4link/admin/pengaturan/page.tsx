import DashboardLayout from "@/components/dashboard/Layout";
import { prisma } from "@/lib/prisma";
import { updateAdmin } from "./action";

export default async function PengaturanPage() {
  const admin = await prisma.admin.findFirst();

  if (!admin) {
    return (
      <DashboardLayout>
        <div>Admin tidak ditemukan.</div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto">

        <h1 className="text-3xl font-bold mb-8">
          Pengaturan Admin
        </h1>

        <form
          action={updateAdmin}
          className="bg-white rounded-xl shadow p-8 space-y-6"
        >

          <input
            type="hidden"
            name="id"
            defaultValue={admin.id}
          />

          <div>
            <label className="block mb-2 font-semibold">
              Nama Lengkap
            </label>

            <input
              name="fullName"
              defaultValue={admin.fullName}
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Username
            </label>

            <input
              name="username"
              defaultValue={admin.username}
              className="w-full border rounded-lg p-3"
            />
          </div>

          <hr />

          <h2 className="text-xl font-bold">
            Ganti Password
          </h2>

          <div>
            <label className="block mb-2">
              Password Lama
            </label>

            <input
              type="password"
              name="oldPassword"
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block mb-2">
              Password Baru
            </label>

            <input
              type="password"
              name="newPassword"
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block mb-2">
              Konfirmasi Password Baru
            </label>

            <input
              type="password"
              name="confirmPassword"
              className="w-full border rounded-lg p-3"
            />
          </div>

          <button
            className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg"
          >
            Simpan Perubahan
          </button>

        </form>

      </div>
    </DashboardLayout>
  );
}