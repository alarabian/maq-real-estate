import Image from "next/image";
import React from "react";

const HowWork = () => {
  return (
    <>
      <div className="wayOfWork">
        <div className="workItem">
          <div className="figure">1</div>
          <div className="text">
            <span>Step 1:</span>
            <h4>Post your Property Ad</h4>
            <p>
              Enter all details like locality name, amenities etc. along with
              uploading Photos
            </p>
          </div>
        </div>
        <div className="workItem">
          <div className="figure">2</div>
          <div className="text">
            <span>Step 2:</span>
            <h4>Check Responses on Dashboard</h4>
            <p>Get access to Buyer/Tenant contact details & connect easily</p>
          </div>
        </div>
        <div className="workItem">
          <div className="figure">3</div>
          <div className="text">
            <span>Step 3:</span>
            <h4>Sell/Rent faster with instant Connect</h4>
            <p>
              Negotiate with your prospective Buyer/Tenant & mutually close the
              deal.(site-visit)
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowWork;
