// import React from "react";
// import { Container } from "../layout/container";
// import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaEnvelope } from "react-icons/fa";

// export default function ContactUs() {
//   return (
//     <>
//       <main className="bg-white">
//         {/* =========================================================
//         PAGE HERO
//     ========================================================= */}
//         <section className="relative overflow-hidden bg-slate-950">
//           {/* Background decorative elements */}
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(13,148,136,0.28),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(15,118,110,0.22),transparent_40%)]" />

//           <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl" />
//           <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

//           <Container>
//             <div className="relative flex min-h-65 items-center justify-center py-16 text-center">
//               <div>
//                 <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-teal-400">Contact Us</p>

//                 <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
//                   Contact Development AAPC Medical Coding
//                 </h1>

//                 <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300">
//                   We are here to help you with your medical coding education, training and professional development
//                   requirements
//                 </p>
//               </div>
//             </div>
//           </Container>
//         </section>

//         {/* =========================================================
//         CONTACT CONTENT
//     ========================================================= */}
//         <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-20">
//           {/* Decorative background */}
//           <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-teal-100/40 blur-3xl" />
//           <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-100/40 blur-3xl" />

//           <Container>
//             <div className="relative grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
//               {/* =====================================================
//               LEFT - CONTACT INFORMATION
//           ===================================================== */}
//               <div>
//                 <p className="text-sm font-bold uppercase tracking-[0.25em] text-teal-600">Contact Information</p>

//                 <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
//                   Get in touch with us
//                 </h2>

//                 <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
//                   Development AAPC Medical Coding is committed to providing quality medical coding education and
//                   professional training. Contact us for more information about our courses, training programs and other
//                   services.
//                 </p>

//                 <div className="mt-8 space-y-4">
//                   {/* Address */}
//                   <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
//                     <div className="flex gap-4">
//                       <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-600">
//                         <FaMapMarkerAlt size={17} />
//                       </div>

//                       <div>
//                         <h3 className="font-bold text-slate-900">Address</h3>

//                         <p className="mt-1 text-sm leading-6 text-slate-600">
//                           Crossing Republic
//                           <br />
//                           Noida (Uttar Pradesh)
//                           <br />
//                           Pin - 201301
//                         </p>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Phone */}
//                   <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
//                     <div className="flex gap-4">
//                       <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-600">
//                         <FaPhoneAlt size={16} />
//                       </div>

//                       <div>
//                         <h3 className="font-bold text-slate-900">Contact Number</h3>

//                         <a
//                           href="Mobile:+91 9716260598"
//                           className="mt-1 block text-sm text-slate-600 transition hover:text-teal-600"
//                         >
//                           +91 9716260598
//                         </a>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Email */}
//                   <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
//                     <div className="flex gap-4">
//                       <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-600">
//                         <FaEnvelope size={17} />
//                       </div>

//                       <div className="min-w-0">
//                         <h3 className="font-bold text-slate-900">Email</h3>

//                         <a
//                           href="mailto:info@developmentaapc.com"
//                           className="mt-1 block break-all text-sm text-slate-600 transition hover:text-teal-600"
//                         >
//                           developmentaapcmedicalcoding.com
//                         </a>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Working Hours */}
//                   <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
//                     <div className="flex gap-4">
//                       <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-600">
//                         <FaClock size={17} />
//                       </div>

//                       <div>
//                         <h3 className="font-bold text-slate-900">Working Hours</h3>

//                         <p className="mt-1 text-sm leading-6 text-slate-600">
//                           Monday - Friday
//                           <br />
//                           6:00 AM - 9:00 PM
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* =====================================================
//               RIGHT - CONTACT FORM
//           ===================================================== */}
//               <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-xl sm:p-9">
//                 <div>
//                   <p className="text-sm font-bold uppercase tracking-[0.25em] text-teal-600">Send Us A Message</p>

//                   <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">How can we help you?</h2>

//                   <p className="mt-4 text-sm leading-7 text-slate-600">
//                     Please fill in the details below and our team will contact you shortly.
//                   </p>
//                 </div>

//                 <form className="mt-8 space-y-5">
//                   {/* Name */}
//                   <div>
//                     <label htmlFor="name" className="mb-2 block text-sm font-semibold text-slate-700">
//                       Name
//                     </label>

