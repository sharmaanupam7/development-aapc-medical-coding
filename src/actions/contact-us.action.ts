"use server";

import { prisma } from "@/lib/prisma";
import { contact_usSchema } from "@/schemas/contact-us.schema";

export async function ContactUsAction(formData: FormData) {
  try {
    const validation = contact_usSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      inquiryType: formData.get("inquiryType"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    });

    if (!validation.success) {
      const errors: Record<string, string> = {};

      for (const issue of validation.error.issues) {
        const field = issue.path[0]?.toString();

        if (field && !errors[field]) {
          errors[field] = issue.message;
        }
      }

      return {
        success: false,
        errors,
      };
    }

    const data = validation.data;

    await prisma.contactus.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        inquiryType: data.inquiryType,
        subject: data.subject,
        message: data.message,
      },
    });

    return {
      success: true,
      message: "Thank you for contacting us. We will get back to you shortly.",
    };
  } catch (error) {
    console.error("Contact form submission error:", error);

    return {
      success: false,
      message: "Unable to submit your message. Please try again.",
    };
  }
}
