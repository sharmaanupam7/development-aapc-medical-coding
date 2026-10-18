// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { FormEvent, useState } from "react";
// import { CheckCircle2, Eye, EyeOff, Lock, ShieldCheck, XCircle } from "lucide-react";

// export default function ChangePassword() {
//   const [currentPassword, setCurrentPassword] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const [showCurrentPassword, setShowCurrentPassword] = useState(false);
//   const [showNewPassword, setShowNewPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const [isLoading, setIsLoading] = useState(false);

//   const [message, setMessage] = useState<{
//     type: "success" | "error";
//     text: string;
//   } | null>(null);

//   const passwordRequirements = {
//     minLength: newPassword.length >= 8,
//     uppercase: /[A-Z]/.test(newPassword),
//     lowercase: /[a-z]/.test(newPassword),
//     number: /\d/.test(newPassword),
//   };

//   const passwordScore = Object.values(passwordRequirements).filter(Boolean).length;

//   const getPasswordStrength = () => {
//     if (!newPassword) {
//       return {
//         label: "",
//         width: "w-0",
//       };
//     }

//     if (passwordScore <= 1) {
//       return {
//         label: "Weak",
//         width: "w-1/4",
//       };
//     }

//     if (passwordScore === 2) {
//       return {
//         label: "Fair",
//         width: "w-2/4",
//       };
//     }

//     if (passwordScore === 3) {
//       return {
//         label: "Good",
//         width: "w-3/4",
//       };
//     }

//     return {
//       label: "Strong",
//       width: "w-full",
//     };
//   };

//   const passwordStrength = getPasswordStrength();

//   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     setMessage(null);

//     if (!currentPassword) {
//       setMessage({
//         type: "error",
//         text: "Please enter your current password.",
//       });
//       return;
//     }

//     if (!newPassword) {
//       setMessage({
//         type: "error",
//         text: "Please enter a new password.",
//       });
//       return;
//     }

//     if (newPassword.length < 8) {
//       setMessage({
//         type: "error",
//         text: "New password must be at least 8 characters long.",
//       });
//       return;
//     }

//     if (newPassword !== confirmPassword) {
//       setMessage({
//         type: "error",
//         text: "New password and confirm password do not match.",
//       });
//       return;
//     }

//     if (currentPassword === newPassword) {
//       setMessage({
//         type: "error",
//         text: "New password must be different from your current password.",
//       });
//       return;
//     }

//     try {
//       setIsLoading(true);

//       /*
//        * Replace this section with your server action:
//        *
//        * const result = await changePasswordAction({
//        *   currentPassword,
//        *   newPassword,
//        * });
//        *
//        * if (!result.success) {
//        *   setMessage({
//        *     type: "error",
//        *     text: result.message,
//        *   });
//        *   return;
//        * }
//        */

//       await new Promise((resolve) => setTimeout(resolve, 1000));

//       setMessage({
//         type: "success",
//         text: "Your password has been changed successfully.",
//       });

//       setCurrentPassword("");
//       setNewPassword("");
//       setConfirmPassword("");
//     } catch {
//       setMessage({
//         type: "error",
//         text: "Something went wrong. Please try again.",
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <main className="min-h-screen bg-slate-50 px-4 py-4 sm:px-6 sm:py-5 lg:px-8">
//       <div className="mx-auto w-full max-w-2xl">
//         {/* =====================================================
//             MAIN CARD
//         ===================================================== */}
//         <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
//           {/* =====================================================
//               TOP TEAL SECTION
//           ===================================================== */}
//           <div className="relative overflow-hidden bg-[#173b62] px-5 py-5 sm:px-6 sm:py-6">
//             {/* Decorative elements */}
//             <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-teal-500/10 blur-2xl" />

//             <div className="absolute -bottom-16 -left-16 h-36 w-36 rounded-full bg-cyan-500/10 blur-2xl" />

//             <div className="relative mt-2.5 text-center">
//               <h2 className="text-base font-bold text-white sm:text-lg">Reset Password</h2>

//               <p className="mt-0.5 text-xs leading-4 text-slate-300">
//                 Choose a strong password to protect your account
//               </p>
//             </div>
//           </div>

//           {/* =====================================================
//               FORM
//           ===================================================== */}
//           <div className="px-5 py-5 sm:px-7 sm:py-6">
//             {/* Message */}
//             {message && (
//               <div
//                 className={`mb-4 flex items-start gap-2.5 rounded-lg border px-3 py-2.5 text-xs sm:text-sm ${
//                   message.type === "success"
//                     ? "border-emerald-200 bg-emerald-50 text-emerald-700"
//                     : "border-red-200 bg-red-50 text-red-700"
//                 }`}
//               >
//                 {message.type === "success" ? (
//                   <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
//                 ) : (
//                   <XCircle className="mt-0.5 h-4 w-4 shrink-0" />
//                 )}

//                 <p className="leading-4">{message.text}</p>
//               </div>
//             )}

//             <form onSubmit={handleSubmit} className="space-y-3.5">
//               {/* =====================================================
//                   CURRENT PASSWORD
//               ===================================================== */}
//               <div>
//                 <label
//                   htmlFor="currentPassword"
//                   className="mb-1.5 block text-sm font-semibold text-[#173b62] sm:text-sm"
//                 >
//                   Current Password
//                 </label>

//                 <div className="relative">
//                   <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

//                   <input
//                     id="currentPassword"
//                     name="currentPassword"
//                     type={showCurrentPassword ? "text" : "password"}
//                     value={currentPassword}
//                     onChange={(event) => setCurrentPassword(event.target.value)}
//                     placeholder="Enter current password"
//                     autoComplete="current-password"
//                     className="h-10 w-full rounded-lg border border-slate-200 bg-white pl-9 pr-11 text-xs text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 sm:text-sm"
//                   />

//                   <button
//                     type="button"
//                     onClick={() => setShowCurrentPassword((previous) => !previous)}
//                     aria-label={showCurrentPassword ? "Hide current password" : "Show current password"}
//                     className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-slate-400 transition hover:bg-teal-50 hover:text-teal-600"
//                   >
//                     {showCurrentPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
//                   </button>
//                 </div>
//               </div>

//               {/* =====================================================
//                   NEW PASSWORD
//               ===================================================== */}
//               <div>
//                 <label htmlFor="newPassword" className="mb-1.5 block text-xs font-semibold text-[#173b62] sm:text-sm">
//                   New Password
//                 </label>

//                 <div className="relative">
//                   <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

//                   <input
//                     id="newPassword"
//                     name="newPassword"
//                     type={showNewPassword ? "text" : "password"}
//                     value={newPassword}
//                     onChange={(event) => setNewPassword(event.target.value)}
//                     placeholder="Enter new password"
//                     autoComplete="new-password"
//                     className="h-10 w-full rounded-lg border border-slate-200 bg-white pl-9 pr-11 text-xs text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 sm:text-sm"
//                   />

//                   <button
//                     type="button"
//                     onClick={() => setShowNewPassword((previous) => !previous)}
//                     aria-label={showNewPassword ? "Hide new password" : "Show new password"}
//                     className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-slate-400 transition hover:bg-teal-50 hover:text-teal-600"
//                   >
//                     {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
//                   </button>
//                 </div>

//                 {/* Password strength */}
//                 {newPassword && (
//                   <div className="mt-2">
//                     <div className="flex items-center justify-between">
//                       <span className="text-[10px] font-medium text-slate-500">Password strength</span>

