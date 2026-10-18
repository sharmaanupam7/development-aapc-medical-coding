import {
  Award,
  NotebookPen,
  BookOpen,
  CreditCard,
  FileText,
  LayoutDashboard,
  Lock,
  LogOut,
  User,
  BarChart3,
} from "lucide-react";

// Main MenuBar
export const mainNavigation = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Courses",
    href: "/courses",
  },
  {
    label: "RCM",
    href: "/rcm",
  },
  {
    label: "Career",
    href: "/career",
  },
  {
    label: "Training",
    href: "/training",
  },
  {
    label: "Videos",
    href: "/videos",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];

// Student Dashboard SideMenu Bar
export const sidebarNavigation = [
  {
    label: "Dashboard",
    href: "/student/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Profile View",
    href: "/student/profile_view",
    icon: User,
  },
  {
    label: "Profile Edit",
    href: "/student/profile_edit",
    icon: User,
  },
  {
    label: "Enrolled Courses",
    href: "/student/enrolled_courses",
    icon: BookOpen,
  },
  {
    label: "Course Documents",
    href: "/student/documents",
    icon: FileText,
  },
  {
    label: "Course Progress",
    href: "/student/progress",
    icon: BarChart3,
  },
  {
    label: "Quiz",
    href: "/student/quiz",
    icon: NotebookPen,
  },
  {
    label: "Certificates",
    href: "/student/certificates",
    icon: Award,
  },
  {
    label: "Payment History",
    href: "/student/payments",
    icon: CreditCard,
  },
  {
    label: "Change Password",
    href: "/student/change-password",
    icon: Lock,
  },
];

// Main MenuBar >> Training SubMenu

export const trainingNavigation = [
  {
    label: "All Training Pragrammes",
    href: "/training",
  },
  {
    label: "Medical Coding Online And Offline",
    href: "/training/medical-coding",
  },
  {
    label: "Medical Billing & AR",
    href: "/training/medical-billing-ar",
  },
  {
    label: "Claims Adjudication",
    href: "/training/claims-adjudication",
  },
  {
    label: "On Job Training",
    href: "/training/on-job-training",
  },
];
