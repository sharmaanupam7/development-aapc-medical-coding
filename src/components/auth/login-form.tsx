// code without background image
// "use client";

// import Link from "next/link";
// import { useEffect, useRef, useState } from "react";
// import { useRouter } from "next/navigation";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";

// import { loginAction } from "@/actions/auth.actions";
// import { loginSchema, type LoginFormData } from "@/schemas/login.schema";

// type LoginField = keyof LoginFormData;

// export default function LoginForm() {
//   const router = useRouter();

//   const [loading, setLoading] = useState(false);

//   /*
//    * Field currently having focus.
//    *
//    * Before submit:
//    * - Only the focused field's validation error is visible.
//    */
//   const [focusedField, setFocusedField] = useState<LoginField | null>(null);

//   /*
//    * Once Login is clicked:
//    * - All validation errors become visible.
//    */
//   const [submitAttempted, setSubmitAttempted] = useState(false);

//   const emailInputRef = useRef<HTMLInputElement>(null);

//   // ============================================================
//   // React Hook Form
//   // ============================================================

//   const {
//     register,
//     handleSubmit,
//     setFocus,
//     clearErrors,
//     setError,
//     formState: { errors },
//   } = useForm<z.input<typeof loginSchema>, unknown, LoginFormData>({
//     resolver: zodResolver(loginSchema),

//     defaultValues: {
//       email: "",
//       password: "",
//       rememberMe: false,
//     },

//     /*
//      * Validate while typing.
//      */
//     mode: "onChange",

//     /*
//      * Continue validating while typing
//      * after an error already exists.
//      */
//     reValidateMode: "onChange",

//     /*
//      * When submit fails, RHF will focus
//      * the first invalid field.
//      */
//     shouldFocusError: true,
//   });

//   // ============================================================
//   // Initial Focus
//   // ============================================================

//   useEffect(() => {
//     emailInputRef.current?.focus();
//     setFocus("email");
//     setFocusedField("email");
//   }, [setFocus]);

//   // ============================================================
//   // Field Focus
//   // ============================================================

//   function handleFieldFocus(field: LoginField) {
//     setFocusedField(field);
//   }

//   // ============================================================
//   // Field Blur
//   // ============================================================

//   function handleFieldBlur(field: LoginField) {
//     /*
//      * IMPORTANT:
//      *
//      * Do not clear the RHF error.
//      *
//      * We only hide it before submit by changing
//      * focusedField.
//      *
//      * When the user focuses again, the same error
//      * becomes visible.
//      */
//     setFocusedField(null);
//   }

//   // ============================================================
//   // Get Visible Error
//   // ============================================================

//   function getFieldError(field: LoginField) {
//     /*
//      * AFTER LOGIN BUTTON IS CLICKED:
//      *
//      * Show ALL validation errors.
//      */
//     if (submitAttempted) {
//       return errors[field]?.message;
//     }

//     /*
//      * BEFORE SUBMIT:
//      *
//      * Only show the error for the field
//      * currently being edited/focused.
//      */
//     if (focusedField !== field) {
//       return undefined;
//     }

//     return errors[field]?.message;
//   }

//   // ============================================================
//   // Submit - Valid
//   // ============================================================

//   async function handleLoginSubmit(data: LoginFormData) {
//     /*
//      * Client-side validation has passed.
//      *
//      * Keep submitAttempted true because if the
//      * server authentication fails, the server
//      * error should remain visible.
//      */
//     setSubmitAttempted(true);

//     setLoading(true);

//     try {
//       // --------------------------------------------------------
//       // Create FormData
//       // --------------------------------------------------------

//       const formData = new FormData();

//       formData.append("email", data.email.trim());
//       formData.append("password", data.password);
//       formData.append("rememberMe", data.rememberMe ? "true" : "false");

//       // --------------------------------------------------------
//       // Login Server Action
//       // --------------------------------------------------------

//       const result = await loginAction(formData);

//       // --------------------------------------------------------
//       // Authentication Failed
//       // --------------------------------------------------------

//       if (!result?.success) {
//         setError("password", {
//           type: "server",
//           message: result?.message ?? "Invalid email address or password.",
//         });

//         /*
//          * Keep password error visible.
//          */
//         setFocusedField("password");

//         return;
//       }

//       // --------------------------------------------------------
//       // Login Successful
//       // --------------------------------------------------------

//       router.replace("/student/dashboard");
//       router.refresh();
//     } catch (error) {
//       console.error("Login error:", error);

//       setError("password", {
//         type: "server",
//         message: "Unable to login. Please try again.",
//       });

//       setFocusedField("password");
//     } finally {
//       setLoading(false);
//     }
//   }

//   // ============================================================
//   // Submit - Invalid
//   // ============================================================