//                       <span className="text-[10px] font-semibold text-teal-600">{passwordStrength.label}</span>
//                     </div>

//                     <div className="mt-1 h-1 overflow-hidden rounded-full bg-slate-100">
//                       <div
//                         className={`h-full rounded-full bg-teal-500 transition-all duration-300 ${passwordStrength.width}`}
//                       />
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/* =====================================================
//                   CONFIRM PASSWORD
//               ===================================================== */}
//               <div>
//                 <label
//                   htmlFor="confirmPassword"
//                   className="mb-1.5 block text-xs font-semibold text-[#173b62] sm:text-sm"
//                 >
//                   Confirm Password
//                 </label>

//                 <div className="relative">
//                   <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

//                   <input
//                     id="confirmPassword"
//                     name="confirmPassword"
//                     type={showConfirmPassword ? "text" : "password"}
//                     value={confirmPassword}
//                     onChange={(event) => setConfirmPassword(event.target.value)}
//                     placeholder="Confirm new password"
//                     autoComplete="new-password"
//                     className={`h-10 w-full rounded-lg border bg-white pl-9 pr-11 text-xs text-slate-700 outline-none transition placeholder:text-slate-400 focus:ring-2 sm:text-sm ${
//                       confirmPassword && newPassword !== confirmPassword
//                         ? "border-red-300 focus:border-red-400 focus:ring-red-100"
//                         : confirmPassword && newPassword === confirmPassword
//                           ? "border-emerald-300 focus:border-emerald-400 focus:ring-emerald-100"
//                           : "border-slate-200 focus:border-teal-500 focus:ring-teal-100"
//                     }`}
//                   />

//                   <button
//                     type="button"
//                     onClick={() => setShowConfirmPassword((previous) => !previous)}
//                     aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
//                     className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-slate-400 transition hover:bg-teal-50 hover:text-teal-600"
//                   >
//                     {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
//                   </button>
//                 </div>

//                 {confirmPassword && newPassword !== confirmPassword && (
//                   <p className="mt-1 text-[10px] text-red-500">Passwords do not match.</p>
//                 )}

//                 {confirmPassword && newPassword === confirmPassword && (
//                   <p className="mt-1 flex items-center gap-1 text-[10px] text-emerald-600">
//                     <CheckCircle2 className="h-3 w-3" />
//                     Passwords match.
//                   </p>
//                 )}
//               </div>

//               {/* =====================================================
//                   BUTTONS
//               ===================================================== */}
//               <div className="flex flex-col gap-2.5 pt-1 sm:flex-row sm:justify-end">
//                 <Link
//                   href="/dashboard"
//                   className="inline-flex h-10 w-full items-center justify-center rounded-lg border border-slate-200 bg-white px-5 text-xs font-semibold text-slate-600 transition hover:border-teal-300 hover:bg-teal-50 hover:text-teal-700 sm:w-auto sm:text-sm"
//                 >
//                   Cancel
//                 </Link>

//                 <button
//                   type="submit"
//                   disabled={isLoading}
//                   className="inline-flex h-10 w-full items-center cursor-pointer justify-center gap-2 rounded-lg bg-teal-600 px-6 text-xs font-bold text-white shadow-sm transition hover:bg-teal-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:text-sm"
//                 >
//                   <ShieldCheck className="h-4 w-4" />

//                   {isLoading ? "Updating..." : "Set Password"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

// previous code

// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { FormEvent, useState } from "react";
// import { CheckCircle2, Eye, EyeOff, Lock, ShieldCheck, XCircle } from "lucide-react";

// import { changeProfilePasswordSchema, type ChangePasswordFormData } from "@/schemas/change-password.schema";

// type FieldErrors = {
//   currentPassword?: string;
//   newPassword?: string;
//   confirmPassword?: string;
// };

// export default function ChangePassword() {
//   const [currentPassword, setCurrentPassword] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const [showCurrentPassword, setShowCurrentPassword] = useState(false);
//   const [showNewPassword, setShowNewPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const [isLoading, setIsLoading] = useState(false);

//   const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

//   const [message, setMessage] = useState<{
//     type: "success" | "error";
//     text: string;
//   } | null>(null);

//   /*
//    * Password requirements
//    */
//   const passwordRequirements = {
//     minLength: newPassword.length >= 8,
//     uppercase: /[A-Z]/.test(newPassword),
//     lowercase: /[a-z]/.test(newPassword),
//     number: /\d/.test(newPassword),
//   };

//   const passwordScore = Object.values(passwordRequirements).filter(Boolean).length;

//   const getPasswordStrength = () => {
//     if (!newPassword) {
//       return {
//         label: "",
//         width: "w-0",
//       };
//     }

//     if (passwordScore <= 1) {
//       return {
//         label: "Weak",
//         width: "w-1/4",
//       };
//     }

//     if (passwordScore === 2) {
//       return {
//         label: "Fair",
//         width: "w-2/4",
//       };
//     }

//     if (passwordScore === 3) {
//       return {
//         label: "Good",
//         width: "w-3/4",
//       };
//     }

//     return {
//       label: "Strong",
//       width: "w-full",
//     };
//   };

//   const passwordStrength = getPasswordStrength();

//   /*
//    * Validate a single field dynamically.
//    */
//   const validateField = (field: keyof ChangePasswordFormData, value: string) => {
//     const formData = {
//       currentPassword,
//       newPassword,
//       confirmPassword,
//       [field]: value,
//     };

//     const result = changeProfilePasswordSchema.safeParse(formData);

//     if (result.success) {
//       setFieldErrors((previous) => ({
//         ...previous,
//         [field]: undefined,
//       }));

//       return;
//     }

//     const issue = result.error.issues.find((error) => error.path[0] === field);

//     setFieldErrors((previous) => ({
//       ...previous,
//       [field]: issue?.message,
//     }));
//   };

//   /*
//    * Current Password
//    */
//   const handleCurrentPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const value = event.target.value;

//     setCurrentPassword(value);

//     setFieldErrors((previous) => ({
//       ...previous,
//       currentPassword: undefined,
//     }));

//     setMessage(null);
//   };

//   /*
//    * New Password
//    */
//   const handleNewPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const value = event.target.value;

//     setNewPassword(value);

//     setFieldErrors((previous) => ({
//       ...previous,
//       newPassword: undefined,
//     }));

//     setMessage(null);
//   };

//   /*
//    * Confirm Password
//    */
//   const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const value = event.target.value;

//     setConfirmPassword(value);

//     setFieldErrors((previous) => ({
//       ...previous,
//       confirmPassword: undefined,
//     }));

//     setMessage(null);
//   };

//   /*
//    * Submit
//    */
//   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     setMessage(null);
//     setFieldErrors({});

//     const formData: ChangePasswordFormData = {
//       currentPassword,
//       newPassword,
//       confirmPassword,
//     };

//     /*
//      * Validate using Zod schema
//      */
//     const result = changeProfilePasswordSchema.safeParse(formData);

//     if (!result.success) {
//       const errors: FieldErrors = {};

//       result.error.issues.forEach((issue) => {
//         const field = issue.path[0] as keyof FieldErrors;

//         if (!errors[field]) {
//           errors[field] = issue.message;
//         }
//       });

//       setFieldErrors(errors);

//       return;
//     }

//     try {
//       setIsLoading(true);

//       /*
//        * Replace this section with your server action.
//        *
//        * Example:
//        *
//        * const response = await changePasswordAction(formData);
//        *
//        * if (!response.success) {
//        *   setMessage({
//        *     type: "error",
//        *     text: response.message,
//        *   });
//        *   return;
//        * }
//        */

