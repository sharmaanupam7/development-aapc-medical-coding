// form with vertical fields

// "use client";

// import Link from "next/link";
// import { useEffect, useRef, useState } from "react";

// import { zodResolver } from "@hookform/resolvers/zod";
// import "react-phone-number-input/style.css";

// import { registerAction } from "@/actions/auth.actions";
// import { registerSchema, type RegisterFormData } from "@/schemas/register.schema";
// import { useRouter } from "next/navigation";
// import { Info } from "lucide-react";

// import { getCountryCallingCode, parsePhoneNumberWithError } from "libphonenumber-js";

// import type { CountryCode } from "libphonenumber-js";

// import { Controller, useForm, useWatch } from "react-hook-form";

// import PhoneInput from "react-phone-number-input";

// // ============================================================
// // TYPES
// // ============================================================

// type Country = {
//   country_id: number;
//   country_code: string;
//   country_name: string;
//   phoneCode: string;
// };

// type RegisterFormProps = {
//   countries: Country[];
// };

// type RegisterField = keyof RegisterFormData;

// // ============================================================
// // COMPONENT
// // ============================================================

// export default function RegisterForm({ countries }: RegisterFormProps) {
//   const router = useRouter();
//   // ----------------------------------------------------------
//   // STATE
//   // ----------------------------------------------------------

//   const [serverError, setServerError] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   /*
//    * Only the currently focused field displays its validation
//    * message.
//    *
//    * IMPORTANT:
//    * This does NOT clear the RHF error.
//    */
//   const [focusedField, setFocusedField] = useState<RegisterField | null>("firstname");

//   // ----------------------------------------------------------
//   // FORM
//   // ----------------------------------------------------------

//   const {
//     register,
//     setFocus,
//     control,
//     handleSubmit,
//     setValue,
//     setError,
//     reset,
//     trigger,
//     formState: { errors },
//   } = useForm<RegisterFormData>({
//     resolver: zodResolver(registerSchema),

//     defaultValues: {
//       firstname: "",
//       middlename: "",
//       lastname: "",
//       email: "",
//       mobile: "",
//       country: "IN",
//       password: "",
//       confirmPassword: "",
//     },

//     /*
//      * IMPORTANT:
//      * Validation happens while the user types.
//      */
//     mode: "onChange",

//     /*
//      * Continue validating changes after the first validation.
//      */
//     reValidateMode: "onChange",
//   });

//   // ----------------------------------------------------------
//   // AUTO FOCUS FIRST NAME
//   // ----------------------------------------------------------

//   useEffect(() => {
//     setFocus("firstname");
//     setFocusedField("firstname");

//     /*
//      * Trigger validation so an invalid/empty value can be shown
//      * immediately when firstname is focused.
//      */
//     void trigger("firstname");
//   }, [setFocus, trigger]);

//   // ----------------------------------------------------------
//   // ERROR VISIBILITY
//   // ----------------------------------------------------------

//   const getFieldError = (field: RegisterField) => {
//     /*
//      * RHF error is intentionally NOT removed.
//      *
//      * We only control whether it is visible.
//      */
//     if (focusedField !== field) {
//       return undefined;
//     }

//     return errors[field];
//   };

//   // ----------------------------------------------------------
//   // SELECTED COUNTRY
//   // ----------------------------------------------------------

//   const selectedCountry = useWatch({
//     control,
//     name: "country",
//   }) as CountryCode | undefined;

//   // ----------------------------------------------------------
//   // PREVIOUS COUNTRY
//   // ----------------------------------------------------------

//   const previousCountry = useRef<string>("");

//   // ----------------------------------------------------------
//   // COUNTRY CHANGE
//   // ----------------------------------------------------------

//   useEffect(() => {
//     if (!selectedCountry) {
//       return;
//     }

//     /*
//      * Avoid setting the mobile value repeatedly.
//      */
//     if (previousCountry.current === selectedCountry) {
//       return;
//     }

//     const callingCode = `+${getCountryCallingCode(selectedCountry)}`;

//     setValue("mobile", callingCode, {
//       shouldValidate: true,
//       shouldDirty: previousCountry.current !== "",
//     });

//     previousCountry.current = selectedCountry;
//   }, [selectedCountry, setValue]);

//   // ----------------------------------------------------------
//   // SUBMIT
//   // ----------------------------------------------------------

//   const onSubmit = async (data: RegisterFormData) => {
//     setServerError("");
//     setSuccessMessage("");
//     setIsSubmitting(true);