//   function handleInvalidSubmit() {
//     /*
//      * IMPORTANT:
//      *
//      * User clicked Login with an invalid form.
//      *
//      * From this point onward ALL invalid fields
//      * must show their validation errors.
//      */
//     setSubmitAttempted(true);
//   }

//   // ============================================================
//   // Register Fields
//   // ============================================================

//   const emailField = register("email");

//   const passwordField = register("password");

//   const rememberMeField = register("rememberMe");

//   // ============================================================
//   // Visible Errors
//   // ============================================================

//   const emailError = getFieldError("email");

//   const passwordError = getFieldError("password");

//   // ============================================================
//   // Render
//   // ============================================================

//   return (
//     <main className="min-h-[calc(100vh-80px)] bg-slate-50 px-4 py-6 sm:px-6">
//       <div className="mx-auto flex min-h-[calc(100vh-128px)] max-w-5xl items-center justify-center">
//         <div
//           className="
//             w-full
//             max-w-md
//             border
//             border-slate-200
//             bg-white
//             px-6
//             py-6
//             shadow-[0_8px_30px_rgba(15,23,42,0.10)]
//             sm:px-8
//           "
//         >
//           {/* =====================================================
//               Heading
//           ====================================================== */}

//           <div className="mb-6 text-center">
//             <h1 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">LOGIN</h1>
//           </div>

//           {/* =====================================================
//               Login Form
//           ====================================================== */}

//           <form onSubmit={handleSubmit(handleLoginSubmit, handleInvalidSubmit)} className="space-y-3" noValidate>
//             {/* =================================================
//                 Email
//             ================================================== */}

//             <div>
//               <label htmlFor="email" className="mb-1 block text-xs font-medium text-slate-700">
//                 Email Address
//                 <span className="text-red-500">*</span>
//               </label>

//               <input
//                 id="email"
//                 type="email"
//                 autoComplete="email"
//                 autoFocus
//                 placeholder="Enter your email address"
//                 disabled={loading}
//                 ref={(element) => {
//                   emailInputRef.current = element;
//                   emailField.ref(element);
//                 }}
//                 name={emailField.name}
//                 onChange={(event) => {
//                   /*
//                    * Let React Hook Form handle validation.
//                    */
//                   emailField.onChange(event);

//                   /*
//                    * After submit, when the user starts
//                    * correcting email, remove ONLY the
//                    * email error.
//                    */
//                   if (submitAttempted) {
//                     clearErrors("email");
//                   }
//                 }}
//                 onFocus={() => {
//                   handleFieldFocus("email");
//                 }}
//                 onBlur={(event) => {
//                   emailField.onBlur(event);
//                   handleFieldBlur("email");
//                 }}
//                 className={`
//                   h-10
//                   w-full
//                   border
//                   bg-white
//                   px-3
//                   text-sm
//                   text-slate-900
//                   outline-none
//                   transition
//                   placeholder:text-slate-400
//                   focus:ring-2
//                   disabled:cursor-not-allowed
//                   disabled:bg-slate-100
//                   ${
//                     emailError
//                       ? "border-red-500 focus:border-red-500 focus:ring-red-500/10"
//                       : "border-slate-300 focus:border-teal-500 focus:ring-teal-500/10"
//                   }
//                 `}
//               />

//               {/* Email Validation Error */}

//               {emailError && <p className="mt-1 text-xs text-red-500">{emailError}</p>}
//             </div>

//             {/* =================================================
//                 Password
//             ================================================== */}

//             <div>
//               <label htmlFor="password" className="mb-1 block text-xs font-medium text-slate-700">
//                 Password
//                 <span className="text-red-500">*</span>
//               </label>

//               <input
//                 id="password"
//                 type="password"
//                 autoComplete="current-password"
//                 placeholder="Enter your password"
//                 disabled={loading}
//                 {...passwordField}
//                 onChange={(event) => {
//                   /*
//                    * Let React Hook Form handle validation.
//                    */
//                   passwordField.onChange(event);

//                   /*
//                    * After submit, when the user starts
//                    * correcting password, remove ONLY the
//                    * password error.
//                    */
//                   if (submitAttempted) {
//                     clearErrors("password");
//                   }
//                 }}
//                 onFocus={() => {
//                   handleFieldFocus("password");
//                 }}
//                 onBlur={(event) => {
//                   passwordField.onBlur(event);
//                   handleFieldBlur("password");
//                 }}
//                 className={`
//                   h-10
//                   w-full
//                   border
//                   bg-white
//                   px-3
//                   text-sm
//                   text-slate-900
//                   outline-none
//                   transition
//                   placeholder:text-slate-400
//                   focus:ring-2
//                   disabled:cursor-not-allowed
//                   disabled:bg-slate-100
//                   ${
//                     passwordError
//                       ? "border-red-500 focus:border-red-500 focus:ring-red-500/10"
//                       : "border-slate-300 focus:border-teal-500 focus:ring-teal-500/10"
//                   }
//                 `}
//               />