//       await new Promise((resolve) => setTimeout(resolve, 1000));

//       setMessage({
//         type: "success",
//         text: "Your password has been changed successfully.",
//       });

//       setCurrentPassword("");
//       setNewPassword("");
//       setConfirmPassword("");

//       setFieldErrors({});
//     } catch {
//       setMessage({
//         type: "error",
//         text: "Something went wrong. Please try again.",
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <main className="min-h-screen bg-slate-50 px-4 py-4 sm:px-6 sm:py-5 lg:px-8">
//       <div className="mx-auto w-full max-w-2xl">
//         {/* =====================================================
//             MAIN CARD
//         ===================================================== */}
//         <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
//           {/* =====================================================
//               TOP TEAL SECTION
//           ===================================================== */}
//           <div className="relative overflow-hidden bg-[#173b62] px-5 py-5 sm:px-6 sm:py-6">
//             <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-teal-500/10 blur-2xl" />

//             <div className="absolute -bottom-16 -left-16 h-36 w-36 rounded-full bg-cyan-500/10 blur-2xl" />

//             <div className="relative text-center">
//               <h2 className="text-base font-bold text-white sm:text-lg">Reset Password</h2>

//               <p className="mt-0.5 text-xs leading-4 text-slate-300">
//                 Choose a strong password to protect your account
//               </p>
//             </div>
//           </div>

//           {/* =====================================================
//               FORM
//           ===================================================== */}
//           <div className="px-5 py-5 sm:px-7 sm:py-6">
//             {/* =====================================================
//                 SUCCESS / GENERAL ERROR
//             ===================================================== */}
//             {message && (
//               <div
//                 className={`mb-4 flex items-start gap-2.5 rounded-lg border px-3 py-2.5 text-xs sm:text-sm ${
//                   message.type === "success"
//                     ? "border-emerald-200 bg-emerald-50 text-emerald-700"
//                     : "border-red-200 bg-red-50 text-red-700"
//                 }`}
//               >
//                 {message.type === "success" ? (
//                   <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
//                 ) : (
//                   <XCircle className="mt-0.5 h-4 w-4 shrink-0" />
//                 )}

//                 <p className="leading-4">{message.text}</p>
//               </div>
//             )}

//             <form onSubmit={handleSubmit} className="space-y-3.5" noValidate>
//               {/* =====================================================
//                   CURRENT PASSWORD
//               ===================================================== */}
//               <div>
//                 <label htmlFor="currentPassword" className="mb-1.5 block text-sm font-semibold text-[#173b62]">
//                   Current Password
//                 </label>

//                 <div className="relative">
//                   <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

//                   <input
//                     id="currentPassword"
//                     name="currentPassword"
//                     type={showCurrentPassword ? "text" : "password"}
//                     value={currentPassword}
//                     onChange={handleCurrentPasswordChange}
//                     onBlur={() => validateField("currentPassword", currentPassword)}
//                     placeholder="Enter current password"
//                     autoComplete="current-password"
//                     className={`h-10 w-full rounded-lg border bg-white pl-9 pr-11 text-xs text-slate-700 outline-none transition placeholder:text-slate-400 focus:ring-2 sm:text-sm ${
//                       fieldErrors.currentPassword
//                         ? "border-red-300 focus:border-red-400 focus:ring-red-100"
//                         : "border-slate-200 focus:border-teal-500 focus:ring-teal-100"
//                     }`}
//                   />

//                   <button
//                     type="button"
//                     onClick={() => setShowCurrentPassword((previous) => !previous)}
//                     aria-label={showCurrentPassword ? "Hide current password" : "Show current password"}
//                     className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-slate-400 transition hover:bg-teal-50 hover:text-teal-600"
//                   >
//                     {showCurrentPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
//                   </button>
//                 </div>

//                 {/* Field Error */}
//                 {fieldErrors.currentPassword && (
//                   <p className="mt-1 text-xs text-red-500">{fieldErrors.currentPassword}</p>
//                 )}
//               </div>

//               {/* =====================================================
//                   NEW PASSWORD
//               ===================================================== */}
//               <div>
//                 <label htmlFor="newPassword" className="mb-1.5 block text-sm font-semibold text-[#173b62]">
//                   New Password
//                 </label>

//                 <div className="relative">
//                   <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

//                   <input
//                     id="newPassword"
//                     name="newPassword"
//                     type={showNewPassword ? "text" : "password"}
//                     value={newPassword}
//                     onChange={handleNewPasswordChange}
//                     onBlur={() => validateField("newPassword", newPassword)}
//                     placeholder="Enter new password"
//                     autoComplete="new-password"
//                     className={`h-10 w-full rounded-lg border bg-white pl-9 pr-11 text-xs text-slate-700 outline-none transition placeholder:text-slate-400 focus:ring-2 sm:text-sm ${
//                       fieldErrors.newPassword
//                         ? "border-red-300 focus:border-red-400 focus:ring-red-100"
//                         : "border-slate-200 focus:border-teal-500 focus:ring-teal-100"
//                     }`}
//                   />

//                   <button
//                     type="button"
//                     onClick={() => setShowNewPassword((previous) => !previous)}
//                     aria-label={showNewPassword ? "Hide new password" : "Show new password"}
//                     className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-slate-400 transition hover:bg-teal-50 hover:text-teal-600"
//                   >
//                     {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
//                   </button>
//                 </div>

//                 {/* Field Error */}
//                 {fieldErrors.newPassword && <p className="mt-1 text-xs text-red-500">{fieldErrors.newPassword}</p>}

//                 {/* Password Strength */}
//                 {newPassword && !fieldErrors.newPassword && (
//                   <div className="mt-2">
//                     <div className="flex items-center justify-between">
//                       <span className="text-[10px] font-medium text-slate-500">Password strength</span>

//                       <span className="text-[10px] font-semibold text-teal-600">{passwordStrength.label}</span>
//                     </div>

//                     <div className="mt-1 h-1 overflow-hidden rounded-full bg-slate-100">
//                       <div
//                         className={`h-full rounded-full bg-teal-500 transition-all duration-300 ${passwordStrength.width}`}
//                       />
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/* =====================================================
//                   CONFIRM PASSWORD
//               ===================================================== */}
//               <div>
//                 <label htmlFor="confirmPassword" className="mb-1.5 block text-sm font-semibold text-[#173b62]">
//                   Confirm Password
//                 </label>

//                 <div className="relative">
//                   <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

//                   <input
//                     id="confirmPassword"
//                     name="confirmPassword"
//                     type={showConfirmPassword ? "text" : "password"}
//                     value={confirmPassword}
//                     onChange={handleConfirmPasswordChange}
//                     onBlur={() => validateField("confirmPassword", confirmPassword)}
//                     placeholder="Confirm new password"
//                     autoComplete="new-password"
//                     className={`h-10 w-full rounded-lg border bg-white pl-9 pr-11 text-xs text-slate-700 outline-none transition placeholder:text-slate-400 focus:ring-2 sm:text-sm ${
//                       fieldErrors.confirmPassword
//                         ? "border-red-300 focus:border-red-400 focus:ring-red-100"
//                         : confirmPassword && newPassword === confirmPassword
//                           ? "border-emerald-300 focus:border-emerald-400 focus:ring-emerald-100"
//                           : "border-slate-200 focus:border-teal-500 focus:ring-teal-100"
//                     }`}
//                   />

