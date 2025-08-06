'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';


export default function AdminHome() {
  // ...existing authentication logic can be added back if needed...
  // For UI demo, we'll use static data
  const adminName = 'Admin User';

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f5f5f5', fontFamily: 'Inter, Arial, sans-serif' }}>
      {/* Sidebar */}
      <aside style={{ width: 270, background: '#fff', boxShadow: '2px 0 8px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '24px 0' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '0 32px 32px 32px' }}>
            <div style={{ background: '#222', borderRadius: 8, width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: '#fff', fontSize: 22 }}>🎓</span>
            </div>
            <div>
              <div style={{ fontWeight: 600, fontSize: 18 }}>EduPlatform</div>
              <div style={{ fontSize: 13, color: '#888' }}>Admin Panel</div>
            </div>
          </div>
          {/* Sidebar Groups */}
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {/* Overview */}
            <div style={{ padding: '0 16px' }}>
              <div style={{ fontSize: 13, color: '#888', fontWeight: 600, marginBottom: 6 }}>Overview</div>
              {[
                { label: 'Dashboard', icon: '🏠', active: true },
                { label: 'Analytics', icon: '📊' },
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
            {/* Course Management */}
            <div style={{ padding: '0 16px' }}>
              <div style={{ fontSize: 13, color: '#888', fontWeight: 600, marginBottom: 6 }}>Course Management</div>
              {[
                { label: 'All Courses', icon: '📚' },
                { label: 'Add Course', icon: '➕' },
                { label: 'Categories', icon: '🗂️' },
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
            {/* Media Management */}
            <div style={{ padding: '0 16px' }}>
              <div style={{ fontSize: 13, color: '#888', fontWeight: 600, marginBottom: 6 }}>Media Management</div>
              {[
                { label: 'Video Library', icon: '▶️' },
                { label: 'Upload Video', icon: '⏫' },
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
            {/* User Management */}
            <div style={{ padding: '0 16px' }}>
              <div style={{ fontSize: 13, color: '#888', fontWeight: 600, marginBottom: 6 }}>User Management</div>
              {[
                { label: 'Students', icon: '👥' },
                { label: 'Instructors', icon: '🧑‍🏫' },
                { label: 'Staff', icon: '👔' },
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
            {/* Settings */}
            <div style={{ padding: '0 16px' }}>
              <div style={{ fontSize: 13, color: '#888', fontWeight: 600, marginBottom: 6 }}>Settings</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 18px', borderRadius: 8, color: '#444', fontWeight: 500, cursor: 'pointer', fontSize: 16 }}>
                <span style={{ fontSize: 18 }}>⚙️</span> Settings
              </div>
            </div>
          </nav>
        </div>
        <div style={{ padding: '0 32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, background: '#f5f5f5', borderRadius: 8, padding: '12px 0' }}>
            <div style={{ background: '#eee', borderRadius: '50%', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, color: '#888' }}>A</div>
            <div>
              <div style={{ fontWeight: 600, fontSize: 15 }}>{adminName}</div>
              <div style={{ fontSize: 13, color: '#888' }}>admin@eduplatform.com</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: '32px 40px', display: 'flex', flexDirection: 'column', gap: 32 }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
          <div>
            <div style={{ fontSize: 32, fontWeight: 700, letterSpacing: -1 }}>Dashboard</div>
            <div style={{ color: '#666', fontSize: 16, marginTop: 4 }}>Welcome back, Admin</div>
          </div>
          <button style={{ background: '#111', color: '#fff', fontWeight: 600, fontSize: 16, borderRadius: 8, padding: '12px 28px', border: 'none', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
            <span style={{ fontSize: 22, marginRight: 8 }}>+</span> Quick Add
          </button>
        </div>

        {/* Cards */}
        <div style={{ display: 'flex', gap: 32, marginBottom: 24 }}>
          {[
            { label: 'Total Courses', value: '124', sub: '+12% from last month', icon: '📚' },
            { label: 'Active Students', value: '2,847', sub: '+18% from last month', icon: '👥' },
            { label: 'Video Content', value: '1,293', sub: '+7% from last month', icon: '▶️' },
            { label: 'Revenue', value: '$45,231', sub: '+23% from last month', icon: '💲' },
          ].map(card => (
            <div key={card.label} style={{ flex: 1, background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 18, color: '#222', fontWeight: 600 }}>
                <span style={{ fontSize: 22 }}>{card.icon}</span> {card.label}
              </div>
              <div style={{ fontSize: 32, fontWeight: 700, color: '#222', marginTop: 8 }}>{card.value}</div>
              <div style={{ color: '#1a7f37', fontSize: 15, display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ fontSize: 16 }}>↗</span> {card.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Main Sections */}
        <div style={{ display: 'flex', gap: 32 }}>
          {/* Recent Courses */}
          <div style={{ flex: 2, background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '32px 28px', minWidth: 420 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
              <div style={{ fontWeight: 600, fontSize: 20 }}>Recent Courses</div>
              <button style={{ background: '#f5f7ff', color: '#222', fontWeight: 600, fontSize: 15, borderRadius: 8, padding: '8px 18px', border: 'none', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 18 }}>👁️</span> View All
              </button>
            </div>
            <div style={{ color: '#888', fontSize: 15, marginBottom: 18 }}>Latest course activities and updates</div>
            {/* Table */}
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15 }}>
              <thead>
                <tr style={{ color: '#222', fontWeight: 600, background: '#f5f5f5' }}>
                  <th style={{ textAlign: 'left', padding: '8px 0' }}>Course</th>
                  <th style={{ textAlign: 'left', padding: '8px 0' }}>Instructor</th>
                  <th style={{ textAlign: 'left', padding: '8px 0' }}>Students</th>
                  <th style={{ textAlign: 'left', padding: '8px 0' }}>Status</th>
                  <th style={{ textAlign: 'left', padding: '8px 0' }}>Date</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { course: 'Advanced React Development', instructor: 'John Smith', students: 234, status: 'Published', statusColor: '#111', statusBg: '#eee', date: '2024-01-15' },
                  { course: 'Python for Data Science', instructor: 'Sarah Johnson', students: 189, status: 'Draft', statusColor: '#444', statusBg: '#ddd', date: '2024-01-14' },
                  { course: 'UI/UX Design Fundamentals', instructor: 'Mike Chen', students: 156, status: 'Published', statusColor: '#111', statusBg: '#eee', date: '2024-01-13' },
                  { course: 'Machine Learning Basics', instructor: 'Emily Davis', students: 298, status: 'Published', statusColor: '#111', statusBg: '#eee', date: '2024-01-12' },
                ].map(row => (
                  <tr key={row.course} style={{ borderBottom: '1px solid #f0f0f0' }}>
                    <td style={{ padding: '8px 0', fontWeight: 600 }}>{row.course}</td>
                    <td style={{ padding: '8px 0' }}>{row.instructor}</td>
                    <td style={{ padding: '8px 0' }}>{row.students}</td>
                    <td style={{ padding: '8px 0' }}>
                      <span style={{ background: row.statusBg, color: row.statusColor, borderRadius: 8, padding: '4px 14px', fontWeight: 600, fontSize: 13 }}>{row.status}</span>
                    </td>
                    <td style={{ padding: '8px 0' }}>{row.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Recent Activity */}
          <div style={{ flex: 1, background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '32px 28px', minWidth: 280 }}>
            <div style={{ fontWeight: 600, fontSize: 20, marginBottom: 8 }}>Recent Activity</div>
            <div style={{ color: '#888', fontSize: 15, marginBottom: 18 }}>Latest platform activities</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              {[
                { title: 'New course created', by: 'John Smith', time: '2 hours ago' },
                { title: 'Video uploaded', by: 'Sarah Johnson', time: '4 hours ago' },
                { title: 'Student enrolled', by: 'Mike Wilson', time: '6 hours ago' },
                { title: 'Course published', by: 'Emily Davis', time: '8 hours ago' },
              ].map(item => (
                <div key={item.title} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{ background: '#eee', borderRadius: '50%', width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, color: '#888', fontSize: 16 }}></div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, fontSize: 16 }}>{item.title}</div>
                    <div style={{ color: '#888', fontSize: 14 }}>by {item.by}</div>
                  </div>
                  <div style={{ color: '#888', fontSize: 13, display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ fontSize: 15 }}>📅</span> {item.time}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '32px 28px', marginTop: 32, minWidth: 280 }}>
          <div style={{ fontWeight: 600, fontSize: 20, marginBottom: 8 }}>Quick Actions</div>
          <div style={{ color: '#888', fontSize: 15, marginBottom: 18 }}>Frequently used tools and shortcuts</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
            {[
              { label: 'Add Course', icon: '➕' },
              { label: 'Upload Video', icon: '⏫' },
              { label: 'Manage Categories', icon: '🗂️' },
              { label: 'View Analytics', icon: '📊' },
              { label: 'Manage Users', icon: '👥' },
              { label: 'Settings', icon: '⚙️' },
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
      </main>
    </div>
  );
}