//               {/* Password Validation / Server Error */}

//               {passwordError && <p className="mt-1 text-xs text-red-500">{passwordError}</p>}
//             </div>

//             {/* =================================================
//                 Remember Me + Forgot Password
//             ================================================== */}

//             <div className="flex items-center justify-between pt-1">
//               <label className="flex cursor-pointer items-center gap-2 text-xs text-slate-600">
//                 <input type="checkbox" {...rememberMeField} className="h-4 w-4 accent-teal-600" disabled={loading} />

//                 <span>Remember me</span>
//               </label>

//               <Link
//                 href="/forgot-password"
//                 className="
//                   text-xs
//                   font-medium
//                   text-teal-600
//                   transition
//                   hover:text-teal-700
//                   hover:underline
//                 "
//               >
//                 Forgot Password?
//               </Link>
//             </div>

//             {/* =================================================
//                 Login Button
//             ================================================== */}

//             <button
//               type="submit"
//               disabled={loading}
//               className="
//                 mt-2
//                 h-10
//                 w-full
//                 cursor-pointer
//                 bg-teal-600
//                 px-4
//                 text-sm
//                 font-semibold
//                 text-white
//                 shadow-md
//                 shadow-teal-600/20
//                 transition
//                 hover:bg-teal-700
//                 disabled:cursor-not-allowed
//                 disabled:opacity-60
//               "
//             >
//               {loading ? "Signing In..." : "Login"}
//             </button>
//           </form>

//           {/* =====================================================
//               Register
//           ====================================================== */}

//           <div className="mt-4 text-center text-xs text-slate-600">
//             Don't have an account?{" "}
//             <Link href="/register" className="font-semibold text-teal-600 hover:text-teal-700">
//               Sign Up
//             </Link>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

// "use client";

// import Link from "next/link";
// import { useEffect, useRef, useState } from "react";
// import { useRouter } from "next/navigation";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";

// import { loginAction } from "@/actions/auth.actions";
// import { loginSchema, type LoginFormData } from "@/schemas/login.schema";

// type LoginField = keyof LoginFormData;

// export default function LoginForm() {
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);

//   /*
//    * Field currently having focus.
//    *
//    * Before submit:
//    * - Only the focused field's validation error is visible.
//    */
//   const [focusedField, setFocusedField] = useState<LoginField | null>(null);

//   /*
//    * Once Login is clicked:
//    * - All validation errors become visible.
//    */
//   const [submitAttempted, setSubmitAttempted] = useState(false);

//   const emailInputRef = useRef<HTMLInputElement>(null);

//   // ============================================================
//   // React Hook Form
//   // ============================================================

//   const {
//     register,
//     handleSubmit,
//     setFocus,
//     clearErrors,
//     setError,
//     formState: { errors },
//   } = useForm<z.input<typeof loginSchema>, unknown, LoginFormData>({
//     resolver: zodResolver(loginSchema),

//     defaultValues: {
//       email: TEST_LOGIN.email,
//       password: TEST_LOGIN.password,
//       rememberMe: false,
//     },

//     /*
//      * Validate while typing.
//      */
//     mode: "onChange",

//     /*
//      * Continue validating while typing
//      * after an error already exists.
//      */
//     reValidateMode: "onChange",

//     /*
//      * When submit fails, RHF will focus
//      * the first invalid field.
//      */
//     shouldFocusError: true,
//   });

//   // ============================================================
//   // Initial Focus
//   // ============================================================

//   useEffect(() => {
//     emailInputRef.current?.focus();
//     setFocus("email");
//     setFocusedField("email");
//   }, [setFocus]);

//   // ============================================================
//   // Field Focus
//   // ============================================================

//   function handleFieldFocus(field: LoginField) {
//     setFocusedField(field);
//   }

//   // ============================================================
//   // Field Blur
//   // ============================================================

//   function handleFieldBlur(field: LoginField) {
//     /*
//      * IMPORTANT:
//      *
//      * Do not clear the RHF error.
//      *
//      * We only hide it before submit by changing
//      * focusedField.
//      *
//      * When the user focuses again, the same error
//      * becomes visible.
//      */
//     setFocusedField(null);
//   }

//   // ============================================================
//   // Get Visible Error
//   // ============================================================

//   function getFieldError(field: LoginField) {
//     /*
//      * AFTER LOGIN BUTTON IS CLICKED:
//      *
//      * Show ALL validation errors.
//      */
//     if (submitAttempted) {
//       return errors[field]?.message;
//     }

//     /*
//      * BEFORE SUBMIT:
//      *
//      * Only show the error for the field
//      * currently being edited/focused.
//      */
//     if (focusedField !== field) {
//       return undefined;
//     }

//     return errors[field]?.message;
//   }

//   // ============================================================
//   // Submit - Valid
//   // ============================================================