//                   <button
//                     type="button"
//                     onClick={() => setShowConfirmPassword((previous) => !previous)}
//                     aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
//                     className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-slate-400 transition hover:bg-teal-50 hover:text-teal-600"
//                   >
//                     {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
//                   </button>
//                 </div>

//                 {/* Field Error */}
//                 {fieldErrors.confirmPassword && (
//                   <p className="mt-1 text-xs text-red-500">{fieldErrors.confirmPassword}</p>
//                 )}

//                 {/* Password Match */}
//                 {!fieldErrors.confirmPassword && confirmPassword && newPassword === confirmPassword && (
//                   <p className="mt-1 flex items-center gap-1 text-xs text-emerald-600">
//                     <CheckCircle2 className="h-3 w-3" />
//                     Passwords match.
//                   </p>
//                 )}
//               </div>

//               {/* =====================================================
//                   BUTTONS
//               ===================================================== */}
//               <div className="flex flex-col gap-2.5 pt-1 sm:flex-row sm:justify-end">
//                 <Link
//                   href="/student/dashboard"
//                   className="inline-flex h-10 w-full items-center justify-center rounded-lg border border-slate-200 bg-white px-5 text-xs font-semibold text-slate-600 transition hover:border-teal-300 hover:bg-teal-50 hover:text-teal-700 sm:w-auto sm:text-sm"
//                 >
//                   Cancel
//                 </Link>

//                 <button
//                   type="submit"
//                   disabled={isLoading}
//                   className="inline-flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-teal-600 px-6 text-xs font-bold text-white shadow-sm transition hover:bg-teal-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:text-sm"
//                 >
//                   <ShieldCheck className="h-4 w-4" />

//                   {isLoading ? "Updating..." : "Set Password"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

// code for Error shown on blur field

// "use client";

// import { FormEvent, useState } from "react";
// import { FaKey, FaLock } from "react-icons/fa";
// import DashboardPageTemplate from "./student-dashboard-template";

// interface ProfileChangePasswordProps {
//   email: string;
// }

// export default function ProfileChangePassword({ email }: ProfileChangePasswordProps) {
//   const [currentPassword, setCurrentPassword] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const [isSaving, setIsSaving] = useState(false);

//   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     setError("");
//     setSuccess("");

//     if (!currentPassword.trim()) {
//       setError("Please enter your current password.");
//       return;
//     }

//     if (!newPassword.trim()) {
//       setError("Please enter your new password.");
//       return;
//     }

//     if (newPassword.length < 8) {
//       setError("New password must be at least 8 characters long.");
//       return;
//     }

//     if (!confirmPassword.trim()) {
//       setError("Please confirm your new password.");
//       return;
//     }

//     if (newPassword !== confirmPassword) {
//       setError("New password and confirm password do not match.");
//       return;
//     }

//     try {
//       setIsSaving(true);

//       /*
//        * Connect this section to your existing change-password
//        * server action/API.
//        *
//        * Example:
//        *
//        * const result = await changePassword({
//        *   currentPassword,
//        *   newPassword,
//        * });
//        *
//        * if (!result.success) {
//        *   setError(result.message);
//        *   return;
//        * }
//        */

//       // Temporary success handling.
//       // Remove this when your actual server action is connected.
//       setSuccess("Password updated successfully.");

//       setCurrentPassword("");
//       setNewPassword("");
//       setConfirmPassword("");
//     } catch (err) {
//       console.error("Change password error:", err);
//       setError("Something went wrong. Please try again.");
//     } finally {
//       setIsSaving(false);
//     }
//   };

//   return (
//     <>
//       <DashboardPageTemplate title="Change Password" description="">
//         <div className="p-7">
//           <div className="w-full rounded-lg bg-white px-5 py-5 sm:px-6 sm:py-6">
//             {/* Header */}
//             <div className="border-b border-[#d7dce1] pb-6">
//               <h1 className="text-[20px] font-normal leading-[1.2] text-[#111827]">Account information</h1>

//               <p className="mt-1 text-[13px] leading-5 text-[#111827]">Update Your Profile Password</p>
//             </div>

//             <form onSubmit={handleSubmit}>
//               {/* Email */}
//               <div className="border-b border-[#d7dce1] py-4 sm:py-3.5">
//                 <label htmlFor="email" className="mb-1.5 block text-[13px] font-semibold text-[#111827]">
//                   Email
//                 </label>

//                 <input
//                   id="email"
//                   type="email"
//                   value={email}
//                   readOnly
//                   disabled
//                   className="
//               h-7.25
//               w-full
//               rounded-[3px]
//               border
//               border-[#c8d0d9]
//               bg-[#e9ecef]
//               px-2.5
//               text-[12px]
//               text-[#667085]
//               outline-none
//               disabled:cursor-not-allowed
//             "
//                 />
//               </div>

//               {/* Password fields */}
//               <div className="pt-5">
//                 {/* Current Password */}
//                 <div className="mb-3.25">
//                   <label htmlFor="currentPassword" className="mb-1.5 block text-[13px] font-semibold text-[#111827]">
//                     Current Password
//                   </label>

//                   <div className="flex h-7.5 w-full">
//                     <div
//                       className="
//                   flex
//                   w-8.5
//                   shrink-0
//                   items-center
//                   justify-center
//                   rounded-l-[3px]
//                   border
//                   border-r-0
//                   border-[#c8d0d9]
//                   bg-[#e9ecef]
//                   text-[#15233d]
//                 "
//                     >
//                       <FaKey size={13} />
//                     </div>

//                     <input
//                       id="currentPassword"
//                       name="currentPassword"
//                       type="password"
//                       value={currentPassword}
//                       onChange={(e) => setCurrentPassword(e.target.value)}
//                       placeholder="Enter current password"
//                       autoComplete="current-password"
//                       className="
//                   h-full
//                   min-w-0
//                   flex-1
//                   autoFocus
//                   rounded-r-[3px]
//                   border
//                   border-[#c8d0d9]
//                   bg-white
//                   px-2.5
//                   text-[12px]
//                   text-[#344054]
//                   outline-none
//                   placeholder:text-[#667085]
//                   focus:border-[#6675d9]
//                   focus:ring-1
//                   focus:ring-[#6675d9]
//                 "
//                     />
//                   </div>
//                 </div>

//                 {/* New Password */}
//                 <div className="mb-3.25">
//                   <label htmlFor="newPassword" className="mb-1.5 block text-[13px] font-semibold text-[#111827]">
//                     New Nassword
//                   </label>

//                   <div className="flex h-7.5 w-full">
//                     <div
//                       className="
//                   flex
//                   w-8.5
//                   shrink-0
//                   items-center
//                   justify-center
//                   rounded-l-[3px]
//                   border
//                   border-r-0
//                   border-[#c8d0d9]
//                   bg-[#e9ecef]
//                   text-[#15233d]
//                 "
//                     >
//                       <FaLock size={13} />
//                     </div>

//                     <input
//                       id="newPassword"
//                       name="newPassword"
//                       type="password"
//                       value={newPassword}
//                       onChange={(e) => setNewPassword(e.target.value)}
//                       placeholder="Enter new password"
//                       autoComplete="new-password"
//                       className="
//                   h-full
//                   min-w-0
//                   flex-1
//                   rounded-r-[3px]
//                   border
//                   border-[#c8d0d9]
//                   bg-white
//                   px-2.5
//                   text-[12px]
//                   text-[#344054]
//                   outline-none
//                   placeholder:text-[#667085]
//                   focus:border-[#6675d9]
//                   focus:ring-1
//                   focus:ring-[#6675d9]
//                 "
//                     />
//                   </div>
//                 </div>

