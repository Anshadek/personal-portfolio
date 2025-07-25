import React from 'react';

const AdminFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="content-footer footer bg-footer-theme">
      <div className="container-xxl">
        <div className="footer-container d-flex align-items-center justify-content-between py-4 flex-md-row flex-column">
          <div className="mb-2 mb-md-0">
            © {currentYear}, made with ❤️ by{' '}
            <a
              href="https://themeselection.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              ThemeSelection
            </a>
          </div>
          <div className="d-none d-lg-inline-block">
            <a
              href="https://themeselection.com/item/category/admin-templates/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link me-4"
            >
              Admin Templates
            </a>
            <a
              href="https://themeselection.com/license/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link me-4"
            >
              License
            </a>
            <a
              href="https://themeselection.com/item/category/bootstrap-admin-templates/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link me-4"
            >
              Bootstrap Dashboard
            </a>
            <a
              href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/documentation/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link me-4"
            >
              Documentation
            </a>
            <a
              href="https://github.com/themeselection/sneat-bootstrap-html-admin-template-free/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AdminFooter;
