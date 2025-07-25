import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from '../components/admin/AdminSidebar';
import AdminHeader from '../components/admin/AdminHeader';
import AdminFooter from '../components/admin/AdminFooter';
import useAdminScripts from '../hooks/useAdminScripts';

const AdminLayout = () => {
  useAdminScripts();
  return (
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">

        {/* Sidebar */}
        <AdminSidebar />

        <div className="layout-page">

          {/* Header */}
          <AdminHeader />

          <div className="content-wrapper">
            {/* Main Content */}
            <Outlet />

            {/* Footer */}
            <AdminFooter />

            {/* Backdrop */}
            <div className="content-backdrop fade"></div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile toggling */}
      <div className="layout-overlay layout-menu-toggle"></div>
    </div>
  )
};

export default AdminLayout;