//                 {/* Confirm Password */}
//                 <div>
//                   <label htmlFor="confirmPassword" className="mb-1.5 block text-[13px] font-semibold text-[#111827]">
//                     Confirm Password
//                   </label>

//                   <div className="flex h-7.5 w-full">
//                     <div
//                       className="
//                   flex
//                   w-8.5
//                   shrink-0
//                   items-center
//                   justify-center
//                   rounded-l-[3px]
//                   border
//                   border-r-0
//                   border-[#c8d0d9]
//                   bg-[#e9ecef]
//                   text-[#15233d]
//                 "
//                     >
//                       <FaLock size={13} />
//                     </div>

//                     <input
//                       id="confirmPassword"
//                       name="confirmPassword"
//                       type="password"
//                       value={confirmPassword}
//                       onChange={(e) => setConfirmPassword(e.target.value)}
//                       placeholder="Re-type your password"
//                       autoComplete="new-password"
//                       className="
//                   h-full
//                   min-w-0
//                   flex-1
//                   rounded-r-[3px]
//                   border
//                   border-[#c8d0d9]
//                   bg-white
//                   px-2.5
//                   text-[12px]
//                   text-[#344054]
//                   outline-none
//                   placeholder:text-[#667085]
//                   focus:border-[#6675d9]
//                   focus:ring-1
//                   focus:ring-[#6675d9]
//                 "
//                     />
//                   </div>
//                 </div>

//                 {/* Error */}
//                 {error && <p className="mt-3 text-[12px] text-red-600">{error}</p>}

//                 {/* Success */}
//                 {success && <p className="mt-3 text-[12px] text-green-600">{success}</p>}

//                 {/* Save Button */}
//                 <div className="mt-8">
//                   <button
//                     type="submit"
//                     disabled={isSaving}
//                     className="
//                 h-7.75
//                 min-w-39.25
//                 rounded-[6px]
//                 bg-[#222e6b]
//                 px-5
//                 cursor-pointer
//                 text-[12px]
//                 font-semibold
//                 text-white
//                 transition
//                 hover:bg-[#1b2559]
//                 disabled:cursor-not-allowed
//                 disabled:opacity-60
//               "
//                   >
//                     {isSaving ? "Saving..." : "Save Changes"}
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </DashboardPageTemplate>
//     </>
//   );
// }

// final code

// "use client";

// import { FormEvent, useState, type ChangeEvent } from "react";
// import { FaKey, FaLock } from "react-icons/fa";
// import DashboardPageTemplate from "./student-dashboard-template";
// import { changeProfilePasswordSchema, type ChangePasswordFormData } from "@/schemas/profile-change-password.schema";
// import { changePassword } from "@/actions/student-profile.actions";

// interface ProfileChangePasswordProps {
//   email: string;
// }

// type FieldErrors = {
//   currentPassword?: string;
//   newPassword?: string;
//   confirmPassword?: string;
// };

// export default function ProfileChangePassword({ email }: ProfileChangePasswordProps) {
//   const [formData, setFormData] = useState<ChangePasswordFormData>({
//     currentPassword: "",
//     newPassword: "",
//     confirmPassword: "",
//   });

//   const [serverError, setServerError] = useState("");

//   const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

//   const [success, setSuccess] = useState("");

//   const [isSaving, setIsSaving] = useState(false);

//   /*
//    * ============================================================
//    * VALIDATE A SINGLE FIELD
//    * ============================================================
//    */
//   const validateField = (field: keyof ChangePasswordFormData, data: ChangePasswordFormData) => {
//     const result = changeProfilePasswordSchema.safeParse(data);

//     if (result.success) {
//       setFieldErrors((previous) => ({
//         ...previous,
//         [field]: undefined,
//       }));

//       return;
//     }

//     const issue = result.error.issues.find((issue) => issue.path[0] === field);

//     setFieldErrors((previous) => ({
//       ...previous,
//       [field]: issue?.message,
//     }));
//   };

//   /*
//    * ============================================================
//    * HANDLE INPUT CHANGE
//    * ============================================================
//    */
//   const handleInputChange = (field: keyof ChangePasswordFormData, event: ChangeEvent<HTMLInputElement>) => {
//     const value = event.target.value;

//     const updatedData: ChangePasswordFormData = {
//       ...formData,
//       [field]: value,
//     };

//     setFormData(updatedData);

//     /*
//      * Remove success message when user starts editing again.
//      */
//     setSuccess("");

//     /*
//      * Validate the changed field.
//      */
//     validateField(field, updatedData);

//     /*
//      * ==========================================================
//      * DEPENDENT VALIDATION
//      * ==========================================================
//      *
//      * If current password changes, new password needs to be
//      * checked again because they cannot be identical.
//      */
//     if (field === "currentPassword" && formData.newPassword) {
//       validateField("newPassword", updatedData);
//     }

//     /*
//      * If new password changes, confirm password needs to be
//      * checked again because it must match the new password.
//      */
//     if (field === "newPassword" && formData.confirmPassword) {
//       validateField("confirmPassword", updatedData);
//     }
//   };

//   /*
//    * ============================================================
//    * HANDLE BLUR
//    * ============================================================
//    */
//   const handleBlur = (field: keyof ChangePasswordFormData) => {
//     validateField(field, formData);
//   };

//   /*
//    * ============================================================
//    * VALIDATE COMPLETE FORM
//    * ============================================================
//    */
//   const validateForm = (): boolean => {
//     const result = changeProfilePasswordSchema.safeParse(formData);

//     if (result.success) {
//       setFieldErrors({});
//       return true;
//     }

//     const errors: FieldErrors = {};

//     result.error.issues.forEach((issue) => {
//       const field = issue.path[0] as keyof FieldErrors;

//       /*
//        * Only display the first error for each field.
//        */
//       if (!errors[field]) {
//         errors[field] = issue.message;
//       }
//     });

//     setFieldErrors(errors);

//     return false;
//   };

//   /*
//    * ============================================================
//    * SUBMIT
//    * ============================================================
//    */

//   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     setSuccess("");
//     setServerError("");

//     const isValid = validateForm();

//     if (!isValid) {
//       return;
//     }

//     try {
//       setIsSaving(true);

//       const result = await changePassword(formData);

//       if (!result.success) {
//         setFieldErrors(result.fieldErrors ?? {});
//         setServerError(result.fieldErrors ? "" : result.message);

//         return;
//       }

//       setSuccess(result.message);

//       setFormData({
//         currentPassword: "",
//         newPassword: "",
//         confirmPassword: "",
//       });

//       setFieldErrors({});
//     } catch (error) {
//       console.error("Change password error:", error);

//       setServerError("Something went wrong. Please try again.");
//     } finally {
//       setIsSaving(false);
//     }
//   };

//   // const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//   //   event.preventDefault();

//   //   setSuccess("");

//   //   /*
//   //    * Run complete Zod validation.
//   //    */
//   //   const isValid = validateForm();

//   //   if (!isValid) {
//   //     return;
//   //   }

//   //   try {
//   //     setIsSaving(true);

//   //     /*
//   //      * ========================================================
//   //      * YOUR EXISTING CHANGE PASSWORD SERVER ACTION / API
//   //      * ========================================================
//   //      *
//   //      * Connect your existing backend here.
//   //      *
//   //      * Example:
//   //      *
//   //      * const result = await changePassword(formData);
//   //      *
//   //      * if (!result.success) {
//   //      *   setFieldErrors({
//   //      *     currentPassword: result.message,
//   //      *   });
//   //      *   return;
//   //      * }
//   //      */

