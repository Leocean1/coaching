'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';


export default function TeacherHome() {
  // ...existing authentication logic can be added back if needed...
  // For UI demo, we'll use static data
  const teacherName = 'Dr. John Doe';

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f5f5f5', fontFamily: 'Inter, Arial, sans-serif' }}>
      {/* Sidebar */}
      <aside style={{ width: 260, background: '#fff', boxShadow: '2px 0 8px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '24px 0' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '0 32px 32px 32px' }}>
            <div style={{ background: '#222', borderRadius: 8, width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: '#fff', fontSize: 22 }}>🎓</span>
            </div>
            <div>
              <div style={{ fontWeight: 600, fontSize: 18 }}>EduPlatform</div>
              <div style={{ fontSize: 13, color: '#888' }}>Teacher Portal</div>
            </div>
          </div>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 4, padding: '0 16px' }}>
            {[
              { label: 'Dashboard', icon: '🏠', active: true },
              { label: 'Courses', icon: '📚' },
              { label: 'Videos', icon: '🎬' },
              { label: 'Assignments', icon: '📝' },
              { label: 'Quizzes', icon: '❓' },
              { label: 'DPP', icon: '⚙️' },
              { label: 'Students', icon: '👥' },
              { label: 'Analytics', icon: '📊' },
            ].map((item, i) => (
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
          </nav>
        </div>
        <div style={{ padding: '0 32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, background: '#f5f5f5', borderRadius: 8, padding: '12px 0' }}>
            <div style={{ background: '#eee', borderRadius: '50%', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, color: '#888' }}>J</div>
            <div>
              <div style={{ fontWeight: 600, fontSize: 15 }}>{teacherName}</div>
              <div style={{ fontSize: 13, color: '#888' }}>Mathematics Teacher</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: '32px 40px', display: 'flex', flexDirection: 'column', gap: 32 }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
          <div>
            <div style={{ fontSize: 32, fontWeight: 700, letterSpacing: -1 }}>Teacher Dashboard</div>
            <div style={{ color: '#666', fontSize: 16, marginTop: 4 }}>Manage your courses, assignments, and student progress</div>
          </div>
          <button style={{ background: '#111', color: '#fff', fontWeight: 600, fontSize: 16, borderRadius: 8, padding: '12px 28px', border: 'none', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
            <span style={{ fontSize: 22, marginRight: 8 }}>+</span> Create Content
          </button>
        </div>

        {/* Cards */}
        <div style={{ display: 'flex', gap: 32, marginBottom: 24 }}>
          {[
            { label: 'Total Students', value: '1,234', sub: '+12% from last month', icon: '👥' },
            { label: 'Active Courses', value: '8', sub: '2 new this semester', icon: '📚' },
            { label: 'Assignments', value: '24', sub: '6 pending review', icon: '📝' },
            { label: 'Completion Rate', value: '87%', sub: '+5% from last week', icon: '📈' },
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

        {/* Main Sections */}
        <div style={{ display: 'flex', gap: 32 }}>
          {/* Recent Activity */}
          <div style={{ flex: 2, background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '32px 28px', minWidth: 340 }}>
            <div style={{ fontWeight: 600, fontSize: 20, marginBottom: 8 }}>Recent Activity</div>
            <div style={{ color: '#888', fontSize: 15, marginBottom: 18 }}>Latest submissions and student interactions</div>
            {/* Tabs */}
            <div style={{ display: 'flex', gap: 0, marginBottom: 18 }}>
              {['Submissions', 'Quiz Results', 'Video Views'].map((tab, i) => (
                <button key={tab} style={{
                  flex: 1,
                  background: i === 0 ? '#f5f7ff' : '#fff',
                  color: i === 0 ? '#222' : '#666',
                  fontWeight: i === 0 ? 600 : 500,
                  border: 'none',
                  borderRadius: i === 0 ? '8px 8px 0 0' : 0,
                  padding: '10px 0',
                  fontSize: 16,
                  cursor: 'pointer',
                  outline: 'none',
                  boxShadow: i === 0 ? '0 2px 8px rgba(0,0,0,0.04)' : 'none'
                }}>{tab}</button>
              ))}
            </div>
            {/* Activity List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              {[
                { initials: 'AJ', name: 'Alice Johnson', desc: 'Calculus Problem Set 3', status: 'submitted', time: '2 hours ago', color: '#222', badge: '#e5fbe5', badgeText: '#1a7f37' },
                { initials: 'BS', name: 'Bob Smith', desc: 'Linear Algebra Quiz', status: 'late', time: '5 hours ago', color: '#fff', badge: '#ffeaea', badgeText: '#d32f2f' },
                { initials: 'CD', name: 'Carol Davis', desc: 'Statistics Project', status: 'submitted', time: '1 day ago', color: '#222', badge: '#e5fbe5', badgeText: '#1a7f37' },
                { initials: 'DW', name: 'David Wilson', desc: 'Geometry Worksheet', status: 'submitted', time: '1 day ago', color: '#222', badge: '#e5fbe5', badgeText: '#1a7f37' },
              ].map(item => (
                <div key={item.name} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{ background: '#eee', borderRadius: '50%', width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, color: '#888', fontSize: 16 }}>{item.initials}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, fontSize: 16 }}>{item.name}</div>
                    <div style={{ color: '#888', fontSize: 14 }}>{item.desc}</div>
                  </div>
                  <div style={{ background: item.badge, color: item.badgeText, borderRadius: 8, padding: '4px 14px', fontWeight: 600, fontSize: 13, marginRight: 8 }}>{item.status}</div>
                  <div style={{ color: '#888', fontSize: 13 }}>{item.time}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div style={{ flex: 1, background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '32px 28px', minWidth: 280 }}>
            <div style={{ fontWeight: 600, fontSize: 20, marginBottom: 8 }}>Quick Actions</div>
            <div style={{ color: '#888', fontSize: 15, marginBottom: 18 }}>Frequently used tools and shortcuts</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { label: 'Upload Video Lecture', icon: '🎬' },
                { label: 'Create Assignment', icon: '📝' },
                { label: 'Design Quiz', icon: '❓' },
                { label: 'Generate DPP', icon: '⚙️' },
                { label: 'Schedule Class', icon: '📅' },
                { label: 'View Analytics', icon: '📊' },
              ].map(btn => (
                <button key={btn.label} style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  background: '#f5f7ff', color: '#222', fontWeight: 600,
                  border: 'none', borderRadius: 8, padding: '12px 18px', fontSize: 16,
                  cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                }}>
                  <span style={{ fontSize: 18 }}>{btn.icon}</span>
                  {btn.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