//     try {
//       // ------------------------------------------------------
//       // NORMALIZE MOBILE
//       // ------------------------------------------------------

//       let normalizedMobile = data.mobile;

//       try {
//         const phoneNumber = parsePhoneNumberWithError(data.mobile);

//         normalizedMobile = phoneNumber.number;
//       } catch {
//         /*
//          * Put the error into RHF so it behaves exactly like
//          * the other field validation errors.
//          */
//         setError("mobile", {
//           type: "manual",
//           message: "Please enter a valid mobile number.",
//         });

//         setFocusedField("mobile");

//         return;
//       }

//       // ------------------------------------------------------
//       // FORM DATA
//       // ------------------------------------------------------

//       const formData = new FormData();

//       formData.append("firstname", data.firstname);

//       formData.append("middlename", data.middlename || "");

//       formData.append("lastname", data.lastname);

//       formData.append("email", data.email);

//       formData.append("mobile", normalizedMobile);

//       formData.append("country", data.country);

//       formData.append("password", data.password);

//       formData.append("confirmPassword", data.confirmPassword);

//       // ------------------------------------------------------
//       // SERVER ACTION
//       // ------------------------------------------------------

//       const response = await registerAction(formData);

//       if (!response.success) {
//         setServerError(response.message || "Unable to create your account. Please check your details.");

//         return;
//       }

//       // ------------------------------------------------------
//       // SUCCESS
//       // ------------------------------------------------------

//       setSuccessMessage(response.message || "Your account has been created successfully.");

//       // Redirect to login page
//       router.replace("/login");

//       // ------------------------------------------------------
//       // RESET FORM
//       // ------------------------------------------------------

//       reset({
//         firstname: "",
//         middlename: "",
//         lastname: "",
//         email: "",
//         mobile: "",
//         country: "IN",
//         password: "",
//         confirmPassword: "",
//       });

//       previousCountry.current = "";

//       setFocusedField("firstname");

//       /*
//        * Return focus to firstname after reset.
//        */
//       setTimeout(() => {
//         setFocus("firstname");
//       }, 0);
//     } catch (error) {
//       console.error("Registration error:", error);

//       setServerError("Something went wrong. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   // ==========================================================
//   // JSX
//   // ==========================================================

//   return (
//     <main className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-slate-50">
//       <div className="relative flex min-h-[calc(100vh-80px)] items-center justify-center px-4 py-5 sm:px-6">
//         <div className="w-full max-w-md">
//           <div className="rounded border border-slate-200 bg-white px-6 py-5 shadow-[0_8px_30px_rgba(15,23,42,0.10)] transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(15,23,42,0.14)] sm:px-7 sm:py-6">
//             {/* ==================================================
//                 HEADER
//                 ================================================== */}

//             <div className="text-center">
//               <h1 className="text-[18px] font-bold tracking-wide text-[#2f113d]">CREATE ACCOUNT</h1>

//               <p className="mt-1 text-xs text-slate-500">Register as a student to continue</p>
//             </div>

//             {/* ==================================================
//                 SERVER ERROR
//                 ================================================== */}

//             {serverError && (
//               <div className="mt-3 border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700">{serverError}</div>
//             )}

//             {/* ==================================================
//                 SUCCESS
//                 ================================================== */}

//             {successMessage && (
//               <div className="mt-3 border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs text-emerald-700">
//                 {successMessage}
//               </div>
//             )}

//             {/* ==================================================
//                 FORM
//                 ================================================== */}

//             <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-3" noValidate>
//               {/* =================================================
//                   FIRST NAME
//                   ================================================= */}

//               <div>
//                 <label htmlFor="firstname" className="mb-1 block text-xs font-medium text-slate-700">
//                   First Name
//                   <span className="ml-1 text-red-500">*</span>
//                 </label>

//                 <input
//                   id="firstname"
//                   type="text"
//                   autoComplete="given-name"
//                   placeholder="Enter first name"
//                   {...register("firstname", {
//                     onChange: (event) => {
//                       event.target.value = event.target.value.replace(/[^A-Za-z '\-]/g, "");
//                     },
//                   })}
//                   onFocus={() => {
//                     setFocusedField("firstname");
//                     void trigger("firstname");
//                   }}
//                   className={`h-9 w-full rounded border px-3 text-xs outline-none transition ${
//                     getFieldError("firstname")
//                       ? "border-red-400 focus:border-red-500"
//                       : "border-slate-300 focus:border-teal-500"
//                   }`}
//                 />

