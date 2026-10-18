import "server-only";

import { prisma } from "@/lib/prisma";
import { user_gender } from "@/generated/prisma/enums";

export async function findUserProfile(userId: string) {
  return prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      id: true,
      firstname: true,
      middlename: true,
      lastname: true,
      email: true,
      mobile: true,
      country: true,

      profileImage: true,
      dateOfBirth: true,
      gender: true,

      address: true,
      city: true,
      state: true,
      postalCode: true,

      bio: true,
      profileCompleted: true,
    },
  });
}

export async function updateUserProfile(
  userId: string,
  data: {
    firstname: string;
    middlename?: string | null;
    lastname: string;
    mobile: string;
    dateOfBirth: Date;
    gender: user_gender;
    profileImage: string | null;
    address: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    bio: string | null;
  },
) {
  return prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      firstname: data.firstname,
      middlename: data.middlename || null,
      lastname: data.lastname,
      mobile: data.mobile,

      dateOfBirth: data.dateOfBirth,
      gender: data.gender,
      profileImage: data.profileImage,

      address: data.address,
      city: data.city,
      state: data.state,
      postalCode: data.postalCode,
      country: data.country,

      bio: data.bio,

      profileCompleted: true,
    },
    select: {
      id: true,
      firstname: true,
      middlename: true,
      lastname: true,
      email: true,
      mobile: true,
      country: true,

      profileImage: true,
      dateOfBirth: true,
      gender: true,

      address: true,
      city: true,
      state: true,
      postalCode: true,

      bio: true,
      profileCompleted: true,
    },
  });
}