//                     <input
//                       id="name"
//                       name="name"
//                       type="text"
//                       placeholder="Enter your name"
//                       className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-500/10"
//                     />
//                   </div>

//                   {/* Email + Phone */}
//                   <div className="grid gap-5 sm:grid-cols-2">
//                     <div>
//                       <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-700">
//                         Email
//                       </label>

//                       <input
//                         id="email"
//                         name="email"
//                         type="email"
//                         placeholder="Enter your email"
//                         className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-500/10"
//                       />
//                     </div>

//                     <div>
//                       <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-slate-700">
//                         Phone
//                       </label>

//                       <input
//                         id="phone"
//                         name="phone"
//                         type="tel"
//                         placeholder="Enter phone number"
//                         className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-500/10"
//                       />
//                     </div>
//                   </div>

//                   {/* Subject */}
//                   <div>
//                     <label htmlFor="subject" className="mb-2 block text-sm font-semibold text-slate-700">
//                       Subject
//                     </label>

//                     <input
//                       id="subject"
//                       name="subject"
//                       type="text"
//                       placeholder="Enter subject"
//                       className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-500/10"
//                     />
//                   </div>

//                   {/* Message */}
//                   <div>
//                     <label htmlFor="message" className="mb-2 block text-sm font-semibold text-slate-700">
//                       Message
//                     </label>

//                     <textarea
//                       id="message"
//                       name="message"
//                       rows={6}
//                       placeholder="Write your message..."
//                       className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-500/10"
//                     />
//                   </div>

//                   {/* Submit */}
//                   <button
//                     type="submit"
//                     className="cursor-pointer inline-flex w-full items-center justify-center rounded-xl bg-teal-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-teal-600/20 transition hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
//                   >
//                     Submit
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </Container>
//         </section>

//         {/* =========================================================
//         MAP / LOCATION SECTION
//     ========================================================= */}
//         <section className="bg-white py-16">
//           <Container>
//             <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm">
//               <div className="grid min-h-70 place-items-center px-6 py-12 text-center">
//                 <div>
//                   <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal-100 text-teal-600">
//                     <FaMapMarkerAlt size={22} />
//                   </div>

//                   <h2 className="mt-5 text-2xl font-bold text-slate-950">Development AAPC Medical Coding</h2>

//                   <p className="mt-2 text-sm leading-6 text-slate-600">
//                     B720-721, Tower B, I-Thum Tower, Sector 62,
//                     <br />
//                     Noida - 201301, U.P.
//                   </p>

//                   <a
//                     href="https://www.google.com/maps/search/?api=1&query=I-Thum+Tower+Sector+62+Noida"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="mt-5 inline-flex rounded-xl bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-600"
//                   >
//                     View Location
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </Container>
//         </section>

//         {/* =========================================================
//         BOTTOM CTA
//     ========================================================= */}
//         <section className="bg-[radial-gradient(circle_at_50%_0%,#07566a_0%,#032b3a_40%,#020617_100%)] py-16">
//           <Container>
//             <div className="mx-auto max-w-3xl text-center">
//               <p className="text-sm font-bold uppercase tracking-[0.25em] text-teal-400">
//                 Development AAPC Medical Coding
//               </p>

//               <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Ready to Start Learning?</h2>

//               <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
//                 Explore our medical coding courses and training programs to develop practical knowledge and professional
//                 skills.
//               </p>

//               <a
//                 href="/courses"
//                 className="mt-8 inline-flex items-center rounded-xl bg-teal-500 px-7 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-teal-400"
//               >
//                 Explore Courses →
//               </a>
//             </div>
//           </Container>
//         </section>
//       </main>
//     </>
//   );
// }

// updated code

"use client";

import React, { useState } from "react";
import { Container } from "../layout/container";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaEnvelope } from "react-icons/fa";

import { ContactUsAction } from "@/actions/contact-us.action";
import { contact_usSchema } from "@/schemas/contact-us.schema";

type FieldName = "name" | "email" | "phone" | "inquiryType" | "subject" | "message";

type FieldErrors = Partial<Record<FieldName, string>>;

