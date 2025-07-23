import React from 'react';
import { Routes, Route } from 'react-router-dom';

import UserLayout from './layouts/UserLayout';
import AdminLayout from './layouts/AdminLayout';
// Admin Pages (Placeholder)
import AdminDashboard from './components/admin/AdminDashboard';

function App() {
  return (
    <Routes>
      {/* User Layout Routes */}
      <Route path="/" element={<UserLayout />}>
      </Route>

      {/* Admin Layout Routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
