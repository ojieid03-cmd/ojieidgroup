import DashboardLayout from "@/components/dashboard/Layout";

export default function PengaturanPage() {
  const admin = {
    fullName: "Administrator 4LINK",
    username: "admin",
  };

  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto">

        <h1 className="text-3xl font-bold mb-8">
          Pengaturan Admin
        </h1>

        <div className="bg-white rounded-xl shadow p-8 space-y-6">

          <div>
            <label className="block mb-2 font-semibold">
              Nama Lengkap
            </label>

            <input
              type="text"
              defaultValue={admin.fullName}
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Username
            </label>

            <input
              type="text"
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
              placeholder="********"
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block mb-2">
              Password Baru
            </label>

            <input
              type="password"
              placeholder="********"
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block mb-2">
              Konfirmasi Password Baru
            </label>

            <input
              type="password"
              placeholder="********"
              className="w-full border rounded-lg p-3"
            />
          </div>

          <button
            type="button"
            disabled
            className="bg-cyan-400 text-white px-6 py-3 rounded-lg cursor-not-allowed"
          >
            Simpan (Demo)
          </button>

          <div className="text-sm text-gray-500 border-t pt-4">
            Mode Demo GitHub Pages.
            <br />
            Perubahan pengaturan belum disimpan karena website berjalan tanpa database.
          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}