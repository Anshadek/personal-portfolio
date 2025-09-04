import React from 'react';

const ContactUs = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <div className="row">
        {/* Left Section */}
        <div className="col-xxl-12 mb-12 order-0">
          <div className="card">
            <div className="d-flex align-items-start row">
              <div className="col-sm-7">
                <div className="card-body">
                  <h5 className="card-title text-primary mb-3">this is contact us page</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
