// "use server";

// import { user_gender } from "@/generated/prisma/enums";
// import { prisma } from "@/lib/prisma";
// import { getAuthenticatedUser } from "@/services/auth.service";

// export async function updateStudentProfile(formData: FormData) {
//   try {
//     /*
//      * Get logged-in user from verified JWT.
//      */
//     const user = await getAuthenticatedUser();

//     if (!user) {
//       return {
//         success: false,
//         message: "You are not authenticated.",
//       };
//     }

//     /*
//      * Account Information
//      */
//     const firstname = String(formData.get("firstname") || "").trim();

//     const middlename = String(formData.get("middlename") || "").trim();

//     const lastname = String(formData.get("lastname") || "").trim();

//     const mobile = String(formData.get("mobile") || "").trim();

//     const country = String(formData.get("country") || "").trim();

//     /*
//      * Personal Details
//      */
//     const dateOfBirthValue = String(formData.get("dateOfBirth") || "").trim();

//     const genderValue = String(formData.get("gender") || "").trim();

//     const address = String(formData.get("address") || "").trim();

//     const city = String(formData.get("city") || "").trim();

//     const state = String(formData.get("state") || "").trim();

//     const postalCode = String(formData.get("postalCode") || "").trim();

//     console.log("========== GENDER DEBUG ==========");
//     console.log("genderValue:", genderValue);
//     console.log("typeof genderValue:", typeof genderValue);
//     console.log("Prisma Gender enum:", user_gender);
//     console.log("Prisma Gender values:", Object.values(user_gender));
//     console.log("==================================");

//     /*
//      * Basic validation
//      */
//     if (!firstname) {
//       return {
//         success: false,
//         message: "First name is required.",
//       };
//     }

//     if (!lastname) {
//       return {
//         success: false,
//         message: "Last name is required.",
//       };
//     }

//     /*
//      * Gender is mandatory for profile completion.
//      */
//     if (!genderValue) {
//       return {
//         success: false,
//         message: "Gender is required.",
//       };
//     }

//     /*
//      * Convert string value into Prisma Gender enum.
//      */
//     if (!Object.values(user_gender).includes(genderValue as user_gender)) {
//       return {
//         success: false,
//         message: "Please select a valid gender.",
//       };
//     }

//     const gender = genderValue as user_gender;

//     /*
//      * Convert date string to Date.
//      */
//     let dateOfBirth: Date | null = null;

//     if (dateOfBirthValue) {
//       const parsedDate = new Date(dateOfBirthValue);

//       if (Number.isNaN(parsedDate.getTime())) {
//         return {
//           success: false,
//           message: "Please enter a valid date of birth.",
//         };
//       }

//       dateOfBirth = parsedDate;
//     }

//     /*
//      * Update ONLY the currently authenticated user.
//      */
//     await prisma.user.update({
//       where: {
//         id: user.id,
//       },

//       data: {
//         // Account Information
//         firstname,
//         middlename: middlename || null,
//         lastname,
//         mobile: mobile || null,
//         country: country || null,

//         // Personal Details
//         dateOfBirth,
//         gender,
//         address: address || null,
//         city: city || null,
//         state: state || null,
//         postalCode: postalCode || null,

//         // Profile is considered complete
//         // only after mandatory fields have passed validation.
//         profileCompleted: true,
//       },
//     });

//     return {
//       success: true,
//       message: "Profile updated successfully.",
//     };
//   } catch (error) {
//     console.error("UPDATE STUDENT PROFILE ERROR:", error);

//     return {
//       success: false,
//       message: "Unable to update profile. Please try again.",
//     };
//   }
// }

// updated code

"use server";

import "server-only";

import fs from "fs/promises";
import path from "path";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { getAuthenticatedUser } from "@/services/auth.service";
import { profileSchema } from "@/schemas/profile.schema";
import bcrypt from "bcryptjs";
import { changeProfilePasswordSchema, type ChangePasswordFormData } from "@/schemas/profile-change-password.schema";

// =========================================================
// TYPES
// =========================================================

export type UpdatedStudentProfile = {
  id: string;

  firstname: string;
  middlename: string | null;
  lastname: string;

  email: string;
  mobile: string | null;

  profileImage: string | null;

  dateOfBirth: Date | null;
  gender: "MALE" | "FEMALE" | "OTHER" | "PREFER_NOT_TO_SAY" | null;

  address: string | null;

  country: string | null;
  state: string | null;
  city: string | null;
  postalCode: string | null;

  countryId: number | null;
  stateId: number | null;
  cityId: number | null;
  postalCodeId: number | null;
};

