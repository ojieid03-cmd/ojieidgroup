import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash("4link", 10);

  await prisma.admin.upsert({
    where: {
      username: "4link",
    },
    update: {
      password,
      fullName: "4link Administrator",
    },
    create: {
      username: "4link",
      password,
      fullName: "4link Administrator",
    },
  });

  console.log("✅ Admin berhasil dibuat");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });