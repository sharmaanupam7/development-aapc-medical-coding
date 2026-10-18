// "use client";

// import React, { useState, useTransition } from "react";
// import Image from "next/image";

// import { updateStudentProfile } from "@/actions/student-profile.actions";

// import {
//   FaUser,
//   FaEnvelope,
//   FaPhoneAlt,
//   FaGlobe,
//   FaCalendarAlt,
//   FaVenusMars,
//   FaMapMarkerAlt,
//   FaCity,
//   FaMap,
//   FaMailBulk,
//   FaPen,
//   FaSave,
//   FaTimes,
//   FaCamera,
//   FaUserCircle,
// } from "react-icons/fa";
// import DashboardPageTemplate from "./student-dashboard-template";

// interface StudentProfileProps {
//   email: string;

//   // Account Information
//   firstname: string;
//   middlename?: string | null;
//   lastname: string;
//   mobile?: string | null;
//   country?: string | null;

//   // Profile
//   profileImage?: string | null;

//   // Personal Details
//   dateOfBirth?: Date | string | null;
//   gender?: string | null;
//   address?: string | null;
//   city?: string | null;
//   state?: string | null;
//   postalCode?: string | null;
// }

// const StudentProfileView = ({
//   email,
//   firstname,
//   middlename,
//   lastname,
//   mobile,
//   country,
//   profileImage,
//   dateOfBirth,
//   gender,
//   address,
//   city,
//   state,
//   postalCode,
// }: StudentProfileProps) => {
//   const [isEditing, setIsEditing] = useState(false);

//   const [isPending, startTransition] = useTransition();

//   const formatDateForInput = (value?: Date | string | null) => {
//     if (!value) {
//       return "";
//     }

//     const date = new Date(value);

//     if (Number.isNaN(date.getTime())) {
//       return "";
//     }

//     return date.toISOString().split("T")[0];
//   };

//   const [formData, setFormData] = useState({
//     firstname: firstname || "",
//     middlename: middlename || "",
//     lastname: lastname || "",
//     mobile: mobile || "",
//     country: country || "",

//     dateOfBirth: formatDateForInput(dateOfBirth),
//     gender: gender || "",
//     address: address || "",
//     city: city || "",
//     state: state || "",
//     postalCode: postalCode || "",
//   });

//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");

//   const fullName = [firstname, middlename, lastname].filter(Boolean).join(" ");

//   /*
//    * Get initials when no profile image exists.
//    */
//   const initials = [firstname?.charAt(0), lastname?.charAt(0)].filter(Boolean).join("").toUpperCase() || "S";

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
//     const { name, value } = event.target;

//     setFormData((previous) => ({
//       ...previous,
//       [name]: value,
//     }));
//   };

//   const handleEdit = () => {
//     setMessage("");
//     setError("");
//     setIsEditing(true);
//   };

//   const handleCancel = () => {
//     setFormData({
//       firstname: firstname || "",
//       middlename: middlename || "",
//       lastname: lastname || "",
//       mobile: mobile || "",
//       country: country || "",

//       dateOfBirth: formatDateForInput(dateOfBirth),
//       gender: gender || "",
//       address: address || "",
//       city: city || "",
//       state: state || "",
//       postalCode: postalCode || "",
//     });

//     setMessage("");
//     setError("");
//     setIsEditing(false);
//   };

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     setMessage("");
//     setError("");

//     console.log("========== UPDATE PROFILE ==========");
//     console.log("formData:", formData);
//     console.log("====================================");

//     const data = new FormData();

//     Object.entries(formData).forEach(([key, value]) => {
//       data.append(key, value);
//     });

//     startTransition(async () => {
//       const result = await updateStudentProfile(data);

//       if (result.success) {
//         setMessage(result.message);
//         setIsEditing(false);
//       } else {
//         setError(result.message);
//       }
//     });
//   };

//   /*
//    * Common input classes.
//    */
//   const inputClass = (editing: boolean) =>
//     `h-9 w-full rounded-md border px-3 text-xs outline-none transition ${
//       editing
//         ? "border-slate-300 bg-white text-slate-700 focus:border-[#007c91] focus:ring-2 focus:ring-[#007c91]/10"
//         : "cursor-default border-slate-200 bg-slate-50 text-slate-500"
//     }`;

//   return (
//     <>
//       <DashboardPageTemplate title="Profile View" description="View Profile Details">
//         <div className="p-7">
//           <div className="w-full px-3 py-4 sm:px-5">
//             {/* Main Card */}
//             <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-xl border border-slate-200 bg-white shadow-md">
//               {/* Top Brand Accent */}
//               <div className="h-1 bg-linear-to-r from-[#003b73] via-[#007c91] to-lime-500" />