type UpdateProfileResult = {
  success: boolean;
  message: string;
  fieldErrors?: Record<string, string>;
  user?: UpdatedStudentProfile;
};

// =========================================================
// UPDATE STUDENT PROFILE
// =========================================================

export async function updateStudentProfile(formData: FormData): Promise<UpdateProfileResult> {
  try {
    // =======================================================
    // AUTHENTICATION
    // =======================================================

    const authenticatedUser = await getAuthenticatedUser();

    if (!authenticatedUser) {
      return {
        success: false,
        message: "You must be logged in to update your profile.",
      };
    }

    const userId = authenticatedUser.id;

    console.log("Updating profile for user:", userId);

    // =======================================================
    // FORM VALUES
    // =======================================================

    const firstname = String(formData.get("firstname") ?? "").trim();

    const middlename = String(formData.get("middlename") ?? "").trim();

    const lastname = String(formData.get("lastname") ?? "").trim();

    const mobile = String(formData.get("mobile") ?? "").trim();

    const countryIdValue = String(formData.get("countryId") ?? "").trim();

    const stateIdValue = String(formData.get("stateId") ?? "").trim();

    const cityIdValue = String(formData.get("cityId") ?? "").trim();

    const postalCodeIdValue = String(formData.get("postalCodeId") ?? "").trim();

    const dateOfBirth = String(formData.get("dateOfBirth") ?? "").trim();

    const gender = String(formData.get("gender") ?? "").trim();

    const address = String(formData.get("address") ?? "").trim();

    const postalCode = String(formData.get("postalCode") ?? "").trim();

    // =======================================================
    // CONVERT LOCATION IDs
    // =======================================================

    const countryId = countryIdValue ? Number(countryIdValue) : null;

    const stateId = stateIdValue ? Number(stateIdValue) : null;

    const cityId = cityIdValue ? Number(cityIdValue) : null;

    const postalCodeId = postalCodeIdValue ? Number(postalCodeIdValue) : null;

    // =======================================================
    // REQUIRED LOCATION IDs
    // =======================================================

    if (countryId === null) {
      return {
        success: false,
        message: "Please select a country.",
        fieldErrors: {
          country: "Please select a country.",
        },
      };
    }

    if (stateId === null) {
      return {
        success: false,
        message: "Please select a state.",
        fieldErrors: {
          state: "Please select a state.",
        },
      };
    }

    if (cityId === null) {
      return {
        success: false,
        message: "Please select a city.",
        fieldErrors: {
          city: "Please select a city.",
        },
      };
    }

    if (postalCodeId === null) {
      return {
        success: false,
        message: "Please select a postal code.",
        fieldErrors: {
          postalCode: "Please select a postal code.",
        },
      };
    }

    // =======================================================
    // VALIDATE LOCATION ID VALUES
    // =======================================================

    if (!Number.isInteger(countryId) || countryId <= 0) {
      return {
        success: false,
        message: "Please select a valid country.",
        fieldErrors: {
          country: "Please select a valid country.",
        },
      };
    }

    if (!Number.isInteger(stateId) || stateId <= 0) {
      return {
        success: false,
        message: "Please select a valid state.",
        fieldErrors: {
          state: "Please select a valid state.",
        },
      };
    }

    if (!Number.isInteger(cityId) || cityId <= 0) {
      return {
        success: false,
        message: "Please select a valid city.",
        fieldErrors: {
          city: "Please select a valid city.",
        },
      };
    }

    if (!Number.isInteger(postalCodeId) || postalCodeId <= 0) {
      return {
        success: false,
        message: "Please select a valid postal code.",
        fieldErrors: {
          postalCode: "Please select a valid postal code.",
        },
      };
    }

    // =======================================================
    // GET COUNTRY
    // =======================================================

    const selectedCountry = await prisma.country.findFirst({
      where: {
        country_id: countryId,
        isActive: true,
      },

      select: {
        country_id: true,
        country_name: true,
        country_code: true,
        phoneCode: true,
      },
    });

    if (!selectedCountry) {
      return {
        success: false,
        message: "Selected country was not found.",
        fieldErrors: {
          country: "Selected country was not found.",
        },
      };
    }

    // =======================================================
    // GET STATE
    // =======================================================

    const selectedState = await prisma.state.findFirst({
      where: {
        state_id: stateId,
        country_id: countryId,
        isActive: true,
      },

      select: {
        state_id: true,
        state_name: true,
        country_id: true,
      },
    });

    if (!selectedState) {
      return {
        success: false,
        message: "Selected state does not belong to the selected country.",
        fieldErrors: {
          state: "Selected state does not belong to the selected country.",
        },
      };
    }

    // =======================================================
    // GET CITY
    // =======================================================

    const selectedCity = await prisma.city.findFirst({
      where: {
        city_id: cityId,
        state_id: stateId,
        isActive: true,
      },

      select: {
        city_id: true,
        city_name: true,
        state_id: true,
      },
    });

    if (!selectedCity) {
      return {
        success: false,
        message: "Selected city does not belong to the selected state.",
        fieldErrors: {
          city: "Selected city does not belong to the selected state.",
        },
      };
    }

    // =======================================================
    // GET POSTAL CODE
    // =======================================================

    const selectedPostalCode = await prisma.postal_code.findFirst({
      where: {
        postal_code_id: postalCodeId,
        city_id: cityId,
        isActive: true,
      },

      select: {
        postal_code_id: true,
        postal_code: true,
        city_id: true,
      },
    });

    if (!selectedPostalCode) {
      return {
        success: false,
        message: "Selected postal code does not belong to the selected city.",
        fieldErrors: {
          postalCode: "Selected postal code does not belong to the selected city.",
        },
      };
    }

    // =======================================================
    // DEBUG LOCATION VALUES
    // =======================================================

    console.log("SELECTED LOCATION:");

    console.log({
      countryId: selectedCountry.country_id,
      countryName: selectedCountry.country_name,
      countryCode: selectedCountry.country_code,

      stateId: selectedState.state_id,
      stateName: selectedState.state_name,

      cityId: selectedCity.city_id,
      cityName: selectedCity.city_name,

      postalCodeId: selectedPostalCode.postal_code_id,
      postalCode: selectedPostalCode.postal_code,
    });

    // =======================================================
    // PROFILE SCHEMA VALIDATION
    // =======================================================
    //
    // IMPORTANT:
    //
    // profileSchema expects:
    //
    // country
    // state
    // city
    //
    // It does NOT expect:
    //
    // countryIdValue
    // stateIdValue
    // cityIdValue
    //
    // Therefore use the values resolved from the database.
    // =======================================================

    const validationResult = profileSchema.safeParse({
      firstname,
      middlename,
      lastname,
      mobile,

      // Country code is what profileSchema expects.
      // Example: IN / AU
      country: selectedCountry.country_code,

      // Location names come from the database master.
      state: selectedState.state_name,
      city: selectedCity.city_name,

      dateOfBirth,
      gender,
      address,

      // Postal code comes from the database master.
      postalCode: selectedPostalCode.postal_code,

      profileImage: "",
    });

    // =======================================================
    // PROFILE VALIDATION ERRORS
    // =======================================================

    if (!validationResult.success) {
      const fieldErrors: Record<string, string> = {};

      validationResult.error.issues.forEach((issue) => {
        const field = issue.path[0];

        if (typeof field === "string" && !fieldErrors[field]) {
          fieldErrors[field] = issue.message;
        }
      });

      console.log("PROFILE VALIDATION ERRORS:", fieldErrors);

      return {
        success: false,
        message: "Please correct the highlighted fields.",
        fieldErrors,
      };
    }

    // =======================================================
    // VALIDATED VALUES
    // =======================================================

    const validatedData = validationResult.data;

    // =======================================================
    // DATE OF BIRTH
    // =======================================================

    let parsedDateOfBirth: Date | null = null;

    if (validatedData.dateOfBirth) {
      const parsedDate = new Date(`${validatedData.dateOfBirth}T00:00:00`);

      if (Number.isNaN(parsedDate.getTime())) {
        return {
          success: false,
          message: "Please enter a valid date of birth.",
          fieldErrors: {
            dateOfBirth: "Please enter a valid date of birth.",
          },
        };
      }

      parsedDateOfBirth = parsedDate;
    }

    // =======================================================
    // GENDER
    // =======================================================

    const parsedGender = validatedData.gender || null;

    // =======================================================
    // PROFILE IMAGE
    // =======================================================

    const image = formData.get("profileImage");

    let profileImage: string | undefined;

    if (image instanceof File && image.size > 0) {
      // -----------------------------------------------------
      // Allowed types
      // -----------------------------------------------------

      const allowedTypes = ["image/jpeg", "image/png", "image/webp"];

      if (!allowedTypes.includes(image.type)) {
        return {
          success: false,
          message: "Only JPG, PNG and WEBP images are allowed.",
          fieldErrors: {
            profileImage: "Only JPG, PNG and WEBP images are allowed.",
          },
        };
      }

      // -----------------------------------------------------
      // Maximum image size
      // -----------------------------------------------------

      const maxSize = 2 * 1024 * 1024;

      if (image.size > maxSize) {
        return {
          success: false,
          message: "Profile image must be smaller than 2 MB.",
          fieldErrors: {
            profileImage: "Profile image must be smaller than 2 MB.",
          },
        };
      }

      // -----------------------------------------------------
      // Extension
      // -----------------------------------------------------

      const extension = getImageExtension(image.type);

      // -----------------------------------------------------
      // Filename
      // -----------------------------------------------------

      const fileName = `${userId}-${Date.now()}${extension}`;

      // -----------------------------------------------------
      // Upload directory
      // -----------------------------------------------------

      const uploadDirectory = path.join(process.cwd(), "public", "images", "profile");

      await fs.mkdir(uploadDirectory, {
        recursive: true,
      });

      // -----------------------------------------------------
      // Save image
      // -----------------------------------------------------

      const filePath = path.join(uploadDirectory, fileName);

      const buffer = Buffer.from(await image.arrayBuffer());

      await fs.writeFile(filePath, buffer);

      // -----------------------------------------------------
      // Public URL
      // -----------------------------------------------------

      profileImage = `/images/profile/${fileName}`;

      console.log("New profile image saved:", profileImage);
    }

    // =======================================================
    // UPDATE DATA
    // =======================================================

    const updateData = {
      firstname: validatedData.firstname,

      middlename: validatedData.middlename || null,

      lastname: validatedData.lastname,

      // Store local mobile number only.
      //
      // India:
      // 9876543210
      //
      // Australia:
      // 0412345678
      //
      // Do NOT store +91 / +61 here.
      mobile: validatedData.mobile || null,

      dateOfBirth: parsedDateOfBirth,

      gender: parsedGender,

      address: validatedData.address || null,

      // =====================================================
      // LOCATION
      // =====================================================
      //
      // Store both:
      //
      // 1. Display values
      // 2. Master IDs
      //
      // IDs remain the source of truth.
      // =====================================================

      country: selectedCountry.country_name,

      state: selectedState.state_name,

      city: selectedCity.city_name,

      postalCode: selectedPostalCode.postal_code,

      countryId: selectedCountry.country_id,

      stateId: selectedState.state_id,

      cityId: selectedCity.city_id,

      postalCodeId: selectedPostalCode.postal_code_id,

      // =====================================================
      // PROFILE IMAGE
      // =====================================================

      ...(profileImage
        ? {
            profileImage,
          }
        : {}),
    };

    // =======================================================
    // DEBUG UPDATE DATA
    // =======================================================

    console.log("PROFILE UPDATE DATA:", updateData);

    // =======================================================
    // UPDATE DATABASE
    // =======================================================

    const updatedUser = await prisma.user.update({
      where: {
        id: userId,
      },

      data: updateData,

      select: {
        id: true,

        firstname: true,
        middlename: true,
        lastname: true,

        email: true,

        mobile: true,

        country: true,
        countryId: true,

        state: true,
        stateId: true,

        city: true,
        cityId: true,

        postalCode: true,
        postalCodeId: true,

        profileImage: true,

        dateOfBirth: true,

        gender: true,

        address: true,
      },
    });

    // =======================================================
    // DEBUG SUCCESS
    // =======================================================

    console.log("=================================");

    console.log("PROFILE UPDATED SUCCESSFULLY");

    console.log({
      id: updatedUser.id,

      firstname: updatedUser.firstname,

      middlename: updatedUser.middlename,

      lastname: updatedUser.lastname,

      mobile: updatedUser.mobile,

      country: updatedUser.country,

      countryId: updatedUser.countryId,

      state: updatedUser.state,

      stateId: updatedUser.stateId,

      city: updatedUser.city,

      cityId: updatedUser.cityId,

      postalCode: updatedUser.postalCode,

      postalCodeId: updatedUser.postalCodeId,

      profileImage: updatedUser.profileImage,

      dateOfBirth: updatedUser.dateOfBirth,

      gender: updatedUser.gender,

      address: updatedUser.address,
    });

    console.log("=================================");

    // =======================================================
    // REVALIDATE
    // =======================================================

    revalidatePath("/student/profile_view");

    revalidatePath("/student/profile_edit");

    revalidatePath("/student");

    // =======================================================
    // RETURN UPDATED USER
    // =======================================================

    return {
      success: true,
      message: "Profile updated successfully.",
      user: updatedUser,
    };
  } catch (error) {
    console.error("UPDATE STUDENT PROFILE ERROR:", error);

    return {
      success: false,
      message: "Unable to update your profile. Please try again.",
    };
  }
}

