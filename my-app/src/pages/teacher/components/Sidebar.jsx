import React from "react";
import { GraduationCap } from "lucide-react";

const TeacherSidebar = ({ onNavigate }) => {
  return (
    <aside
      style={{
        width: 260,
        background: "#fff",
        borderRight: "1px solid #e5e7eb",
        display: "flex",
        flexDirection: "column",
        padding: "24px 20px",
        height: "100vh",
        position: "sticky",
        top: 0,
      }}
    >
      {/* Branding */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: 40 }}>
        <GraduationCap size={28} color="#2563eb" style={{ marginRight: 10 }} />
        <div>
          <h1 style={{ fontSize: 20, fontWeight: 700, color: "#111827" }}>
            EduPlatform
          </h1>
          <p style={{ fontSize: 13, color: "#6b7280" }}>Teacher Portal</p>
        </div>
      </div>

      {/* Navigation */}
      <nav style={{ flex: 1 }}>
        <p
          style={{
            fontSize: 12,
            fontWeight: 600,
            textTransform: "uppercase",
            color: "#9ca3af",
            marginBottom: 15,
          }}
        >
          Navigation
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <button
            onClick={() => onNavigate("dashboard")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "10px 14px",
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 500,
              color: "#2563eb",
              background: "#eff6ff",
              border: "none",
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            📊 Dashboard
          </button>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "10px 14px",
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 500,
              color: "#374151",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            📚 Courses
          </button>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "10px 14px",
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 500,
              color: "#374151",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            🎥 Videos
          </button>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "10px 14px",
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 500,
              color: "#374151",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            📝 Assignments
          </button>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "10px 14px",
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 500,
              color: "#374151",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            ❓ Quizzes
          </button>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "10px 14px",
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 500,
              color: "#374151",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            📄 DPP
          </button>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "10px 14px",
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 500,
              color: "#374151",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            👥 Students
          </button>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "10px 14px",
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 500,
              color: "#374151",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            📈 Analytics
          </button>
        </div>
      </nav>

      {/* Teacher Profile Section */}
      <div
        style={{
          borderTop: "1px solid #e5e7eb",
          paddingTop: 20,
          marginTop: "auto",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: "#2563eb",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontWeight: 600,
            }}
          >
            JD
          </div>
          <div>
            <p
              style={{
                fontWeight: 600,
                color: "#111827",
                fontSize: 14,
                margin: 0,
              }}
            >
              Dr. John Doe
            </p>
            <p style={{ fontSize: 12, color: "#6b7280", margin: 0 }}>
              Mathematics Teacher
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default TeacherSidebar;