//               {/* ================= HEADER ================= */}
//               <div className="border-b border-slate-100 px-5 py-4 sm:px-7">
//                 <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
//                   <div className="flex items-center gap-3">
//                     {/* <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#003b73] text-white shadow-sm">
//                 <FaUser className="text-sm" />
//               </div> */}

//                     <div>
//                       <h1 className="text-lg font-bold tracking-tight text-[#003b73]">My Profile</h1>

//                       <p className="text-[11px] text-slate-400">Manage your account and personal details</p>
//                     </div>
//                   </div>

//                   {/* Breadcrumb */}
//                   {/* <div className="text-[10px] sm:text-xs">
//               <span className="text-slate-400">Home</span>

//               <span className="mx-1.5 text-slate-300">/</span>

//               <span className="text-slate-400">Student Panel</span>

//               <span className="mx-1.5 text-slate-300">/</span>

//               <span className="font-medium text-[#008c76]">My Profile</span>
//             </div> */}
//                 </div>
//               </div>

//               {/* ================= PROFILE SUMMARY ================= */}
//               <div className="border-b border-slate-100 bg-linear-to-b from-slate-50 via-white to-white px-5 py-6">
//                 <div className="flex flex-col items-center">
//                   {/* Profile Image */}
//                   <div className="relative">
//                     <div className="relative h-24 w-35 rounded">
//                       {profileImage ? (
//                         <Image
//                           src={profileImage}
//                           alt={fullName || "Student"}
//                           fill
//                           sizes="96px"
//                           priority
//                           className="object-cover"
//                         />
//                       ) : (
//                         <div className="flex h-full w-full items-center justify-center text-2xl font-bold text-white">
//                           {initials}
//                         </div>
//                       )}
//                     </div>

//                     {/* Camera badge */}
//                     {/* <div className="absolute bottom-0 right-0 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#008c76] text-white shadow-sm">
//                 <FaCamera className="text-[10px]" />
//               </div> */}
//                   </div>

//                   {/* Name */}
//                   <h2 className="mt-3 text-base font-bold uppercase tracking-wide text-[#003b73]">
//                     {fullName || "Student"}
//                   </h2>

//                   {/* Email */}
//                   <p className="mt-0.5 text-xs text-slate-400">{email}</p>
//                 </div>
//               </div>

//               {/* ================= FORM ================= */}
//               <form onSubmit={handleSubmit} className="px-5 py-5 sm:px-8 sm:py-6">
//                 {/* Success Message */}
//                 {message && (
//                   <div className="mb-5 rounded-md border border-green-200 bg-green-50 px-3 py-2.5 text-xs font-medium text-green-700">
//                     {message}
//                   </div>
//                 )}

//                 {/* Error Message */}
//                 {error && (
//                   <div className="mb-5 rounded-md border border-red-200 bg-red-50 px-3 py-2.5 text-xs font-medium text-red-600">
//                     {error}
//                   </div>
//                 )}

//                 {/* =====================================================
//               ACCOUNT INFORMATION
//           ====================================================== */}

//                 <div className="mb-6">
//                   {/* Section Header */}
//                   <div className="mb-4 flex items-center gap-2 border-b border-slate-100 pb-2">
//                     <div className="h-5 w-1 rounded-full bg-[#007c91]" />

//                     <h2 className="text-sm font-bold text-[#003b73]">Account Information</h2>
//                   </div>

//                   <div className="space-y-3">
//                     {/* Email */}
//                     <ProfileField label="Email" icon={<FaEnvelope />}>
//                       <input
//                         type="email"
//                         value={email}
//                         readOnly
//                         className="h-9 w-full cursor-not-allowed rounded-md border border-lime-300 bg-lime-50 px-3 text-xs font-medium text-slate-700 outline-none"
//                       />
//                     </ProfileField>

//                     {/* First Name */}
//                     <ProfileField label="First Name" icon={<FaUser />}>
//                       <input
//                         name="firstname"
//                         type="text"
//                         value={formData.firstname}
//                         onChange={handleChange}
//                         readOnly={!isEditing}
//                         className={inputClass(isEditing)}
//                       />
//                     </ProfileField>

//                     {/* Middle Name */}
//                     <ProfileField label="Middle Name" icon={<FaUser />}>
//                       <input
//                         name="middlename"
//                         type="text"
//                         value={formData.middlename}
//                         onChange={handleChange}
//                         readOnly={!isEditing}
//                         placeholder="Middle name"
//                         className={inputClass(isEditing)}
//                       />
//                     </ProfileField>

//                     {/* Last Name */}
//                     <ProfileField label="Last Name" icon={<FaUser />}>
//                       <input
//                         name="lastname"
//                         type="text"
//                         value={formData.lastname}
//                         onChange={handleChange}
//                         readOnly={!isEditing}
//                         className={inputClass(isEditing)}
//                       />
//                     </ProfileField>

//                     {/* Mobile */}
//                     <ProfileField label="Mobile Number" icon={<FaPhoneAlt />}>
//                       <input
//                         name="mobile"
//                         type="tel"
//                         value={formData.mobile}
//                         onChange={handleChange}
//                         readOnly={!isEditing}
//                         className={inputClass(isEditing)}
//                       />
//                     </ProfileField>

//                     {/* Country */}
//                     <ProfileField label="Country" icon={<FaGlobe />}>
//                       <input
//                         name="country"
//                         type="text"
//                         value={formData.country}
//                         onChange={handleChange}
//                         readOnly={!isEditing}
//                         className={inputClass(isEditing)}
//                       />
//                     </ProfileField>
//                   </div>
//                 </div>

//                 {/* =====================================================
//               PERSONAL DETAILS
//           ====================================================== */}

//                 <div>
//                   {/* Section Header */}
//                   <div className="mb-4 flex items-center gap-2 border-b border-slate-100 pb-2">
//                     <div className="h-5 w-1 rounded-full bg-lime-500" />

//                     <h2 className="text-sm font-bold text-[#003b73]">Personal Details</h2>
//                   </div>

//                   <div className="space-y-3">
//                     {/* Date of Birth */}
//                     <ProfileField label="Date of Birth" icon={<FaCalendarAlt />}>
//                       <input
//                         name="dateOfBirth"
//                         type="date"
//                         value={formData.dateOfBirth}
//                         onChange={handleChange}
//                         readOnly={!isEditing}
//                         className={inputClass(isEditing)}
//                       />
//                     </ProfileField>

//                     {/* Gender */}
//                     <ProfileField label="Gender" icon={<FaVenusMars />}>
//                       <select
//                         name="gender"
//                         value={formData.gender}
//                         onChange={handleChange}
//                         disabled={!isEditing}
//                         className={`${inputClass(isEditing)} ${!isEditing ? "cursor-default" : "cursor-pointer"}`}
//                       >
//                         <option value="">Select Gender</option>

//                         <option value="MALE">Male</option>

//                         <option value="FEMALE">Female</option>

//                         <option value="OTHER">Other</option>

//                         <option value="PREFER_NOT_TO_SAY">Prefer not to say</option>
//                       </select>
//                     </ProfileField>

//                     {/* Address */}
//                     <ProfileField label="Address" icon={<FaMapMarkerAlt />}>
//                       <input
//                         name="address"
//                         type="text"
//                         value={formData.address}
//                         onChange={handleChange}
//                         readOnly={!isEditing}
//                         placeholder="Street address"
//                         className={inputClass(isEditing)}
//                       />
//                     </ProfileField>

//                     {/* City */}
//                     <ProfileField label="City" icon={<FaCity />}>
//                       <input
//                         name="city"
//                         type="text"
//                         value={formData.city}
//                         onChange={handleChange}
//                         readOnly={!isEditing}
//                         className={inputClass(isEditing)}
//                       />
//                     </ProfileField>

//                     {/* State */}
//                     <ProfileField label="State" icon={<FaMap />}>
//                       <input
//                         name="state"
//                         type="text"
//                         value={formData.state}
//                         onChange={handleChange}
//                         readOnly={!isEditing}
//                         className={inputClass(isEditing)}
//                       />
//                     </ProfileField>

//                     {/* PIN */}
//                     <ProfileField label="PIN / ZIP Code" icon={<FaMailBulk />}>
//                       <input
//                         name="postalCode"
//                         type="text"
//                         value={formData.postalCode}
//                         onChange={handleChange}
//                         readOnly={!isEditing}
//                         className={inputClass(isEditing)}
//                       />
//                     </ProfileField>
//                   </div>
//                 </div>

//                 {/* =====================================================
//               BUTTONS
//           ====================================================== */}

//                 <div className="mt-6 flex flex-col-reverse gap-2 border-t border-slate-100 pt-4 sm:flex-row sm:justify-end">
//                   {!isEditing ? (
//                     <button
//                       type="button"
//                       onClick={handleEdit}
//                       className="inline-flex h-9 items-center justify-center gap-2 rounded-md px-5 text-xs font-semibold cursor-pointer bg-teal-400 text-white shadow-sm transition-all hover:bg-teal-600 hover:shadow-md"
//                     >
//                       <FaPen className="text-[10px]" />
//                       Update Profile
//                     </button>
//                   ) : (
//                     <>
//                       <button
//                         type="button"
//                         onClick={handleCancel}
//                         disabled={isPending}
//                         className="inline-flex h-9 items-center justify-center gap-2 cursor-pointer rounded-md border border-slate-300 bg-rose-400 px-5 text-xs font-semibold text-white transition hover:bg-rose-600 disabled:opacity-50"
//                       >
//                         <FaTimes className="text-[10px]" />
//                         Cancel
//                       </button>

