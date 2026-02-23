import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

function createPrismaClient() {
  const databaseUrl = new URL(process.env.DATABASE_URL!);
  if (!databaseUrl.searchParams.has('connect_timeout'))
    databaseUrl.searchParams.set('connect_timeout', '15');
  if (!databaseUrl.searchParams.has('connection_limit'))
    databaseUrl.searchParams.set('connection_limit', '1');

  return new PrismaClient({
    datasourceUrl: databaseUrl.toString(),
  });
}

export const prisma = globalForPrisma.prisma || createPrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
