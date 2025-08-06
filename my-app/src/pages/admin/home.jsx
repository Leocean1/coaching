'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';


export default function AdminHome() {
  // ...existing authentication logic can be added back if needed...
  // For UI demo, we'll use static data
  const adminName = 'Admin User';
  const [currentView, setCurrentView] = useState('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    startTime: '',
    endTime: '',
    lecturer: '',
    price: '',
    image: null,
    class: '',
    introVideo: null
  });

  // Handle responsive design
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f5f5f5', fontFamily: 'Inter, Arial, sans-serif', position: 'relative' }}>
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            right: 0, 
            bottom: 0, 
            background: 'rgba(0,0,0,0.5)', 
            zIndex: 998,
            display: 'block'
          }}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
      
      {/* Sidebar */}
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

      {/* Main Content */}
      <main style={{ 
        flex: 1, 
        padding: isMobile ? '16px 20px' : '32px 40px', 
        display: 'flex', 
        flexDirection: 'column', 
        gap: isMobile ? 20 : 32,
        marginLeft: isMobile ? 0 : 0,
        width: isMobile ? '100%' : 'auto'
      }}>
        {/* Header */}
        <div style={{ 
          display: 'flex', 
          alignItems: isMobile ? 'flex-start' : 'center', 
          justifyContent: 'space-between', 
          marginBottom: 16,
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? 12 : 0
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, width: '100%' }}>
            {/* Mobile Hamburger Menu */}
            {isMobile && (
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: 24,
                  cursor: 'pointer',
                  padding: '8px',
                  borderRadius: 8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 40,
                  height: 40,
                  backgroundColor: '#f5f5f5'
                }}
              >
                ☰
              </button>
            )}
            <div style={{ flex: 1 }}>
              <div style={{ 
                fontSize: isMobile ? 24 : 32, 
                fontWeight: 700, 
                letterSpacing: -1,
                lineHeight: 1.2
              }}>
                {currentView === 'addCourse' ? 'Add New Course' : 'Dashboard'}
              </div>
              <div style={{ 
                color: '#666', 
                fontSize: isMobile ? 14 : 16, 
                marginTop: 4 
              }}>
                {currentView === 'addCourse' ? 'Create a new course for your platform' : 'Welcome back, Admin'}
              </div>
            </div>
          </div>
          <div style={{ 
            display: 'flex', 
            gap: 8, 
            width: isMobile ? '100%' : 'auto',
            justifyContent: isMobile ? 'stretch' : 'flex-end'
          }}>
            {currentView === 'dashboard' && (
              <button 
                onClick={() => setCurrentView('addCourse')}
                style={{ 
                  background: '#111', 
                  color: '#fff', 
                  fontWeight: 600, 
                  fontSize: isMobile ? 14 : 16, 
                  borderRadius: 8, 
                  padding: isMobile ? '10px 16px' : '12px 28px', 
                  border: 'none', 
                  cursor: 'pointer', 
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  flex: isMobile ? 1 : 'none',
                  whiteSpace: 'nowrap'
                }}
              >
                <span style={{ fontSize: isMobile ? 18 : 22, marginRight: 8 }}>+</span> 
                {isMobile ? 'Add' : 'Quick Add'}
              </button>
            )}
            {currentView === 'addCourse' && (
              <button 
                onClick={() => setCurrentView('dashboard')}
                style={{ 
                  background: '#f5f5f5', 
                  color: '#333', 
                  fontWeight: 600, 
                  fontSize: isMobile ? 14 : 16, 
                  borderRadius: 8, 
                  padding: isMobile ? '10px 16px' : '12px 28px', 
                  border: '1px solid #ddd', 
                  cursor: 'pointer', 
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  flex: isMobile ? 1 : 'none',
                  whiteSpace: 'nowrap'
                }}
              >
                ← {isMobile ? 'Back' : 'Back to Dashboard'}
              </button>
            )}
          </div>
        </div>

        {/* Dashboard Content */}
        {currentView === 'dashboard' && (
          <>
            {/* Cards */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(250px, 1fr))', 
              gap: isMobile ? 16 : 32, 
              marginBottom: isMobile ? 16 : 24 
            }}>
          {[
            { label: 'Total Courses', value: '124', sub: '+12% from last month', icon: '📚' },
            { label: 'Active Students', value: '2,847', sub: '+18% from last month', icon: '👥' },
            { label: 'Video Content', value: '1,293', sub: '+7% from last month', icon: '▶️' },
            { label: 'Revenue', value: '$45,231', sub: '+23% from last month', icon: '💲' },
          ].map(card => (
            <div key={card.label} style={{ 
              background: '#fff', 
              borderRadius: isMobile ? 12 : 16, 
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)', 
              padding: isMobile ? '20px 16px' : '32px 28px', 
              display: 'flex', 
              flexDirection: 'column', 
              gap: 8 
            }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 10, 
                fontSize: isMobile ? 16 : 18, 
                color: '#222', 
                fontWeight: 600 
              }}>
                <span style={{ fontSize: isMobile ? 20 : 22 }}>{card.icon}</span> {card.label}
              </div>
              <div style={{ 
                fontSize: isMobile ? 28 : 32, 
                fontWeight: 700, 
                color: '#222', 
                marginTop: 8 
              }}>{card.value}</div>
              <div style={{ 
                color: '#1a7f37', 
                fontSize: isMobile ? 13 : 15, 
                display: 'flex', 
                alignItems: 'center', 
                gap: 6 
              }}>
                <span style={{ fontSize: 16 }}>↗</span> {card.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Main Sections */}
        <div style={{ 
          display: isMobile ? 'flex' : 'flex', 
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? 20 : 32 
        }}>
          {/* Recent Courses */}
          <div style={{ 
            flex: isMobile ? 'none' : 2, 
            background: '#fff', 
            borderRadius: isMobile ? 12 : 16, 
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)', 
            padding: isMobile ? '20px 16px' : '32px 28px', 
            minWidth: isMobile ? 'auto' : 420 
          }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between', 
              marginBottom: 8,
              flexDirection: isMobile ? 'column' : 'row',
              gap: isMobile ? 8 : 0,
              alignItems: isMobile ? 'flex-start' : 'center'
            }}>
              <div style={{ fontWeight: 600, fontSize: isMobile ? 18 : 20 }}>Recent Courses</div>
              <button style={{ 
                background: '#f5f7ff', 
                color: '#222', 
                fontWeight: 600, 
                fontSize: isMobile ? 13 : 15, 
                borderRadius: 8, 
                padding: isMobile ? '6px 12px' : '8px 18px', 
                border: 'none', 
                cursor: 'pointer', 
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)', 
                display: 'flex', 
                alignItems: 'center', 
                gap: 8 
              }}>
                <span style={{ fontSize: isMobile ? 16 : 18 }}>👁️</span> View All
              </button>
            </div>
            <div style={{ 
              color: '#888', 
              fontSize: isMobile ? 13 : 15, 
              marginBottom: 18 
            }}>Latest course activities and updates</div>
            
            {/* Table - Mobile Responsive */}
            {isMobile ? (
              // Mobile Card View
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  { course: 'Advanced React Development', instructor: 'John Smith', students: 234, status: 'Published', statusColor: '#111', statusBg: '#eee', date: '2024-01-15' },
                  { course: 'Python for Data Science', instructor: 'Sarah Johnson', students: 189, status: 'Draft', statusColor: '#444', statusBg: '#ddd', date: '2024-01-14' },
                  { course: 'UI/UX Design Fundamentals', instructor: 'Mike Chen', students: 156, status: 'Published', statusColor: '#111', statusBg: '#eee', date: '2024-01-13' },
                  { course: 'Machine Learning Basics', instructor: 'Emily Davis', students: 298, status: 'Published', statusColor: '#111', statusBg: '#eee', date: '2024-01-12' },
                ].map(row => (
                  <div key={row.course} style={{
                    background: '#f8f9fa',
                    borderRadius: 8,
                    padding: '12px',
                    border: '1px solid #e9ecef'
                  }}>
                    <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 6 }}>{row.course}</div>
                    <div style={{ fontSize: 13, color: '#666', marginBottom: 4 }}>Instructor: {row.instructor}</div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: 13, color: '#666' }}>{row.students} students</span>
                      <span style={{ 
                        background: row.statusBg, 
                        color: row.statusColor, 
                        borderRadius: 6, 
                        padding: '2px 8px', 
                        fontWeight: 600, 
                        fontSize: 11 
                      }}>{row.status}</span>
                    </div>
                    <div style={{ fontSize: 12, color: '#888', marginTop: 4 }}>{row.date}</div>
                  </div>
                ))}
              </div>
            ) : (
              // Desktop Table View
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
            )}
          </div>

          {/* Recent Activity */}
          <div style={{ 
            flex: isMobile ? 'none' : 1, 
            background: '#fff', 
            borderRadius: isMobile ? 12 : 16, 
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)', 
            padding: isMobile ? '20px 16px' : '32px 28px', 
            minWidth: isMobile ? 'auto' : 280 
          }}>
            <div style={{ 
              fontWeight: 600, 
              fontSize: isMobile ? 18 : 20, 
              marginBottom: 8 
            }}>Recent Activity</div>
            <div style={{ 
              color: '#888', 
              fontSize: isMobile ? 13 : 15, 
              marginBottom: 18 
            }}>Latest platform activities</div>
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: isMobile ? 12 : 18 
            }}>
              {[
                { title: 'New course created', by: 'John Smith', time: '2 hours ago' },
                { title: 'Video uploaded', by: 'Sarah Johnson', time: '4 hours ago' },
                { title: 'Student enrolled', by: 'Mike Wilson', time: '6 hours ago' },
                { title: 'Course published', by: 'Emily Davis', time: '8 hours ago' },
              ].map(item => (
                <div key={item.title} style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: isMobile ? 12 : 16,
                  flexDirection: isMobile ? 'column' : 'row',
                  alignItems: isMobile ? 'flex-start' : 'center'
                }}>
                  <div style={{ 
                    background: '#eee', 
                    borderRadius: '50%', 
                    width: isMobile ? 32 : 38, 
                    height: isMobile ? 32 : 38, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    fontWeight: 600, 
                    color: '#888', 
                    fontSize: isMobile ? 14 : 16,
                    flexShrink: 0
                  }}></div>
                  <div style={{ 
                    flex: 1,
                    width: isMobile ? '100%' : 'auto'
                  }}>
                    <div style={{ 
                      fontWeight: 600, 
                      fontSize: isMobile ? 14 : 16 
                    }}>{item.title}</div>
                    <div style={{ 
                      color: '#888', 
                      fontSize: isMobile ? 12 : 14 
                    }}>by {item.by}</div>
                    {isMobile && (
                      <div style={{ 
                        color: '#888', 
                        fontSize: 11, 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: 4,
                        marginTop: 4
                      }}>
                        <span style={{ fontSize: 12 }}>📅</span> {item.time}
                      </div>
                    )}
                  </div>
                  {!isMobile && (
                    <div style={{ 
                      color: '#888', 
                      fontSize: 13, 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: 6 
                    }}>
                      <span style={{ fontSize: 15 }}>📅</span> {item.time}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

            {/* Quick Actions */}
            <div style={{ 
              background: '#fff', 
              borderRadius: isMobile ? 12 : 16, 
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)', 
              padding: isMobile ? '20px 16px' : '32px 28px', 
              marginTop: isMobile ? 20 : 32, 
              minWidth: isMobile ? 'auto' : 280 
            }}>
              <div style={{ 
                fontWeight: 600, 
                fontSize: isMobile ? 18 : 20, 
                marginBottom: 8 
              }}>Quick Actions</div>
              <div style={{ 
                color: '#888', 
                fontSize: isMobile ? 13 : 15, 
                marginBottom: 18 
              }}>Frequently used tools and shortcuts</div>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)', 
                gap: isMobile ? 8 : 14 
              }}>
                {[
                  { label: 'Add Course', icon: '➕' },
                  { label: 'Upload Video', icon: '⏫' },
                  { label: 'Manage Categories', icon: '🗂️' },
                  { label: 'View Analytics', icon: '📊' },
                  { label: 'Manage Users', icon: '👥' },
                  { label: 'Settings', icon: '⚙️' },
                ].map(btn => (
                  <button 
                    key={btn.label} 
                    onClick={() => btn.label === 'Add Course' && setCurrentView('addCourse')}
                    style={{
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      gap: isMobile ? 8 : 12,
                      background: '#f5f7ff', 
                      color: '#222', 
                      fontWeight: 600,
                      border: 'none', 
                      borderRadius: 8, 
                      padding: isMobile ? '8px 12px' : '12px 18px', 
                      fontSize: isMobile ? 13 : 16,
                      cursor: 'pointer', 
                      boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                      textAlign: 'center',
                      minHeight: isMobile ? 40 : 'auto',
                      flexDirection: isMobile ? 'column' : 'row'
                    }}
                  >
                    <span style={{ fontSize: isMobile ? 16 : 18 }}>{btn.icon}</span>
                    <span style={{ fontSize: isMobile ? 11 : 'inherit' }}>{btn.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Add Course Form */}
        {currentView === 'addCourse' && (
          <div style={{ 
            background: '#fff', 
            borderRadius: isMobile ? 12 : 16, 
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)', 
            padding: isMobile ? '20px' : '40px', 
            maxWidth: isMobile ? '100%' : 800,
            width: '100%'
          }}>
            <form onSubmit={(e) => {
              e.preventDefault();
              console.log('Course data:', formData);
              alert('Course created successfully!');
              setCurrentView('dashboard');
              setFormData({
                title: '',
                description: '',
                startDate: '',
                endDate: '',
                startTime: '',
                endTime: '',
                lecturer: '',
                price: '',
                image: null,
                class: '',
                introVideo: null
              });
            }}>
              <div style={{ 
                display: 'grid', 
                gap: isMobile ? 16 : 24 
              }}>
                
                {/* Course Title */}
                <div>
                  <label style={{ 
                    display: 'block', 
                    fontWeight: 600, 
                    fontSize: isMobile ? 14 : 16, 
                    marginBottom: 8, 
                    color: '#333' 
                  }}>
                    Course Title *
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    placeholder="Enter course title"
                    required
                    style={{
                      width: '100%',
                      padding: isMobile ? '14px 16px' : '12px 16px',
                      border: '2px solid #e1e5e9',
                      borderRadius: 8,
                      fontSize: isMobile ? 16 : 16, // Keep 16px for iOS zoom prevention
                      outline: 'none',
                      transition: 'border-color 0.2s ease',
                      boxSizing: 'border-box'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#007bff'}
                    onBlur={(e) => e.target.style.borderColor = '#e1e5e9'}
                  />
                </div>

                {/* Course Description */}
                <div>
                  <label style={{ 
                    display: 'block', 
                    fontWeight: 600, 
                    fontSize: isMobile ? 14 : 16, 
                    marginBottom: 8, 
                    color: '#333' 
                  }}>
                    Course Description *
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    placeholder="Enter detailed course description"
                    required
                    rows={isMobile ? 3 : 4}
                    style={{
                      width: '100%',
                      padding: isMobile ? '14px 16px' : '12px 16px',
                      border: '2px solid #e1e5e9',
                      borderRadius: 8,
                      fontSize: 16, // Keep 16px for iOS
                      outline: 'none',
                      transition: 'border-color 0.2s ease',
                      resize: 'vertical',
                      minHeight: isMobile ? 80 : 100,
                      boxSizing: 'border-box'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#007bff'}
                    onBlur={(e) => e.target.style.borderColor = '#e1e5e9'}
                  />
                </div>

                {/* Course Duration */}
                <div>
                  <label style={{ 
                    display: 'block', 
                    fontWeight: 600, 
                    fontSize: isMobile ? 14 : 16, 
                    marginBottom: 8, 
                    color: '#333' 
                  }}>
                    Course Duration *
                  </label>
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', 
                    gap: 16 
                  }}>
                    <div>
                      <label style={{ 
                        display: 'block', 
                        fontSize: isMobile ? 12 : 14, 
                        marginBottom: 4, 
                        color: '#666' 
                      }}>Start Date</label>
                      <input
                        type="date"
                        value={formData.startDate}
                        onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                        required
                        style={{
                          width: '100%',
                          padding: isMobile ? '14px 12px' : '12px 16px',
                          border: '2px solid #e1e5e9',
                          borderRadius: 8,
                          fontSize: 16,
                          outline: 'none',
                          transition: 'border-color 0.2s ease',
                          boxSizing: 'border-box'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#007bff'}
                        onBlur={(e) => e.target.style.borderColor = '#e1e5e9'}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: 14, marginBottom: 4, color: '#666' }}>End Date</label>
                      <input
                        type="date"
                        value={formData.endDate}
                        onChange={(e) => setFormData({...formData, endDate: e.target.value})}
                        required
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          border: '2px solid #e1e5e9',
                          borderRadius: 8,
                          fontSize: 16,
                          outline: 'none',
                          transition: 'border-color 0.2s ease'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#007bff'}
                        onBlur={(e) => e.target.style.borderColor = '#e1e5e9'}
                      />
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 16 }}>
                    <div>
                      <label style={{ display: 'block', fontSize: 14, marginBottom: 4, color: '#666' }}>Start Time</label>
                      <input
                        type="time"
                        value={formData.startTime}
                        onChange={(e) => setFormData({...formData, startTime: e.target.value})}
                        required
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          border: '2px solid #e1e5e9',
                          borderRadius: 8,
                          fontSize: 16,
                          outline: 'none',
                          transition: 'border-color 0.2s ease'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#007bff'}
                        onBlur={(e) => e.target.style.borderColor = '#e1e5e9'}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: 14, marginBottom: 4, color: '#666' }}>End Time</label>
                      <input
                        type="time"
                        value={formData.endTime}
                        onChange={(e) => setFormData({...formData, endTime: e.target.value})}
                        required
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          border: '2px solid #e1e5e9',
                          borderRadius: 8,
                          fontSize: 16,
                          outline: 'none',
                          transition: 'border-color 0.2s ease'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#007bff'}
                        onBlur={(e) => e.target.style.borderColor = '#e1e5e9'}
                      />
                    </div>
                  </div>
                </div>

                {/* Lecturer/Teacher and Class */}
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', 
                  gap: 16 
                }}>
                  <div>
                    <label style={{ display: 'block', fontWeight: 600, fontSize: 16, marginBottom: 8, color: '#333' }}>
                      Lecturer/Teacher *
                    </label>
                    <select
                      value={formData.lecturer}
                      onChange={(e) => setFormData({...formData, lecturer: e.target.value})}
                      required
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '2px solid #e1e5e9',
                        borderRadius: 8,
                        fontSize: 16,
                        outline: 'none',
                        transition: 'border-color 0.2s ease',
                        backgroundColor: '#fff'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#007bff'}
                      onBlur={(e) => e.target.style.borderColor = '#e1e5e9'}
                    >
                      <option value="">Select a teacher</option>
                      <option value="john-smith">John Smith - React Development</option>
                      <option value="sarah-johnson">Sarah Johnson - Data Science</option>
                      <option value="mike-chen">Mike Chen - UI/UX Design</option>
                      <option value="emily-davis">Emily Davis - Machine Learning</option>
                      <option value="david-wilson">David Wilson - Web Development</option>
                      <option value="lisa-brown">Lisa Brown - Digital Marketing</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontWeight: 600, fontSize: 16, marginBottom: 8, color: '#333' }}>
                      Class/Category *
                    </label>
                    <select
                      value={formData.class}
                      onChange={(e) => setFormData({...formData, class: e.target.value})}
                      required
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '2px solid #e1e5e9',
                        borderRadius: 8,
                        fontSize: 16,
                        outline: 'none',
                        transition: 'border-color 0.2s ease',
                        backgroundColor: '#fff'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#007bff'}
                      onBlur={(e) => e.target.style.borderColor = '#e1e5e9'}
                    >
                      <option value="">Select a category</option>
                      <option value="programming">Programming</option>
                      <option value="design">Design</option>
                      <option value="business">Business</option>
                      <option value="marketing">Marketing</option>
                      <option value="data-science">Data Science</option>
                      <option value="mobile-development">Mobile Development</option>
                      <option value="web-development">Web Development</option>
                      <option value="ai-ml">AI & Machine Learning</option>
                    </select>
                  </div>
                </div>

                {/* Price */}
                <div>
                  <label style={{ display: 'block', fontWeight: 600, fontSize: 16, marginBottom: 8, color: '#333' }}>
                    Course Price *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', fontSize: 16, color: '#666' }}>$</span>
                    <input
                      type="number"
                      value={formData.price}
                      onChange={(e) => setFormData({...formData, price: e.target.value})}
                      placeholder="0.00"
                      required
                      min="0"
                      step="0.01"
                      style={{
                        width: '100%',
                        padding: '12px 16px 12px 36px',
                        border: '2px solid #e1e5e9',
                        borderRadius: 8,
                        fontSize: 16,
                        outline: 'none',
                        transition: 'border-color 0.2s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#007bff'}
                      onBlur={(e) => e.target.style.borderColor = '#e1e5e9'}
                    />
                  </div>
                </div>

                {/* Course Image */}
                <div>
                  <label style={{ display: 'block', fontWeight: 600, fontSize: 16, marginBottom: 8, color: '#333' }}>
                    Course Image *
                  </label>
                  <div style={{
                    border: '2px dashed #e1e5e9',
                    borderRadius: 8,
                    padding: '24px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'border-color 0.2s ease'
                  }}
                  onDragOver={(e) => {
                    e.preventDefault();
                    e.currentTarget.style.borderColor = '#007bff';
                  }}
                  onDragLeave={(e) => {
                    e.currentTarget.style.borderColor = '#e1e5e9';
                  }}
                  onDrop={(e) => {
                    e.preventDefault();
                    e.currentTarget.style.borderColor = '#e1e5e9';
                    const files = e.dataTransfer.files;
                    if (files[0]) {
                      setFormData({...formData, image: files[0]});
                    }
                  }}>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => setFormData({...formData, image: e.target.files[0]})}
                      style={{ display: 'none' }}
                      id="course-image"
                      required
                    />
                    <label htmlFor="course-image" style={{ cursor: 'pointer', display: 'block' }}>
                      <div style={{ fontSize: 48, marginBottom: 8 }}>📸</div>
                      <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 4 }}>
                        {formData.image ? formData.image.name : 'Click to upload or drag and drop'}
                      </div>
                      <div style={{ fontSize: 14, color: '#666' }}>PNG, JPG, GIF up to 10MB</div>
                    </label>
                  </div>
                </div>

                {/* Intro Video */}
                <div>
                  <label style={{ display: 'block', fontWeight: 600, fontSize: 16, marginBottom: 8, color: '#333' }}>
                    Intro Video *
                  </label>
                  <div style={{
                    border: '2px dashed #e1e5e9',
                    borderRadius: 8,
                    padding: '24px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'border-color 0.2s ease'
                  }}
                  onDragOver={(e) => {
                    e.preventDefault();
                    e.currentTarget.style.borderColor = '#007bff';
                  }}
                  onDragLeave={(e) => {
                    e.currentTarget.style.borderColor = '#e1e5e9';
                  }}
                  onDrop={(e) => {
                    e.preventDefault();
                    e.currentTarget.style.borderColor = '#e1e5e9';
                    const files = e.dataTransfer.files;
                    if (files[0]) {
                      setFormData({...formData, introVideo: files[0]});
                    }
                  }}>
                    <input
                      type="file"
                      accept="video/*"
                      onChange={(e) => setFormData({...formData, introVideo: e.target.files[0]})}
                      style={{ display: 'none' }}
                      id="intro-video"
                      required
                    />
                    <label htmlFor="intro-video" style={{ cursor: 'pointer', display: 'block' }}>
                      <div style={{ fontSize: 48, marginBottom: 8 }}>🎬</div>
                      <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 4 }}>
                        {formData.introVideo ? formData.introVideo.name : 'Click to upload or drag and drop'}
                      </div>
                      <div style={{ fontSize: 14, color: '#666' }}>MP4, AVI, MOV up to 100MB</div>
                    </label>
                  </div>
                </div>

                {/* Form Actions */}
                <div style={{ 
                  display: 'flex', 
                  gap: isMobile ? 12 : 16, 
                  justifyContent: isMobile ? 'stretch' : 'flex-end', 
                  marginTop: isMobile ? 20 : 24, 
                  paddingTop: isMobile ? 20 : 24, 
                  borderTop: '1px solid #e1e5e9',
                  flexDirection: isMobile ? 'column' : 'row'
                }}>
                  <button
                    type="button"
                    onClick={() => setCurrentView('dashboard')}
                    style={{
                      background: '#f5f5f5',
                      color: '#333',
                      fontWeight: 600,
                      fontSize: isMobile ? 15 : 16,
                      borderRadius: 8,
                      padding: isMobile ? '14px 20px' : '12px 28px',
                      border: '1px solid #ddd',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      minHeight: isMobile ? 48 : 'auto',
                      flex: isMobile ? 1 : 'none'
                    }}
                    onMouseOver={(e) => e.target.style.background = '#e9e9e9'}
                    onMouseOut={(e) => e.target.style.background = '#f5f5f5'}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    style={{
                      background: '#007bff',
                      color: '#fff',
                      fontWeight: 600,
                      fontSize: isMobile ? 15 : 16,
                      borderRadius: 8,
                      padding: isMobile ? '14px 20px' : '12px 28px',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      boxShadow: '0 2px 8px rgba(0,123,255,0.2)',
                      minHeight: isMobile ? 48 : 'auto',
                      flex: isMobile ? 1 : 'none'
                    }}
                    onMouseOver={(e) => e.target.style.background = '#0056b3'}
                    onMouseOut={(e) => e.target.style.background = '#007bff'}
                  >
                    Create Course
                  </button>
                </div>

              </div>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}
