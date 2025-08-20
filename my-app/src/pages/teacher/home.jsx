
'use client';


import React, { useState } from "react";

import TeacherSidebar from "./components/Sidebar";
import TeacherDashboard from "./components/Dashboard";

const TeacherHome = () => {
  const [activePage, setActivePage] = useState("dashboard");

  return (
    <div style={{ display: "flex", height: "100vh", background: "#f9fafb" }}>
      {/* Sidebar with navigation */}
      <TeacherSidebar onNavigate={setActivePage} />

      {/* Dynamic Main Content */}
      {activePage === "dashboard" && <TeacherDashboard />}
    </div>
  );
};

export default TeacherHome;
