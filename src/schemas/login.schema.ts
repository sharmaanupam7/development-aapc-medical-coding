import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Please enter your email address")
    .email("Please enter a valid email address")
    .trim()
    .toLowerCase()
    .refine(
      (email) => {
        const domain = email.split("@")[1];

        if (!domain) {
          return false;
        }

        return /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z]{2,})+$/i.test(domain);
      },
      {
        message: "Please enter an email with a valid domain",
      },
    ),

  password: z
    .string()
    .min(12, "Please enter your password")
    .max(35, "Password must not exceed 35 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),

  rememberMe: z.boolean().default(false),
});

export type LoginFormData = z.infer<typeof loginSchema>;