//                 {getFieldError("firstname") && (
//                   <p className="mt-1 text-[11px] text-red-600">{getFieldError("firstname")?.message}</p>
//                 )}
//               </div>

//               {/* =================================================
//                   MIDDLE NAME
//                   ================================================= */}

//               <div>
//                 <label htmlFor="middlename" className="mb-1 block text-xs font-medium text-slate-700">
//                   Middle Name
//                 </label>

//                 <input
//                   id="middlename"
//                   type="text"
//                   autoComplete="additional-name"
//                   placeholder="Enter middle name"
//                   {...register("middlename", {
//                     onChange: (event) => {
//                       event.target.value = event.target.value.replace(/[^A-Za-z '\-]/g, "");
//                     },
//                   })}
//                   onFocus={() => {
//                     setFocusedField("middlename");
//                     void trigger("middlename");
//                   }}
//                   className={`h-9 w-full rounded border px-3 text-xs outline-none transition ${
//                     getFieldError("middlename")
//                       ? "border-red-400 focus:border-red-500"
//                       : "border-slate-300 focus:border-teal-500"
//                   }`}
//                 />

//                 {getFieldError("middlename") && (
//                   <p className="mt-1 text-[11px] text-red-600">{getFieldError("middlename")?.message}</p>
//                 )}
//               </div>

//               {/* =================================================
//                   LAST NAME
//                   ================================================= */}

//               <div>
//                 <label htmlFor="lastname" className="mb-1 block text-xs font-medium text-slate-700">
//                   Last Name
//                   <span className="ml-1 text-red-500">*</span>
//                 </label>

//                 <input
//                   id="lastname"
//                   type="text"
//                   autoComplete="family-name"
//                   placeholder="Enter last name"
//                   {...register("lastname", {
//                     onChange: (event) => {
//                       event.target.value = event.target.value.replace(/[^A-Za-z '\-]/g, "");
//                     },
//                   })}
//                   onFocus={() => {
//                     setFocusedField("lastname");
//                     void trigger("lastname");
//                   }}
//                   className={`h-9 w-full rounded border px-3 text-xs outline-none transition ${
//                     getFieldError("lastname")
//                       ? "border-red-400 focus:border-red-500"
//                       : "border-slate-300 focus:border-teal-500"
//                   }`}
//                 />

//                 {getFieldError("lastname") && (
//                   <p className="mt-1 text-[11px] text-red-600">{getFieldError("lastname")?.message}</p>
//                 )}
//               </div>

//               {/* =================================================
//                   EMAIL
//                   ================================================= */}

//               <div>
//                 <label htmlFor="email" className="mb-1 block text-xs font-medium text-slate-700">
//                   Email
//                   <span className="ml-1 text-red-500">*</span>
//                 </label>

//                 <input
//                   id="email"
//                   type="email"
//                   autoComplete="email"
//                   placeholder="Enter email address"
//                   {...register("email")}
//                   onFocus={() => {
//                     setFocusedField("email");
//                     void trigger("email");
//                   }}
//                   className={`h-9 w-full rounded border px-3 text-xs outline-none transition ${
//                     getFieldError("email")
//                       ? "border-red-400 focus:border-red-500"
//                       : "border-slate-300 focus:border-teal-500"
//                   }`}
//                 />

//                 {getFieldError("email") && (
//                   <p className="mt-1 text-[11px] text-red-600">{getFieldError("email")?.message}</p>
//                 )}
//               </div>

//               {/* =================================================
//                   COUNTRY
//                   ================================================= */}

//               <div>
//                 <label htmlFor="country" className="mb-1 block text-xs font-medium text-slate-700">
//                   Country
//                   <span className="ml-1 text-red-500">*</span>
//                 </label>

//                 <select
//                   id="country"
//                   {...register("country")}
//                   onFocus={() => {
//                     setFocusedField("country");
//                     void trigger("country");
//                   }}
//                   className={`h-9 w-full rounded border bg-white px-3 text-xs outline-none transition ${
//                     getFieldError("country")
//                       ? "border-red-400 focus:border-red-500"
//                       : "border-slate-300 focus:border-teal-500"
//                   }`}
//                 >
//                   <option value="">Select country</option>

//                   {countries.map((country) => (
//                     <option key={country.country_id} value={country.country_code}>
//                       {country.country_name}
//                     </option>
//                   ))}
//                 </select>

