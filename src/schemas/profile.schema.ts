// import { user_gender } from "@/generated/prisma/enums";
// import { z } from "zod";

// /**
//  * Allowed characters for names.
//  * Supports:
//  * - Alphabets
//  * - Spaces
//  * - Apostrophe
//  * - Hyphen
//  */
// const nameRegex = /^[A-Za-zÀ-ÿ' -]+$/;

// /**
//  * Allowed characters for city, state and country names.
//  */
// const locationRegex = /^[A-Za-zÀ-ÿ' .-]+$/;

// export const profileSchema = z.object({
//   // --------------------------------------------------
//   // FIRST NAME
//   // --------------------------------------------------
//   firstname: z
//     .string()
//     .trim()
//     .min(1, "First name is required")
//     .max(50, "First name cannot exceed 50 characters")
//     .regex(nameRegex, "First name can contain only letters, spaces, apostrophes and hyphens"),

//   // --------------------------------------------------
//   // MIDDLE NAME
//   // --------------------------------------------------
//   middlename: z
//     .string()
//     .trim()
//     .max(50, "Middle name cannot exceed 50 characters")
//     .regex(nameRegex, "Middle name can contain only letters, spaces, apostrophes and hyphens")
//     .optional()
//     .or(z.literal("")),

//   // --------------------------------------------------
//   // LAST NAME
//   // --------------------------------------------------
//   lastname: z
//     .string()
//     .trim()
//     .min(1, "Last name is required")
//     .max(50, "Last name cannot exceed 50 characters")
//     .regex(nameRegex, "Last name can contain only letters, spaces, apostrophes and hyphens"),

//   // --------------------------------------------------
//   // MOBILE
//   // --------------------------------------------------
//   mobile: z
//     .string()
//     .trim()
//     .min(10, "Mobile number must be at least 10 digits")
//     .max(15, "Mobile number is too long")
//     .regex(/^\+?[0-9]{10,15}$/, "Enter a valid mobile number"),

//   // --------------------------------------------------
//   // DATE OF BIRTH
//   // --------------------------------------------------
//   dateOfBirth: z
//     .string()
//     .min(1, "Date of birth is required")
//     .refine((value) => {
//       const date = new Date(value);

//       return !Number.isNaN(date.getTime());
//     }, "Enter a valid date of birth")
//     .refine((value) => {
//       const date = new Date(value);

//       return date < new Date();
//     }, "Date of birth cannot be in the future"),

//   // --------------------------------------------------
//   // GENDER
//   // --------------------------------------------------
//   gender: z.enum(user_gender, {
//     message: "Gender is required",
//   }),

//   // --------------------------------------------------
//   // ADDRESS
//   // --------------------------------------------------
//   address: z
//     .string()
//     .trim()
//     .min(5, "Address must be at least 5 characters")
//     .max(250, "Address cannot exceed 250 characters"),

//   // --------------------------------------------------
//   // CITY
//   // --------------------------------------------------
//   city: z
//     .string()
//     .trim()
//     .min(2, "City is required")
//     .max(100, "City cannot exceed 100 characters")
//     .regex(locationRegex, "Enter a valid city name"),

//   // --------------------------------------------------
//   // STATE
//   // --------------------------------------------------
//   state: z
//     .string()
//     .trim()
//     .min(2, "State is required")
//     .max(100, "State cannot exceed 100 characters")
//     .regex(locationRegex, "Enter a valid state name"),

//   // --------------------------------------------------
//   // POSTAL / PIN CODE
//   // --------------------------------------------------
//   postalCode: z
//     .string()
//     .trim()
//     .regex(/^[0-9]{6}$/, "PIN code must be exactly 6 digits"),

//   // --------------------------------------------------
//   // COUNTRY
//   // --------------------------------------------------
//   country: z
//     .string()
//     .trim()
//     .min(2, "Country is required")
//     .max(100, "Country cannot exceed 100 characters")
//     .regex(locationRegex, "Enter a valid country name"),

//   // --------------------------------------------------
//   // BIO
//   // Optional
//   // --------------------------------------------------
//   bio: z.string().trim().max(500, "Bio cannot exceed 500 characters").or(z.literal("")),

//   // --------------------------------------------------
//   // PROFILE IMAGE
//   // Optional
//   // --------------------------------------------------
//   profileImage: z.string().trim().or(z.literal("")),
// });

// export type ProfileFormData = z.infer<typeof profileSchema>;

// updated code with registration form rules

import { user_gender } from "@/generated/prisma/enums";
import { z } from "zod";

// =========================================================
// REGEX
// =========================================================

const nameRegex = /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/;

