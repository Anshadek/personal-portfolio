import { Link, useLocation } from 'react-router-dom';

const AdminSidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Helper to check active menu
  const isActive = (path) => currentPath === path;

  // Helper to check if submenu should be open (if any child path matches)
  const isOpen = (paths) => paths.some(path => currentPath.startsWith(path));

  return (
    <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
      <div className="app-brand demo">
        <Link to="/" className="app-brand-link">
          <span className="app-brand-logo demo">
            <span className="text-primary">
              {/* SVG LOGO kept unchanged */}
              <svg
                width="25"
                viewBox="0 0 25 42"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                {/* SVG paths go here */}
              </svg>
            </span>
          </span>
          <span className="app-brand-text demo menu-text fw-bold ms-2">Anshad E K</span>
        </Link>

        <a href="javascript:void(0);" className="layout-menu-toggle menu-link text-large ms-auto">
          <i className="bx bx-chevron-left d-block d-xl-none align-middle"></i>
        </a>
      </div>

      <div className="menu-divider mt-0"></div>
      <div className="menu-inner-shadow"></div>

      <ul className="menu-inner py-1">
        {/* Dashboard */}
        <li className={`menu-item ${isActive('/admin') ? 'active' : ''}`}>
          <Link to="/admin" className="menu-link">
            <i className="menu-icon tf-icons bx bx-home"></i>
            <div className="text-truncate" data-i18n="Dashboard">Dashboard</div>
          </Link>
        </li>

        {/* About */}
        <li className={`menu-item ${isActive('/admin/about') ? 'active' : ''}`}>
          <Link to="/admin/about" className="menu-link">
            <i className="menu-icon tf-icons bx bx-user"></i>
            <div className="text-truncate" data-i18n="About">About</div>
          </Link>
        </li>

        {/* Resume Section */}
        <li className={`menu-item ${isOpen(['/admin/education', '/admin/experience']) ? 'active open' : ''}`}>
          <a href="javascript:void(0);" className="menu-link menu-toggle">
            <i className="menu-icon tf-icons bx bx-file"></i>
            <div className="text-truncate" data-i18n="Resume">Resume</div>
          </a>
          <ul className="menu-sub">
            <li className={`menu-item ${isActive('/admin/education') ? 'active' : ''}`}>
              <Link to="/admin/education" className="menu-link">
                <div className="text-truncate" data-i18n="Education">Education</div>
              </Link>
            </li>
            <li className={`menu-item ${isActive('/admin/experience') ? 'active' : ''}`}>
              <Link to="/admin/experience" className="menu-link">
                <div className="text-truncate" data-i18n="Experience">Experience</div>
              </Link>
            </li>
          </ul>
        </li>

        {/* Portfolio Section */}
        <li className={`menu-item ${isOpen(['/admin/category', '/admin/projects', '/admin/project-images', '/admin/project-details']) ? 'active open' : ''}`}>
          <a href="javascript:void(0);" className="menu-link menu-toggle">
            <i className="menu-icon tf-icons bx bx-briefcase"></i>
            <div className="text-truncate" data-i18n="Portfolio">Portfolio</div>
          </a>
          <ul className="menu-sub">
            <li className={`menu-item ${isActive('/admin/category') ? 'active' : ''}`}>
              <Link to="/admin/category" className="menu-link">
                <div className="text-truncate" data-i18n="Categories">Categories</div>
              </Link>
            </li>
            <li className={`menu-item ${isActive('/admin/project-details') ? 'active' : ''}`}>
              <Link to="/admin/project-details" className="menu-link">
                <div className="text-truncate" data-i18n="Projects">Projects</div>
              </Link>
            </li>
            <li className={`menu-item ${isActive('/admin/project-images') ? 'active' : ''}`}>
              <Link to="/admin/project-images" className="menu-link">
                <div className="text-truncate" data-i18n="Project Images">Project Images</div>
              </Link>
            </li>
          </ul>
        </li>

        {/* Contact */}
        <li className={`menu-item ${isActive('/admin/contact-us') ? 'active' : ''}`}>
          <Link to="/admin/contact-us" className="menu-link">
            <i className="menu-icon tf-icons bx bx-envelope"></i>
            <div className="text-truncate" data-i18n="Contact">Contact Us</div>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default AdminSidebar;
