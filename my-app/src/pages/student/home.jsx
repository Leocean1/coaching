'use client';
import React, { useState, useEffect } from 'react';

import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

export default function StudentHome() {
  const studentName = 'John Smith';

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f5f5f5', fontFamily: 'Inter, Arial, sans-serif' }}>
      <Sidebar studentName={studentName} />
      <Dashboard />
    </div>
  );
}
