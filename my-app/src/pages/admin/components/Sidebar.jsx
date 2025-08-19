'use client';
import React from 'react';

export default function Sidebar({ isMobile, isMobileMenuOpen, setIsMobileMenuOpen, currentView, setCurrentView, adminName }) {
  return (
    <aside style={{ 
      width: '270px', 
      background: '#fff', 
      boxShadow: '2px 0 8px rgba(0,0,0,0.04)', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'space-between', 
      padding: isMobile ? '16px 0' : '24px 0',
      position: isMobile ? 'fixed' : 'static',
      top: 0,
      left: isMobile ? (isMobileMenuOpen ? 0 : '-270px') : 'auto',
      height: '100vh',
      zIndex: 999,
      transition: isMobile ? 'left 0.3s ease' : 'none',
      flexShrink: 0
    }}>
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
              { label: 'All Courses', icon: '📚', view: 'dashboard' },
              { label: 'Add Course', icon: '➕', view: 'addCourse' },
              { label: 'Categories', icon: '🗂️', view: 'dashboard' },
            ].map(item => (
              <div 
                key={item.label} 
                onClick={() => setCurrentView(item.view)}
                style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  padding: '10px 18px', borderRadius: 8,
                  background: currentView === item.view ? '#f5f7ff' : 'none',
                  color: currentView === item.view ? '#222' : '#444', 
                  fontWeight: currentView === item.view ? 600 : 500,
                  cursor: 'pointer', fontSize: 16,
                  transition: 'all 0.2s ease'
                }}
              >
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
  );
}
