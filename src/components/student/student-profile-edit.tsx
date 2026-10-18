// import React from "react";
// import DashboardPageTemplate from "./student-dashboard-template";

// const StudentProfileEdit = () => {
//   return (
//     <>
//       <DashboardPageTemplate title="Profile Edit" description="Edit your profile details">
//         <div className="p-7">
//           <p>Edit your Profile</p>

//         </div>
//       </DashboardPageTemplate>
//     </>
//   );
// };

// export default StudentProfileEdit;

// updated code

"use client";

import React, { useEffect, useMemo, useRef, useState, useTransition } from "react";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  FaCalendarAlt,
  FaEnvelope,
  FaGlobe,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaSave,
  FaTimes,
  FaUser,
  FaCamera,
  FaCity,
  FaMap,
  FaMailBulk,
  FaVenusMars,
} from "react-icons/fa";

import { updateStudentProfile } from "@/actions/student-profile.actions";
import { profileSchema } from "@/schemas/profile.schema";

import DashboardPageTemplate from "./student-dashboard-template";

// =========================================================
// TYPES
// =========================================================

interface StudentUser {
  id: string;

  firstname: string;
  middlename?: string | null;
  lastname: string;

  email: string;

  mobile?: string | null;

  country?: string | null;
  countryId?: number | null;

  state?: string | null;
  stateId?: number | null;

  city?: string | null;
  cityId?: number | null;

  postalCode?: string | null;
  postalCodeId?: number | null;

  profileImage?: string | null;

  dateOfBirth?: Date | string | null;

  gender?: string | null;

  address?: string | null;
}

interface ProfileForm {
  firstname: string;
  middlename: string;
  lastname: string;

  mobile: string;

  country: string;
  countryId: string;

  state: string;
  stateId: string;

  city: string;
  cityId: string;

  postalCode: string;
  postalCodeId: string;

  dateOfBirth: string;
  gender: string;

  address: string;
}

// =========================================================
// DATE HELPER
// =========================================================

function formatDateForInput(value?: Date | string | null): string {
  if (!value) {
    return "";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "";
  }

  return date.toISOString().split("T")[0];
}

// =========================================================
// PROFILE EDIT
// =========================================================