// =========================================================
// IMAGE EXTENSION
// =========================================================

function getImageExtension(mimeType: string): string {
  switch (mimeType) {
    case "image/jpeg":
      return ".jpg";

    case "image/png":
      return ".png";

    case "image/webp":
      return ".webp";

    default:
      return ".jpg";
  }
}

/*
 * ============================================================
 * PROFILE CHANGE PASSWORD
 * ============================================================
 */

// RESPONSE TYPE

export type ChangePasswordResult = {
  success: boolean;
  message: string;
  fieldErrors?: {
    currentPassword?: string;
    newPassword?: string;
    confirmPassword?: string;
  };
};

/*
 * ============================================================
 * CHANGE PASSWORD
 * ============================================================
 */

export async function changePassword(data: ChangePasswordFormData): Promise<ChangePasswordResult> {
  try {
    /*
     * --------------------------------------------------------
     * 1. AUTHENTICATE USER
     * --------------------------------------------------------
     *
     * Never use the email sent from the browser to identify
     * the account.
     *
     * The authenticated session/token determines the user.
     */
    const user = await getAuthenticatedUser();

    if (!user) {
      return {
        success: false,
        message: "Your session has expired. Please log in again.",
      };
    }

    /*
     * --------------------------------------------------------
     * 2. VALIDATE INPUT ON SERVER
     * --------------------------------------------------------
     *
     * Client-side Zod validation can be bypassed.
     * Therefore the same schema must also be executed here.
     */
    const validation = changeProfilePasswordSchema.safeParse(data);

    if (!validation.success) {
      const fieldErrors: ChangePasswordResult["fieldErrors"] = {};

      for (const issue of validation.error.issues) {
        const field = issue.path[0] as keyof NonNullable<ChangePasswordResult["fieldErrors"]>;

        /*
         * Only keep the first error for each field.
         */
        if (!fieldErrors[field]) {
          fieldErrors[field] = issue.message;
        }
      }

      return {
        success: false,
        message: "Please correct the highlighted fields.",
        fieldErrors,
      };
    }

    const { currentPassword, newPassword } = validation.data;

    /*
     * --------------------------------------------------------
     * 3. GET USER FROM DATABASE
     * --------------------------------------------------------
     *
     * Use the authenticated user's ID rather than email.
     */
    const dbUser = await prisma.user.findUnique({
      where: {
        id: user.id,
      },
      select: {
        id: true,
        passwordHash: true,
      },
    });

    if (!dbUser) {
      return {
        success: false,
        message: "User account could not be found.",
      };
    }

    /*
     * --------------------------------------------------------
     * 4. VERIFY CURRENT PASSWORD
     * --------------------------------------------------------
     */

    const isCurrentPasswordValid = await bcrypt.compare(currentPassword, dbUser.passwordHash);

    if (!isCurrentPasswordValid) {
      return {
        success: false,
        message: "Please correct the highlighted fields.",
        fieldErrors: {
          currentPassword: "Current password is incorrect.",
        },
      };
    }

    /*
     * --------------------------------------------------------
     * 5. EXTRA SERVER-SIDE CHECK
     * --------------------------------------------------------
     *
     * This is already handled by the Zod schema, but keeping
     * this check here makes the security boundary explicit.
     */
    const isSamePassword = await bcrypt.compare(newPassword, dbUser.passwordHash);

    if (isSamePassword) {
      return {
        success: false,
        message: "Please correct the highlighted fields.",
        fieldErrors: {
          newPassword: "New password must be different from your current password.",
        },
      };
    }

    /*
     * --------------------------------------------------------
     * 6. HASH NEW PASSWORD
     * --------------------------------------------------------
     */

    const hashedPassword = await bcrypt.hash(newPassword, 12);

    /*
     * --------------------------------------------------------
     * 7. UPDATE PASSWORD
     * --------------------------------------------------------
     */

    await prisma.user.update({
      where: {
        id: dbUser.id,
      },
      data: {
        passwordHash: hashedPassword,
        updatedAt: new Date(),
      },
    });

    /*
     * --------------------------------------------------------
     * 8. SUCCESS
     * --------------------------------------------------------
     */

    return {
      success: true,
      message: "Password updated successfully.",
    };
  } catch (error) {
    console.error("changePassword server action error:", error);

    return {
      success: false,
      message: "Unable to update your password. Please try again.",
    };
  }
}
