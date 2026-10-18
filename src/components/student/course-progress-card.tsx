// "use client";

import DashboardPageTemplate from "./student-dashboard-template";

// export function CourseProgress() {
//   return <>Progress</>;
// }

export default function StudentCourseProgress() {
  return (
    <DashboardPageTemplate title="Course Progress" description="Track your learning progress">
      <div className="p-7">
        <p>Course Progress</p>
      </div>
    </DashboardPageTemplate>
  );
}