export function ContactUs() {
  const [loading, setLoading] = useState(false);

  const [successMessage, setSuccessMessage] = useState("");
  const [serverError, setServerError] = useState("");

  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  /**
   * Validate one individual field.
   */
  function validateField(field: FieldName, value: FormDataEntryValue | string | null) {
    const fieldSchema = contact_usSchema.shape[field];

    const result = fieldSchema.safeParse(value ?? "");

    if (!result.success) {
      return result.error.issues[0]?.message ?? "Invalid value.";
    }

    return "";
  }

  /**
   * Handle field blur.
   *
   * Validation happens immediately when
   * the user leaves a field.
   */
  function handleBlur(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const field = e.target.name as FieldName;

    if (!field) return;

    const error = validateField(field, e.target.value);

    setFieldErrors((previous) => {
      const next = { ...previous };

      if (error) {
        next[field] = error;
      } else {
        delete next[field];
      }

      return next;
    });
  }

  /**
   * Handle typing / changing field values.
   *
   * If a field already has an error, revalidate it
   * while the user is correcting the value.
   */
  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const field = e.target.name as FieldName;

    if (!field) return;

    setSuccessMessage("");
    setServerError("");

    if (fieldErrors[field]) {
      const error = validateField(field, e.target.value);

      setFieldErrors((previous) => {
        const next = { ...previous };

        if (error) {
          next[field] = error;
        } else {
          delete next[field];
        }

        return next;
      });
    }
  }

  /**
   * Validate the complete form on submit.
   */
  function validateForm(formData: FormData) {
    const validation = contact_usSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      inquiryType: formData.get("inquiryType"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    });

    if (validation.success) {
      setFieldErrors({});
      return true;
    }

    const errors: FieldErrors = {};

    for (const issue of validation.error.issues) {
      const field = issue.path[0]?.toString() as FieldName;

      if (field && !errors[field]) {
        errors[field] = issue.message;
      }
    }

    setFieldErrors(errors);

    return false;
  }

  /**
   * Submit form.
   */
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setSuccessMessage("");
    setServerError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    /*
     * First perform client-side validation.
     */
    const isValid = validateForm(formData);

    if (!isValid) {
      return;
    }

    setLoading(true);

    try {
      /*
       * Server-side validation + database operation.
       */
      const result = await ContactUsAction(formData);

      if (!result.success) {
        setFieldErrors(result.errors ?? {});

        if (result.message) {
          setServerError(result.message);
        }

        return;
      }

      /*
       * Successful submission.
       */
      setSuccessMessage(result.message ?? "Thank you for contacting us. We will get back to you shortly.");

      setFieldErrors({});

      form.reset();
    } catch (error) {
      console.error("Contact form submission error:", error);

      setServerError("Unable to submit your message. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="bg-white">
      {/* =========================================================
          PAGE HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(13,148,136,0.28),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(15,118,110,0.22),transparent_40%)]" />

        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl" />

        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

        <Container>
          <div className="relative flex min-h-65 items-center justify-center py-16 text-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-teal-400">Contact Us</p>

              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Contact Development AAPC Medical Coding
              </h1>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300">
                We are here to help you with your medical coding education, training and professional development
                requirements
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          CONTACT CONTENT
      ========================================================= */}
      <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-20">
        <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-teal-100/40 blur-3xl" />

        <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-100/40 blur-3xl" />

        <Container>
          <div className="relative grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            {/* =====================================================
                LEFT - CONTACT INFORMATION
            ===================================================== */}
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-teal-600">Contact Information</p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Get in touch with us
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
                Development AAPC Medical Coding is committed to providing quality medical coding education and
                professional training. Contact us for more information about our courses, training programs and other
                services
              </p>

              <div className="mt-8 space-y-4 rounded">
                {/* Address */}
                <div className="border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-600">
                      <FaMapMarkerAlt size={17} />
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-900">Address</h3>

                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        Tower 6 Flat No. G07
                        <br />
                        Panchasheel Wellington Crossings Republic
                        <br />
                        PIN Code - 201016 (Ghaziabad, Uttar Pradesh)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-600">
                      <FaPhoneAlt size={16} />
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-900">Contact Number</h3>

                      <a
                        href="tel:+919716260598"
                        className="mt-1 block text-sm text-slate-600 transition hover:text-teal-600"
                      >
                        +91 9716260598
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-600">
                      <FaEnvelope size={17} />
                    </div>

                    <div className="min-w-0">
                      <h3 className="font-bold text-slate-900">Email</h3>

                      <a
                        href="mailto:@developmentaapcmedicalcoding.com"
                        className="mt-1 block break-all text-sm text-slate-600 transition hover:text-teal-600"
                      >
                        developmentaapcmedicalcoding.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="rounded border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-600">
                      <FaClock size={17} />
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-900">Working Hours</h3>

                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        Monday to Sunday
                        <br />
                        6:00 AM - 9:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* =====================================================
                RIGHT - CONTACT FORM
            ===================================================== */}
            <div className="rounded max-h-220 border border-slate-200 bg-white p-7 shadow-xl sm:p-9">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-teal-600">Send Us A Message</p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">How can we help you?</h2>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Please fill in the details below and our team will contact you shortly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mt-5 space-y-3" noValidate>
                {/* =====================================================
                    NAME
                ===================================================== */}
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm font-semibold text-slate-700">
                    Name <span className="text-red-500">*</span>
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your fullname"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    aria-invalid={!!fieldErrors.name}
                    className={`w-full rounded border bg-slate-50 px-2 py-2 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-teal-500/10 ${
                      fieldErrors.name
                        ? "border-red-400 focus:border-red-500"
                        : "border-slate-200 focus:border-teal-500"
                    }`}
                  />

                  {fieldErrors.name && <p className="mt-1 text-sm text-red-600">{fieldErrors.name}</p>}
                </div>

                {/* =====================================================
                    EMAIL + PHONE
                ===================================================== */}
                <div className="grid gap-5 sm:grid-cols-2">
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="mb-1 block text-sm font-semibold text-slate-700">
                      Email <span className="text-red-500">*</span>
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your valid email address"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      aria-invalid={!!fieldErrors.email}
                      className={`w-full rounded border bg-slate-50 px-2 py-2 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-teal-500/10 ${
                        fieldErrors.email
                          ? "border-red-400 focus:border-red-500"
                          : "border-slate-200 focus:border-teal-500"
                      }`}
                    />

                    {fieldErrors.email && <p className="mt-1 text-sm text-red-600">{fieldErrors.email}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="mb-1 block text-sm font-semibold text-slate-700">
                      Phone
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Enter phone number"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      aria-invalid={!!fieldErrors.phone}
                      className={`w-full rounded border bg-slate-50 px-2 py-2 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-teal-500/10 ${
                        fieldErrors.phone
                          ? "border-red-400 focus:border-red-500"
                          : "border-slate-200 focus:border-teal-500"
                      }`}
                    />

                    {fieldErrors.phone && <p className="mt-1 text-sm text-red-600">{fieldErrors.phone}</p>}
                  </div>
                </div>

                {/* =====================================================
                    INQUIRY TYPE
                ===================================================== */}
                <div>
                  <label htmlFor="inquiryType" className="mb-1 block text-sm font-semibold text-slate-700">
                    Inquiry Type <span className="text-red-500">*</span>
                  </label>

                  <select
                    id="inquiryType"
                    name="inquiryType"
                    defaultValue=""
                    onBlur={handleBlur}
                    onChange={handleChange}
                    aria-invalid={!!fieldErrors.inquiryType}
                    className={`w-full rounded border bg-slate-50 px-2 py-2 text-sm text-slate-900 outline-none transition focus:bg-white focus:ring-2 focus:ring-teal-500/10 ${
                      fieldErrors.inquiryType
                        ? "border-red-400 focus:border-red-500"
                        : "border-slate-200 focus:border-teal-500"
                    }`}
                  >
                    <option value="" disabled>
                      Select inquiry type
                    </option>

                    <option value="COURSE">Course Inquiry</option>

                    <option value="REGISTRATION">Registration</option>

                    <option value="PAYMENT">Payment</option>

                    <option value="CERTIFICATION">Certification</option>

                    <option value="TECHNICAL_SUPPORT">Technical Support</option>

                    <option value="GENERAL">General Inquiry</option>
                  </select>

                  {fieldErrors.inquiryType && <p className="mt-1 text-sm text-red-600">{fieldErrors.inquiryType}</p>}
                </div>

                {/* =====================================================
                    SUBJECT
                ===================================================== */}
                <div>
                  <label htmlFor="subject" className="mb-1 block text-sm font-semibold text-slate-700">
                    Subject <span className="text-red-500">*</span>
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Enter subject"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    aria-invalid={!!fieldErrors.subject}
                    className={`w-full rounded border bg-slate-50 px-2 py-2 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-teal-500/10 ${
                      fieldErrors.subject
                        ? "border-red-400 focus:border-red-500"
                        : "border-slate-200 focus:border-teal-500"
                    }`}
                  />

                  {fieldErrors.subject && <p className="mt-1 text-sm text-red-600">{fieldErrors.subject}</p>}
                </div>

                {/* =====================================================
                    MESSAGE
                ===================================================== */}
                <div>
                  <label htmlFor="message" className="mb-1 block text-sm font-semibold text-slate-700">
                    Message <span className="text-red-500">*</span>
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Write your message..."
                    onBlur={handleBlur}
                    onChange={handleChange}
                    aria-invalid={!!fieldErrors.message}
                    className={`w-full resize-none rounded border bg-slate-50 px-2 py-2 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-teal-500/10 ${
                      fieldErrors.message
                        ? "border-red-400 focus:border-red-500"
                        : "border-slate-200 focus:border-teal-500"
                    }`}
                  />

                  {fieldErrors.message && <p className="mt-1 text-sm text-red-600">{fieldErrors.message}</p>}
                </div>

                {/* =====================================================
                    HONEYPOT
                ===================================================== */}
                <div className="absolute left-[-9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
                  <label htmlFor="website">Website</label>

                  <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
                </div>

                {/* =====================================================
                    SUBMIT
                ===================================================== */}
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex w-full cursor-pointer items-center justify-center rounded border bg-white px-6 py-3.5 text-sm font-bold text-teal-600 shadow-lg shadow-teal-600/20 transition hover:bg-teal-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>

                {/* =====================================================
                    SUCCESS
                ===================================================== */}
                {successMessage && (
                  <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
                    {successMessage}
                  </div>
                )}

                {/* =====================================================
                    SERVER ERROR
                ===================================================== */}
                {serverError && (
                  <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                    {serverError}
                  </div>
                )}
              </form>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          MAP / LOCATION
      ========================================================= */}
      <section className="bg-white py-16">
        <Container>
          <div className="overflow-hidden rounded border shadow-sm">
            <div className="grid min-h-70 place-items-center px-6 py-12 text-center">
              <div>
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal-100 text-teal-600">
                  <FaMapMarkerAlt size={22} className="animate-ping" />
                </div>

                <h2 className="mt-5 text-2xl font-bold text-slate-950">Development AAPC Medical Coding</h2>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Tower 6 Flat No. G07 Panchasheel Wellington Crossings Republic <br /> PIN Code - 201016 (Ghaziabad
                  Uttar, Pradesh)
                </p>

                {/* <a
                  href="https://www.google.com/maps/search/?api=1&query=I-Thum+Tower+Sector+62+Noida"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex rounded-xl bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-600"
                > */}

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Tower+6+Flat+No+G07+Panchasheel+Wellington+Crossings+Republik+Ghaziabad+Uttar+Pradesh+201016"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex rounded bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-600"
                >
                  View Location
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          BOTTOM CTA
      ========================================================= */}
      <section className="bg-[radial-gradient(circle_at_50%_0%,#07566a_0%,#032b3a_40%,#020617_100%)] py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-teal-400">
              Development AAPC Medical Coding
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white sm:text-3xl">Ready to Start Learning?</h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
              Explore our medical coding courses and training programs to develop practical knowledge and professional
              skills
            </p>

            <a
              href="/courses"
              className="mt-8 inline-flex items-center rounded bg-teal-500 px-7 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-teal-400"
            >
              Explore Courses
            </a>
          </div>
        </Container>
      </section>
    </main>
  );
}
