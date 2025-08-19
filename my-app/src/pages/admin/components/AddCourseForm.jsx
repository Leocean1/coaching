'use client';
import React from 'react';

export default function AddCourseForm({ formData, setFormData, setCurrentView, isMobile }) {
  return (
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