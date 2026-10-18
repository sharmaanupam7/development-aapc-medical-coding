import { prisma } from "@/lib/prisma";

export async function getActiveCountries() {
  return prisma.country.findMany({
    where: {
      isActive: true,
    },

    orderBy: {
      country_name: "asc",
    },

    select: {
      country_id: true,
      country_name: true,
      country_code: true,
      phoneCode: true,
    },
  });
}
