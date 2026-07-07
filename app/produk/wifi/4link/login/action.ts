"use server";

import { redirect } from "next/navigation";

export async function loginAction(formData: FormData) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  if (username === "admin" && password === "admin") {
    redirect("/produk/wifi/4link/admin/dashboard");
  }

  redirect("/produk/wifi/4link/login");
}