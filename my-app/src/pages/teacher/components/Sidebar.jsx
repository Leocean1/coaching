const TeacherSidebar = ({ onNavigate }) => {
  return (
    <aside style={{ width: 260, background: "#fff", borderRight: "1px solid #eee", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <div>
        <div style={{ display: "flex", alignItems: "center", padding: 20, borderBottom: "1px solid #eee" }}>
          <span style={{ fontSize: 20, marginRight: 10 }}>🎓</span>
          <h1 style={{ fontSize: 20, fontWeight: "bold", color: "#1e40af" }}>EduPlatform</h1>
        </div>

        {/* Menu */}
        <nav style={{ padding: 20 }}>
          <h2 style={{ fontSize: 14, fontWeight: "bold", marginBottom: 10, color: "#6b7280" }}>Navigation</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <button onClick={() => onNavigate("dashboard")} style={buttonStyle}>📊 Dashboard</button>
            <button onClick={() => onNavigate("courses")} style={buttonStyle}>📚 Courses</button>
            <button onClick={() => onNavigate("videos")} style={buttonStyle}>🎥 Videos</button>
            <button onClick={() => onNavigate("assignments")} style={buttonStyle}>📝 Assignments</button>
            <button onClick={() => onNavigate("quizzes")} style={buttonStyle}>❓ Quizzes</button>
            <button onClick={() => onNavigate("dpp")} style={buttonStyle}>📄 DPP</button>
            <button onClick={() => onNavigate("students")} style={buttonStyle}>👨‍🎓 Students</button>
            <button onClick={() => onNavigate("analytics")} style={buttonStyle}>📈 Analytics</button>
          </div>
        </nav>
      </div>

      {/* Profile */}
      <div style={{ padding: 20, borderTop: "1px solid #eee", display: "flex", alignItems: "center", gap: 12 }}>
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="teacher"
          style={{ width: 40, height: 40, borderRadius: "50%" }}
        />
        <div>
          <h3 style={{ fontSize: 14, fontWeight: "bold" }}>Dr. John Doe</h3>
          <p style={{ fontSize: 12, color: "#6b7280" }}>Mathematics Teacher</p>
        </div>
      </div>
    </aside>
  );
};

const buttonStyle = {
  background: "none",
  border: "none",
  textAlign: "left",
  padding: "8px 0",
  cursor: "pointer",
  fontSize: 14,
  color: "#374151",
  fontWeight: "500"
};

export default TeacherSidebar;
