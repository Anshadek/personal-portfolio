import { Link } from 'react-router-dom';

const AdminSidebar = () => {
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
                <defs>
                  {/* ... paths as in original */}
                </defs>
                {/* ... rest of SVG */}
              </svg>
            </span>
          </span>
          <span className="app-brand-text demo menu-text fw-bold ms-2">Sneat</span>
        </Link>

        <a href="javascript:void(0);" className="layout-menu-toggle menu-link text-large ms-auto">
          <i className="bx bx-chevron-left d-block d-xl-none align-middle"></i>
        </a>
      </div>

      <div className="menu-divider mt-0"></div>
      <div className="menu-inner-shadow"></div>

      <ul className="menu-inner py-1">
        {/* Dashboard */}
        <li className="menu-item">
          <Link to="/" className="menu-link">
            <i className="menu-icon tf-icons bx bx-home"></i>
            <div className="text-truncate">Dashboard</div>
          </Link>
        </li>

        {/* About */}
        <li className="menu-item">
          <Link to="/about" className="menu-link">
            <i className="menu-icon tf-icons bx bx-user"></i>
            <div className="text-truncate">About</div>
          </Link>
        </li>

        {/* Resume */}
        <li className="menu-item">
          <div className="menu-link menu-toggle">
            <i className="menu-icon tf-icons bx bx-file"></i>
            <div className="text-truncate">Resume</div>
          </div>
          <ul className="menu-sub">
            <li className="menu-item">
              <Link to="/education" className="menu-link">
                <div className="text-truncate">Education</div>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/experience" className="menu-link">
                <div className="text-truncate">Experience</div>
              </Link>
            </li>
          </ul>
        </li>

        {/* Portfolio */}
        <li className="menu-item">
          <div className="menu-link menu-toggle">
            <i className="menu-icon tf-icons bx bx-briefcase"></i>
            <div className="text-truncate">Portfolio</div>
          </div>
          <ul className="menu-sub">
            <li className="menu-item">
              <Link to="/portfolio-categories" className="menu-link">
                <div className="text-truncate">Categories</div>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/portfolio-projects" className="menu-link">
                <div className="text-truncate">Projects</div>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/portfolio-project-images" className="menu-link">
                <div className="text-truncate">Project Images</div>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/portfolio-project" className="menu-link">
                <div className="text-truncate">Project</div>
              </Link>
            </li>
          </ul>
        </li>

        {/* Contact Us */}
        <li className="menu-item">
          <Link to="/contactus" className="menu-link">
            <i className="menu-icon tf-icons bx bx-envelope"></i>
            <div className="text-truncate">Contact Us</div>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default AdminSidebar;
