import StudentDashboardLayout from "@/components/student/student-dashboard-layout";
import { StudentSidebar } from "@/components/student/student-sidebar";
import { requireStudent } from "@/lib/auth-guard";

export default async function StudentLayout({ children }: { children: React.ReactNode }) {
  await requireStudent();
  return (
    // <div className="min-h-screen bg-slate-50">
    //   <div className="flex">
    //     <StudentSidebar />

    //     <main className="min-w-0 flex-1">{children}</main>
    //   </div>
    // </div>

    //updated test code

    <StudentDashboardLayout>{children}</StudentDashboardLayout>
  );
}
