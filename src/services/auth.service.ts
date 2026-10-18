// import "server-only";

// import bcrypt from "bcryptjs";
// import { cookies } from "next/headers";

// import { createUser, findUserByEmail, findUserById, findUserByMobile } from "@/repositories/auth.repository";

// import { createAccessToken, createRefreshToken, verifyAccessToken } from "@/lib/jwt";

// import { loginSchema, type LoginFormData } from "@/schemas/login.schema";

// import { registerSchema, type RegisterFormData } from "@/schemas/register.schema";

// const SALT_ROUNDS = 12;

// const ACCESS_TOKEN_COOKIE = "access_token";
// const REFRESH_TOKEN_COOKIE = "refresh_token";

// /**
//  * Register a new student user
//  */
// export async function registerUser(input: RegisterFormData) {
//   // ---------------------------------------------
//   // 1. Validate input
//   // ---------------------------------------------

//   const validatedData = registerSchema.parse(input);

//   const { firstname, middlename, lastname, email, password, country, mobile } = validatedData;

//   const normalizedEmail = email.toLowerCase().trim();
//   const normalizedMobile = mobile.trim();

//   // ---------------------------------------------
//   // 2. Check existing email
//   // ---------------------------------------------

//   const existingEmailUser = await findUserByEmail(normalizedEmail);

//   if (existingEmailUser) {
//     throw new Error("An account with this email address already exists.");
//   }

//   // ---------------------------------------------
//   // 3. Check duplicate mobile
//   // ---------------------------------------------

//   const existingMobileUser = await findUserByMobile(normalizedMobile);

//   if (existingMobileUser) {
//     throw new Error("An account with this mobile number already exists.");
//   }

//   // ---------------------------------------------
//   // 4. Hash password
//   // ---------------------------------------------

//   const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);

//   // ---------------------------------------------
//   // 5. Create student account
//   // ---------------------------------------------

//   try {
//     const user = await createUser({
//       firstname,
//       middlename: middlename || null,
//       lastname,
//       email: normalizedEmail,
//       country: country || null,
//       passwordHash,
//       mobile: normalizedMobile,
//       role: "STUDENT",
//     });

//     // ---------------------------------------------
//     // 6. Return safe user object
//     // ---------------------------------------------

//     return user;
//   } catch (error: unknown) {
//     // ---------------------------------------------
//     // 7. Handle Prisma unique constraint
//     // ---------------------------------------------

//     if (error && typeof error === "object" && "code" in error && error.code === "P2002") {
//       const target =
//         "meta" in error && error.meta && typeof error.meta === "object" && "target" in error.meta
//           ? error.meta.target
//           : undefined;

//       if (Array.isArray(target) && target.includes("email")) {
//         throw new Error("An account with this email address already exists.");
//       }

//       if (Array.isArray(target) && target.includes("mobile")) {
//         throw new Error("An account with this mobile number already exists.");
//       }

//       throw new Error("An account with these details already exists.");
//     }

//     throw error;
//   }
// }

// /**
//  * Authenticate an existing user
//  */
// export async function loginUser(input: LoginFormData) {
//   // ---------------------------------------------
//   // 1. Validate input
//   // ---------------------------------------------

//   const validatedData = loginSchema.parse(input);

//   const email = validatedData.email.toLowerCase().trim();

//   const { password } = validatedData;

//   // ---------------------------------------------
//   // 2. Find user
//   // ---------------------------------------------

//   const user = await findUserByEmail(email);

//   if (!user) {
//     throw new Error("Invalid email or password.");
//   }

//   // ---------------------------------------------
//   // 3. Check account status
//   // ---------------------------------------------

//   if (!user.isActive) {
//     throw new Error("Your account has been deactivated. Please contact support.");
//   }

//   // ---------------------------------------------
//   // 4. Verify password
//   // ---------------------------------------------

//   const passwordValid = await bcrypt.compare(password, user.passwordHash);

//   if (!passwordValid) {
//     throw new Error("Invalid email or password.");
//   }

//   // ---------------------------------------------
//   // 5. Create JWT payload
//   // ---------------------------------------------

//   const tokenPayload = {
//     userId: user.id,
//     email: user.email,
//     role: user.role,
//   };

//   // ---------------------------------------------
//   // 6. Generate JWT tokens
//   // ---------------------------------------------

//   const accessToken = await createAccessToken(tokenPayload);

//   const refreshToken = await createRefreshToken(tokenPayload);

//   // ---------------------------------------------
//   // 7. Store tokens in HTTP-only cookies
//   // ---------------------------------------------

//   const cookieStore = await cookies();

//   console.log("=================================");
//   console.log("LOGIN COOKIE DEBUG");
//   console.log("Before setting cookies:");
//   console.log(await cookieStore.getAll());
//   console.log("=================================");

//   cookieStore.set({
//     name: ACCESS_TOKEN_COOKIE,
//     value: accessToken,
//     httpOnly: true,
//     secure: process.env.NODE_ENV === "production",
//     sameSite: "lax",
//     path: "/",
//     maxAge: 60 * 15, // 15 minutes
//   });