export default function StudentProfileEdit() {
  const router = useRouter();

  const [user, setUser] = useState<StudentUser | null>(null);

  const [loading, setLoading] = useState(true);

  const [isPending, startTransition] = useTransition();

  const [message, setMessage] = useState("");

  const [error, setError] = useState("");

  // =======================================================
  // FIELD VALIDATION ERRORS
  // =======================================================

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  // =======================================================
  // IMAGE
  // =======================================================

  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // =======================================================
  // FORM
  // =======================================================

  const [formData, setFormData] = useState<ProfileForm>({
    firstname: "",
    middlename: "",
    lastname: "",

    mobile: "",

    country: "",
    countryId: "",

    state: "",
    stateId: "",

    city: "",
    cityId: "",

    postalCode: "",
    postalCodeId: "",

    dateOfBirth: "",
    gender: "",

    address: "",
  });

  // =======================================================
  // ORIGINAL / SAVED FORM DATA
  //
  // This stores the values that were loaded from the database.
  // Current formData is compared against this object to
  // determine whether the Save button should be enabled.
  // =======================================================

  const [originalFormData, setOriginalFormData] = useState<ProfileForm | null>(null);

  // =======================================================
  // LOCATION DATA
  // =======================================================

  const [countries, setCountries] = useState<
    {
      country_id: number;
      country_name: string;
      country_code: string;
      phoneCode: string;
    }[]
  >([]);

  const [states, setStates] = useState<
    {
      state_id: number;
      state_name: string;
    }[]
  >([]);

  const [cities, setCities] = useState<
    {
      city_id: number;
      city_name: string;
    }[]
  >([]);

  const [postalCodes, setPostalCodes] = useState<
    {
      postal_code_id: number;
      postal_code: string;
    }[]
  >([]);

  const [loadingCountries, setLoadingCountries] = useState(false);
  const [loadingStates, setLoadingStates] = useState(false);
  const [loadingCities, setLoadingCities] = useState(false);
  const [loadingPostalCodes, setLoadingPostalCodes] = useState(false);

  // =======================================================
  // CHECK WHETHER FORM HAS BEEN MODIFIED
  // =======================================================

  const isFormModified = useMemo(() => {
    // Profile is still loading / original values are not available.
    if (!originalFormData) {
      return false;
    }

    // -----------------------------------------------------
    // IMAGE CHANGE
    // -----------------------------------------------------
    //
    // Selecting a new image means the form has changed.
    //
    if (selectedImage) {
      return true;
    }

    // -----------------------------------------------------
    // FORM VALUES CHANGE
    // -----------------------------------------------------

    return JSON.stringify(formData) !== JSON.stringify(originalFormData);
  }, [formData, originalFormData, selectedImage]);

  // =======================================================
  // LOAD USER
  // =======================================================

  useEffect(() => {
    let mounted = true;

    async function loadInitialProfile() {
      try {
        setLoading(true);
        setError("");

        const userResponse = await fetch("/api/auth/authenticated_user", {
          method: "GET",
          credentials: "include",
          cache: "no-store",
          headers: {
            "Cache-Control": "no-cache, no-store, must-revalidate",
            Pragma: "no-cache",
          },
        });

        if (!userResponse.ok) {
          throw new Error("Unable to load profile.");
        }

        const userData = await userResponse.json();

        if (!mounted) {
          return;
        }

        const currentUser: StudentUser | null = userData.user ?? null;

        setUser(currentUser);

        if (!currentUser) {
          setError("Unable to load your profile.");
          return;
        }

        // =================================================
        // CREATE INITIAL FORM VALUES
        // =================================================

        const initialFormData: ProfileForm = {
          firstname: currentUser.firstname || "",

          middlename: currentUser.middlename || "",

          lastname: currentUser.lastname || "",

          mobile: currentUser.mobile || "",

          country: currentUser.country || "",

          countryId: currentUser.countryId ? String(currentUser.countryId) : "",

          state: currentUser.state || "",

          stateId: currentUser.stateId ? String(currentUser.stateId) : "",

          city: currentUser.city || "",

          cityId: currentUser.cityId ? String(currentUser.cityId) : "",

          postalCode: currentUser.postalCode || "",

          postalCodeId: currentUser.postalCodeId ? String(currentUser.postalCodeId) : "",

          dateOfBirth: formatDateForInput(currentUser.dateOfBirth),

          gender: currentUser.gender || "",

          address: currentUser.address || "",
        };

        // =================================================
        // SET CURRENT FORM
        // =================================================

        setFormData(initialFormData);

        // =================================================
        // IMPORTANT:
        // STORE ORIGINAL / SAVED VALUES
        //
        // Save button will remain disabled until current
        // form values differ from this snapshot.
        // =================================================

        setOriginalFormData(initialFormData);

        setImagePreview(currentUser.profileImage || null);

        // Make sure there is no pending image selection
        setSelectedImage(null);

        // =================================================
        // LOAD STATES
        // =================================================

        if (currentUser.countryId) {
          const statesResponse = await fetch(`/api/location/states?countryId=${currentUser.countryId}`, {
            method: "GET",
            cache: "no-store",
          });

          if (statesResponse.ok) {
            const statesData = await statesResponse.json();

            if (mounted) {
              setStates(statesData.states ?? []);
            }
          }

          // ===============================================
          // LOAD CITIES
          // ===============================================

          if (currentUser.stateId) {
            const citiesResponse = await fetch(`/api/location/cities?stateId=${currentUser.stateId}`, {
              method: "GET",
              cache: "no-store",
            });

            if (citiesResponse.ok) {
              const citiesData = await citiesResponse.json();

              if (mounted) {
                setCities(citiesData.cities ?? []);
              }
            }
          }

          // ===============================================
          // LOAD POSTAL CODES
          // ===============================================

          if (currentUser.cityId) {
            const postalCodesResponse = await fetch(`/api/location/postal-codes?cityId=${currentUser.cityId}`, {
              method: "GET",
              cache: "no-store",
            });

            if (postalCodesResponse.ok) {
              const postalCodesData = await postalCodesResponse.json();

              if (mounted) {
                setPostalCodes(postalCodesData.postalCodes ?? []);
              }
            }
          }
        }
      } catch (err) {
        console.error("Failed to load profile:", err);

        if (mounted) {
          setError("Unable to load your profile.");
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    loadInitialProfile();

    return () => {
      mounted = false;
    };
  }, []);

  // =======================================================
  // LOAD COUNTRIES
  // =======================================================

  useEffect(() => {
    async function loadCountries() {
      try {
        setLoadingCountries(true);

        const response = await fetch("/api/location/countries", {
          cache: "no-store",
        });

        const data = await response.json();

        if (!response.ok || !data.success) {
          throw new Error(data.message || "Unable to load countries.");
        }

        setCountries(data.countries);
      } catch (error) {
        console.error("Failed to load countries:", error);

        setError("Unable to load countries.");
      } finally {
        setLoadingCountries(false);
      }
    }

    loadCountries();
  }, []);

  // =======================================================
  // LOAD STATES
  // =======================================================

  useEffect(() => {
    async function loadStates() {
      if (!formData.countryId) {
        setStates([]);
        return;
      }

      try {
        setLoadingStates(true);

        const response = await fetch(`/api/location/states?countryId=${formData.countryId}`, {
          cache: "no-store",
        });

        const data = await response.json();

        if (!response.ok || !data.success) {
          throw new Error(data.message || "Unable to load states.");
        }

        setStates(data.states);
      } catch (error) {
        console.error("Failed to load states:", error);

        setError("Unable to load states.");
      } finally {
        setLoadingStates(false);
      }
    }

    loadStates();
  }, [formData.countryId]);

  // =======================================================
  // LOAD CITIES
  // =======================================================

  useEffect(() => {
    async function loadCities() {
      if (!formData.stateId) {
        setCities([]);
        return;
      }

      try {
        setLoadingCities(true);

        const response = await fetch(`/api/location/cities?stateId=${formData.stateId}`, {
          cache: "no-store",
        });

        const data = await response.json();

        if (!response.ok || !data.success) {
          throw new Error(data.message || "Unable to load cities.");
        }

        setCities(data.cities);
      } catch (error) {
        console.error("Failed to load cities:", error);

        setError("Unable to load cities.");
      } finally {
        setLoadingCities(false);
      }
    }

    loadCities();
  }, [formData.stateId]);

  // =======================================================
  // LOAD POSTAL CODES
  // =======================================================

  useEffect(() => {
    async function loadPostalCodes() {
      if (!formData.cityId) {
        setPostalCodes([]);
        return;
      }

      try {
        setLoadingPostalCodes(true);

        const response = await fetch(`/api/location/postal-codes?cityId=${formData.cityId}`, {
          cache: "no-store",
        });

        const data = await response.json();

        if (!response.ok || !data.success) {
          throw new Error(data.message || "Unable to load postal codes.");
        }

        setPostalCodes(data.postalCodes);
      } catch (error) {
        console.error("Failed to load postal codes:", error);

        setError("Unable to load postal codes.");
      } finally {
        setLoadingPostalCodes(false);
      }
    }

    loadPostalCodes();
  }, [formData.cityId]);

  // =======================================================
  // VALIDATE SINGLE FIELD
  // =======================================================

  function validateField(fieldName: keyof ProfileForm, value: string, currentFormData: ProfileForm = formData) {
    const dataToValidate = {
      ...currentFormData,
      [fieldName]: value,
    };

    const result = profileSchema.safeParse(dataToValidate);

    if (!result.success) {
      const issue = result.error.issues.find((item) => item.path[0] === fieldName);

      if (issue) {
        setFieldErrors((previous) => ({
          ...previous,
          [fieldName]: issue.message,
        }));

        return;
      }
    }

    setFieldErrors((previous) => {
      const updated = {
        ...previous,
      };

      delete updated[fieldName];

      return updated;
    });
  }

  // =======================================================
  // VALIDATE COMPLETE FORM
  // =======================================================

  function validateForm(): boolean {
    const result = profileSchema.safeParse(formData);

    if (result.success) {
      setFieldErrors({});

      return true;
    }

    const errors: Record<string, string> = {};

    result.error.issues.forEach((issue) => {
      const field = issue.path[0];

      if (typeof field === "string" && !errors[field]) {
        errors[field] = issue.message;
      }
    });

    setFieldErrors(errors);

    return false;
  }

  // =======================================================
  // FIELD CHANGE
  // =======================================================

  function handleChange(event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) {
    const { name, value } = event.target;

    let updatedValue = value;

    // =====================================================
    // MOBILE
    // =====================================================

    if (name === "mobile") {
      updatedValue = value.replace(/\D/g, "");

      // India and Australia currently use 10-digit mobile
      // numbers in this application.
      if (formData.country === "IN" || formData.country === "AU") {
        updatedValue = updatedValue.slice(0, 10);
      }
    }

    const updatedFormData = {
      ...formData,
      [name]: updatedValue,
    };

    setFormData(updatedFormData);

    validateField(name as keyof ProfileForm, updatedValue, updatedFormData);

    if (error) {
      setError("");
    }

    if (message) {
      setMessage("");
    }
  }

  // =======================================================
  // FIELD BLUR
  // =======================================================

  function handleBlur(event: React.FocusEvent<HTMLInputElement> | React.FocusEvent<HTMLSelectElement>) {
    const { name, value } = event.target;

    validateField(name as keyof ProfileForm, value, formData);
  }

  // =======================================================
  // IMAGE CHANGE
  // =======================================================

  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
      setError("Only JPG, PNG and WEBP images are allowed.");

      return;
    }

    const maxSize = 2 * 1024 * 1024;

    if (file.size > maxSize) {
      setError("Profile image must be smaller than 2 MB.");

      return;
    }

    setError("");
    setMessage("");

    if (imagePreview && imagePreview.startsWith("blob:")) {
      URL.revokeObjectURL(imagePreview);
    }

    const previewUrl = URL.createObjectURL(file);

    setSelectedImage(file);

    setImagePreview(previewUrl);
  }

  // =======================================================
  // REMOVE IMAGE
  // =======================================================

  function handleRemoveImage() {
    if (imagePreview && imagePreview.startsWith("blob:")) {
      URL.revokeObjectURL(imagePreview);
    }

    setSelectedImage(null);

    setImagePreview(user?.profileImage || null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }

    setMessage("");
    setError("");
  }

  // =======================================================
  // SUBMIT
  // =======================================================

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setMessage("");
    setError("");

    // =====================================================
    // EXTRA SAFETY CHECK
    //
    // Normally the button is already disabled when nothing
    // changed, but this prevents submission programmatically.
    // =====================================================

    if (!isFormModified) {
      return;
    }

    const isValid = validateForm();

    if (!isValid) {
      return;
    }

    const data = new FormData();

    data.append("firstname", formData.firstname.trim());

    data.append("middlename", formData.middlename.trim());

    data.append("lastname", formData.lastname.trim());

    data.append("mobile", formData.mobile.trim());

    data.append("country", formData.country.trim().toUpperCase());

    data.append("countryId", formData.countryId);

    data.append("dateOfBirth", formData.dateOfBirth);

    data.append("gender", formData.gender);

    data.append("address", formData.address.trim());

    data.append("city", formData.city.trim());

    data.append("cityId", formData.cityId);

    data.append("state", formData.state.trim());

    data.append("stateId", formData.stateId);

    data.append("postalCode", formData.postalCode.trim());

    data.append("postalCodeId", formData.postalCodeId);

    if (selectedImage) {
      data.append("profileImage", selectedImage);
    }

    startTransition(async () => {
      try {
        const result = await updateStudentProfile(data);

        console.log("PROFILE UPDATE RESULT:", result);

        if (!result.success) {
          setFieldErrors(result.fieldErrors ?? {});

          setError(result.message || "Please correct the highlighted fields.");

          return;
        }

        // =================================================
        // UPDATE USER AFTER SUCCESS
        // =================================================

        if (result.user) {
          const updatedUser = result.user;

          setUser(updatedUser);

          const updatedFormData: ProfileForm = {
            firstname: updatedUser.firstname || "",

            middlename: updatedUser.middlename || "",

            lastname: updatedUser.lastname || "",

            mobile: updatedUser.mobile || "",

            country: updatedUser.country || "",

            countryId: updatedUser.countryId ? String(updatedUser.countryId) : "",

            state: updatedUser.state || "",

            stateId: updatedUser.stateId ? String(updatedUser.stateId) : "",

            city: updatedUser.city || "",

            cityId: updatedUser.cityId ? String(updatedUser.cityId) : "",

            postalCode: updatedUser.postalCode || "",

            postalCodeId: updatedUser.postalCodeId ? String(updatedUser.postalCodeId) : "",

            dateOfBirth: formatDateForInput(updatedUser.dateOfBirth),

            gender: updatedUser.gender || "",

            address: updatedUser.address || "",
          };

          setFormData(updatedFormData);

          // =================================================
          // IMPORTANT:
          // RESET ORIGINAL VALUES AFTER SUCCESSFUL SAVE
          //
          // This makes the Save button disabled again because
          // the current values now match the saved values.
          // =================================================

          setOriginalFormData(updatedFormData);

          setImagePreview(updatedUser.profileImage || null);
        }

        // =================================================
        // RESET IMAGE SELECTION
        // =================================================

        setSelectedImage(null);

        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }

        // =================================================
        // RESET VALIDATION
        // =================================================

        setFieldErrors({});

        setMessage("Profile updated successfully.");

        // =================================================
        // NAVIGATE TO PROFILE VIEW
        // =================================================

        router.replace("/student/profile_view");

        router.refresh();
      } catch (err) {
        console.error("Profile update failed:", err);

        setError("Unable to update your profile. Please try again.");
      }
    });
  }

  // =======================================================
  // LOADING
  // =======================================================

  if (loading) {
    return (
      <DashboardPageTemplate title="Profile Edit" description="">
        <div className="p-4">
          <div className="animate-pulse">
            <div className="mb-4 h-6 rounded bg-slate-200" />

            <div className="h-80 rounded bg-slate-100" />
          </div>
        </div>
      </DashboardPageTemplate>
    );
  }

  // =======================================================
  // USER NOT FOUND
  // =======================================================

  if (!user) {
    return (
      <DashboardPageTemplate title="Profile Edit" description="">
        <div className="p-4">
          <div className="rounded border border-red-200 bg-red-50 p-3 text-xs text-red-600">
            Unable to load your profile.
          </div>
        </div>
      </DashboardPageTemplate>
    );
  }

  // =======================================================
  // STYLES
  // =======================================================

  const inputClass = `
    h-8
    w-full
    rounded-sm
    border
    border-slate-300
    bg-white
    px-2
    text-[10px]
    text-slate-700
    outline-none
    transition
    focus:border-[#202c68]
    focus:ring-1
    focus:ring-[#202c68]/20
  `;

  // =======================================================
  // PAGE
  // =======================================================

  return (
    <DashboardPageTemplate title="Profile Edit" description="">
      <div className="p-3 sm:p-4">
        <div className="w-full rounded-md bg-white p-4">
          {/* =================================================
              HEADER
          ================================================= */}

          <div className="border-b border-slate-200 pb-3">
            <h1 className="text-base font-medium text-[#202c68]">Update Your Profile Information</h1>

            {/* <p className="mt-1 text-[10px] text-slate-500">Edit profile</p> */}
          </div>

          {/* =================================================
              GENERAL MESSAGES
          ================================================= */}

          {message && (
            <div className="mt-4 rounded border border-green-200 bg-green-50 px-3 py-2 text-[10px] text-green-700">
              {message}
            </div>
          )}

          {error && (
            <div className="mt-4 rounded border border-red-200 bg-red-50 px-3 py-2 text-[10px] text-red-600">
              {error}
            </div>
          )}

          {/* =================================================
              PROFILE IMAGE
          ================================================= */}

          <div className="mt-5 border-b border-slate-200 pb-5">
            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              {/* PROFILE IMAGE */}

              <div className="relative h-24 w-24 overflow-hidden rounded-full border border-slate-300 bg-slate-100 shadow-sm">
                {imagePreview ? (
                  <Image
                    key={imagePreview}
                    src={imagePreview}
                    alt="Profile image"
                    fill
                    sizes="96px"
                    className="object-cover"
                    unoptimized
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <FaUser className="text-3xl text-slate-300" />
                  </div>
                )}
              </div>

              {/* IMAGE ACTIONS */}

              <div className="flex flex-col items-start">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  onChange={handleImageChange}
                  className="hidden"
                  id="profileImage"
                />

                {/* =================================================
                    CHANGE PHOTO BUTTON + IMAGE REQUIREMENTS TOOLTIP
                ================================================= */}

                <div className="group relative">
                  <label
                    htmlFor="profileImage"
                    className="
                      inline-flex
                      h-8
                      cursor-pointer
                      items-center
                      justify-center
                      gap-1.5
                      rounded-full
                      border
                      border-[#202c68]
                      bg-white
                      px-4
                      text-[10px]
                      font-semibold
                      text-[#202c68]
                      shadow-sm
                      transition-all
                      duration-200
                      hover:bg-[#202c68]
                      hover:text-white
                      hover:shadow-md
                      active:scale-95
                    "
                  >
                    <FaCamera className="text-[10px]" />

                    <span>Change Photo</span>
                  </label>

                  {/* IMAGE REQUIREMENTS */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      left-0
                      top-full
                      z-50
                      mt-2
                      w-max
                      max-w-55
                      rounded-md
                      border
                      border-slate-200
                      bg-white
                      px-3
                      py-2
                      text-[9px]
                      text-slate-600
                      opacity-0
                      shadow-lg
                      transition-all
                      duration-200
                      group-hover:pointer-events-auto
                      group-hover:opacity-100
                    "
                  >
                    <p className="font-semibold text-[#202c68]">Image Requirements</p>

                    <p className="mt-1">JPG, PNG or WEBP</p>

                    <p>Maximum size: 2 MB</p>
                  </div>
                </div>

                {/* =================================================
                    REMOVE SELECTED PHOTO
                ================================================= */}

                {selectedImage && (
                  <button
                    type="button"
                    onClick={handleRemoveImage}
                    className="
                      mt-2
                      text-[9px]
                      font-medium
                      text-red-500
                      transition-colors
                      hover:text-red-700
                    "
                  >
                    Remove selected photo
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* =================================================
              FORM
          ================================================= */}

          <form onSubmit={handleSubmit} className="mt-5" noValidate>
            <ProfileSectionTitle>Account Information</ProfileSectionTitle>

            <div className="grid grid-cols-1 gap-x-6 gap-y-3 md:grid-cols-2">
              {/* EMAIL */}

              <ProfileField label="Email" icon={<FaEnvelope />}>
                <input
                  type="email"
                  value={user.email}
                  readOnly
                  className="
                    h-8
                    w-full
                    cursor-not-allowed
                    rounded-sm
                    border
                    border-slate-300
                    bg-slate-100
                    px-2
                    text-[10px]
                    text-slate-500
                  "
                />
              </ProfileField>

              {/* FIRST NAME */}

              <ProfileField label="First Name" icon={<FaUser />} error={fieldErrors.firstname}>
                <input
                  name="firstname"
                  type="text"
                  value={formData.firstname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`${inputClass} ${
                    fieldErrors.firstname ? "border-red-400 focus:border-red-500 focus:ring-red-200" : ""
                  }`}
                />
              </ProfileField>

              {/* MIDDLE NAME */}

              <ProfileField label="Middle Name" icon={<FaUser />} error={fieldErrors.middlename}>
                <input
                  name="middlename"
                  type="text"
                  value={formData.middlename}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`${inputClass} ${
                    fieldErrors.middlename ? "border-red-400 focus:border-red-500 focus:ring-red-200" : ""
                  }`}
                />
              </ProfileField>

              {/* LAST NAME */}

              <ProfileField label="Last Name" icon={<FaUser />} error={fieldErrors.lastname}>
                <input
                  name="lastname"
                  type="text"
                  value={formData.lastname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`${inputClass} ${
                    fieldErrors.lastname ? "border-red-400 focus:border-red-500 focus:ring-red-200" : ""
                  }`}
                />
              </ProfileField>

              {/* MOBILE */}

              <ProfileField label="Mobile Number" icon={<FaPhoneAlt />} error={fieldErrors.mobile}>
                <input
                  name="mobile"
                  type="tel"
                  inputMode="numeric"
                  value={formData.mobile}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={
                    formData.country === "IN"
                      ? "Enter 10-digit mobile number"
                      : formData.country === "AU"
                        ? "Enter 10-digit mobile number"
                        : "Enter mobile number"
                  }
                  maxLength={formData.country === "IN" || formData.country === "AU" ? 10 : undefined}
                  className={`${inputClass} ${
                    fieldErrors.mobile ? "border-red-400 focus:border-red-500 focus:ring-red-200" : ""
                  }`}
                />
              </ProfileField>

              {/* COUNTRY */}

              <ProfileField label="Country" icon={<FaGlobe />} error={fieldErrors.country}>
                <select
                  name="country"
                  value={formData.country}
                  onChange={(event) => {
                    const selectedCode = event.target.value;

                    const selectedCountry = countries.find((country) => country.country_code === selectedCode);

                    setFormData((previous) => ({
                      ...previous,

                      country: selectedCode,

                      countryId: selectedCountry ? String(selectedCountry.country_id) : "",

                      // Clear mobile because mobile rules depend on country
                      mobile: "",

                      state: "",
                      stateId: "",

                      city: "",
                      cityId: "",

                      postalCode: "",
                      postalCodeId: "",
                    }));

                    setStates([]);
                    setCities([]);
                    setPostalCodes([]);

                    setFieldErrors((previous) => {
                      const updated = {
                        ...previous,
                      };

                      delete updated.country;
                      delete updated.mobile;
                      delete updated.state;
                      delete updated.city;
                      delete updated.postalCode;

                      return updated;
                    });

                    setMessage("");
                    setError("");
                  }}
                  onBlur={handleBlur}
                  disabled={loadingCountries}
                  className={`${inputClass} cursor-pointer ${
                    fieldErrors.country ? "border-red-400 focus:border-red-500 focus:ring-red-200" : ""
                  }`}
                >
                  <option value="">{loadingCountries ? "Loading countries..." : "Select Country"}</option>

                  {countries.map((country) => (
                    <option key={country.country_id} value={country.country_code}>
                      {country.country_name}
                    </option>
                  ))}
                </select>
              </ProfileField>
            </div>

            {/* =================================================
                PERSONAL DETAILS
            ================================================= */}

            <div className="mt-6">
              <ProfileSectionTitle>Personal Details</ProfileSectionTitle>

              <div className="grid grid-cols-1 gap-x-6 gap-y-3 md:grid-cols-2">
                {/* DATE OF BIRTH */}

                <ProfileField label="Date of Birth" icon={<FaCalendarAlt />} error={fieldErrors.dateOfBirth}>
                  <input
                    name="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`${inputClass} ${
                      fieldErrors.dateOfBirth ? "border-red-400 focus:border-red-500 focus:ring-red-200" : ""
                    }`}
                  />
                </ProfileField>

                {/* GENDER */}

                <ProfileField label="Gender" icon={<FaVenusMars />} error={fieldErrors.gender}>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`${inputClass} cursor-pointer ${
                      fieldErrors.gender ? "border-red-400 focus:border-red-500 focus:ring-red-200" : ""
                    }`}
                  >
                    <option value="">Select Gender</option>

                    <option value="MALE">Male</option>

                    <option value="FEMALE">Female</option>

                    <option value="OTHER">Other</option>

                    <option value="PREFER_NOT_TO_SAY">Prefer not to say</option>
                  </select>
                </ProfileField>

                {/* ADDRESS */}

                <div className="md:col-span-2">
                  <ProfileField label="Address" icon={<FaMapMarkerAlt />} error={fieldErrors.address}>
                    <input
                      name="address"
                      type="text"
                      value={formData.address}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`${inputClass} ${
                        fieldErrors.address ? "border-red-400 focus:border-red-500 focus:ring-red-200" : ""
                      }`}
                    />
                  </ProfileField>
                </div>

                {/* CITY */}

                <ProfileField label="City" icon={<FaCity />} error={fieldErrors.city}>
                  <select
                    name="city"
                    value={formData.city}
                    onChange={(event) => {
                      const selectedCity = cities.find((city) => city.city_name === event.target.value);

                      setFormData((previous) => ({
                        ...previous,

                        city: event.target.value,

                        cityId: selectedCity ? String(selectedCity.city_id) : "",

                        postalCode: "",
                        postalCodeId: "",
                      }));

                      setPostalCodes([]);

                      setMessage("");
                      setError("");
                    }}
                    onBlur={handleBlur}
                    disabled={!formData.stateId || loadingCities}
                    className={`${inputClass} cursor-pointer ${
                      fieldErrors.city ? "border-red-400 focus:border-red-500 focus:ring-red-200" : ""
                    }`}
                  >
                    <option value="">
                      {!formData.stateId
                        ? "Select state first"
                        : loadingCities
                          ? "Loading cities..."
                          : cities.length === 0
                            ? "No cities available"
                            : "Select City"}
                    </option>

                    {cities.map((city) => (
                      <option key={city.city_id} value={city.city_name}>
                        {city.city_name}
                      </option>
                    ))}
                  </select>
                </ProfileField>

                {/* STATE */}

                <ProfileField label="State" icon={<FaMap />} error={fieldErrors.state}>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={(event) => {
                      const selectedState = states.find((state) => state.state_name === event.target.value);

                      setFormData((previous) => ({
                        ...previous,

                        state: event.target.value,

                        stateId: selectedState ? String(selectedState.state_id) : "",

                        city: "",
                        cityId: "",

                        postalCode: "",
                        postalCodeId: "",
                      }));

                      setCities([]);
                      setPostalCodes([]);

                      setMessage("");
                      setError("");
                    }}
                    onBlur={handleBlur}
                    disabled={!formData.countryId || loadingStates}
                    className={`${inputClass} cursor-pointer ${
                      fieldErrors.state ? "border-red-400 focus:border-red-500 focus:ring-red-200" : ""
                    }`}
                  >
                    <option value="">
                      {!formData.countryId
                        ? "Select country first"
                        : loadingStates
                          ? "Loading states..."
                          : states.length === 0
                            ? "No states available"
                            : "Select State"}
                    </option>

                    {states.map((state) => (
                      <option key={state.state_id} value={state.state_name}>
                        {state.state_name}
                      </option>
                    ))}
                  </select>
                </ProfileField>

                {/* POSTAL CODE */}

                <ProfileField label="PIN / ZIP Code" icon={<FaMailBulk />} error={fieldErrors.postalCode}>
                  <select
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={(event) => {
                      const selectedPostalCode = postalCodes.find((item) => item.postal_code === event.target.value);

                      setFormData((previous) => ({
                        ...previous,

                        postalCode: event.target.value,

                        postalCodeId: selectedPostalCode ? String(selectedPostalCode.postal_code_id) : "",
                      }));

                      setMessage("");
                      setError("");
                    }}
                    onBlur={handleBlur}
                    disabled={!formData.cityId || loadingPostalCodes}
                    className={`${inputClass} cursor-pointer ${
                      fieldErrors.postalCode ? "border-red-400 focus:border-red-500 focus:ring-red-200" : ""
                    }`}
                  >
                    <option value="">
                      {!formData.cityId
                        ? "Select city first"
                        : loadingPostalCodes
                          ? "Loading PIN codes..."
                          : postalCodes.length === 0
                            ? "No PIN codes available"
                            : "Select PIN / ZIP Code"}
                    </option>

                    {postalCodes.map((postalCode) => (
                      <option key={postalCode.postal_code_id} value={postalCode.postal_code}>
                        {postalCode.postal_code}
                      </option>
                    ))}
                  </select>
                </ProfileField>
              </div>
            </div>

            {/* =================================================
                BUTTONS
            ================================================= */}

            <div className="mt-6 flex gap-2 border-t border-slate-200 pt-4">
              {/* SAVE */}

              <button
                type="submit"
                disabled={!isFormModified || isPending}
                className={`
                  inline-flex
                  h-8
                  items-center
                  gap-2
                  rounded
                  cursor-pointer
                  px-5
                  text-[10px]
                  font-semibold
                  text-white
                  transition
                  ${
                    !isFormModified || isPending
                      ? `
                        cursor-not-allowed
                        bg-slate-300
                        opacity-70
                      `
                      : `
                        bg-[#202c68]
                        hover:bg-[#172052]
                      `
                  }
                `}
              >
                <FaSave className="text-[9px]" />

                {isPending ? "Saving..." : "Save"}
              </button>

              {/* CANCEL */}

              <Link
                href="/student/profile_view"
                className="
                  inline-flex
                  h-8
                  items-center
                  gap-2
                  rounded
                  border
                  border-slate-300
                  bg-slate-100
                  px-5
                  text-[10px]
                  font-semibold
                  text-slate-600
                  transition
                  hover:bg-slate-200
                "
              >
                <FaTimes className="text-[9px]" />
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </DashboardPageTemplate>
  );
}

// =========================================================
// SECTION TITLE
// =========================================================

function ProfileSectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3 border-b border-slate-200 pb-1.5">
      <h2 className="text-[11px] font-bold text-[#202c68]">{children}</h2>
    </div>
  );
}

// =========================================================
// PROFILE FIELD
// =========================================================

function ProfileField({
  label,
  icon,
  children,
  error,
}: {
  label: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  error?: string;
}) {
  return (
    <div className="grid grid-cols-1 items-start gap-1.5 sm:grid-cols-[125px_1fr] sm:gap-3">
      {/* LABEL */}

      <label className="flex items-center gap-1.5 pt-2 text-[10px] font-semibold text-slate-700">
        <span className="text-[9px] text-[#202c68]">{icon}</span>

        {label}
      </label>

      {/* INPUT + ERROR */}

      <div className="min-w-0">
        {children}

        {error && <p className="mt-1 text-[9px] leading-3 text-red-500">{error}</p>}
      </div>
    </div>
  );
}