//                       <button
//                         type="submit"
//                         disabled={isPending}
//                         className="inline-flex h-9 items-center justify-center gap-2 rounded-md bg-teal-400 px-5 text-xs font-semibold text-white shadow-sm transition-all hover:bg-teal-600 cursor-pointer disabled:cursor-not-allowed disabled:opacity-60"
//                       >
//                         <FaSave className="text-[10px]" />
//                         {isPending ? "Saving..." : "Save Changes"}
//                       </button>
//                     </>
//                   )}
//                 </div>

//                 <p className="mt-3 text-center text-[10px] text-slate-400">
//                   Your email address is linked to your account and cannot be changed.
//                 </p>
//               </form>
//             </div>
//           </div>
//         </div>
//       </DashboardPageTemplate>
//     </>
//   );
// };

// /*
//  * Reusable profile field wrapper.
//  */
// function ProfileField({ label, icon, children }: { label: string; icon: React.ReactNode; children: React.ReactNode }) {
//   return (
//     <div className="grid grid-cols-1 items-center gap-1.5 sm:grid-cols-[135px_1fr] sm:gap-4">
//       <label className="flex items-center gap-2 text-[11px] font-semibold text-slate-600">
//         <span className="text-[10px] text-[#007c91]">{icon}</span>

//         {label}
//       </label>

//       <div>{children}</div>
//     </div>
//   );
// }

// export default StudentProfileView;

//previous updated code

// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import {
//   FaUser,
//   FaEnvelope,
//   FaPhoneAlt,
//   FaGlobe,
//   FaCalendarAlt,
//   FaVenusMars,
//   FaMapMarkerAlt,
//   FaCity,
//   FaMap,
//   FaMailBulk,
//   FaPen,
// } from "react-icons/fa";

// import DashboardPageTemplate from "./student-dashboard-template";

// interface StudentUser {
//   id: string;
//   firstname: string;
//   middlename?: string | null;
//   lastname: string;
//   email: string;
//   mobile?: string | null;
//   country?: string | null;
//   profileImage?: string | null;
//   dateOfBirth?: string | Date | null;
//   gender?: string | null;
//   address?: string | null;
//   city?: string | null;
//   state?: string | null;
//   postalCode?: string | null;
// }

// export default function StudentProfileView() {
//   const [user, setUser] = useState<StudentUser | null>(null);
//   const [loading, setLoading] = useState(true);

//   // =========================================================
//   // LOAD AUTHENTICATED USER
//   // =========================================================

//   useEffect(() => {
//     let mounted = true;

//     async function loadUser() {
//       try {
//         const response = await fetch("/api/auth/authenticated_user", {
//           method: "GET",
//           credentials: "include",
//           cache: "no-store",
//         });

//         if (!response.ok) {
//           if (mounted) {
//             setUser(null);
//           }

//           return;
//         }

//         const data = await response.json();

//         if (mounted) {
//           setUser(data.user ?? null);
//         }
//       } catch (error) {
//         console.error("Failed to load profile:", error);

//         if (mounted) {
//           setUser(null);
//         }
//       } finally {
//         if (mounted) {
//           setLoading(false);
//         }
//       }
//     }

//     loadUser();

//     return () => {
//       mounted = false;
//     };
//   }, []);

//   // =========================================================
//   // HELPERS
//   // =========================================================

//   const fullName = user ? [user.firstname, user.middlename, user.lastname].filter(Boolean).join(" ") : "Student";

//   const profileImage = user?.profileImage || "/images/profile/profile1.jpg";

//   const formatDate = (value?: string | Date | null) => {
//     if (!value) {
//       return "-";
//     }

//     const date = new Date(value);

//     if (Number.isNaN(date.getTime())) {
//       return "-";
//     }

//     return date.toLocaleDateString("en-IN", {
//       day: "2-digit",
//       month: "long",
//       year: "numeric",
//     });
//   };

//   const displayValue = (value?: string | null) => {
//     return value?.trim() || "-";
//   };

//   // =========================================================
//   // LOADING
//   // =========================================================

//   if (loading) {
//     return (
//       <DashboardPageTemplate title="Profile View" description="View your profile details">
//         <div className="p-7">
//           <div className="mx-auto max-w-4xl animate-pulse">
//             <div className="h-32 rounded-xl bg-slate-100" />