//                 {getFieldError("country") && (
//                   <p className="mt-1 text-[11px] text-red-600">{getFieldError("country")?.message}</p>
//                 )}
//               </div>

//               {/* =================================================
//                   MOBILE
//                   ================================================= */}

//               <div>
//                 <label htmlFor="mobile" className="mb-1 block text-xs font-medium text-slate-700">
//                   Mobile Number
//                   <span className="ml-1 text-red-500">*</span>
//                 </label>

//                 <Controller
//                   name="mobile"
//                   control={control}
//                   render={({ field }) => (
//                     <PhoneInput
//                       {...field}
//                       id="mobile"
//                       defaultCountry={(selectedCountry || "IN") as CountryCode}
//                       international
//                       countryCallingCodeEditable={false}
//                       placeholder="Enter mobile number"
//                       /*
//                        * IMPORTANT:
//                        * onFocus is directly on PhoneInput.
//                        *
//                        * Do NOT put it inside register().
//                        */
//                       onFocus={() => {
//                         setFocusedField("mobile");
//                         void trigger("mobile");
//                       }}
//                       onChange={(value) => {
//                         field.onChange(value || "");
//                       }}
//                       className={`phone-input h-9 w-full rounded border px-3 text-xs outline-none transition ${
//                         getFieldError("mobile")
//                           ? "border-red-400 focus-within:border-red-500"
//                           : "border-slate-300 focus-within:border-teal-500"
//                       }`}
//                     />
//                   )}
//                 />

//                 {getFieldError("mobile") && (
//                   <p className="mt-1 text-[11px] text-red-600">{getFieldError("mobile")?.message}</p>
//                 )}
//               </div>

//               {/* =================================================
//                   PASSWORD
//                   ================================================= */}

//               <div>
//                 <div className="mb-1 flex items-center justify-between">
//                   <label htmlFor="password" className="block text-xs font-medium text-slate-700">
//                     Password
//                     <span className="ml-1 text-red-500">*</span>
//                   </label>

//                   <div className="group relative">
//                     <Info size={14} className="cursor-help text-slate-400" />

//                     <div className="pointer-events-none absolute left-full top-0 ml-1 z-50 hidden w-64 rounded border border-slate-200 bg-white p-3 text-[10px] text-slate-600 shadow-lg group-hover:block">
//                       <p className="mb-1 font-semibold text-slate-700">Password requirements</p>

//                       <ul className="list-disc space-y-1 pl-4">
//                         <li>Minimum 12 characters</li>

//                         <li>Maximum 35 characters</li>

//                         <li>At least one uppercase letter (A-Z)</li>

//                         <li>At least one lowercase letter (a-z)</li>

//                         <li>At least one number (0-9)</li>

//                         <li>At least one special character</li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>

//                 <input
//                   id="password"
//                   type="password"
//                   autoComplete="new-password"
//                   placeholder="Enter password"
//                   {...register("password")}
//                   onFocus={() => {
//                     setFocusedField("password");
//                     void trigger("password");
//                   }}
//                   className={`h-9 w-full rounded border px-3 text-xs outline-none transition ${
//                     getFieldError("password")
//                       ? "border-red-400 focus:border-red-500"
//                       : "border-slate-300 focus:border-teal-500"
//                   }`}
//                 />

//                 {getFieldError("password") && (
//                   <p className="mt-1 text-[11px] text-red-600">{getFieldError("password")?.message}</p>
//                 )}
//               </div>

//               {/* =================================================
//                   CONFIRM PASSWORD
//                   ================================================= */}

//               <div>
//                 <label htmlFor="confirmPassword" className="mb-1 block text-xs font-medium text-slate-700">
//                   Confirm Password
//                   <span className="ml-1 text-red-500">*</span>
//                 </label>

//                 <input
//                   id="confirmPassword"
//                   type="password"
//                   autoComplete="new-password"
//                   placeholder="Confirm password"
//                   {...register("confirmPassword")}
//                   onFocus={() => {
//                     setFocusedField("confirmPassword");

//                     /*
//                      * Because confirmPassword is part of
//                      * a cross-field Zod validation rule,
//                      * validate it explicitly.
//                      */
//                     void trigger("confirmPassword");
//                   }}
//                   className={`h-9 w-full rounded border px-3 text-xs outline-none transition ${
//                     getFieldError("confirmPassword")
//                       ? "border-red-400 focus:border-red-500"
//                       : "border-slate-300 focus:border-teal-500"
//                   }`}
//                 />

