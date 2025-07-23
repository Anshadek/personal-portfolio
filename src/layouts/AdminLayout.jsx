import AdminSidebar from '../components/admin/AdminSidebar'; // Create this component
import AdminHeader from '../components/admin/AdminHeader';   // Optional
import { Outlet } from 'react-router-dom';

const AdminLayout = () => (
  <div className="admin-panel">
    <AdminSidebar />
    <div className="admin-content">
      <AdminHeader />
      <Outlet />
    </div>
  </div>
);

export default AdminLayout;
