// import "server-only";

// import { SignJWT, jwtVerify, type JWTPayload } from "jose";

// const secret = process.env.JWT_SECRET;

// if (!secret) {
//   throw new Error("JWT_SECRET is not configured");
// }

// const JWT_SECRET = new TextEncoder().encode(secret);

// // --------------------------------------------------
// // Token Payload
// // --------------------------------------------------

// export interface AccessTokenPayload {
//   userId: string;
//   email: string;
//   role: string;
// }

// // --------------------------------------------------
// // Create Access Token
// // --------------------------------------------------

// export async function createAccessToken(payload: AccessTokenPayload) {
//   return new SignJWT({
//     userId: payload.userId,
//     email: payload.email,
//     role: payload.role,
//     type: "access",
//   })
//     .setProtectedHeader({
//       alg: "HS256",
//     })
//     .setIssuedAt()
//     .setExpirationTime("15m")
//     .sign(JWT_SECRET);
// }

// // --------------------------------------------------
// // Create Refresh Token
// // --------------------------------------------------

// export async function createRefreshToken(payload: AccessTokenPayload) {
//   return new SignJWT({
//     userId: payload.userId,
//     email: payload.email,
//     role: payload.role,
//     type: "refresh",
//   })
//     .setProtectedHeader({
//       alg: "HS256",
//     })
//     .setIssuedAt()
//     .setExpirationTime("7d")
//     .sign(JWT_SECRET);
// }

// // --------------------------------------------------
// // Verify JWT
// // --------------------------------------------------

// export async function verifyToken(token: string): Promise<JWTPayload> {
//   const { payload } = await jwtVerify(token, JWT_SECRET, {
//     algorithms: ["HS256"],
//   });

//   return payload;
// }

// // --------------------------------------------------
// // Verify Access Token
// // --------------------------------------------------

// export async function verifyAccessToken(token: string): Promise<AccessTokenPayload> {
//   const payload = await verifyToken(token);

//   if (payload.type !== "access") {
//     throw new Error("Invalid access token.");
//   }

//   if (typeof payload.userId !== "string" || typeof payload.email !== "string" || typeof payload.role !== "string") {
//     throw new Error("Invalid access token payload.");
//   }

//   return {
//     userId: payload.userId,
//     email: payload.email,
//     role: payload.role,
//   };
// }

// // --------------------------------------------------
// // Verify Refresh Token
// // --------------------------------------------------

// export async function verifyRefreshToken(token: string): Promise<AccessTokenPayload> {
//   const payload = await verifyToken(token);

//   if (payload.type !== "refresh") {
//     throw new Error("Invalid refresh token.");
//   }

//   if (typeof payload.userId !== "string" || typeof payload.email !== "string" || typeof payload.role !== "string") {
//     throw new Error("Invalid refresh token payload.");
//   }

//   return {
//     userId: payload.userId,
//     email: payload.email,
//     role: payload.role,
//   };
// }

// updated code

import "server-only";

import { SignJWT, jwtVerify, type JWTPayload } from "jose";

const secret = process.env.JWT_SECRET;

if (!secret) {
  throw new Error("JWT_SECRET is not configured");
}

const JWT_SECRET = new TextEncoder().encode(secret);

// --------------------------------------------------
// Token Payload
// --------------------------------------------------

export interface AccessTokenPayload {
  userId: string;
  email: string;
  role: string;
}

// --------------------------------------------------
// Create Access Token
// --------------------------------------------------

export async function createAccessToken(payload: AccessTokenPayload) {
  return new SignJWT({
    userId: payload.userId,
    email: payload.email,
    role: payload.role,
    type: "access",
  })
    .setProtectedHeader({
      alg: "HS256",
    })
    .setIssuedAt()
    .setExpirationTime("15m")
    .sign(JWT_SECRET);
}

// --------------------------------------------------
// Create Refresh Token
//
// Remember Me = true
//     → 30 days
//
// Remember Me = false
//     → 7 days
// --------------------------------------------------

export async function createRefreshToken(payload: AccessTokenPayload, rememberMe = false) {
  const expiresIn = rememberMe ? "30d" : "7d";

  return new SignJWT({
    userId: payload.userId,
    email: payload.email,
    role: payload.role,
    type: "refresh",
  })
    .setProtectedHeader({
      alg: "HS256",
    })
    .setIssuedAt()
    .setExpirationTime(expiresIn)
    .sign(JWT_SECRET);
}

// --------------------------------------------------
// Verify JWT
// --------------------------------------------------

export async function verifyToken(token: string): Promise<JWTPayload> {
  const { payload } = await jwtVerify(token, JWT_SECRET, {
    algorithms: ["HS256"],
  });

  return payload;
}

// --------------------------------------------------
// Verify Access Token
// --------------------------------------------------

export async function verifyAccessToken(token: string): Promise<AccessTokenPayload> {
  const payload = await verifyToken(token);

  if (payload.type !== "access") {
    throw new Error("Invalid access token.");
  }

  if (typeof payload.userId !== "string" || typeof payload.email !== "string" || typeof payload.role !== "string") {
    throw new Error("Invalid access token payload.");
  }

  return {
    userId: payload.userId,
    email: payload.email,
    role: payload.role,
  };
}

// --------------------------------------------------
// Verify Refresh Token
// --------------------------------------------------

export async function verifyRefreshToken(token: string): Promise<AccessTokenPayload> {
  const payload = await verifyToken(token);

  if (payload.type !== "refresh") {
    throw new Error("Invalid refresh token.");
  }

  if (typeof payload.userId !== "string" || typeof payload.email !== "string" || typeof payload.role !== "string") {
    throw new Error("Invalid refresh token payload.");
  }

  return {
    userId: payload.userId,
    email: payload.email,
    role: payload.role,
  };
}