//   //     // Temporary success handling.
//   //     // Replace this with your actual server action.
//   //     await new Promise((resolve) => setTimeout(resolve, 1000));

//   //     setSuccess("Password updated successfully");

//   //     setFormData({
//   //       currentPassword: "",
//   //       newPassword: "",
//   //       confirmPassword: "",
//   //     });

//   //     setFieldErrors({});
//   //   } catch (error) {
//   //     console.error("Change password error:", error);

//   //     setFieldErrors({
//   //       currentPassword: "Something went wrong. Please try again.",
//   //     });
//   //   } finally {
//   //     setIsSaving(false);
//   //   }
//   // };

//   return (
//     <DashboardPageTemplate title="Change Password" description="">
//       <div className="p-7">
//         <div className="w-full rounded-lg bg-white px-5 py-5 sm:px-6 sm:py-6">
//           {/* ==================================================
//               HEADER
//           =================================================== */}
//           <div className="border-b border-[#d7dce1] pb-6">
//             <h1 className="text-[20px] font-normal leading-[1.2] text-[#111827]">Account information</h1>

//             <p className="mt-1 text-[13px] leading-5 text-[#111827]">Update Your Profile Password</p>
//           </div>

//           <form onSubmit={handleSubmit} noValidate>
//             {/* ==================================================
//                 EMAIL
//             =================================================== */}
//             <div className="border-b border-[#d7dce1] py-4 sm:py-3.5">
//               {serverError && <p className="mt-3 text-[12px] text-red-600">{serverError}</p>}
//               <label htmlFor="email" className="mb-1.5 block text-[13px] font-semibold text-[#111827]">
//                 Email Address
//               </label>

//               <input
//                 id="email"
//                 type="email"
//                 value={email}
//                 readOnly
//                 disabled
//                 className="
//                   h-7.25
//                   w-full
//                   rounded-[3px]
//                   border
//                   border-[#c8d0d9]
//                   bg-[#e9ecef]
//                   px-2.5
//                   text-[12px]
//                   text-[#667085]
//                   outline-none
//                   disabled:cursor-not-allowed
//                 "
//               />
//             </div>

//             {/* ==================================================
//                 PASSWORD FIELDS
//             =================================================== */}
//             <div className="pt-5">
//               {/* =================================================
//                   CURRENT PASSWORD
//               ================================================== */}
//               <div className="mb-3.25">
//                 <label htmlFor="currentPassword" className="mb-1.5 block text-[13px] font-semibold text-[#111827]">
//                   Current Password
//                   <span className="text-red-500">*</span>
//                 </label>

//                 <div className="flex h-7.5 w-full">
//                   <div
//                     className="
//                       flex
//                       w-8.5
//                       shrink-0
//                       items-center
//                       justify-center
//                       rounded-l-[3px]
//                       border
//                       border-r-0
//                       border-[#c8d0d9]
//                       bg-[#e9ecef]
//                       text-[#15233d]
//                     "
//                   >
//                     <FaKey size={13} />
//                   </div>

//                   <input
//                     id="currentPassword"
//                     name="currentPassword"
//                     type="password"
//                     value={formData.currentPassword}
//                     onChange={(event) => handleInputChange("currentPassword", event)}
//                     // onBlur={() => handleBlur("currentPassword")}
//                     placeholder="Enter current password"
//                     autoComplete="current-password"
//                     autoFocus
//                     className={`
//                       h-full
//                       min-w-0
//                       flex-1
//                       rounded-r-[3px]
//                       border
//                       bg-white
//                       px-2.5
//                       text-[12px]
//                       text-[#344054]
//                       outline-none
//                       placeholder:text-[#667085]

//                       ${
//                         fieldErrors.currentPassword
//                           ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-200"
//                           : "border-[#c8d0d9] focus:border-[#6675d9] focus:ring-1 focus:ring-[#6675d9]"
//                       }
//                     `}
//                   />
//                 </div>

//                 {/* Current password error */}
//                 {fieldErrors.currentPassword && (
//                   <p className="mt-1 text-[12px] leading-4 text-red-600">{fieldErrors.currentPassword}</p>
//                 )}
//               </div>

//               {/* =================================================
//                   NEW PASSWORD
//               ================================================== */}
//               <div className="mb-3.25">
//                 <label htmlFor="newPassword" className="mb-1.5 block text-[13px] font-semibold text-[#111827]">
//                   New Password
//                   <span className="text-red-500">*</span>
//                 </label>

//                 <div className="flex h-7.5 w-full">
//                   <div
//                     className="
//                       flex
//                       w-8.5
//                       shrink-0
//                       items-center
//                       justify-center
//                       rounded-l-[3px]
//                       border
//                       border-r-0
//                       border-[#c8d0d9]
//                       bg-[#e9ecef]
//                       text-[#15233d]
//                     "
//                   >
//                     <FaLock size={13} />
//                   </div>

//                   <input
//                     id="newPassword"
//                     name="newPassword"
//                     type="password"
//                     value={formData.newPassword}
//                     onChange={(event) => handleInputChange("newPassword", event)}
//                     // onBlur={() => handleBlur("newPassword")}
//                     placeholder="Enter new password"
//                     autoComplete="new-password"
//                     className={`
//                       h-full
//                       min-w-0
//                       flex-1
//                       rounded-r-[3px]
//                       border
//                       bg-white
//                       px-2.5
//                       text-[12px]
//                       text-[#344054]
//                       outline-none
//                       placeholder:text-[#667085]

//                       ${
//                         fieldErrors.newPassword
//                           ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-200"
//                           : "border-[#c8d0d9] focus:border-[#6675d9] focus:ring-1 focus:ring-[#6675d9]"
//                       }
//                     `}
//                   />
//                 </div>

//                 {/* New password error */}
//                 {fieldErrors.newPassword && (
//                   <p className="mt-1 text-[12px] leading-4 text-red-600">{fieldErrors.newPassword}</p>
//                 )}
//               </div>

//               {/* =================================================
//                   CONFIRM PASSWORD
//               ================================================== */}
//               <div>
//                 <label htmlFor="confirmPassword" className="mb-1.5 block text-[13px] font-semibold text-[#111827]">
//                   Confirm Password
//                   <span className="text-red-500">*</span>
//                 </label>

//                 <div className="flex h-7.5 w-full">
//                   <div
//                     className="
//                       flex
//                       w-8.5
//                       shrink-0
//                       items-center
//                       justify-center
//                       rounded-l-[3px]
//                       border
//                       border-r-0
//                       border-[#c8d0d9]
//                       bg-[#e9ecef]
//                       text-[#15233d]
//                     "
//                   >
//                     <FaLock size={13} />
//                   </div>

//                   <input
//                     id="confirmPassword"
//                     name="confirmPassword"
//                     type="password"
//                     value={formData.confirmPassword}
//                     onChange={(event) => handleInputChange("confirmPassword", event)}
//                     // onBlur={() => handleBlur("confirmPassword")}
//                     placeholder="Re-type your password"
//                     autoComplete="new-password"
//                     className={`
//                       h-full
//                       min-w-0
//                       flex-1
//                       rounded-r-[3px]
//                       border
//                       bg-white
//                       px-2.5
//                       text-[12px]
//                       text-[#344054]
//                       outline-none
//                       placeholder:text-[#667085]

