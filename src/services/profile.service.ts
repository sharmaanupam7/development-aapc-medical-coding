import "server-only";

import { findUserProfile, updateUserProfile } from "@/repositories/profile.repository";

import { profileSchema, type ProfileFormData } from "@/schemas/profile.schema";

export async function getUserProfile(userId: string) {
  return findUserProfile(userId);
}

export async function saveUserProfile(userId: string, input: ProfileFormData) {
  const validated = profileSchema.parse(input);

  return updateUserProfile(userId, {
    firstname: validated.firstname,

    middlename: validated.middlename || null,

    lastname: validated.lastname,

    mobile: validated.mobile,

    dateOfBirth: new Date(validated.dateOfBirth),

    gender: validated.gender,

    profileImage: validated.profileImage || null,

    address: validated.address,

    city: validated.city,

    state: validated.state,

    postalCode: validated.postalCode,

    country: validated.country,

    bio: validated.bio || null,
  });
}