//             <div className="mt-5 h-64 rounded-xl bg-slate-100" />
//           </div>
//         </div>
//       </DashboardPageTemplate>
//     );
//   }

//   // =========================================================
//   // NOT AUTHENTICATED
//   // =========================================================

//   if (!user) {
//     return (
//       <DashboardPageTemplate title="Profile View" description="View your profile details">
//         <div className="p-7">
//           <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-center">
//             <p className="text-sm font-medium text-red-600">Unable to load your profile.</p>
//           </div>
//         </div>
//       </DashboardPageTemplate>
//     );
//   }

//   // =========================================================
//   // PROFILE VIEW
//   // =========================================================

//   return (
//     <DashboardPageTemplate title="Profile View" description="View your profile details">
//       <div className="p-5 sm:p-7">
//         <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
//           {/* =================================================
//               TOP ACCENT
//               ================================================= */}

//           <div className="h-1 bg-linear-to-r from-[#003b73] via-[#007c91] to-lime-500" />

//           {/* =================================================
//               PROFILE HEADER
//               ================================================= */}

//           <div className="border-b border-slate-100 bg-linear-to-b from-slate-50 to-white px-6 py-7">
//             <div className="flex flex-col items-center text-center">
//               {/* Profile Image */}

//               <div className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-white bg-slate-200 shadow-md">
//                 <Image src={profileImage} alt={fullName} fill sizes="112px" className="object-cover" priority />
//               </div>

//               {/* Name */}

//               <h2 className="mt-4 text-lg font-bold text-[#003b73]">{fullName}</h2>

//               {/* Email */}

//               <p className="mt-1 text-sm text-slate-500">{user.email}</p>
//             </div>
//           </div>

//           {/* =================================================
//               PROFILE CONTENT
//               ================================================= */}

//           <div className="px-5 py-6 sm:px-8">
//             {/* =================================================
//                 ACCOUNT INFORMATION
//                 ================================================= */}

//             <ProfileSection title="Account Information">
//               <ProfileField label="Email" icon={<FaEnvelope />} value={user.email} />

//               <ProfileField label="First Name" icon={<FaUser />} value={user.firstname} />

//               <ProfileField label="Middle Name" icon={<FaUser />} value={displayValue(user.middlename)} />

//               <ProfileField label="Last Name" icon={<FaUser />} value={user.lastname} />

//               <ProfileField label="Mobile Number" icon={<FaPhoneAlt />} value={displayValue(user.mobile)} />

//               <ProfileField label="Country" icon={<FaGlobe />} value={displayValue(user.country)} />
//             </ProfileSection>

//             {/* =================================================
//                 PERSONAL DETAILS
//                 ================================================= */}

//             <ProfileSection title="Personal Details">
//               <ProfileField label="Date of Birth" icon={<FaCalendarAlt />} value={formatDate(user.dateOfBirth)} />

//               <ProfileField label="Gender" icon={<FaVenusMars />} value={displayValue(user.gender)} />

//               <ProfileField label="Address" icon={<FaMapMarkerAlt />} value={displayValue(user.address)} />

//               <ProfileField label="City" icon={<FaCity />} value={displayValue(user.city)} />

//               <ProfileField label="State" icon={<FaMap />} value={displayValue(user.state)} />

//               <ProfileField label="PIN / ZIP Code" icon={<FaMailBulk />} value={displayValue(user.postalCode)} />
//             </ProfileSection>

//             {/* =================================================
//                 EDIT BUTTON
//                 ================================================= */}

//             <div className="mt-6 flex justify-end border-t border-slate-100 pt-5">
//               <Link
//                 href="/student/profile_edit"
//                 className="
//                   inline-flex
//                   items-center
//                   gap-2
//                   rounded-md
//                   bg-teal-500
//                   px-5
//                   py-2.5
//                   text-sm
//                   font-semibold
//                   text-white
//                   shadow-sm
//                   transition
//                   hover:bg-teal-600
//                 "
//               >
//                 <FaPen className="text-xs" />
//                 Edit Profile
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </DashboardPageTemplate>
//   );
// }

// // =========================================================
// // SECTION
// // =========================================================

// function ProfileSection({ title, children }: { title: string; children: React.ReactNode }) {
//   return (
//     <div className="mb-7 last:mb-0">
//       <div className="mb-4 flex items-center gap-2 border-b border-slate-100 pb-2">
//         <div className="h-5 w-1 rounded-full bg-teal-500" />

//         <h2 className="text-sm font-bold text-[#003b73]">{title}</h2>
//       </div>

//       <div className="space-y-3">{children}</div>
//     </div>
//   );
// }

// // =========================================================
// // FIELD
// // =========================================================

