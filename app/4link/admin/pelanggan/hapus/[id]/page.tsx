import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function HapusPelangganPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  await prisma.customer.delete({
    where: {
      id,
    },
  });

  redirect("/4link/admin/pelanggan");
}