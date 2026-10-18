import "server-only";
import { prisma } from "@/lib/prisma";
import type { user_role } from "@/generated/prisma/enums";

export interface CreateUserRepositoryInput {
  firstname: string;
  middlename?: string | null;
  lastname: string;
  email: string;
  mobile: string;
  country?: string | null;
  passwordHash: string;
  role?: user_role;
}

export async function findUserByEmail(email: string) {
  return prisma.user.findUnique({
    where: {
      email: email.toLowerCase().trim(),
    },
  });
}

export async function findUserByMobile(mobile: string) {
  return prisma.user.findUnique({
    where: {
      mobile: mobile.trim(),
    },
  });
}

export async function findUserById(id: string) {
  return prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      firstname: true,
      middlename: true,
      lastname: true,
      email: true,
      profileImage: true,
      role: true,
      isActive: true,
      emailVerified: true,
      profileCompleted: true,
      createdAt: true,
      updatedAt: true,
    },
  });
}

export async function createUser(data: CreateUserRepositoryInput) {
  return prisma.user.create({
    data: {
      firstname: data.firstname,
      middlename: data.middlename || null,
      lastname: data.lastname,
      email: data.email,
      mobile: data.mobile,
      country: data.country || null,
      passwordHash: data.passwordHash,
      role: data.role ?? "STUDENT",
    },
    select: {
      id: true,
      firstname: true,
      middlename: true,
      lastname: true,
      email: true,
      role: true,
      isActive: true,
      emailVerified: true,
      createdAt: true,
      updatedAt: true,
    },
  });
}

export async function updateEmailVerified(userId: string, emailVerified: boolean) {
  return prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      emailVerified,
    },
    select: {
      id: true,
      firstname: true,
      middlename: true,
      lastname: true,
      email: true,
      role: true,
      isActive: true,
      emailVerified: true,
      createdAt: true,
      updatedAt: true,
    },
  });
}
