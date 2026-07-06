"use server";

import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAction(formData: FormData) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  const admin = await prisma.admin.findUnique({
    where: {
      username,
    },
  });

  if (!admin) {
    redirect("/4link/login");
  }

  const match = await bcrypt.compare(password, admin.password);

  if (!match) {
    redirect("/4link/login");
  }

  const cookieStore = await cookies();

  cookieStore.set("admin_session", admin.id, {
    httpOnly: true,
    sameSite: "lax",
    secure: false,
    path: "/",
    maxAge: 60 * 60 * 24,
  });

  redirect("/4link/admin/dashboard");
}