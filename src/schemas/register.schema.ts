import { z } from "zod";

import { isValidPhoneNumber, parsePhoneNumberWithError } from "libphonenumber-js";

// ============================================================
// NAME VALIDATION
// Allowed:
// - A-Z
// - a-z
// - spaces
// - hyphen (-)
// - apostrophe (')
// Examples:
// John
// John Doe
// Mary-Jane
// O'Connor
// D'Angelo
// ============================================================

const nameRegex = /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/;

export const registerSchema = z
  .object({
    // ==========================================================
    // FIRST NAME
    // ==========================================================

    firstname: z
      .string()
      .trim()
      .min(2, "First Name is required")
      .max(50, "First name cannot exceed 50 characters")
      .regex(nameRegex, "First name can contain only letters, spaces, hyphens, and apostrophes"),

    // ==========================================================
    // MIDDLE NAME
    // Optional
    // ==========================================================

    middlename: z
      .string()
      .trim()
      .max(50, "Middle name cannot exceed 50 characters")
      .regex(nameRegex, "Middle name can contain only letters, spaces, hyphens, and apostrophes")
      .optional()
      .or(z.literal("")),

    // ==========================================================
    // LAST NAME
    // ==========================================================

    lastname: z
      .string()
      .trim()
      .min(2, "Last Name is required")
      .max(50, "Last name cannot exceed 50 characters")
      .regex(nameRegex, "Last name can contain only letters, spaces, hyphens, and apostrophes"),

    // ==========================================================
    // EMAIL
    // ==========================================================

    email: z
      .email("Please enter a valid email address")
      .trim()
      .toLowerCase()
      .refine(
        (email) => {
          const [localPart, domain] = email.split("@");

          // ----------------------------------------------------
          // Local part:
          //
          // Minimum 2 characters.
          // Allowed:
          // A-Z
          // a-z
          // 0-9
          // .
          // _
          // %
          // +
          // -
          //
          // Examples:
          // hk@gmail.com       ✅
          // hk1@gmail.com      ✅
          // john.doe@gmail.com ✅
          // j@gmail.com        ❌
          // ----------------------------------------------------

          if (!localPart || !/^(?=[A-Za-z0-9])[A-Za-z0-9._%+-]{2,}$/.test(localPart)) {
            return false;
          }

          // ----------------------------------------------------
          // Domain must be present
          // ----------------------------------------------------

          if (!domain) {
            return false;
          }

          // ----------------------------------------------------
          // Domain validation
          //
          // Examples:
          // gmail.com       ✅
          // example.co.uk   ✅
          // yahoo.com       ✅
          // gmail           ❌
          // -gmail.com      ❌
          // gmail-.com      ❌
          // ----------------------------------------------------

          return /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z]{2,})+$/i.test(domain);
        },
        {
          message: "Please enter a valid email address",
        },
      ),

    // ==========================================================
    // MOBILE
    // ==========================================================

    mobile: z
      .string()
      .trim()
      .min(1, "Please enter your mobile number")
      .refine((value) => {
        try {
          return isValidPhoneNumber(value);
        } catch {
          return false;
        }
      }, "Please enter a valid mobile number"),

    // ==========================================================
    // COUNTRY
    //
    // Database country_code should be ISO-2:
    //
    // India           -> IN
    // United States   -> US
    // United Kingdom  -> GB
    // Canada          -> CA
    // Australia       -> AU
    // ==========================================================

    country: z.string().trim().length(2, "Please select your country."),

    // ==========================================================
    // PASSWORD
    //
    // Allowed special characters are intentionally broad.
    // The special-character rule only requires at least one
    // character that is NOT A-Z, a-z, or 0-9.
    // ==========================================================

    password: z
      .string()
      .min(12, "Password must have at least 12 characters")
      .max(35, "Password must not exceed 35 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character"),

    // ==========================================================
    // CONFIRM PASSWORD
    // ==========================================================

    confirmPassword: z.string().min(1, "Please confirm your password"),
  })

  // ============================================================
  // PASSWORD MATCH
  // ============================================================

  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })

  // ============================================================
  // MOBILE NUMBER MUST MATCH SELECTED COUNTRY
  // ============================================================

  .refine(
    (data) => {
      if (!data.country || !data.mobile) {
        return true;
      }

      try {
        const phoneNumber = parsePhoneNumberWithError(data.mobile);

        return phoneNumber.country === data.country && isValidPhoneNumber(data.mobile);
      } catch {
        return false;
      }
    },
    {
      message: "Mobile number does not match the selected country.",
      path: ["mobile"],
    },
  );

export type RegisterFormData = z.infer<typeof registerSchema>;
