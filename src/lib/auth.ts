import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { loginUser } from "@/services/auth.service";

export const { handlers, auth, signIn, signOut } = NextAuth({
  session: {
    strategy: "jwt",
  },

  providers: [
    Credentials({
      name: "Credentials",

      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: {
          label: "Password",
          type: "password",
        },
        rememberMe: {
          label: "Remember Me",
          type: "checkbox",
        },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        try {
          const result = await loginUser({
            email: String(credentials.email),
            password: String(credentials.password),
            rememberMe: Boolean(credentials.rememberMe),
          });

          const user = result.user;

          if (!user || !user.isActive) {
            return null;
          }

          return {
            id: user.id,
            firstname: user.firstname,
            middlename: user.middlename,
            lastname: user.lastname,
            email: user.email,
            role: user.role,
            isActive: user.isActive,
            isEmailVerified: user.emailVerified,
            profileCompleted: user.profileCompleted,
          };
        } catch (error) {
          console.error("Authentication error:", error);
          return null;
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.firstname = user.firstname;
        token.middlename = user.middlename;
        token.lastname = user.lastname;
        token.email = user.email;
        token.role = user.role;
        token.isActive = user.isActive;
        token.isEmailVerified = user.isEmailVerified;
      }

      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.firstname = token.firstname as string;
        session.user.middlename = token.middlename as string | null;
        session.user.lastname = token.lastname as string;
        session.user.email = token.email as string;
        session.user.role = token.role as "STUDENT" | "INSTRUCTOR" | "ADMIN";
        session.user.isActive = token.isActive as boolean;
        session.user.isEmailVerified = token.isEmailVerified as boolean;
      }

      return session;
    },
  },

  pages: {
    signIn: "/login",
  },

  secret: process.env.AUTH_SECRET,
});
