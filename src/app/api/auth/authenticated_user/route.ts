// actual code
// import { NextResponse } from "next/server";

// import { getAuthenticatedUser } from "@/services/auth.service";

// export async function GET() {
//   try {
//     const user = await getAuthenticatedUser();

//     if (!user) {
//       return NextResponse.json({ user: null }, { status: 401 });
//     }

//     return NextResponse.json({ user }, { status: 200 });
//   } catch (error) {
//     console.error("GET /api/auth/authenticated user error:", error);

//     return NextResponse.json({ user: null }, { status: 401 });
//   }
// }

// test code

import { NextResponse } from "next/server";

import { getAuthenticatedUser } from "@/services/auth.service";

export async function GET() {
  try {
    const user = await getAuthenticatedUser();

    console.log("=================================");
    console.log("AUTHENTICATED USER API");
    console.log("User returned:", user);
    console.log("=================================");

    if (!user) {
      return NextResponse.json({ user: null, message: "User is not authenticated" }, { status: 401 });
    }

    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    console.error("GET /api/auth/authenticated_user error:", error);

    return NextResponse.json(
      {
        user: null,
        message: "Authentication failed",
      },
      { status: 401 },
    );
  }
}