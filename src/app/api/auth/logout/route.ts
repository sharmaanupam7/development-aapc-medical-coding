// import { NextResponse } from "next/server";

// const ACCESS_TOKEN_COOKIE = "access_token";
// const REFRESH_TOKEN_COOKIE = "refresh_token";

// export async function POST() {
//   const response = NextResponse.json({ success: true }, { status: 200 });

//   response.cookies.set({
//     name: ACCESS_TOKEN_COOKIE,
//     value: "",
//     httpOnly: true,
//     secure: process.env.NODE_ENV === "production",
//     sameSite: "lax",
//     path: "/",
//     maxAge: 0,
//   });

//   response.cookies.set({
//     name: REFRESH_TOKEN_COOKIE,
//     value: "",
//     httpOnly: true,
//     secure: process.env.NODE_ENV === "production",
//     sameSite: "lax",
//     path: "/",
//     maxAge: 0,
//   });

//   return response;
// }

//updated code

import { NextResponse } from "next/server";

const ACCESS_TOKEN_COOKIE = "access_token";
const REFRESH_TOKEN_COOKIE = "refresh_token";

export async function POST() {
  const response = NextResponse.json({ success: true }, { status: 200 });

  response.cookies.set({
    name: ACCESS_TOKEN_COOKIE,
    value: "",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });

  response.cookies.set({
    name: REFRESH_TOKEN_COOKIE,
    value: "",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });

  return response;
}