//   async function handleLoginSubmit(data: LoginFormData) {
//     /*
//      * Client-side validation has passed.
//      *
//      * Keep submitAttempted true because if the
//      * server authentication fails, the server
//      * error should remain visible.
//      */
//     setSubmitAttempted(true);

//     setLoading(true);

//     try {
//       // --------------------------------------------------------
//       // Create FormData
//       // --------------------------------------------------------

//       const formData = new FormData();

//       formData.append("email", data.email.trim());
//       formData.append("password", data.password);
//       formData.append("rememberMe", data.rememberMe ? "true" : "false");

//       // --------------------------------------------------------
//       // Login Server Action
//       // --------------------------------------------------------

//       const result = await loginAction(formData);

//       // --------------------------------------------------------
//       // Authentication Failed
//       // --------------------------------------------------------

//       if (!result?.success) {
//         setError("password", {
//           type: "server",
//           message: result?.message ?? "Invalid email address or password.",
//         });

//         /*
//          * Keep password error visible.
//          */
//         setFocusedField("password");

//         return;
//       }

//       // --------------------------------------------------------
//       // Login Successful
//       // --------------------------------------------------------

//       router.replace("/student/dashboard");
//       router.refresh();
//     } catch (error) {
//       console.error("Login error:", error);

//       setError("password", {
//         type: "server",
//         message: "Unable to login. Please try again.",
//       });

//       setFocusedField("password");
//     } finally {
//       setLoading(false);
//     }
//   }

//   // ============================================================
//   // Submit - Invalid
//   // ============================================================

//   function handleInvalidSubmit() {
//     /*
//      * IMPORTANT:
//      *
//      * User clicked Login with an invalid form.
//      *
//      * From this point onward ALL invalid fields
//      * must show their validation errors.
//      */
//     setSubmitAttempted(true);
//   }

//   // ============================================================
//   // Register Fields
//   // ============================================================

//   const emailField = register("email");

//   const passwordField = register("password");

//   const rememberMeField = register("rememberMe");

//   // ============================================================
//   // Visible Errors
//   // ============================================================

//   const emailError = getFieldError("email");

//   const passwordError = getFieldError("password");

//   // ============================================================
//   // Render
//   // ============================================================

//   return (
//     <main className="min-h-[calc(100vh-80px)] bg-slate-50 px-4 py-6 sm:px-6">
//       <div className="mx-auto flex min-h-[calc(100vh-128px)] max-w-5xl items-center justify-center">
//         <div
//           className="
//             w-full
//             max-w-md
//             border
//             border-slate-200
//             bg-white
//             px-6
//             py-6
//             shadow-[0_8px_30px_rgba(15,23,42,0.10)]
//             sm:px-8
//           "
//         >
//           {/* =====================================================
//               Heading
//           ====================================================== */}

//           <div className="mb-6 text-center">
//             <h1 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">LOGIN</h1>
//           </div>

//           {/* =====================================================
//               Login Form
//           ====================================================== */}

//           <form onSubmit={handleSubmit(handleLoginSubmit, handleInvalidSubmit)} className="space-y-3" noValidate>
//             {/* =================================================
//                 Email
//             ================================================== */}

//             <div>
//               <label htmlFor="email" className="mb-1 block text-xs font-medium text-slate-700">
//                 Email Address
//                 <span className="text-red-500">*</span>
//               </label>

//               <input
//                 id="email"
//                 type="email"
//                 autoComplete="email"
//                 autoFocus
//                 placeholder="Enter your email address"
//                 disabled={loading}
//                 ref={(element) => {
//                   emailInputRef.current = element;
//                   emailField.ref(element);
//                 }}
//                 name={emailField.name}
//                 onChange={(event) => {
//                   /*
//                    * Let React Hook Form handle validation.
//                    */
//                   emailField.onChange(event);

//                   /*
//                    * After submit, when the user starts
//                    * correcting email, remove ONLY the
//                    * email error.
//                    */
//                   if (submitAttempted) {
//                     clearErrors("email");
//                   }
//                 }}
//                 onFocus={() => {
//                   handleFieldFocus("email");
//                 }}
//                 onBlur={(event) => {
//                   emailField.onBlur(event);
//                   handleFieldBlur("email");
//                 }}
//                 className={`
//                   h-10
//                   w-full
//                   border
//                   bg-white
//                   px-3
//                   text-sm
//                   text-slate-900
//                   outline-none
//                   transition
//                   placeholder:text-slate-400
//                   focus:ring-2
//                   disabled:cursor-not-allowed
//                   disabled:bg-slate-100
//                   ${
//                     emailError
//                       ? "border-red-500 focus:border-red-500 focus:ring-red-500/10"
//                       : "border-slate-300 focus:border-teal-500 focus:ring-teal-500/10"
//                   }
//                 `}
//               />

//               {/* Email Validation Error */}

