import NextAuth, { DefaultSession, DefaultUser } from "next-auth";

import { UserRole } from "@/generated/prisma";

declare module "next-auth" {
  interface User extends DefaultUser {
    id: string;

    firstname: string;
    middlename: string | null;
    lastname: string;

    email: string;

    role: UserRole;

    isActive: boolean;
    isEmailVerified: boolean;
    profileCompleted: boolean;
  }

  interface Session {
    user: {
      id: string;

      firstname: string;
      middlename: string | null;
      lastname: string;

      email: string;

      role: UserRole;

      isActive: boolean;
      profileCompleted: boolean;
      isEmailVerified: boolean;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;

    firstname: string;
    middlename: string | null;
    lastname: string;

    email: string;

    role: UserRole;

    isActive: boolean;
    profileCompleted: boolean;
    isEmailVerified: boolean;
  }
}