//   cookieStore.set({
//     name: REFRESH_TOKEN_COOKIE,
//     value: refreshToken,
//     httpOnly: true,
//     secure: process.env.NODE_ENV === "production",
//     sameSite: "lax",
//     path: "/",
//     maxAge: 60 * 60 * 24 * 30, // 30 days
//   });

//   console.log("=================================");
//   console.log("LOGIN COOKIE DEBUG");
//   console.log("After setting cookies:");
//   console.log(await cookieStore.getAll());
//   console.log("=================================");

//   // ---------------------------------------------
//   // 8. Return safe user object
//   // ---------------------------------------------

//   return {
//     user: {
//       id: user.id,
//       firstname: user.firstname,
//       middlename: user.middlename,
//       lastname: user.lastname,
//       email: user.email,
//       role: user.role,
//       isActive: user.isActive,
//       emailVerified: user.emailVerified,
//       profileCompleted: user.profileCompleted,
//     },
//   };
// }

// /**
//  * Get a user by user ID
//  */
// export async function getCurrentUser(userId: string) {
//   const user = await findUserById(userId);

//   if (!user) {
//     throw new Error("User not found");
//   }

//   if (!user.isActive) {
//     throw new Error("User account is inactive.");
//   }

//   return {
//     id: user.id,
//     firstname: user.firstname,
//     middlename: user.middlename,
//     lastname: user.lastname,
//     email: user.email,
//     role: user.role,
//     isActive: user.isActive,
//     emailVerified: user.emailVerified,
//     profileCompleted: user.profileCompleted,
//     createdAt: user.createdAt,
//     updatedAt: user.updatedAt,
//   };
// }

// /**
//  * Get the currently authenticated user
//  *
//  * Reads the access_token HTTP-only cookie,
//  * verifies the JWT, and loads the user from the database.
//  */
// export async function getAuthenticatedUser() {
//   const cookieStore = await cookies();

//   const accessToken = cookieStore.get(ACCESS_TOKEN_COOKIE)?.value;

//   // No access token means the user is not authenticated
//   if (!accessToken) {
//     return null;
//   }

//   try {
//     // Verify JWT
//     const payload = await verifyAccessToken(accessToken);

//     // Make sure userId exists
//     if (!payload.userId) {
//       return null;
//     }

//     // Load current user from database
//     return await getCurrentUser(payload.userId);
//   } catch (error) {
//     console.error("Authentication error:", error);

//     return null;
//   }
// }

//updated code

import "server-only";

import bcrypt from "bcryptjs";
import { cookies } from "next/headers";

import { prisma } from "@/lib/prisma";

import { createUser, findUserByEmail, findUserByMobile } from "@/repositories/auth.repository";

import { createAccessToken, createRefreshToken, verifyAccessToken } from "@/lib/jwt";

import { loginSchema, type LoginFormData } from "@/schemas/login.schema";

import { registerSchema, type RegisterFormData } from "@/schemas/register.schema";

// =========================================================
// CONSTANTS
// =========================================================

const SALT_ROUNDS = 12;

const ACCESS_TOKEN_COOKIE = "access_token";
const REFRESH_TOKEN_COOKIE = "refresh_token";

const ACCESS_TOKEN_MAX_AGE = 60 * 15; // 15 minutes

const REMEMBER_ME_REFRESH_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

// =========================================================
// REGISTER USER
// =========================================================

export async function registerUser(input: RegisterFormData) {
  const validatedData = registerSchema.parse(input);

  const { firstname, middlename, lastname, email, password, country, mobile } = validatedData;

  const normalizedEmail = email.toLowerCase().trim();
  const normalizedMobile = mobile.trim();

  // ---------------------------------------------------------
  // Check existing email
  // ---------------------------------------------------------

  const existingEmailUser = await findUserByEmail(normalizedEmail);

  if (existingEmailUser) {
    throw new Error("An account with this email address already exists.");
  }

  // ---------------------------------------------------------
  // Check existing mobile
  // ---------------------------------------------------------

  const existingMobileUser = await findUserByMobile(normalizedMobile);

  if (existingMobileUser) {
    throw new Error("An account with this mobile number already exists.");
  }

  // ---------------------------------------------------------
  // Hash password
  // ---------------------------------------------------------

  const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);

  // ---------------------------------------------------------
  // Create user
  // ---------------------------------------------------------

  try {
    const user = await createUser({
      firstname,
      middlename: middlename || null,
      lastname,
      email: normalizedEmail,
      country: country || null,
      passwordHash,
      mobile: normalizedMobile,
      role: "STUDENT",
    });

    return user;
  } catch (error: unknown) {
    if (error && typeof error === "object" && "code" in error && error.code === "P2002") {
      const target =
        "meta" in error && error.meta && typeof error.meta === "object" && "target" in error.meta
          ? error.meta.target
          : undefined;

      if (Array.isArray(target) && target.includes("email")) {
        throw new Error("An account with this email address already exists.");
      }

      if (Array.isArray(target) && target.includes("mobile")) {
        throw new Error("An account with this mobile number already exists.");
      }

      throw new Error("An account with these details already exists.");
    }

    throw error;
  }
}