//               {emailError && <p className="mt-1 text-xs text-red-500">{emailError}</p>}
//             </div>

//             {/* =================================================
//                 Password
//             ================================================== */}

//             <div>
//               <label htmlFor="password" className="mb-1 block text-xs font-medium text-slate-700">
//                 Password
//                 <span className="text-red-500">*</span>
//               </label>

//               <input
//                 id="password"
//                 type="password"
//                 autoComplete="current-password"
//                 placeholder="Enter your password"
//                 disabled={loading}
//                 {...passwordField}
//                 onChange={(event) => {
//                   /*
//                    * Let React Hook Form handle validation.
//                    */
//                   passwordField.onChange(event);

//                   /*
//                    * After submit, when the user starts
//                    * correcting password, remove ONLY the
//                    * password error.
//                    */
//                   if (submitAttempted) {
//                     clearErrors("password");
//                   }
//                 }}
//                 onFocus={() => {
//                   handleFieldFocus("password");
//                 }}
//                 onBlur={(event) => {
//                   passwordField.onBlur(event);
//                   handleFieldBlur("password");
//                 }}
//                 className={`
//                   h-10
//                   w-full
//                   border
//                   bg-white
//                   px-3
//                   text-sm
//                   text-slate-900
//                   outline-none
//                   transition
//                   placeholder:text-slate-400
//                   focus:ring-2
//                   disabled:cursor-not-allowed
//                   disabled:bg-slate-100
//                   ${
//                     passwordError
//                       ? "border-red-500 focus:border-red-500 focus:ring-red-500/10"
//                       : "border-slate-300 focus:border-teal-500 focus:ring-teal-500/10"
//                   }
//                 `}
//               />

//               {/* Password Validation / Server Error */}

//               {passwordError && <p className="mt-1 text-xs text-red-500">{passwordError}</p>}
//             </div>

//             {/* =================================================
//                 Remember Me + Forgot Password
//             ================================================== */}

//             <div className="flex items-center justify-between pt-1">
//               <label className="flex cursor-pointer items-center gap-2 text-xs text-slate-600">
//                 <input type="checkbox" {...rememberMeField} className="h-4 w-4 accent-teal-600" disabled={loading} />

//                 <span>Remember me</span>
//               </label>

//               <Link
//                 href="/forgot-password"
//                 className="
//                   text-xs
//                   font-medium
//                   text-teal-600
//                   transition
//                   hover:text-teal-700
//                   hover:underline
//                 "
//               >
//                 Forgot Password?
//               </Link>
//             </div>

//             {/* =================================================
//                 Login Button
//             ================================================== */}

//             <button
//               type="submit"
//               disabled={loading}
//               className="
//                 mt-2
//                 h-10
//                 w-full
//                 cursor-pointer
//                 bg-teal-600
//                 px-4
//                 text-sm
//                 font-semibold
//                 text-white
//                 shadow-md
//                 shadow-teal-600/20
//                 transition
//                 hover:bg-teal-700
//                 disabled:cursor-not-allowed
//                 disabled:opacity-60
//               "
//             >
//               {loading ? "Signing In..." : "Login"}
//             </button>
//           </form>

//           {/* =====================================================
//               Register
//           ====================================================== */}

//           <div className="mt-4 text-center text-xs text-slate-600">
//             Don't have an account?{" "}
//             <Link href="/register" className="font-semibold text-teal-600 hover:text-teal-700">
//               Sign Up
//             </Link>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

// final code

"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FaEnvelope, FaLock } from "react-icons/fa";

import { loginAction } from "@/actions/auth.actions";
import { loginSchema, type LoginFormData } from "@/schemas/login.schema";

type LoginField = keyof LoginFormData;

