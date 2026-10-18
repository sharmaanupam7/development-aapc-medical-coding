import "dotenv/config";
import { prisma } from "@/lib/prisma"

async function main() {
  await prisma.$connect();
  console.log("Prisma connected successfully.");

  const result = await prisma.$queryRaw<Array<{ result: number }>>`SELECT 1 AS result`;

  console.log("Query result:", result);
}

main()
  .catch((error) => {
    console.error("Database test failed:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
