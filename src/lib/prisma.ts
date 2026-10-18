// import "server-only";
// import "dotenv/config";

// import { PrismaMariaDb } from "@prisma/adapter-mariadb";
// import { PrismaClient } from "@/generated/prisma/client";

// const globalForPrisma = globalThis as unknown as {
//   prisma: PrismaClient | undefined;
// };

// const adapter = new PrismaMariaDb({
//   host: process.env.DATABASE_HOST!,
//   port: Number(process.env.DATABASE_PORT ?? 3306),
//   user: process.env.DATABASE_USER!,
//   password: process.env.DATABASE_PASSWORD!,
//   database: process.env.DATABASE_NAME!,

//   // Keep the pool small during Next.js development.
//   connectionLimit: 10,

//   // Time to establish a DB connection.
//   connectTimeout: 50_000,

//   // Close idle connections after 5 minutes.
//   idleTimeout: 300,
// });

// export const prisma =
//   globalForPrisma.prisma ??
//   new PrismaClient({
//     adapter,
//     log: ["error"],
//   });

// if (process.env.NODE_ENV !== "production") {
//   globalForPrisma.prisma = prisma;
// }

// updated code

import "server-only";

import "dotenv/config";

import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "@/generated/prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

function createPrismaClient() {
  const adapter = new PrismaMariaDb({
    host: process.env.DATABASE_HOST!,
    port: Number(process.env.DATABASE_PORT ?? 3306),
    user: process.env.DATABASE_USER!,
    password: process.env.DATABASE_PASSWORD!,
    database: process.env.DATABASE_NAME!,

    connectionLimit: 10,

    connectTimeout: 50_000,

    idleTimeout: 300,
  });

  return new PrismaClient({
    adapter,
    log: ["error"],
  });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
