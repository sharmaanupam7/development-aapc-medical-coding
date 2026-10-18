"use client";

import DashboardPageTemplate from "./student-dashboard-template";

export function StudentCourses() {
  return (
    <>
      <DashboardPageTemplate title="My Courses" description="Access your courses">
        <div className="p-7">
          <p>Student Courses</p>
        </div>
      </DashboardPageTemplate>
    </>
  );
}