export default function LoginForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [focusedField, setFocusedField] = useState<LoginField | null>(null);

  const [submitAttempted, setSubmitAttempted] = useState(false);

  const emailInputRef = useRef<HTMLInputElement>(null);

  // const TEST_LOGIN = {
  //   email: "email@yahoo.com",
  //   password: "password",
  // };

  // ============================================================
  // React Hook Form
  // ============================================================

  const {
    register,
    handleSubmit,
    setFocus,
    clearErrors,
    setError,
    formState: { errors },
  } = useForm<z.input<typeof loginSchema>, unknown, LoginFormData>({
    resolver: zodResolver(loginSchema),

    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },

    mode: "onChange",

    reValidateMode: "onChange",

    shouldFocusError: true,
  });

  // ============================================================
  // Initial Focus
  // ============================================================

  useEffect(() => {
    emailInputRef.current?.focus();
    setFocus("email");
    setFocusedField("email");
  }, [setFocus]);

  // ============================================================
  // Field Focus
  // ============================================================

  function handleFieldFocus(field: LoginField) {
    setFocusedField(field);
  }

  // ============================================================
  // Field Blur
  // ============================================================

  function handleFieldBlur(field: LoginField) {
    setFocusedField(null);
  }

  // ============================================================
  // Get Visible Error
  // ============================================================

  function getFieldError(field: LoginField) {
    if (submitAttempted) {
      return errors[field]?.message;
    }

    if (focusedField !== field) {
      return undefined;
    }

    return errors[field]?.message;
  }

  // ============================================================
  // Submit - Valid
  // ============================================================

  async function handleLoginSubmit(data: LoginFormData) {
    setSubmitAttempted(true);
    setLoading(true);

    try {
      const formData = new FormData();

      formData.append("email", data.email.trim());
      formData.append("password", data.password);
      formData.append("rememberMe", data.rememberMe ? "true" : "false");

      const result = await loginAction(formData);

      if (!result?.success) {
        setError("password", {
          type: "server",
          message: result?.message ?? "Invalid email address or password.",
        });

        setFocusedField("password");

        return;
      }

      router.replace("/student/dashboard");
      router.refresh();
    } catch (error) {
      console.error("Login error:", error);

      setError("password", {
        type: "server",
        message: "Unable to login. Please try again.",
      });

      setFocusedField("password");
    } finally {
      setLoading(false);
    }
  }

  // ============================================================
  // Submit - Invalid
  // ============================================================

  function handleInvalidSubmit() {
    setSubmitAttempted(true);
  }

  // ============================================================
  // Register Fields
  // ============================================================

  const emailField = register("email");
  const passwordField = register("password");
  const rememberMeField = register("rememberMe");

  // ============================================================
  // Visible Errors
  // ============================================================

  const emailError = getFieldError("email");
  const passwordError = getFieldError("password");

  // ============================================================
  // Input Class
  // ============================================================

  function getInputClassName(hasError: boolean) {
    return hasError
      ? "h-10 min-w-0 flex-1 rounded-r-[3px] border border-red-500 bg-white px-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/10 disabled:cursor-not-allowed disabled:bg-slate-100"
      : "h-10 min-w-0 flex-1 rounded-r-[3px] border border-slate-300 bg-white px-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/10 disabled:cursor-not-allowed disabled:bg-slate-100";
  }

  // ============================================================
  // Render
  // ============================================================

  return (
    <main className="min-h-[calc(100vh-80px)] bg-slate-50 px-4 py-6 sm:px-6">
      <div className="mx-auto flex min-h-[calc(100vh-128px)] max-w-5xl items-center justify-center">
        <div className="w-full max-w-md border border-slate-200 bg-white px-6 py-6 shadow-[0_8px_30px_rgba(15,23,42,0.10)] sm:px-8">
          {/* =====================================================
              Heading
          ====================================================== */}

          <div className="mb-6 text-center">
            <h1 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">LOGIN</h1>
          </div>

          {/* =====================================================
              Login Form
          ====================================================== */}

          <form onSubmit={handleSubmit(handleLoginSubmit, handleInvalidSubmit)} className="space-y-3" noValidate>
            {/* =================================================
                Email
            ================================================== */}

            <div>
              <label htmlFor="email" className="mb-1 block text-xs font-medium text-slate-700">
                Email Address
                <span className="text-red-500">*</span>
              </label>

              <div className="flex h-10 w-full">
                {/* Email Icon */}

                <div className="flex w-9 shrink-0 items-center justify-center rounded-l-[3px] border border-r-0 border-slate-300 bg-slate-100 text-slate-700">
                  <FaEnvelope size={13} />
                </div>

                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  autoFocus
                  placeholder="Enter your email address"
                  disabled={loading}
                  ref={(element) => {
                    emailInputRef.current = element;
                    emailField.ref(element);
                  }}
                  name={emailField.name}
                  onChange={(event) => {
                    emailField.onChange(event);

                    if (submitAttempted) {
                      clearErrors("email");
                    }
                  }}
                  onFocus={() => {
                    handleFieldFocus("email");
                  }}
                  onBlur={(event) => {
                    emailField.onBlur(event);
                    handleFieldBlur("email");
                  }}
                  className={getInputClassName(Boolean(emailError))}
                />
              </div>

              {/* Email Validation Error */}

              {emailError && <p className="mt-1 text-xs text-red-500">{emailError}</p>}
            </div>

            {/* =================================================
                Password
            ================================================== */}

            <div>
              <label htmlFor="password" className="mb-1 block text-xs font-medium text-slate-700">
                Password
                <span className="text-red-500">*</span>
              </label>

              <div className="flex h-10 w-full">
                {/* Password Icon */}

                <div className="flex w-9 shrink-0 items-center justify-center rounded-l-[3px] border border-r-0 border-slate-300 bg-slate-100 text-slate-700">
                  <FaLock size={13} />
                </div>

                <input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  disabled={loading}
                  {...passwordField}
                  onChange={(event) => {
                    passwordField.onChange(event);

                    if (submitAttempted) {
                      clearErrors("password");
                    }
                  }}
                  onFocus={() => {
                    handleFieldFocus("password");
                  }}
                  onBlur={(event) => {
                    passwordField.onBlur(event);
                    handleFieldBlur("password");
                  }}
                  className={getInputClassName(Boolean(passwordError))}
                />
              </div>

              {/* Password Validation / Server Error */}

              {passwordError && <p className="mt-1 text-xs text-red-500">{passwordError}</p>}
            </div>

            {/* =================================================
                Remember Me + Forgot Password
            ================================================== */}

            <div className="flex items-center justify-between pt-1">
              <label className="flex cursor-pointer items-center gap-2 text-xs text-slate-600">
                <input type="checkbox" {...rememberMeField} className="h-4 w-4 accent-teal-600" disabled={loading} />

                <span>Remember me</span>
              </label>

              <Link
                href="/forgot-password"
                className="text-xs font-medium text-teal-600 transition hover:text-teal-700 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            {/* =================================================
                Login Button
            ================================================== */}

            <button
              type="submit"
              disabled={loading}
              className="mt-2 h-10 w-full cursor-pointer bg-teal-600 px-4 text-sm font-semibold text-white shadow-md shadow-teal-600/20 transition hover:bg-teal-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Signing In..." : "Login"}
            </button>
          </form>

          {/* =====================================================
              Register
          ====================================================== */}

          <div className="mt-4 text-center text-xs text-slate-600">
            Don't have an account?{" "}
            <Link href="/register" className="font-semibold text-teal-600 hover:text-teal-700">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

