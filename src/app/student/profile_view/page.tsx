// import { redirect } from "next/navigation";

// import { prisma } from "@/lib/prisma";
// import { getAuthenticatedUser } from "@/services/auth.service";

// import StudentProfileView from "@/components/student/student-profile-view";

// export default async function StudentProfileViewPage() {
//   /*
//    * Get currently authenticated student
//    * using the application's custom JWT.
//    */
//   const authenticatedUser = await getAuthenticatedUser();

//   /*
//    * No valid JWT / logged-in user
//    */
//   if (!authenticatedUser) {
//     redirect("/login");
//   }

//   /*
//    * Fetch latest profile information
//    * from the database.
//    */
//   const student = await prisma.user.findUnique({
//     where: {
//       id: authenticatedUser.id,
//     },

//     select: {
//       id: true,

//       // Account Information
//       email: true,
//       firstname: true,
//       middlename: true,
//       lastname: true,
//       mobile: true,
//       country: true,

//       // Profile Image
//       profileImage: true,

//       // Personal Details
//       dateOfBirth: true,
//       gender: true,
//       address: true,
//       city: true,
//       state: true,
//       postalCode: true,
//     },
//   });

//   /*
//    * JWT is valid but user does not exist anymore.
//    */
//   if (!student) {
//     redirect("/login");
//   }

//   return (
//     <StudentProfileView
//       email={student.email}
//       firstname={student.firstname}
//       middlename={student.middlename}
//       lastname={student.lastname}
//       mobile={student.mobile}
//       country={student.country}
//       profileImage={student.profileImage}
//       dateOfBirth={student.dateOfBirth}
//       gender={student.gender}
//       address={student.address}
//       city={student.city}
//       state={student.state}
//       postalCode={student.postalCode}
//     />
//   );
// }

// updated code

// import { redirect } from "next/navigation";

// import { prisma } from "@/lib/prisma";
// import { getAuthenticatedUser } from "@/services/auth.service";

// import StudentProfileView from "@/components/student/student-profile-view";

// export default async function StudentProfileViewPage() {
//   /*
//    * Get currently authenticated student
//    * using the application's custom JWT.
//    */
//   const authenticatedUser = await getAuthenticatedUser();

//   /*
//    * No valid JWT / logged-in user
//    */
//   if (!authenticatedUser) {
//     redirect("/login");
//   }

//   /*
//    * Fetch latest profile information
//    * directly from the database.
//    */
//   const student = await prisma.user.findUnique({
//     where: {
//       id: authenticatedUser.id,
//     },

//     select: {
//       id: true,

//       // Account Information
//       email: true,
//       firstname: true,
//       middlename: true,
//       lastname: true,
//       mobile: true,
//       country: true,

//       // Profile Image
//       profileImage: true,

//       // Personal Details
//       dateOfBirth: true,
//       gender: true,
//       address: true,
//       city: true,
//       state: true,
//       postalCode: true,
//     },
//   });

//   /*
//    * JWT is valid but user does not exist anymore.
//    */
//   if (!student) {
//     redirect("/login");
//   }

//   /*
//    * Pass the latest database values
//    * to the client component.
//    */
//   return (
//     <StudentProfileView
//       id={student.id}
//       email={student.email}
//       firstname={student.firstname}
//       middlename={student.middlename}
//       lastname={student.lastname}
//       mobile={student.mobile}
//       country={student.country}
//       profileImage={student.profileImage}
//       dateOfBirth={student.dateOfBirth}
//       gender={student.gender}
//       address={student.address}
//       city={student.city}
//       state={student.state}
//       postalCode={student.postalCode}
//     />
//   );
// }

// test code

import { redirect } from "next/navigation";

import { prisma } from "@/lib/prisma";
import { getAuthenticatedUser } from "@/services/auth.service";
import StudentProfileView from "@/components/student/student-profile-view"


export default async function ProfileViewPage() {
  const authenticatedUser = await getAuthenticatedUser();

  if (!authenticatedUser) {
    redirect("/login");
  }

  const user = await prisma.user.findUnique({
    where: {
      id: authenticatedUser.id,
    },
    select: {
      id: true,

      firstname: true,
      middlename: true,
      lastname: true,

      email: true,

      mobile: true,
      country: true,
      countryId: true,

      profileImage: true,

      dateOfBirth: true,
      gender: true,

      address: true,
      city: true,
      state: true,
      postalCode: true,
    },
  });

  if (!user) {
    redirect("/login");
  }

  // =======================================================
  // RESOLVE COUNTRY NAME
  // =======================================================

  let countryName: string | null = null;

  if (user.countryId) {
    const country = await prisma.country.findUnique({
      where: {
        country_id: user.countryId,
      },
      select: {
        country_name: true,
      },
    });

    countryName = country?.country_name ?? null;
  }

  return (
    <StudentProfileView
      id={user.id}
      firstname={user.firstname}
      middlename={user.middlename}
      lastname={user.lastname}
      email={user.email}
      mobile={user.mobile}
      country={user.country}
      countryName={countryName}
      profileImage={user.profileImage}
      dateOfBirth={user.dateOfBirth}
      gender={user.gender}
      address={user.address}
      city={user.city}
      state={user.state}
      postalCode={user.postalCode}
    />
  );
}