// =========================================================
// LOGIN USER
// =========================================================

export async function loginUser(input: LoginFormData) {
  const validatedData = loginSchema.parse(input);

  const email = validatedData.email.toLowerCase().trim();

  const password = validatedData.password;

  const rememberMe = validatedData.rememberMe;

  // ---------------------------------------------------------
  // Find user
  // ---------------------------------------------------------

  const user = await findUserByEmail(email);

  if (!user) {
    throw new Error("Invalid email or password.");
  }

  // ---------------------------------------------------------
  // Check active status
  // ---------------------------------------------------------

  if (!user.isActive) {
    throw new Error("Your account has been deactivated. Please contact support.");
  }

  // ---------------------------------------------------------
  // Validate password
  // ---------------------------------------------------------

  const passwordValid = await bcrypt.compare(password, user.passwordHash);

  if (!passwordValid) {
    throw new Error("Invalid email or password.");
  }

  // ---------------------------------------------------------
  // JWT payload
  // ---------------------------------------------------------

  const tokenPayload = {
    userId: user.id,
    email: user.email,
    role: user.role,
  };

  // ---------------------------------------------------------
  // Create tokens
  // ---------------------------------------------------------

  const accessToken = await createAccessToken(tokenPayload);

  const refreshToken = await createRefreshToken(tokenPayload);

  // ---------------------------------------------------------
  // Cookies
  // ---------------------------------------------------------

  const cookieStore = await cookies();

  // Access token
  cookieStore.set({
    name: ACCESS_TOKEN_COOKIE,
    value: accessToken,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: ACCESS_TOKEN_MAX_AGE,
  });

  // Refresh token
  if (rememberMe) {
    cookieStore.set({
      name: REFRESH_TOKEN_COOKIE,
      value: refreshToken,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: REMEMBER_ME_REFRESH_MAX_AGE,
    });
  } else {
    cookieStore.set({
      name: REFRESH_TOKEN_COOKIE,
      value: refreshToken,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
    });
  }

  // ---------------------------------------------------------
  // Return safe user
  // ---------------------------------------------------------

  return {
    user: {
      id: user.id,
      firstname: user.firstname,
      middlename: user.middlename,
      lastname: user.lastname,
      email: user.email,
      role: user.role,
      isActive: user.isActive,
      emailVerified: user.emailVerified,
      profileCompleted: user.profileCompleted,
    },
  };
}

// =========================================================
// GET CURRENT USER
// =========================================================
//
// IMPORTANT:
//
// This method intentionally reads the user directly from
// Prisma instead of findUserById().
//
// This guarantees that Profile View/Edit receives the
// latest database values including profile fields.
//
// =========================================================

export async function getCurrentUser(userId: string) {
  if (!userId) {
    return null;
  }

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },

    select: {
      id: true,

      firstname: true,
      middlename: true,
      lastname: true,

      email: true,

      mobile: true,

      country: true,

      profileImage: true,

      dateOfBirth: true,

      gender: true,

      address: true,

      city: true,

      state: true,

      postalCode: true,

      role: true,

      isActive: true,

      emailVerified: true,

      profileCompleted: true,

      createdAt: true,

      updatedAt: true,
    },
  });

  if (!user) {
    return null;
  }

  if (!user.isActive) {
    return null;
  }

  return user;
}

// =========================================================
// GET AUTHENTICATED USER
// =========================================================

export async function getAuthenticatedUser() {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get(ACCESS_TOKEN_COOKIE)?.value;

  // ---------------------------------------------------------
  // No access token
  // ---------------------------------------------------------

  if (!accessToken) {
    console.log("getAuthenticatedUser: access token not found");

    return null;
  }

  try {
    // -------------------------------------------------------
    // Verify access token
    // -------------------------------------------------------

    const payload = await verifyAccessToken(accessToken);

    if (!payload?.userId) {
      console.log("getAuthenticatedUser: userId not found in token");

      return null;
    }

    // -------------------------------------------------------
    // ALWAYS get latest data from DB
    // -------------------------------------------------------

    const user = await getCurrentUser(payload.userId);

    if (!user) {
      console.log("getAuthenticatedUser: user not found", payload.userId);

      return null;
    }

    console.log("getAuthenticatedUser: fresh database user", {
      id: user.id,
      firstname: user.firstname,
      middlename: user.middlename,
      lastname: user.lastname,
      mobile: user.mobile,
      country: user.country,
      profileImage: user.profileImage,
      dateOfBirth: user.dateOfBirth,
      gender: user.gender,
      address: user.address,
      city: user.city,
      state: user.state,
      postalCode: user.postalCode,
    });

    return user;
  } catch (error) {
    console.error("getAuthenticatedUser authentication error:", error);

    return null;
  }
}