// code with background image

// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { useRouter } from "next/navigation";

// import { loginAction } from "@/actions/auth.actions";
// import { loginSchema } from "@/schemas/login.schema";

// type FieldErrors = {
//   email?: string;
//   password?: string;
// };

// export default function LoginForm() {
//   const router = useRouter();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [rememberMe, setRememberMe] = useState(false);

//   const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
//   const [loading, setLoading] = useState(false);

//   // --------------------------------------------------
//   // Handle Email Change
//   // --------------------------------------------------

//   function handleEmailChange(value: string) {
//     setEmail(value);

//     // Remove only email error
//     setFieldErrors((previous) => ({
//       ...previous,
//       email: undefined,
//     }));
//   }

//   // --------------------------------------------------
//   // Handle Password Change
//   // --------------------------------------------------

//   function handlePasswordChange(value: string) {
//     setPassword(value);

//     // Remove only password error
//     setFieldErrors((previous) => ({
//       ...previous,
//       password: undefined,
//     }));
//   }

//   // --------------------------------------------------
//   // Submit
//   // --------------------------------------------------

//   async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();

//     // -----------------------------------------------
//     // Validate form using Zod
//     // -----------------------------------------------

//     const validation = loginSchema.safeParse({
//       email: email.trim(),
//       password,
//     });

//     if (!validation.success) {
//       const errors: FieldErrors = {};

//       for (const issue of validation.error.issues) {
//         const field = issue.path[0] as keyof FieldErrors;

//         // Keep first error for each field
//         if (!errors[field]) {
//           errors[field] = issue.message;
//         }
//       }

//       setFieldErrors(errors);

//       return;
//     }

//     // Clear validation errors
//     setFieldErrors({});

//     setLoading(true);

//     try {
//       // -----------------------------------------------
//       // Create FormData
//       // -----------------------------------------------

//       const formData = new FormData();

//       formData.append("email", email.trim());
//       formData.append("password", password);
//       formData.append("rememberMe", rememberMe ? "true" : "false");

//       // -----------------------------------------------
//       // Login Server Action
//       // -----------------------------------------------

//       const result = await loginAction(formData);

//       // -----------------------------------------------
//       // Authentication Failed
//       // -----------------------------------------------

//       if (!result?.success) {
//         /*
//          * Authentication errors are shown below
//          * the password field.
//          */
//         setFieldErrors({
//           password: result?.message ?? "Invalid email address or password.",
//         });

//         return;
//       }

//       // -----------------------------------------------
//       // Login Successful
//       // -----------------------------------------------

//       router.replace("/student/dashboard");
//       router.refresh();
//     } catch (error) {
//       console.error("Login error:", error);

//       /*
//        * Unexpected login errors are also shown
//        * below the password field.
//        */
//       setFieldErrors({
//         password: "Unable to login. Please try again.",
//       });
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <main className="relative min-h-[calc(100vh-80px)] overflow-hidden px-4 py-6 sm:px-6">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//         style={{
//           backgroundImage: "url('/images/hero_section_bg.jpg')",
//         }}
//       />

//       {/* Blur Background */}
//       <div className="absolute inset-0 backdrop-blur-sm" />

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-slate-950/40" />

