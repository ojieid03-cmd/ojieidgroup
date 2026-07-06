import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function GenerateTagihanPage() {
  const customers = await prisma.customer.findMany({
    include: {
      package: true,
    },
  });

  const now = new Date();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();

  for (const customer of customers) {
    const sudahAda = await prisma.invoice.findFirst({
      where: {
        customerId: customer.id,
        month,
        year,
      },
    });

    if (!sudahAda) {
      await prisma.invoice.create({
        data: {
          customerId: customer.id,
          month,
          year,
          amount: customer.package.price,
          status: "UNPAID",
        },
      });
    }
  }

  redirect("/4link/admin/tagihan");
}