//                       ${
//                         fieldErrors.confirmPassword
//                           ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-200"
//                           : "border-[#c8d0d9] focus:border-[#6675d9] focus:ring-1 focus:ring-[#6675d9]"
//                       }
//                     `}
//                   />
//                 </div>

//                 {/* Confirm password error */}
//                 {fieldErrors.confirmPassword && (
//                   <p className="mt-1 text-[12px] leading-4 text-red-600">{fieldErrors.confirmPassword}</p>
//                 )}
//               </div>

//               {/* =================================================
//                   SUCCESS MESSAGE
//               ================================================== */}
//               {success && <p className="mt-3 text-[12px] text-green-600">{success}</p>}

//               {/* =================================================
//                   SAVE BUTTON
//               ================================================== */}
//               <div className="mt-8">
//                 <button
//                   type="submit"
//                   disabled={isSaving}
//                   className="
//                     h-7.75
//                     min-w-39.25
//                     cursor-pointer
//                     rounded
//                     bg-[#222e6b]
//                     px-5
//                     text-[12px]
//                     font-semibold
//                     text-white
//                     transition
//                     hover:bg-[#1b2559]
//                     disabled:cursor-not-allowed
//                     disabled:opacity-60
//                   "
//                 >
//                   {isSaving ? "Saving..." : "Save Changes"}
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </DashboardPageTemplate>
//   );
// }

// code for error shown on focus input field

"use client";

import { FormEvent, useState, type ChangeEvent } from "react";
import { FaKey, FaLock } from "react-icons/fa";
import DashboardPageTemplate from "./student-dashboard-template";
import { changeProfilePasswordSchema, type ChangePasswordFormData } from "@/schemas/profile-change-password.schema";
import { changePassword } from "@/actions/student-profile.actions";
import { useRouter } from "next/navigation";

interface ProfileChangePasswordProps {
  email: string;
}

type FieldName = keyof ChangePasswordFormData;

type FieldErrors = {
  currentPassword?: string;
  newPassword?: string;
  confirmPassword?: string;
};

