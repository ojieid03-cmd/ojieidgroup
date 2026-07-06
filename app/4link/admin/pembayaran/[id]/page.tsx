import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function PembayaranPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  await prisma.invoice.update({
    where: {
      id,
    },
    data: {
      status: "PAID",
      paidAt: new Date(),
    },
  });

  redirect("/4link/admin/tagihan");
}