//       {/* Login Content */}
//       <div className="relative mx-auto flex min-h-[calc(100vh-128px)] max-w-5xl items-center justify-center">
//         <div
//           className="
//             w-full
//             max-w-md
//             border
//             border-slate-200
//             bg-white
//             px-6
//             py-6
//             shadow-[0_8px_30px_rgba(15,23,42,0.10)]
//             sm:px-8
//           "
//         >
//           {/* =====================================================
//               Heading
//           ====================================================== */}

//           <div className="mb-6 text-center">
//             <h1 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">LOGIN</h1>
//           </div>

//           {/* =====================================================
//               Login Form
//           ====================================================== */}

//           <form onSubmit={handleSubmit} className="space-y-3" noValidate>
//             {/* =================================================
//                 Email
//             ================================================== */}

//             <div>
//               <label htmlFor="email" className="mb-1 block text-xs font-medium text-slate-700">
//                 Email Address
//                 <span className="text-red-500">*</span>
//               </label>

//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 autoComplete="email"
//                 value={email}
//                 onChange={(e) => handleEmailChange(e.target.value)}
//                 placeholder="Enter your email address"
//                 disabled={loading}
//                 className={`
//                   h-10
//                   w-full
//                   border
//                   bg-white
//                   px-3
//                   text-sm
//                   text-slate-900
//                   outline-none
//                   transition
//                   placeholder:text-slate-400
//                   focus:ring-2
//                   disabled:cursor-not-allowed
//                   disabled:bg-slate-100
//                   ${
//                     fieldErrors.email
//                       ? "border-red-500 focus:border-red-500 focus:ring-red-500/10"
//                       : "border-slate-300 focus:border-teal-500 focus:ring-teal-500/10"
//                   }
//                 `}
//               />

//               {/* Email Validation Message */}

//               {fieldErrors.email && <p className="mt-1 text-xs text-red-500">{fieldErrors.email}</p>}
//             </div>

//             {/* =================================================
//                 Password
//             ================================================== */}

//             <div>
//               <label htmlFor="password" className="mb-1 block text-xs font-medium text-slate-700">
//                 Password
//                 <span className="text-red-500">*</span>
//               </label>

//               <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 autoComplete="current-password"
//                 value={password}
//                 onChange={(e) => handlePasswordChange(e.target.value)}
//                 placeholder="Enter your password"
//                 disabled={loading}
//                 className={`
//                   h-10
//                   w-full
//                   border
//                   bg-white
//                   px-3
//                   text-sm
//                   text-slate-900
//                   outline-none
//                   transition
//                   placeholder:text-slate-400
//                   focus:ring-2
//                   disabled:cursor-not-allowed
//                   disabled:bg-slate-100
//                   ${
//                     fieldErrors.password
//                       ? "border-red-500 focus:border-red-500 focus:ring-red-500/10"
//                       : "border-slate-300 focus:border-teal-500 focus:ring-teal-500/10"
//                   }
//                 `}
//               />

//               {/* Password Validation Message */}

//               {fieldErrors.password && <p className="mt-1 text-xs text-red-500">{fieldErrors.password}</p>}
//             </div>

//             {/* =================================================
//                 Remember Me + Forgot Password
//             ================================================== */}

//             <div className="flex items-center justify-between pt-1">
//               <label className="flex cursor-pointer items-center gap-2 text-xs text-slate-600">
//                 <input
//                   type="checkbox"
//                   name="rememberMe"
//                   checked={rememberMe}
//                   onChange={(e) => setRememberMe(e.target.checked)}
//                   className="h-4 w-4 accent-teal-600"
//                   disabled={loading}
//                 />

//                 <span>Remember me</span>
//               </label>

//               <Link
//                 href="/forgot-password"
//                 className="
//                   text-xs
//                   font-medium
//                   text-teal-600
//                   transition
//                   hover:text-teal-700
//                   hover:underline
//                 "
//               >
//                 Forgot Password?
//               </Link>
//             </div>

//             {/* =================================================
//                 Login Button
//             ================================================== */}

//             <button
//               type="submit"
//               disabled={loading}
//               className="
//                 mt-2
//                 h-10
//                 w-full
//                 cursor-pointer
//                 bg-teal-600
//                 px-4
//                 text-sm
//                 font-semibold
//                 text-white
//                 shadow-md
//                 shadow-teal-600/20
//                 transition
//                 hover:bg-teal-700
//                 disabled:cursor-not-allowed
//                 disabled:opacity-60
//               "
//             >
//               {loading ? "Signing In..." : "Login"}
//             </button>
//           </form>

//           {/* =====================================================
//               Register
//           ====================================================== */}

//           <div className="mt-4 text-center text-xs text-slate-600">
//             Don't have an account?{" "}
//             <Link href="/register" className="font-semibold text-teal-600 hover:text-teal-700">
//               Sign Up
//             </Link>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }
