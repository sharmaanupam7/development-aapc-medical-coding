"use client";

import DashboardPageTemplate from "./student-dashboard-template";

export function StudentPaymentHistory() {
  return (
    <>
      <DashboardPageTemplate title="Course Payment History" description="Access payment history">
        <div className="p-7">
          <p>Payment History</p>
        </div>
      </DashboardPageTemplate>
    </>
  );
}
