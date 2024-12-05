"use client";
import React, { useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import PostForm from "./post-form/PostForm";
import PostDetailContent from "./post-detail-content/PostDetailContent";

const Post = () => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.js");
  }, []);
  return (
    <>
      {/* Modal */}

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog postModal">
          <div className="modal-content">
            <div className="modal-body">
              <div className="postModalBody">
                <button
                  type="button"
                  className="close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <RxCross2 />
                </button>
                <h3>Need help in posting your property?</h3>
                <p>Let our Property Expert help you.</p>
                <div className="mobileForm">
                  <span>91+</span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Mobile No."
                  />
                </div>
                <div className="touchBtn">
                  <button type="button" className="btn btn-secondary">
                    Maybe Later
                  </button>
                  <button type="button" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <p>
                Need some help? Give us a call at <a href="#">+919870260930</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="postPage sectionSpace">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <PostDetailContent />
            </div>
            <div className="col-md-4">
              <PostForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Post;
