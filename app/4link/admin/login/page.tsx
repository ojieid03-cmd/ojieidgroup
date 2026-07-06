export default function AdminLogin() {
  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center">

      <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-md">

        <h1 className="text-3xl font-bold text-center mb-8">
          Login Admin 4LINK
        </h1>

        <form className="space-y-5">

          <input
            type="text"
            placeholder="Username"
            className="w-full border rounded-xl p-4"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-xl p-4"
          />

          <button
            className="w-full bg-blue-600 text-white py-4 rounded-xl"
          >
            Login
          </button>

        </form>

      </div>

    </main>
  );
}