import React from 'react';
import { Routes, Route } from 'react-router-dom';

import UserLayout from './layouts/UserLayout';
import AdminLayout from './layouts/AdminLayout';
// Admin Pages (Placeholder)
import AdminDashboard from './components/admin/AdminDashboard';
import About from './components/admin/About';
import Projects from './components/admin/Projects';
import ProjectImages from './components/admin/ProjectImages';
import Experience from './components/admin/Experince';
import Education from './components/admin/Education';
import ContactUs from './components/admin/ContactUs';
import Category from './components/admin/Category';
import ProjectDetails from './components/admin/ProjectDetails';
function App() {
  return (
    <Routes>
      {/* User Layout Routes */}
      <Route path="/" element={<UserLayout />}>
      </Route>

      {/* Admin Layout Routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="project-images" element={<ProjectImages />} />
        <Route path="project-details" element={<ProjectDetails />} />
        <Route path="experience" element={<Experience />} />
        <Route path="education" element={<Education />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="category" element={<Category />} />
        
      </Route>
    </Routes>
  );
}

export default App;