// function ProfileField({ label, icon, value }: { label: string; icon: React.ReactNode; value: string }) {
//   return (
//     <div className="grid grid-cols-1 items-center gap-2 sm:grid-cols-[150px_1fr] sm:gap-5">
//       <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
//         <span className="text-xs text-[#007c91]">{icon}</span>

//         {label}
//       </div>

//       <div className="min-h-9 rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-600">
//         {value}
//       </div>
//     </div>
//   );
// }

//latest updated code

// "use client";

// import { useState } from "react";

// import Image from "next/image";
// import Link from "next/link";

// import { FaEdit } from "react-icons/fa";

// import DashboardPageTemplate from "./student-dashboard-template";

// // =========================================================
// // TYPES
// // =========================================================

// interface StudentUser {
//   id: string;

//   firstname: string;
//   middlename?: string | null;
//   lastname: string;

//   email: string;

//   mobile?: string | null;
//   country?: string | null;

//   profileImage?: string | null;

//   dateOfBirth?: Date | string | null;
//   gender?: string | null;

//   address?: string | null;
//   city?: string | null;
//   state?: string | null;
//   postalCode?: string | null;
// }

// // =========================================================
// // HELPERS
// // =========================================================

// function getValue(value?: string | null) {
//   return value?.trim() || "-";
// }

// function formatDate(value?: Date | string | null) {
//   if (!value) {
//     return "-";
//   }

//   const date = new Date(value);

//   if (Number.isNaN(date.getTime())) {
//     return "-";
//   }

//   return date.toLocaleDateString("en-GB", {
//     day: "2-digit",
//     month: "2-digit",
//     year: "numeric",
//   });
// }

// // =========================================================
// // PROFILE VIEW
// // =========================================================

// export default function StudentProfileView() {
//   const [user, setUser] = useState<StudentUser | null>(null);

//   const [loading, setLoading] = useState(true);

//   // =======================================================
//   // LOAD AUTHENTICATED USER
//   // =======================================================

//   useEffect(() => {
//     let mounted = true;

//     async function loadUser() {
//       try {
//         setLoading(true);

//         const response = await fetch("/api/auth/authenticated_user", {
//           method: "GET",

//           credentials: "include",

//           // IMPORTANT:
//           // Never use cached authenticated-user data.
//           cache: "no-store",

//           headers: {
//             "Cache-Control": "no-cache",
//             Pragma: "no-cache",
//           },
//         });

//         if (!response.ok) {
//           if (mounted) {
//             setUser(null);
//           }

//           return;
//         }

//         const data = await response.json();

//         if (mounted) {
//           setUser(data.user ?? null);
//         }
//       } catch (error) {
//         console.error("Failed to load authenticated user:", error);

//         if (mounted) {
//           setUser(null);
//         }
//       } finally {
//         if (mounted) {
//           setLoading(false);
//         }
//       }
//     }

//     loadUser();

//     return () => {
//       mounted = false;
//     };
//   }, []);

//   // =======================================================
//   // LOADING
//   // =======================================================

//   if (loading) {
//     return (
//       <DashboardPageTemplate title="Profile View" description="">
//         <div className="p-3">
//           <div className="animate-pulse">
//             <div className="mb-3 h-6 rounded bg-slate-200" />

//             <div className="h-32 rounded bg-slate-100" />

//             <div className="mt-4 h-48 rounded bg-slate-100" />
//           </div>
//         </div>
//       </DashboardPageTemplate>
//     );
//   }

//   // =======================================================
//   // USER NOT FOUND
//   // =======================================================

//   if (!user) {
//     return (
//       <DashboardPageTemplate title="Profile View" description="">
//         <div className="p-3">
//           <div className="border border-red-200 bg-red-50 p-3 text-xs text-red-600">Unable to load student profile</div>
//         </div>
//       </DashboardPageTemplate>
//     );
//   }

//   // =======================================================
//   // USER INFORMATION
//   // =======================================================

//   const fullName = [user.firstname, user.middlename, user.lastname].filter(Boolean).join(" ");

//   // =======================================================
//   // PROFILE IMAGE
//   // =======================================================

//   /*
//    * Add a cache-busting query string.
//    *
//    * This is especially useful when the profile image
//    * changes and the browser/Next Image has cached the
//    * previous image.
//    */

//   const profileImage = user.profileImage
//     ? `${user.profileImage}?v=${encodeURIComponent(user.profileImage)}`
//     : "/images/profile/profile1.jpg";

//   // =======================================================
//   // PAGE
//   // =======================================================

//   return (
//     <DashboardPageTemplate title="Profile View" description="">
//       <div className="p-3 sm:p-4">
//         <div className="w-full bg-white">
//           {/* =================================================
//               PAGE TITLE
//               ================================================= */}

