import { z } from "zod";

export const contact_usSchema = z.object({
  /**
   * Full name
   */
  name: z
    .string()
    .trim()
    .min(1, "Please enter your name.")
    .min(2, "Name must be at least 2 characters.")
    .max(30, "Name is too long.")
    .regex(/^[A-Za-zÀ-ÿ]+(?:[ '-][A-Za-zÀ-ÿ]+)*$/, "Name can contain only letters, spaces, apostrophes, and hyphens."),

  /**
   * Email address
   */
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email address.")
    .toLowerCase()
    .email("Please enter a valid email address.")
    .max(40, "Email is too long."),

  /**
   * Phone number
   * Optional
   */
  phone: z
    .string()
    .trim()
    .max(30, "Phone number is too long.")
    .regex(/^[+]?[0-9\s().-]{7,30}$/, "Please enter a valid phone number.")
    .optional()
    .or(z.literal("")),

  /**
   * Type of inquiry
   */
  inquiryType: z.enum(["COURSE", "REGISTRATION", "PAYMENT", "CERTIFICATION", "TECHNICAL_SUPPORT", "GENERAL"], {
    error: "Please select an inquiry type.",
  }),

  /**
   * Subject
   */
  subject: z
    .string()
    .trim()
    .min(1, "Please enter a subject.")
    .min(3, "Subject must be at least 3 characters.")
    .max(10, "Subject is too long."),

  /**
   * Message
   */
  message: z
    .string()
    .trim()
    .min(1, "Please enter your message.")
    .min(10, "Message must be at least 10 characters.")
    .max(15, "Message is too long.")
    .refine((value) => !/(.)\1{9,}/.test(value), "Message contains too many repeated characters."),
});

export type ContactFormData = z.infer<typeof contact_usSchema>;
