import React from "react";

const TeacherDashboard = () => {
  return (
    <main
      style={{
        flex: 1,
        padding: "32px 40px",
        background: "#f9fafb",
        overflowY: "auto",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 32,
        }}
      >
        <div>
          <h2 style={{ fontSize: 24, fontWeight: 700, color: "#111827" }}>
            Teacher Dashboard
          </h2>
          <p style={{ fontSize: 14, color: "#6b7280" }}>
            Manage your courses and track student performance
          </p>
        </div>
        <button
          style={{
            background: "#2563eb",
            color: "#fff",
            padding: "10px 16px",
            borderRadius: 8,
            border: "none",
            fontWeight: 500,
            cursor: "pointer",
          }}
        >
          ➕ Create Content
        </button>
      </div>

      {/* Stats Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 20,
          marginBottom: 32,
        }}
      >
        {[
          { label: "Total Students", value: "120" },
          { label: "Active Courses", value: "8" },
          { label: "Assignments", value: "24" },
          { label: "Completion Rate", value: "87%" },
        ].map((stat, i) => (
          <div
            key={i}
            style={{
              background: "#fff",
              padding: 20,
              borderRadius: 12,
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            }}
          >
            <p
              style={{ fontSize: 13, color: "#6b7280", marginBottom: 6 }}
            >
              {stat.label}
            </p>
            <h3 style={{ fontSize: 22, fontWeight: 700, color: "#111827" }}>
              {stat.value}
            </h3>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div
        style={{
          background: "#fff",
          padding: 24,
          borderRadius: 12,
          marginBottom: 32,
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        }}
      >
        <h4 style={{ fontSize: 16, fontWeight: 600, marginBottom: 16 }}>
          Recent Activity
        </h4>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {[
            "Student A submitted Assignment 3",
            "Student B scored 85% in Quiz 2",
            "New video uploaded in Physics Course",
          ].map((item, i) => (
            <li
              key={i}
              style={{
                padding: "12px 0",
                borderBottom: i < 2 ? "1px solid #e5e7eb" : "none",
                fontSize: 14,
                color: "#374151",
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Quick Actions */}
      <div
        style={{
          background: "#fff",
          padding: 24,
          borderRadius: 12,
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        }}
      >
        <h4 style={{ fontSize: 16, fontWeight: 600, marginBottom: 16 }}>
          Quick Actions
        </h4>
        <div style={{ display: "flex", gap: 16 }}>
          <button
            style={{
              flex: 1,
              background: "#2563eb",
              color: "#fff",
              padding: "12px",
              borderRadius: 8,
              border: "none",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            Upload Video
          </button>
          <button
            style={{
              flex: 1,
              background: "#10b981",
              color: "#fff",
              padding: "12px",
              borderRadius: 8,
              border: "none",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            Create Assignment
          </button>
          <button
            style={{
              flex: 1,
              background: "#f59e0b",
              color: "#fff",
              padding: "12px",
              borderRadius: 8,
              border: "none",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            Schedule Quiz
          </button>
        </div>
      </div>
    </main>
  );
};

export default TeacherDashboard;