//           <div className="mb-3 border-b border-slate-300 pb-2">
//             <div className="bg-[#202c68] px-3 py-1.5">
//               <h1 className="text-[11px] font-semibold text-white">Student Profile Details</h1>
//             </div>
//           </div>

//           {/* =================================================
//               PROFILE SUMMARY
//               ================================================= */}

//           <div className="border-b border-slate-300 pb-2">
//             <div className="flex items-center gap-4">
//               {/* PROFILE IMAGE */}

//               <div className="relative h-17 w-17 shrink-0 overflow-hidden border border-slate-300 bg-slate-100 p-1">
//                 <Image
//                   key={profileImage}
//                   src={profileImage}
//                   alt={fullName || "Student"}
//                   fill
//                   sizes="68px"
//                   className="object-cover"
//                   unoptimized
//                 />
//               </div>

//               {/* SUMMARY INFORMATION */}

//               <div className="min-w-0 flex-1">
//                 <ProfileRow label="Name" value={fullName} />

//                 <ProfileRow label="Mobile Number" value={getValue(user.mobile)} />

//                 <ProfileRow label="Email Address" value={user.email} />
//               </div>
//             </div>
//           </div>

//           {/* =================================================
//               BASIC INFO
//               ================================================= */}

//           <section className="mt-2">
//             <SectionTitle>Basic Information</SectionTitle>

//             <div className="grid grid-cols-1 gap-x-4 md:grid-cols-2">
//               {/* LEFT */}

//               <div>
//                 <ProfileRow label="First name" value={getValue(user.firstname)} />

//                 <ProfileRow label="Middle name" value={getValue(user.middlename)} />

//                 <ProfileRow label="Last name" value={getValue(user.lastname)} />

//                 <ProfileRow label="Gender" value={getValue(user.gender)} />

//                 <ProfileRow label="DOB" value={formatDate(user.dateOfBirth)} />
//               </div>

//               {/* RIGHT */}

//               <div>
//                 <ProfileRow label="Address" value={getValue(user.address)} />

//                 <ProfileRow label="State" value={getValue(user.state)} />

//                 <ProfileRow label="Country" value={getValue(user.country)} />

//                 <ProfileRow label="City" value={getValue(user.city)} />

//                 <ProfileRow label="PIN Code" value={getValue(user.postalCode)} />
//               </div>
//             </div>
//           </section>

//           {/* =================================================
//               EDIT PROFILE
//               ================================================= */}

//           {/* <div className="mt-4 flex justify-end border-t border-slate-300 pt-3">
//             <Link
//               href="/student/profile_edit"
//               className="
//                 inline-flex
//                 items-center
//                 gap-1.5
//                 rounded
//                 bg-[#202c68]
//                 px-4
//                 py-1.5
//                 text-[10px]
//                 font-semibold
//                 text-white
//                 transition
//                 hover:bg-[#172052]
//               "
//             >
//               <FaEdit className="text-[9px]" />
//               Edit Profile
//             </Link>
//           </div> */}
//         </div>
//       </div>
//     </DashboardPageTemplate>
//   );
// }

// // =========================================================
// // SECTION TITLE
// // =========================================================

// function SectionTitle({ children }: { children: React.ReactNode }) {
//   return <h2 className="mb-2 text-[11px] font-bold text-slate-800">{children}</h2>;
// }

// // =========================================================
// // PROFILE ROW
// // =========================================================

// function ProfileRow({ label, value }: { label: string; value: string }) {
//   return (
//     <div
//       className="
//         grid
//         min-h-5.5
//         grid-cols-[95px_1fr]
//         items-center
//         border-slate-200
//         px-1
//         text-[9px]
//         sm:grid-cols-[100px_1fr]
//       "
//     >
//       <span className="font-semibold text-slate-700">{label}</span>

//       <span className="truncate text-slate-600">{value}</span>
//     </div>
//   );
// }

// updated code

"use client";

import Image from "next/image";
import Link from "next/link";

import { FaEdit } from "react-icons/fa";

import DashboardPageTemplate from "./student-dashboard-template";

// =========================================================
// TYPES
// =========================================================

interface StudentProfileProps {
  id: string;

  firstname: string;
  middlename: string | null;
  lastname: string;

  email: string;

  mobile: string | null;
  country: string | null;
  countryName: string | null;

  profileImage: string | null;

  dateOfBirth: Date | string | null;
  gender: string | null;

  address: string | null;
  city: string | null;
  state: string | null;
  postalCode: string | null;
}

// =========================================================
// HELPERS
// =========================================================

function getValue(value?: string | null) {
  return value?.trim() || "-";
}

