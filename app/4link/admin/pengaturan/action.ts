"use server";

import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";

export async function updateAdmin(formData: FormData) {
  const id = formData.get("id") as string;
  const username = formData.get("username") as string;
  const fullName = formData.get("fullName") as string;

  const oldPassword = formData.get("oldPassword") as string;
  const newPassword = formData.get("newPassword") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  const admin = await prisma.admin.findUnique({
    where: {
      id,
    },
  });

  if (!admin) {
    redirect("/4link/admin/pengaturan");
  }

  const data: any = {
    username,
    fullName,
  };

  if (newPassword !== "") {
    const match = await bcrypt.compare(
      oldPassword,
      admin.password
    );

    if (!match) {
      redirect("/4link/admin/pengaturan");
    }

    if (newPassword !== confirmPassword) {
      redirect("/4link/admin/pengaturan");
    }

    data.password = await bcrypt.hash(newPassword, 10);
  }

  await prisma.admin.update({
    where: {
      id,
    },
    data,
  });

  redirect("/4link/admin/pengaturan");
}