export default function ProfileChangePassword({ email }: ProfileChangePasswordProps) {
  const [formData, setFormData] = useState<ChangePasswordFormData>({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  const router = useRouter();

  /*
   * Which field currently has focus.
   *
   * IMPORTANT:
   * We use this separately from fieldErrors.
   *
   * fieldErrors = validation state
   * focusedField = error visibility state
   */
  const [focusedField, setFocusedField] = useState<FieldName | null>("currentPassword");

  /*
   * Once submit is attempted, show validation errors for
   * every invalid field.
   */
  const [submitAttempted, setSubmitAttempted] = useState(false);

  const [serverError, setServerError] = useState("");

  const [success, setSuccess] = useState("");

  const [isSaving, setIsSaving] = useState(false);

  /*
   * ============================================================
   * VALIDATE COMPLETE FORM
   * ============================================================
   */
  const getValidationErrors = (data: ChangePasswordFormData): FieldErrors => {
    const result = changeProfilePasswordSchema.safeParse(data);

    if (result.success) {
      return {};
    }

    const errors: FieldErrors = {};

    result.error.issues.forEach((issue) => {
      const field = issue.path[0] as FieldName;

      /*
       * Keep only the first error for each field.
       */
      if (!errors[field]) {
        errors[field] = issue.message;
      }
    });

    return errors;
  };

  /*
   * ============================================================
   * VALIDATE SINGLE FIELD
   * ============================================================
   *
   * We validate the complete schema because some validations
   * depend on another field:
   *
   * - newPassword depends on currentPassword
   * - confirmPassword depends on newPassword
   */
  const validateField = (field: FieldName, data: ChangePasswordFormData) => {
    const errors = getValidationErrors(data);

    setFieldErrors((previous) => ({
      ...previous,
      [field]: errors[field],
    }));
  };

  /*
   * ============================================================
   * INPUT CHANGE
   * ============================================================
   *
   * Dynamic validation happens ONLY while the field is focused.
   */
  const handleInputChange = (field: FieldName, event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    const updatedData: ChangePasswordFormData = {
      ...formData,
      [field]: value,
    };

    setFormData(updatedData);

    /*
     * Clear general/server messages when user edits again.
     */
    setServerError("");
    setSuccess("");

    /*
     * Dynamic validation while typing.
     */
    validateField(field, updatedData);

    /*
     * ==========================================================
     * DEPENDENT VALIDATION
     * ==========================================================
     */

    /*
     * Current password affects new password because:
     *
     * currentPassword !== newPassword
     */
    if (field === "currentPassword") {
      validateField("newPassword", updatedData);
    }

    /*
     * New password affects confirm password because:
     *
     * newPassword === confirmPassword
     */
    if (field === "newPassword") {
      validateField("confirmPassword", updatedData);
    }
  };

  /*
   * ============================================================
   * FOCUS
   * ============================================================
   *
   * When the user focuses a field again:
   *
   * - If invalid -> show error
   * - If valid -> no error
   */
  const handleFocus = (field: FieldName) => {
    setFocusedField(field);

    /*
     * Validate immediately when the field receives focus.
     *
     * This is what makes the error appear again when the user
     * selects/focuses an invalid field after previously leaving it.
     */
    validateField(field, formData);
  };

  const handleCancel = () => {
    router.push("/student/dashboard");
  };

  /*
   * ============================================================
   * BLUR
   * ============================================================
   *
   * IMPORTANT:
   *
   * Do NOT remove the validation error from fieldErrors.
   *
   * Only remove the field from focusedField.
   *
   * This allows the validation state to remain available while
   * hiding the error visually.
   */
  const handleBlur = (field: FieldName) => {
    setFocusedField((previous) => (previous === field ? null : previous));
  };

  /*
   * ============================================================
   * SHOULD SHOW FIELD ERROR
   * ============================================================
   */
  const shouldShowFieldError = (field: FieldName) => {
    /*
     * Before submit:
     *
     * Show only for currently focused field.
     */
    if (!submitAttempted) {
      return focusedField === field && Boolean(fieldErrors[field]);
    }

    /*
     * After submit:
     *
     * Show errors for all invalid fields.
     */
    return Boolean(fieldErrors[field]);
  };

  /*
   * ============================================================
   * SUBMIT
   * ============================================================
   */
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSuccess("");
    setServerError("");

    /*
     * Once submit is clicked, all invalid fields should display
     * their validation errors.
     */
    setSubmitAttempted(true);

    const errors = getValidationErrors(formData);

    setFieldErrors(errors);

    /*
     * Stop if client-side validation fails.
     */
    if (Object.keys(errors).length > 0) {
      /*
       * Focus the first invalid field.
       */
      const firstInvalidField = Object.keys(errors)[0] as FieldName;

      setFocusedField(firstInvalidField);

      document.getElementById(firstInvalidField)?.focus();

      return;
    }

    try {
      setIsSaving(true);

      const result = await changePassword(formData);

      /*
       * ========================================================
       * SERVER ERROR
       * ========================================================
       */
      if (!result.success) {
        /*
         * Server returned field-specific errors.
         */
        if (result.fieldErrors) {
          setFieldErrors(result.fieldErrors);

          /*
           * Focus the first field having a server error.
           */
          const firstServerError = Object.keys(result.fieldErrors)[0] as FieldName | undefined;

          if (firstServerError) {
            setFocusedField(firstServerError);

            document.getElementById(firstServerError)?.focus();
          }

          /*
           * submitAttempted remains true, therefore all
           * server field errors will be visible.
           */
        } else {
          /*
           * General server error.
           */
          setServerError(result.message);
        }

        return;
      }

      /*
       * ========================================================
       * SUCCESS
       * ========================================================
       */
      setSuccess(result.message);

      setFormData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });

      setFieldErrors({});

      setFocusedField("currentPassword");

      /*
       * After successful submission, start a fresh form.
       */
      setSubmitAttempted(false);

      setServerError("");
    } catch (error) {
      console.error("Change password error:", error);

      setServerError("Something went wrong. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  /*
   * ============================================================
   * FIELD ERROR CLASS
   * ============================================================
   */
  const getInputClassName = (field: FieldName) => {
    const showError = shouldShowFieldError(field);

    return `
      h-full
      min-w-0
      flex-1
      rounded-r-[3px]
      border
      bg-white
      px-2.5
      text-[12px]
      text-[#344054]
      outline-none
      placeholder:text-[#667085]

      ${
        showError
          ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-200"
          : "border-[#c8d0d9] focus:border-[#6675d9] focus:ring-1 focus:ring-[#6675d9]"
      }
    `;
  };

  return (
    <DashboardPageTemplate title="Change Password" description="">
      <div className="p-2">
        <div className="w-full rounded bg-white px-5 py-3 sm:px-6 sm:py-6">
          {/* ==================================================
              HEADER
          =================================================== */}
          <div className="border-b border-[#d7dce1] pb-6">
            <h1 className="text-[20px] font-semibold leading-[1.2] text-[#111827]">Account Information</h1>

            <p className="mt-1 text-[13px] leading-5 text-[#111827]">Update Your Profile Password</p>
          </div>

          <form onSubmit={handleSubmit} noValidate>
            {/* ==================================================
                EMAIL
            =================================================== */}
            <div className="border-b border-[#d7dce1] py-4 sm:py-3.5">
              {serverError && <p className="mb-3 text-[12px] text-red-600">{serverError}</p>}

              <label htmlFor="email" className="mb-1.5 block text-[13px] font-semibold text-[#111827]">
                Email Address
              </label>

              <input
                id="email"
                type="email"
                value={email}
                readOnly
                disabled
                className="
                  h-7.25
                  w-full
                  rounded-[3px]
                  border
                  border-[#c8d0d9]
                  bg-[#e9ecef]
                  px-2.5
                  text-[12px]
                  text-[#667085]
                  outline-none
                  disabled:cursor-not-allowed
                "
              />
            </div>

            {/* ==================================================
                PASSWORD FIELDS
            =================================================== */}
            <div className="pt-5">
              {/* =================================================
                  CURRENT PASSWORD
              ================================================== */}
              <div className="mb-3.25">
                <label htmlFor="currentPassword" className="mb-1.5 block text-[13px] font-semibold text-[#111827]">
                  Current Password
                  <span className="text-red-500">*</span>
                </label>

                <div className="flex h-7.5 w-full">
                  <div
                    className="
                      flex
                      w-8.5
                      shrink-0
                      items-center
                      justify-center
                      rounded-l-[3px]
                      border
                      border-r-0
                      border-[#c8d0d9]
                      bg-[#e9ecef]
                      text-[#15233d]
                    "
                  >
                    <FaKey size={13} />
                  </div>

                  <input
                    id="currentPassword"
                    name="currentPassword"
                    type="password"
                    value={formData.currentPassword}
                    onChange={(event) => handleInputChange("currentPassword", event)}
                    onFocus={() => handleFocus("currentPassword")}
                    onBlur={() => handleBlur("currentPassword")}
                    placeholder="Enter current password"
                    autoComplete="current-password"
                    autoFocus
                    className={getInputClassName("currentPassword")}
                  />
                </div>

                {shouldShowFieldError("currentPassword") && (
                  <p className="mt-1 text-[12px] leading-4 text-red-600">{fieldErrors.currentPassword}</p>
                )}
              </div>

              {/* =================================================
                  NEW PASSWORD
              ================================================== */}
              <div className="mb-3.25">
                <label htmlFor="newPassword" className="mb-1.5 block text-[13px] font-semibold text-[#111827]">
                  New Password
                  <span className="text-red-500">*</span>
                </label>

                <div className="flex h-7.5 w-full">
                  <div
                    className="
                      flex
                      w-8.5
                      shrink-0
                      items-center
                      justify-center
                      rounded-l-[3px]
                      border
                      border-r-0
                      border-[#c8d0d9]
                      bg-[#e9ecef]
                      text-[#15233d]
                    "
                  >
                    <FaLock size={13} />
                  </div>

                  <input
                    id="newPassword"
                    name="newPassword"
                    type="password"
                    value={formData.newPassword}
                    onChange={(event) => handleInputChange("newPassword", event)}
                    onFocus={() => handleFocus("newPassword")}
                    onBlur={() => handleBlur("newPassword")}
                    placeholder="Enter new password"
                    autoComplete="new-password"
                    className={getInputClassName("newPassword")}
                  />
                </div>

                {shouldShowFieldError("newPassword") && (
                  <p className="mt-1 text-[12px] leading-4 text-red-600">{fieldErrors.newPassword}</p>
                )}
              </div>

              {/* =================================================
                  CONFIRM PASSWORD
              ================================================== */}
              <div>
                <label htmlFor="confirmPassword" className="mb-1.5 block text-[13px] font-semibold text-[#111827]">
                  Confirm Password
                  <span className="text-red-500">*</span>
                </label>

                <div className="flex h-7.5 w-full">
                  <div
                    className="
                      flex
                      w-8.5
                      shrink-0
                      items-center
                      justify-center
                      rounded-l-[3px]
                      border
                      border-r-0
                      border-[#c8d0d9]
                      bg-[#e9ecef]
                      text-[#15233d]
                    "
                  >
                    <FaLock size={13} />
                  </div>

                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(event) => handleInputChange("confirmPassword", event)}
                    onFocus={() => handleFocus("confirmPassword")}
                    onBlur={() => handleBlur("confirmPassword")}
                    placeholder="Re-type your password"
                    autoComplete="new-password"
                    className={getInputClassName("confirmPassword")}
                  />
                </div>

                {shouldShowFieldError("confirmPassword") && (
                  <p className="mt-1 text-[12px] leading-4 text-red-600">{fieldErrors.confirmPassword}</p>
                )}
              </div>

              {/* ==================================================
                  SUCCESS MESSAGE
              =================================================== */}
              {success && <p className="mt-3 text-[12px] text-green-600">{success}</p>}

              {/* ==================================================
                  SAVE BUTTON
              =================================================== */}
              {/* <div className="mt-8">
                <button
                  type="submit"
                  disabled={isSaving}
                  className="
                    h-7.75
                    min-w-39.25
                    cursor-pointer
                    rounded
                    bg-[#222e6b]
                    px-5
                    text-[12px]
                    font-semibold
                    text-white
                    transition
                    hover:bg-[#1b2559]
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                  "
                >
                  {isSaving ? "Saving..." : "Save Changes"}
                </button>
              </div> */}

              <div className="mt-6 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={handleCancel}
                  disabled={isSaving}
                  className="rounded bg-rose-600 w-30 cursor-pointer px-4 py-2.5 text-sm font-medium text-white transition hover:bg-rose-400 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={isSaving}
                  className="rounded bg-green-950 w-30 cursor-pointer px-4 py-2.5 text-sm font-medium text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSaving ? "Saving..." : "Save"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </DashboardPageTemplate>
  );
}