function formatDate(value?: Date | string | null) {
  if (!value) {
    return "-";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "-";
  }

  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

// =========================================================
// PROFILE VIEW
// =========================================================

export default function StudentProfileView({
  id,
  firstname,
  middlename,
  lastname,
  email,
  mobile,
  country,
  countryName,
  profileImage,
  dateOfBirth,
  gender,
  address,
  city,
  state,
  postalCode,
}: StudentProfileProps) {
  /*
   * ID is currently not displayed in the UI,
   * but it is available if required later.
   */
  void id;

  // =======================================================
  // USER INFORMATION
  // =======================================================

  const fullName = [firstname, middlename, lastname].filter(Boolean).join(" ");

  // =======================================================
  // PROFILE IMAGE
  // =======================================================

  /*
   * Add a cache-busting query string.
   *
   * This helps when the student changes their profile image
   * and the browser has cached the previous image.
   */
  const imageSrc = profileImage
    ? `${profileImage}?v=${encodeURIComponent(profileImage)}`
    : "/images/profile/profile1.jpg";

  // =======================================================
  // PAGE
  // =======================================================

  return (
    <DashboardPageTemplate title="Profile View" description="">
      <div className="p-3 sm:p-4">
        <div className="w-full bg-white">
          {/* =================================================
              PAGE TITLE
              ================================================= */}

          <div className="mb-3 border-b border-slate-300 pb-2">
            <div className="bg-[#202c68] px-3 py-1.5">
              <h1 className="text-[11px] font-semibold text-white">Student Profile Details</h1>
            </div>
          </div>

          {/* =================================================
              PROFILE SUMMARY
              ================================================= */}

          <div className="border-b border-slate-300 pb-2">
            <div className="flex items-center gap-4">
              {/* PROFILE IMAGE */}

              {/* <div className="relative h-17 w-17 shrink-0 overflow-hidden border border-slate-300 bg-slate-100 p-1">
                <Image
                  key={imageSrc}
                  src={imageSrc}
                  alt={fullName || "Student"}
                  fill
                  sizes="68px"
                  className="object-cover"
                  unoptimized
                />
              </div> */}

              {/* SUMMARY INFORMATION */}

              <div className="min-w-0 flex-1">
                <ProfileRow label="Name" value={fullName || "Student"} />

                <ProfileRow label="Mobile Number" value={getValue(mobile)} />

                <ProfileRow label="Email Address" value={email} />
              </div>
            </div>
          </div>

          {/* =================================================
              BASIC INFO
              ================================================= */}

          <section className="mt-2">
            <SectionTitle>Basic Information</SectionTitle>

            <div className="grid grid-cols-1 gap-x-4 md:grid-cols-2">
              {/* LEFT */}

              <div>
                <ProfileRow label="First name" value={getValue(firstname)} />

                <ProfileRow label="Middle name" value={getValue(middlename)} />

                <ProfileRow label="Last name" value={getValue(lastname)} />

                <ProfileRow label="Gender" value={getValue(gender)} />

                <ProfileRow label="DOB" value={formatDate(dateOfBirth)} />
              </div>

              {/* RIGHT */}

              <div>
                <ProfileRow label="Address" value={getValue(address)} />

                <ProfileRow label="State" value={getValue(state)} />

                <ProfileRow label="Country" value={getValue(countryName || country)} />

                <ProfileRow label="City" value={getValue(city)} />

                <ProfileRow label="PIN Code" value={getValue(postalCode)} />
              </div>
            </div>
          </section>

          {/* =================================================
              EDIT PROFILE
              ================================================= */}

          {/*
          <div className="mt-4 flex justify-end border-t border-slate-300 pt-3">
            <Link
              href="/student/profile_edit"
              className="
                inline-flex
                items-center
                gap-1.5
                rounded
                bg-[#202c68]
                px-4
                py-1.5
                text-[10px]
                font-semibold
                text-white
                transition
                hover:bg-[#172052]
              "
            >
              <FaEdit className="text-[9px]" />
              Edit Profile
            </Link>
          </div>
          */}
        </div>
      </div>
    </DashboardPageTemplate>
  );
}

// =========================================================
// SECTION TITLE
// =========================================================

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-2 text-[11px] font-bold text-slate-800">{children}</h2>;
}

// =========================================================
// PROFILE ROW
// =========================================================

function ProfileRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid min-h-5.5 grid-cols-[95px_1fr] items-center border-slate-200 px-1 text-[10px] sm:grid-cols-[100px_1fr]">
      <span className="font-semibold text-slate-800 font-sans">{label}</span>

      <span className="truncate text-slate-600 font-normal">{value}</span>
    </div>
  );
}