const locationRegex = /^[A-Za-zÀ-ÿ' .-]+$/;

// =========================================================
// COUNTRY-SPECIFIC MOBILE VALIDATION
// =========================================================

const mobileValidationRules: Record<
  string,
  {
    minLength: number;
    maxLength: number;
    regex: RegExp;
    message: string;
  }
> = {
  IN: {
    minLength: 10,
    maxLength: 10,
    regex: /^[6-9][0-9]{9}$/,
    message: "India mobile number must be 10 digits and start with 6, 7, 8 or 9.",
  },

  AU: {
    minLength: 10,
    maxLength: 10,
    regex: /^04[0-9]{8}$/,
    message: "Australia mobile number must be 10 digits and start with 04.",
  },
};

// =========================================================
// PROFILE SCHEMA
// =========================================================

export const profileSchema = z
  .object({
    // -----------------------------------------------------
    // FIRST NAME
    // -----------------------------------------------------

    firstname: z
      .string()
      .trim()
      .min(2, "First Name is required")
      .max(50, "First name cannot exceed 50 characters")
      .regex(nameRegex, "First name can contain only letters, spaces, hyphens, and apostrophes"),

    // -----------------------------------------------------
    // MIDDLE NAME
    // -----------------------------------------------------

    middlename: z
      .string()
      .trim()
      .max(50, "Middle name cannot exceed 50 characters")
      .regex(nameRegex, "Middle name can contain only letters, spaces, hyphens, and apostrophes")
      .optional()
      .or(z.literal("")),

    // -----------------------------------------------------
    // LAST NAME
    // -----------------------------------------------------

    lastname: z
      .string()
      .trim()
      .min(2, "Last Name is required")
      .max(50, "Last name cannot exceed 50 characters")
      .regex(nameRegex, "Last name can contain only letters, spaces, hyphens, and apostrophes"),

    // -----------------------------------------------------
    // MOBILE
    // -----------------------------------------------------

    mobile: z
      .string()
      .trim()
      .min(1, "Please enter your mobile number")
      .regex(/^[0-9]+$/, "Mobile number must contain digits only"),

    // -----------------------------------------------------
    // BIO
    // -----------------------------------------------------

    bio: z.string().optional(),

    // -----------------------------------------------------
    // COUNTRY
    // -----------------------------------------------------

    country: z.string().trim().length(2, "Please select your country.").toUpperCase(),

    // -----------------------------------------------------
    // DATE OF BIRTH
    // -----------------------------------------------------

    dateOfBirth: z
      .string()
      .min(1, "Date of birth is required")
      .refine((value) => {
        const date = new Date(value);

        return !Number.isNaN(date.getTime());
      }, "Enter a valid date of birth")
      .refine((value) => {
        const date = new Date(value);

        return date < new Date();
      }, "Date of birth cannot be in the future"),

    // -----------------------------------------------------
    // GENDER
    // -----------------------------------------------------

    gender: z.enum(user_gender, {
      message: "Gender is required",
    }),

    // -----------------------------------------------------
    // ADDRESS
    // -----------------------------------------------------

    address: z
      .string()
      .trim()
      .min(5, "Address must be at least 5 characters")
      .max(250, "Address cannot exceed 250 characters"),

    // -----------------------------------------------------
    // CITY
    // -----------------------------------------------------

    city: z
      .string()
      .trim()
      .min(2, "City is required")
      .max(150, "City cannot exceed 150 characters")
      .regex(locationRegex, "Enter a valid city name"),

    // -----------------------------------------------------
    // STATE
    // -----------------------------------------------------

    state: z
      .string()
      .trim()
      .min(2, "State is required")
      .max(100, "State cannot exceed 100 characters")
      .regex(locationRegex, "Enter a valid state name"),

    // -----------------------------------------------------
    // POSTAL CODE
    // -----------------------------------------------------

    postalCode: z.string().trim().min(3, "PIN / ZIP code is required").max(20, "PIN / ZIP code is too long"),

    // -----------------------------------------------------
    // PROFILE IMAGE
    // -----------------------------------------------------

    profileImage: z.string().trim().or(z.literal("")).optional(),
  })

  // =======================================================
  // COUNTRY-SPECIFIC MOBILE VALIDATION
  // =======================================================

  .superRefine((data, ctx) => {
    const countryCode = data.country?.trim().toUpperCase();

    const mobile = data.mobile?.trim();

    // -----------------------------------------------------
    // COUNTRY NOT SELECTED
    // -----------------------------------------------------

    if (!countryCode) {
      return;
    }

    // -----------------------------------------------------
    // MOBILE NOT ENTERED
    // -----------------------------------------------------

    if (!mobile) {
      return;
    }

    // -----------------------------------------------------
    // FIND COUNTRY RULE
    // -----------------------------------------------------

    const rules = mobileValidationRules[countryCode];

    // -----------------------------------------------------
    // COUNTRY WITHOUT MOBILE RULE
    //
    // This prevents the schema from incorrectly rejecting
    // countries that are added later but don't yet have
    // application-specific rules.
    // -----------------------------------------------------

    if (!rules) {
      return;
    }

    // -----------------------------------------------------
    // LENGTH
    // -----------------------------------------------------

    if (mobile.length < rules.minLength || mobile.length > rules.maxLength) {
      ctx.addIssue({
        code: "custom",
        path: ["mobile"],
        message: rules.message,
      });

      return;
    }

    // -----------------------------------------------------
    // COUNTRY-SPECIFIC FORMAT
    // -----------------------------------------------------

    if (!rules.regex.test(mobile)) {
      ctx.addIssue({
        code: "custom",
        path: ["mobile"],
        message: rules.message,
      });
    }
  });

export type ProfileFormData = z.infer<typeof profileSchema>;
