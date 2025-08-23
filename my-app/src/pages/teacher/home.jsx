'use client';

import React, { useState } from "react";
import TeacherSidebar from "./components/Sidebar";
import TeacherDashboard from "./components/Dashboard";
import Courses from "./components/Courses";
import Videos from "./components/videos";
import Assignments from "./components/Assignments";
import Quizzes from "./components/Quizzes";
import Dpp from "./components/DPP";
import Students from "./components/Students";
import Analytics from "./components/Analytics";

const TeacherHome = () => {
  const [activePage, setActivePage] = useState("dashboard");

  const renderPage = () => {
    switch (activePage) {
      case "dashboard":
        return <TeacherDashboard />;
      case "courses":
        return <Courses />;
      case "videos":
        return <Videos />;
      case "assignments":
        return <Assignments />;
      case "quizzes":
        return <Quizzes />;
      case "dpp":
        return <Dpp />;
      case "students":
        return <Students />;
      case "analytics":
        return <Analytics />;
      default:
        return <h1>Welcome</h1>;
    }
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f9fafb" }}>
      <TeacherSidebar onNavigate={setActivePage} />
      <main style={{ flex: 1, padding: "32px 40px", background: "#f9fafb" }}>
        {renderPage()}
      </main>
    </div>
  );
};

export default TeacherHome;
