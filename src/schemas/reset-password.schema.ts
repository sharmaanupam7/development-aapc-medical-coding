import { z } from "zod";

export const resetPasswordSchema = z
  .object({
    token: z.string().min(1, "Invalid or missing reset token."),

    password: z
      .string()
      .min(12, "Password must be at least 12 characters.")
      .max(35, "Password cannot exceed 35 characters."),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

export type ResetPasswordInput = z.infer<typeof resetPasswordSchema>;
