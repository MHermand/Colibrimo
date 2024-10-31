// In Pre-Production ⬇️

/* 
import { PrismaClient } from "@prisma/client";
declare global {var prisma: PrismaClient | undefined;};
export const db = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
*/

// In production ⬇️

import { PrismaClient } from "@prisma/client";
export const db = new PrismaClient();

// Prisma Studio
// >>> npx prisma studio