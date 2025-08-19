'use client';
import React from 'react';

export default function Dashboard({ isMobile, setCurrentView }) {
  return (
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
          <div style={{ color: '#888', fontSize: isMobile ? 13 : 15, marginBottom: 18 }}>
            Latest course activities and updates
          </div>

          {/* Mobile or Desktop table */}
          {isMobile ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {/* Mobile Card List */}
              {[
                { course: 'Advanced React Development', instructor: 'John Smith', students: 234, status: 'Published', statusColor: '#111', statusBg: '#eee', date: '2024-01-15' },
                { course: 'Python for Data Science', instructor: 'Sarah Johnson', students: 189, status: 'Draft', statusColor: '#444', statusBg: '#ddd', date: '2024-01-14' },
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
                    <span style={{ background: row.statusBg, color: row.statusColor, borderRadius: 6, padding: '2px 8px', fontWeight: 600, fontSize: 11 }}>{row.status}</span>
                  </div>
                  <div style={{ fontSize: 12, color: '#888', marginTop: 4 }}>{row.date}</div>
                </div>
              ))}
            </div>
          ) : (
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
          <div style={{ fontWeight: 600, fontSize: isMobile ? 18 : 20, marginBottom: 8 }}>Recent Activity</div>
          <div style={{ color: '#888', fontSize: isMobile ? 13 : 15, marginBottom: 18 }}>Latest platform activities</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? 12 : 18 }}>
            {[
              { title: 'New course created', by: 'John Smith', time: '2 hours ago' },
              { title: 'Video uploaded', by: 'Sarah Johnson', time: '4 hours ago' },
            ].map(item => (
              <div key={item.title} style={{ display: 'flex', gap: 16 }}>
                <div style={{ background: '#eee', borderRadius: '50%', width: 38, height: 38 }}></div>
                <div>
                  <div style={{ fontWeight: 600 }}>{item.title}</div>
                  <div style={{ color: '#888', fontSize: 14 }}>by {item.by}</div>
                  <div style={{ color: '#888', fontSize: 13 }}>{item.time}</div>
                </div>
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
        marginTop: isMobile ? 20 : 32 
      }}>
        <div style={{ fontWeight: 600, fontSize: isMobile ? 18 : 20, marginBottom: 8 }}>Quick Actions</div>
        <div style={{ color: '#888', fontSize: isMobile ? 13 : 15, marginBottom: 18 }}>Frequently used tools and shortcuts</div>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)', gap: isMobile ? 8 : 14 }}>
          {[
            { label: 'Add Course', icon: '➕' },
            { label: 'Upload Video', icon: '⏫' },
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
                cursor: 'pointer'
              }}
            >
              <span>{btn.icon}</span>
              <span>{btn.label}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
