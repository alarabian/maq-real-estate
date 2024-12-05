import React from "react";

const PostForm = () => {
  return (
    <>
      <div className="postForm">
        <h3>Lets get you started </h3>
        <div className="postList">
          <div className="postItem">
            <h5>You are: </h5>
            <ul>
              <li>Owner</li>
              <li>Agent </li>
              <li>Builder</li>
            </ul>
          </div>
          <div className="postItem">
            <h5>You are here to:</h5>
            <ul>
              <li>Sell</li>
              <li>Rent / Lease </li>
              <li>List as PG</li>
            </ul>
          </div>
        </div>
        <div className="contactForm">
          <h5>Your contact number</h5>
          <div className="mobileForm">
            <span>91+</span>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Mobile No."
            />
          </div>
        </div>
        <div className="infoText">
          <p>Enter yourWhatsApp No. to get enquiries from Buyer/Tenant</p>
        </div>
        <button className="btn">Start Now</button>
        <button
          type="button"
          className="btn modalBtn"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Need Help
        </button>
      </div>
    </>
  );
};

export default PostForm;
