'use client';

export default function Dashboard() {
  return (
    <main style={{ flex: 1, padding: '32px 40px', display: 'flex', flexDirection: 'column', gap: 32 }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 16 }}>
        <span style={{ fontSize: 22, color: '#222' }}>📋</span>
        <div style={{ fontSize: 22, fontWeight: 600 }}>Student Portal</div>
        <span style={{ color: '#888', fontSize: 18 }}>&gt;</span>
        <div style={{ fontSize: 18, color: '#222' }}>Dashboard Overview</div>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 18 }}>
          <span style={{ fontSize: 22, color: '#888', cursor: 'pointer' }}>🔔</span>
          <span style={{ fontSize: 22, color: '#888', cursor: 'pointer' }}>⚙️</span>
        </div>
      </div>

      {/* Cards */}
      <div style={{ display: 'flex', gap: 32, marginBottom: 24 }}>
        {[
          { label: 'Enrolled Courses', value: '6', sub: '2 completed this month', icon: '📚' },
          { label: 'Pending Tasks', value: '12', sub: '3 due today', icon: '⏰' },
          { label: 'Average Score', value: '87%', sub: '+5% from last month', icon: '🎯' },
          { label: 'Achievements', value: '24', sub: '3 new this week', icon: '🏆' },
        ].map(card => (
          <div key={card.label} style={{ flex: 1, background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 18, color: '#222', fontWeight: 600 }}>
              <span style={{ fontSize: 22 }}>{card.icon}</span> {card.label}
            </div>
            <div style={{ fontSize: 32, fontWeight: 700, color: '#222', marginTop: 8 }}>{card.value}</div>
            <div style={{ color: '#888', fontSize: 15 }}>{card.sub}</div>
          </div>
        ))}
      </div>

      {/* Current Courses */}
      <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '32px 28px', marginBottom: 24 }}>
        <div style={{ fontWeight: 600, fontSize: 20, marginBottom: 4 }}>Current Courses</div>
        <div style={{ color: '#888', fontSize: 15, marginBottom: 18 }}>Your active course progress</div>
        {[
          { name: 'Advanced Mathematics', instructor: 'Dr. Smith', nextClass: 'Tomorrow 10:00 AM', progress: 75 },
          { name: 'Physics - Mechanics', instructor: 'Prof. Johnson', nextClass: 'Today 2:00 PM', progress: 60 },
          { name: 'Chemistry - Organic', instructor: 'Dr. Brown', nextClass: 'Friday 11:00 AM', progress: 45 },
        ].map(course => (
          <div key={course.name} style={{ marginBottom: 28 }}>
            <div style={{ fontWeight: 600, fontSize: 17 }}>{course.name}</div>
            <div style={{ color: '#888', fontSize: 15, marginBottom: 6 }}>Instructor: {course.instructor}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
              <span style={{ color: '#888', fontSize: 15 }}>📅</span>
              <span style={{ color: '#888', fontSize: 15 }}>Next class: {course.nextClass}</span>
              <span style={{ marginLeft: 'auto', background: '#f5f5f5', color: '#222', borderRadius: 16, padding: '4px 14px', fontWeight: 600, fontSize: 13 }}>{course.progress}% Complete</span>
            </div>
            <div style={{ width: '100%', height: 8, background: '#e0e0e0', borderRadius: 8, overflow: 'hidden', marginBottom: 2 }}>
              <div style={{ width: `${course.progress}%`, height: '100%', background: '#222', borderRadius: 8 }}></div>
            </div>
          </div>
        ))}
      </div>

      {/* Urgent Tasks & Recent Activity */}
      <div style={{ display: 'flex', gap: 32 }}>
        {/* Urgent Tasks */}
        <div style={{ flex: 1, background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '32px 28px', minWidth: 280 }}>
          <div style={{ fontWeight: 600, fontSize: 20, marginBottom: 8 }}><span style={{ color: '#ff9800', marginRight: 8 }}>⚠️</span>Urgent Tasks</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 18 }}>
            {[
              { label: 'Physics Assignment #5', due: 'Due Today', badge: 'Assignment', badgeColor: '#fff', badgeBg: '#ff2d2d' },
              { label: 'Chemistry Quiz', due: 'Due Tomorrow', badge: 'Quiz', badgeColor: '#222', badgeBg: '#eee' },
              { label: 'Math DPP - Week 12', due: 'Due in 2 days', badge: 'DPP', badgeColor: '#222', badgeBg: '#eee' },
            ].map(task => (
              <div key={task.label} style={{ display: 'flex', alignItems: 'center', gap: 12, background: '#fff', borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: '12px 18px', fontSize: 16, border: '1px solid #eee' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600 }}>{task.label}</div>
                  <div style={{ color: '#888', fontSize: 14 }}>{task.due}</div>
                </div>
                <span style={{ background: task.badgeBg, color: task.badgeColor, borderRadius: 8, padding: '4px 14px', fontWeight: 600, fontSize: 13 }}>{task.badge}</span>
              </div>
            ))}
          </div>
          <button style={{ width: '100%', background: '#fff', color: '#222', fontWeight: 600, fontSize: 15, borderRadius: 8, padding: '10px 0', border: '1px solid #eee', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>View All Tasks</button>
        </div>

        {/* Recent Activity */}
        <div style={{ flex: 1, background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '32px 28px', minWidth: 280 }}>
          <div style={{ fontWeight: 600, fontSize: 20, marginBottom: 8 }}>Recent Activity</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18, marginBottom: 18 }}>
            {[
              { title: 'Completed Math Quiz #8', sub: 'Score: 92%', time: '2 hours ago' },
              { title: 'Submitted Physics Assignment', sub: 'Pending Review', time: '1 day ago' },
              { title: 'Asked question in Chemistry', sub: 'Answered', time: '2 days ago' },
            ].map(item => (
              <div key={item.title} style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <div style={{ fontWeight: 600, fontSize: 16 }}>{item.title}</div>
                <div style={{ color: '#888', fontSize: 14 }}>{item.sub}</div>
                <div style={{ color: '#888', fontSize: 13, marginTop: 2 }}>{item.time}</div>
              </div>
            ))}
          </div>
          <button style={{ width: '100%', background: '#fff', color: '#222', fontWeight: 600, fontSize: 15, borderRadius: 8, padding: '10px 0', border: '1px solid #eee', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>View All Activity</button>
        </div>
      </div>
    </main>
  );
}