//                 {getFieldError("confirmPassword") && (
//                   <p className="mt-1 text-[11px] text-red-600">{getFieldError("confirmPassword")?.message}</p>
//                 )}
//               </div>

//               {/* =================================================
//                   SUBMIT
//                   ================================================= */}

//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="mt-1 h-9 w-full cursor-pointer bg-teal-600 px-4 text-xs font-bold text-white shadow-md shadow-teal-600/20 transition duration-200 hover:bg-teal-700 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
//               >
//                 {isSubmitting ? "Creating Account..." : "Register Account"}
//               </button>
//             </form>

//             {/* ==================================================
//                 LOGIN
//                 ================================================== */}

//             <div className="mt-4 border-t border-slate-100 pt-3 text-center text-xs text-slate-500">
//               Already have an account?{" "}
//               <Link href="/login" className="font-semibold text-teal-600 transition hover:text-teal-700">
//                 Login
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

// form with horizontal fields

"use client";

import Link from "next/link";

import { useEffect, useRef, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";

import "react-phone-number-input/style.css";

import { registerAction } from "@/actions/auth.actions";

import { registerSchema, type RegisterFormData } from "@/schemas/register.schema";

import { useRouter } from "next/navigation";

import { Info } from "lucide-react";

import { getCountryCallingCode, parsePhoneNumberWithError } from "libphonenumber-js";

import type { CountryCode } from "libphonenumber-js";

import { Controller, useForm, useWatch } from "react-hook-form";

import PhoneInput from "react-phone-number-input";

// ============================================================

// TYPES

// ============================================================

type Country = {
  country_id: number;

  country_code: string;

  country_name: string;

  phoneCode: string;
};

type RegisterFormProps = {
  countries: Country[];
};

type RegisterField = keyof RegisterFormData;

// ============================================================

// COMPONENT

// ============================================================

export default function RegisterForm({ countries }: RegisterFormProps) {
  const router = useRouter();

  // ----------------------------------------------------------

  // STATE

  // ----------------------------------------------------------

  const [serverError, setServerError] = useState("");

  const [successMessage, setSuccessMessage] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);

  /*

   * Only the currently focused field displays its validation

   * message.

   *

   * IMPORTANT:

   * This does NOT clear the RHF error.

   */

  const [focusedField, setFocusedField] = useState<RegisterField | null>("firstname");

  // ----------------------------------------------------------

  // FORM

  // ----------------------------------------------------------

  const {
    register,

    setFocus,

    control,

    handleSubmit,

    setValue,

    setError,

    reset,

    trigger,

    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),

    defaultValues: {
      firstname: "",

      middlename: "",

      lastname: "",

      email: "",

      mobile: "",

      country: "IN",

      password: "",

      confirmPassword: "",
    },

    /*

     * IMPORTANT:

     * Validation happens while the user types.

     */

    mode: "onChange",

    /*

     * Continue validating changes after the first validation.

     */

    reValidateMode: "onChange",
  });

  // ----------------------------------------------------------

  // AUTO FOCUS FIRST NAME

  // ----------------------------------------------------------

  useEffect(() => {
    setFocus("firstname");

    setFocusedField("firstname");

    /*

     * Trigger validation so an invalid/empty value can be shown

     * immediately when firstname is focused.

     */

    void trigger("firstname");
  }, [setFocus, trigger]);

  // ----------------------------------------------------------

  // ERROR VISIBILITY

  // ----------------------------------------------------------

  const getFieldError = (field: RegisterField) => {
    /*

     * RHF error is intentionally NOT removed.

     *

     * We only control whether it is visible.

     */

    if (focusedField !== field) {
      return undefined;
    }

    return errors[field];
  };

  // ----------------------------------------------------------

  // SELECTED COUNTRY

  // ----------------------------------------------------------

  const selectedCountry = useWatch({
    control,

    name: "country",
  }) as CountryCode | undefined;

  // ----------------------------------------------------------

  // PREVIOUS COUNTRY

  // ----------------------------------------------------------

  const previousCountry = useRef<string>("");

  // ----------------------------------------------------------

  // COUNTRY CHANGE

  // ----------------------------------------------------------

  useEffect(() => {
    if (!selectedCountry) {
      return;
    }

    /*

     * Avoid setting the mobile value repeatedly.

     */

    if (previousCountry.current === selectedCountry) {
      return;
    }

    const callingCode = `+${getCountryCallingCode(selectedCountry)}`;

    setValue("mobile", callingCode, {
      shouldValidate: true,

      shouldDirty: previousCountry.current !== "",
    });

    previousCountry.current = selectedCountry;
  }, [selectedCountry, setValue]);

  // ----------------------------------------------------------

  // SUBMIT

  // ----------------------------------------------------------

  const onSubmit = async (data: RegisterFormData) => {
    setServerError("");

    setSuccessMessage("");

    setIsSubmitting(true);

    try {
      // ------------------------------------------------------

      // NORMALIZE MOBILE

      // ------------------------------------------------------

      let normalizedMobile = data.mobile;

      try {
        const phoneNumber = parsePhoneNumberWithError(data.mobile);

        normalizedMobile = phoneNumber.number;
      } catch {
        /*

         * Put the error into RHF so it behaves exactly like

         * the other field validation errors.

         */

        setError("mobile", {
          type: "manual",

          message: "Please enter a valid mobile number.",
        });

        setFocusedField("mobile");

        return;
      }

      // ------------------------------------------------------

      // FORM DATA

      // ------------------------------------------------------

      const formData = new FormData();

      formData.append("firstname", data.firstname);

      formData.append("middlename", data.middlename || "");

      formData.append("lastname", data.lastname);

      formData.append("email", data.email);

      formData.append("mobile", normalizedMobile);

      formData.append("country", data.country);

      formData.append("password", data.password);

      formData.append("confirmPassword", data.confirmPassword);

      // ------------------------------------------------------

      // SERVER ACTION

      // ------------------------------------------------------

      const response = await registerAction(formData);

      if (!response.success) {
        setServerError(response.message || "Unable to create your account. Please check your details.");

        return;
      }

      // ------------------------------------------------------

      // SUCCESS

      // ------------------------------------------------------

      setSuccessMessage(response.message || "Your account has been created successfully.");

      // Redirect to login page

      router.replace("/login");

      // ------------------------------------------------------

      // RESET FORM

      // ------------------------------------------------------

      reset({
        firstname: "",

        middlename: "",

        lastname: "",

        email: "",

        mobile: "",

        country: "IN",

        password: "",

        confirmPassword: "",
      });

      previousCountry.current = "";

      setFocusedField("firstname");

      /*

       * Return focus to firstname after reset.

       */

      setTimeout(() => {
        setFocus("firstname");
      }, 0);
    } catch (error) {
      console.error("Registration error:", error);

      setServerError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // ==========================================================

  // JSX

  // ==========================================================

  return (
    <main className="relative min-h-[calc(100vh-80px)] bg-slate-50">
      <div className="relative flex min-h-[calc(100vh-80px)] items-start justify-center px-3 py-3 sm:px-5 lg:items-center">
        <div className="w-full max-w-6xl">
          <div className="rounded border border-slate-200 bg-white px-4 py-4 shadow-[0_8px_30px_rgba(15,23,42,0.10)] transition-shadow duration-300 sm:px-6 sm:py-5">
            {/* ==================================================

                HEADER

                ================================================== */}

            <div className="text-center">
              <h1 className="text-[18px] font-bold tracking-wide text-[#2f113d]">CREATE ACCOUNT</h1>

              <p className="mt-1 text-xs text-slate-500">Register as a student to continue</p>
            </div>

            {/* ==================================================

                SERVER ERROR

                ================================================== */}

            {serverError && (
              <div className="mt-3 border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700">{serverError}</div>
            )}

            {/* ==================================================

                SUCCESS

                ================================================== */}

            {successMessage && (
              <div className="mt-3 border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs text-emerald-700">
                {successMessage}
              </div>
            )}

            {/* ==================================================

                FORM

                ================================================== */}

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-3 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              noValidate
            >
              {/* =================================================

                  FIRST NAME

                  ================================================= */}

              <div>
                <label htmlFor="firstname" className="mb-1 block text-xs font-medium text-slate-700">
                  First Name
                  <span className="ml-1 text-red-500">*</span>
                </label>

                <input
                  id="firstname"
                  type="text"
                  autoComplete="given-name"
                  placeholder="Enter first name"
                  {...register("firstname", {
                    onChange: (event) => {
                      event.target.value = event.target.value.replace(/[^A-Za-z '-]/g, "");
                    },
                  })}
                  onFocus={() => {
                    setFocusedField("firstname");

                    void trigger("firstname");
                  }}
                  className={`h-9 w-full rounded border px-3 text-xs outline-none transition ${
                    getFieldError("firstname")
                      ? "border-red-400 focus:border-red-500"
                      : "border-slate-300 focus:border-teal-500"
                  }`}
                />

                {getFieldError("firstname") && (
                  <p className="mt-1 text-[11px] text-red-600">{getFieldError("firstname")?.message}</p>
                )}
              </div>

              {/* =================================================

                  MIDDLE NAME

                  ================================================= */}

              <div>
                <label htmlFor="middlename" className="mb-1 block text-xs font-medium text-slate-700">
                  Middle Name
                </label>

                <input
                  id="middlename"
                  type="text"
                  autoComplete="additional-name"
                  placeholder="Enter middle name"
                  {...register("middlename", {
                    onChange: (event) => {
                      event.target.value = event.target.value.replace(/[^A-Za-z '-]/g, "");
                    },
                  })}
                  onFocus={() => {
                    setFocusedField("middlename");

                    void trigger("middlename");
                  }}
                  className={`h-9 w-full rounded border px-3 text-xs outline-none transition ${
                    getFieldError("middlename")
                      ? "border-red-400 focus:border-red-500"
                      : "border-slate-300 focus:border-teal-500"
                  }`}
                />

                {getFieldError("middlename") && (
                  <p className="mt-1 text-[11px] text-red-600">{getFieldError("middlename")?.message}</p>
                )}
              </div>

              {/* =================================================

                  LAST NAME

                  ================================================= */}

              <div>
                <label htmlFor="lastname" className="mb-1 block text-xs font-medium text-slate-700">
                  Last Name
                  <span className="ml-1 text-red-500">*</span>
                </label>

                <input
                  id="lastname"
                  type="text"
                  autoComplete="family-name"
                  placeholder="Enter last name"
                  {...register("lastname", {
                    onChange: (event) => {
                      event.target.value = event.target.value.replace(/[^A-Za-z '-]/g, "");
                    },
                  })}
                  onFocus={() => {
                    setFocusedField("lastname");

                    void trigger("lastname");
                  }}
                  className={`h-9 w-full rounded border px-3 text-xs outline-none transition ${
                    getFieldError("lastname")
                      ? "border-red-400 focus:border-red-500"
                      : "border-slate-300 focus:border-teal-500"
                  }`}
                />

                {getFieldError("lastname") && (
                  <p className="mt-1 text-[11px] text-red-600">{getFieldError("lastname")?.message}</p>
                )}
              </div>

              {/* =================================================

                  EMAIL

                  ================================================= */}

              <div>
                <label htmlFor="email" className="mb-1 block text-xs font-medium text-slate-700">
                  Email
                  <span className="ml-1 text-red-500">*</span>
                </label>

                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Enter email address"
                  {...register("email")}
                  onFocus={() => {
                    setFocusedField("email");

                    void trigger("email");
                  }}
                  className={`h-9 w-full rounded border px-3 text-xs outline-none transition ${
                    getFieldError("email")
                      ? "border-red-400 focus:border-red-500"
                      : "border-slate-300 focus:border-teal-500"
                  }`}
                />

                {getFieldError("email") && (
                  <p className="mt-1 text-[11px] text-red-600">{getFieldError("email")?.message}</p>
                )}
              </div>

              {/* =================================================

                  COUNTRY

                  ================================================= */}

              <div>
                <label htmlFor="country" className="mb-1 block text-xs font-medium text-slate-700">
                  Country
                  <span className="ml-1 text-red-500">*</span>
                </label>

                <select
                  id="country"
                  {...register("country")}
                  onFocus={() => {
                    setFocusedField("country");

                    void trigger("country");
                  }}
                  className={`h-9 w-full rounded border bg-white px-3 text-xs outline-none transition ${
                    getFieldError("country")
                      ? "border-red-400 focus:border-red-500"
                      : "border-slate-300 focus:border-teal-500"
                  }`}
                >
                  <option value="">Select country</option>

                  {countries.map((country) => (
                    <option key={country.country_id} value={country.country_code}>
                      {country.country_name}
                    </option>
                  ))}
                </select>

                {getFieldError("country") && (
                  <p className="mt-1 text-[11px] text-red-600">{getFieldError("country")?.message}</p>
                )}
              </div>

              {/* =================================================

                  MOBILE

                  ================================================= */}

              <div>
                <label htmlFor="mobile" className="mb-1 block text-xs font-medium text-slate-700">
                  Mobile Number
                  <span className="ml-1 text-red-500">*</span>
                </label>

                <Controller
                  name="mobile"
                  control={control}
                  render={({ field }) => (
                    <PhoneInput
                      {...field}
                      id="mobile"
                      defaultCountry={(selectedCountry || "IN") as CountryCode}
                      international
                      countryCallingCodeEditable={false}
                      placeholder="Enter mobile number"
                      /*

                       * IMPORTANT:

                       * onFocus is directly on PhoneInput.

                       *

                       * Do NOT put it inside register().

                       */

                      onFocus={() => {
                        setFocusedField("mobile");

                        void trigger("mobile");
                      }}
                      onChange={(value) => {
                        field.onChange(value || "");
                      }}
                      className={`phone-input h-9 w-full rounded border px-3 text-xs outline-none transition ${
                        getFieldError("mobile")
                          ? "border-red-400 focus-within:border-red-500"
                          : "border-slate-300 focus-within:border-teal-500"
                      }`}
                    />
                  )}
                />

                {getFieldError("mobile") && (
                  <p className="mt-1 text-[11px] text-red-600">{getFieldError("mobile")?.message}</p>
                )}
              </div>

              {/* =================================================

                  PASSWORD

                  ================================================= */}

              <div>
                <div className="mb-1 flex items-center justify-between">
                  <label htmlFor="password" className="block text-xs font-medium text-slate-700">
                    Password
                    <span className="ml-1 text-red-500">*</span>
                  </label>

                  <div className="group relative">
                    <Info size={14} className="cursor-help text-slate-400" />

                    <div className="pointer-events-none absolute left-full top-0 ml-1 z-50 hidden w-64 rounded border border-slate-200 bg-white p-3 text-[10px] text-slate-600 shadow-lg group-hover:block">
                      <p className="mb-1 font-semibold text-slate-700">Password requirements</p>

                      <ul className="list-disc space-y-1 pl-4">
                        <li>Minimum 12 characters</li>

                        <li>Maximum 35 characters</li>

                        <li>At least one uppercase letter (A-Z)</li>

                        <li>At least one lowercase letter (a-z)</li>

                        <li>At least one number (0-9)</li>

                        <li>At least one special character</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <input
                  id="password"
                  type="password"
                  autoComplete="new-password"
                  placeholder="Enter password"
                  {...register("password")}
                  onFocus={() => {
                    setFocusedField("password");

                    void trigger("password");
                  }}
                  className={`h-9 w-full rounded border px-3 text-xs outline-none transition ${
                    getFieldError("password")
                      ? "border-red-400 focus:border-red-500"
                      : "border-slate-300 focus:border-teal-500"
                  }`}
                />

                {getFieldError("password") && (
                  <p className="mt-1 text-[11px] text-red-600">{getFieldError("password")?.message}</p>
                )}
              </div>

              {/* =================================================

                  CONFIRM PASSWORD

                  ================================================= */}

              <div>
                <label htmlFor="confirmPassword" className="mb-1 block text-xs font-medium text-slate-700">
                  Confirm Password
                  <span className="ml-1 text-red-500">*</span>
                </label>

                <input
                  id="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  placeholder="Confirm password"
                  {...register("confirmPassword")}
                  onFocus={() => {
                    setFocusedField("confirmPassword");

                    /*

                     * Because confirmPassword is part of

                     * a cross-field Zod validation rule,

                     * validate it explicitly.

                     */

                    void trigger("confirmPassword");
                  }}
                  className={`h-9 w-full rounded border px-3 text-xs outline-none transition ${
                    getFieldError("confirmPassword")
                      ? "border-red-400 focus:border-red-500"
                      : "border-slate-300 focus:border-teal-500"
                  }`}
                />

                {getFieldError("confirmPassword") && (
                  <p className="mt-1 text-[11px] text-red-600">{getFieldError("confirmPassword")?.message}</p>
                )}
              </div>

              {/* =================================================

                  SUBMIT

                  ================================================= */}

              <button
                type="submit"
                disabled={isSubmitting}
                className="col-span-full mt-1 h-9 w-full cursor-pointer bg-teal-600 px-4 text-xs font-bold text-white shadow-md shadow-teal-600/20 transition duration-200 hover:bg-teal-700 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Creating Account..." : "Register Account"}
              </button>
            </form>

            {/* ==================================================

                LOGIN

                ================================================== */}

            <div className="mt-4 border-t border-slate-100 pt-3 text-center text-xs text-slate-500">
              Already have an account?{" "}
              <Link href="/login" className="font-semibold text-teal-600 transition hover:text-teal-700">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
