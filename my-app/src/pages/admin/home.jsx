'use client';

import React, { useState, useEffect } from 'react';

import Sidebar from './components/Sidebar';
import Dashboard from './components/DashBoard';
import AddCourseForm from './components/AddCourseForm';
;

export default function AdminHome() {
  const adminName = "Admin User";
  const [currentView, setCurrentView] = useState("dashboard");
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    image: null,
    introVideo: null
  });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f5f5f5" }}>
      <Sidebar
        currentView={currentView}
        setCurrentView={setCurrentView}
        isMobile={isMobile}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        adminName={adminName}
      />

      <main style={{ flex: 1, padding: 20 }}>
        {currentView === "dashboard" && <Dashboard isMobile={isMobile} setCurrentView={setCurrentView} />}
        {currentView === "addCourse" && <AddCourseForm formData={formData} setFormData={setFormData} setCurrentView={setCurrentView} isMobile={isMobile} />}
      </main>
    </div>
  );
}
