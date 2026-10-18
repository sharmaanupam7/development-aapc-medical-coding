// "use server";

// import { loginUser, registerUser } from "@/services/auth.service";
// import { cookies } from "next/headers";

// export async function loginAction(formData: FormData) {
//   const email = String(formData.get("email") || "").trim();
//   const password = String(formData.get("password") || "");
//   const rememberMe = formData.get("rememberMe") === "true";

//   const errors: {
//     email?: string;
//     password?: string;
//   } = {};

//   // ---------------------------------------------
//   // Basic field validation
//   // ---------------------------------------------

//   if (!email) {
//     errors.email = "Email is required.";
//   }

//   if (!password) {
//     errors.password = "Password is required.";
//   }

//   if (Object.keys(errors).length > 0) {
//     return {
//       success: false,
//       errors,
//     };
//   }

//   try {
//     // ---------------------------------------------
//     // Login
//     // ---------------------------------------------

//     const result = await loginUser({
//       email,
//       password,
//     });

//     return {
//       success: true,
//       message: "Login successful.",
//       user: result.user,
//       errors: {},
//     };
//   } catch (error) {
//     console.error("Login error:", error);

//     const message = error instanceof Error ? error.message : "Invalid email address or password.";

//     return {
//       success: false,
//       errors: {
//         password: message,
//       },
//     };
//   }
// }

// export async function registerAction(formData: FormData) {
//   const firstname = String(formData.get("firstname") || "").trim();

//   const middlename = String(formData.get("middlename") || "").trim();

//   const lastname = String(formData.get("lastname") || "").trim();

//   const email = String(formData.get("email") || "").trim();

//   const password = String(formData.get("password") || "");

//   const confirmPassword = String(formData.get("confirmPassword") || "");

//   const country = String(formData.get("country") || "").trim();

//   const mobile = String(formData.get("mobile") || "").trim();

//   // ---------------------------------------------
//   // Basic validation
//   // ---------------------------------------------

//   if (!firstname || !lastname || !email || !password || !confirmPassword) {
//     return {
//       success: false,
//       message: "Please fill in all required fields.",
//     };
//   }

//   try {
//     // ---------------------------------------------
//     // Register
//     // ---------------------------------------------

//     const user = await registerUser({
//       firstname,
//       middlename: middlename || undefined,
//       lastname,
//       email,
//       password,
//       confirmPassword,
//       country,
//       mobile,
//     });

//     return {
//       success: true,
//       message: "Registration successful.",
//       userId: user.id,
//     };
//   } catch (error) {
//     console.error("Registration error:", error);

//     return {
//       success: false,
//       message: error instanceof Error ? error.message : "Unable to create your account.",
//     };
//   }
// }

// export async function logoutAction() {
//   const cookieStore = await cookies();

//   cookieStore.delete("access_token");
//   cookieStore.delete("refresh_token");

//   return {
//     success: true,
//   };
// }

//updated code

"use server";

import { loginUser, registerUser } from "@/services/auth.service";
import { cookies } from "next/headers";

export async function loginAction(formData: FormData) {
  const email = String(formData.get("email") || "").trim();
  const password = String(formData.get("password") || "");

  // Checkbox should submit "true" when checked
  const rememberMe = formData.get("rememberMe") === "true";

  const errors: {
    email?: string;
    password?: string;
  } = {};

  // ---------------------------------------------
  // Basic field validation
  // ---------------------------------------------

  if (!email) {
    errors.email = "Email is required.";
  }

  if (!password) {
    errors.password = "Password is required.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      errors,
    };
  }

  try {
    // ---------------------------------------------
    // Login
    // ---------------------------------------------

    const result = await loginUser({
      email,
      password,
      rememberMe,
    });

    return {
      success: true,
      message: "Login successful.",
      user: result.user,
      errors: {},
    };
  } catch (error) {
    console.error("Login error:", error);

    const message = error instanceof Error ? error.message : "Invalid email address or password.";

    return {
      success: false,
      errors: {
        password: message,
      },
    };
  }
}

export async function registerAction(formData: FormData) {
  const firstname = String(formData.get("firstname") || "").trim();
  const middlename = String(formData.get("middlename") || "").trim();
  const lastname = String(formData.get("lastname") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const password = String(formData.get("password") || "");
  const confirmPassword = String(formData.get("confirmPassword") || "");
  const country = String(formData.get("country") || "").trim();
  const mobile = String(formData.get("mobile") || "").trim();

  // ---------------------------------------------
  // Basic validation
  // ---------------------------------------------

  if (!firstname || !lastname || !email || !password || !confirmPassword) {
    return {
      success: false,
      message: "Please fill in all required fields.",
    };
  }

  try {
    // ---------------------------------------------
    // Register
    // ---------------------------------------------

    const user = await registerUser({
      firstname,
      middlename: middlename || undefined,
      lastname,
      email,
      password,
      confirmPassword,
      country,
      mobile,
    });

    return {
      success: true,
      message: "Registration successful.",
      userId: user.id,
    };
  } catch (error) {
    console.error("Registration error:", error);

    return {
      success: false,
      message: error instanceof Error ? error.message : "Unable to create your account.",
    };
  }
}

export async function logoutAction() {
  const cookieStore = await cookies();

  cookieStore.delete("access_token");
  cookieStore.delete("refresh_token");

  return {
    success: true,
  };
}
