"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    if (username === "admin" && password === "admin") {
      router.push("/produk/wifi/4link/admin/dashboard");
      return;
    }

    alert("Username atau Password salah");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-700 to-green-900 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-green-700">
            4LINK
          </h1>

          <p className="text-gray-500 mt-2">
            Billing Management System
          </p>

          <p className="text-sm text-gray-400">
            Powered by OJIEID GROUP
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">

          <div>
            <label className="block mb-2 font-medium">
              Username
            </label>

            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border rounded-lg p-3"
              placeholder="Masukkan Username"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded-lg p-3"
              placeholder="Masukkan Password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Masuk Dashboard
          </button>

        </form>

        <div className="text-center mt-6">

          <Link
            href="/produk/wifi"
            className="text-green-700 hover:underline"
          >
            ← Kembali ke Website
          </Link>

        </div>

      </div>
    </div>
  );
}