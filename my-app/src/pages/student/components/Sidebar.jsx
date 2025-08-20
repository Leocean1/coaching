'use client';

export default function Sidebar({ studentName }) {
  return (
    <aside style={{ width: 270, background: '#fff', boxShadow: '2px 0 8px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '24px 0' }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '0 32px 32px 32px' }}>
          <div style={{ background: '#222', borderRadius: 8, width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#fff', fontSize: 22 }}>🎓</span>
          </div>
          <div>
            <div style={{ fontWeight: 600, fontSize: 18 }}>EduPlatform</div>
            <div style={{ fontSize: 13, color: '#888' }}>Student Portal</div>
          </div>
        </div>
        {/* Sidebar Groups */}
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          {/* Navigation */}
          <div style={{ padding: '0 16px' }}>
            <div style={{ fontSize: 13, color: '#888', fontWeight: 600, marginBottom: 6 }}>Navigation</div>
            {[
              { label: 'Dashboard', icon: '🏠', active: true },
              { label: 'My Courses', icon: '📚' },
              { label: 'Browse Courses', icon: '🛒' },
            ].map(item => (
              <div key={item.label} style={{
                display: 'flex', alignItems: 'center', gap: 12,
                padding: '10px 18px', borderRadius: 8,
                background: item.active ? '#f5f7ff' : 'none',
                color: item.active ? '#222' : '#444', fontWeight: item.active ? 600 : 500,
                cursor: 'pointer', fontSize: 16
              }}>
                <span style={{ fontSize: 18 }}>{item.icon}</span>
                {item.label}
              </div>
            ))}
          </div>
          {/* Academic */}
          <div style={{ padding: '0 16px' }}>
            <div style={{ fontSize: 13, color: '#888', fontWeight: 600, marginBottom: 6 }}>Academic</div>
            {[
              { label: 'Assignments', icon: '📝' },
              { label: 'Quizzes', icon: '❓' },
              { label: 'Daily Practice (DPP)', icon: '📅' },
              { label: 'Tests', icon: '🎯' },
            ].map(item => (
              <div key={item.label} style={{
                display: 'flex', alignItems: 'center', gap: 12,
                padding: '10px 18px', borderRadius: 8,
                color: '#444', fontWeight: 500,
                cursor: 'pointer', fontSize: 16
              }}>
                <span style={{ fontSize: 18 }}>{item.icon}</span>
                {item.label}
              </div>
            ))}
          </div>
          {/* Support & Tools */}
          <div style={{ padding: '0 16px' }}>
            <div style={{ fontSize: 13, color: '#888', fontWeight: 600, marginBottom: 6 }}>Support & Tools</div>
            {[
              { label: 'Ask Questions', icon: '❔' },
              { label: 'Schedule', icon: '📆' },
              { label: 'Achievements', icon: '🏆' },
            ].map(item => (
              <div key={item.label} style={{
                display: 'flex', alignItems: 'center', gap: 12,
                padding: '10px 18px', borderRadius: 8,
                color: '#444', fontWeight: 500,
                cursor: 'pointer', fontSize: 16
              }}>
                <span style={{ fontSize: 18 }}>{item.icon}</span>
                {item.label}
              </div>
            ))}
          </div>
        </nav>
      </div>
      <div style={{ padding: '0 32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, background: '#f5f5f5', borderRadius: 8, padding: '12px 0' }}>
          <div style={{ background: '#eee', borderRadius: '50%', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, color: '#888' }}>
            {studentName[0]}
          </div>
          <div>
            <div style={{ fontWeight: 600, fontSize: 15 }}>{studentName}</div>
            <div style={{ fontSize: 13, color: '#888' }}>Grade 12 - Science</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
