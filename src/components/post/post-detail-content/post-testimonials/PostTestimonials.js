import Image from "next/image";
import React from "react";

const PostTestimonials = () => {
  return (
    <>
      <div className="postView">
        <div className="title">
          <h3>Testimonials from our customers</h3>
        </div>
        <div className="reviewList row">
          <div className="col-md-6">
            <div className="reviewItem">
              <div className="figure">
                <Image
                  src={
                    "https://projects.maqtheworldgroup.com/assets/images/testimonial5.jpg"
                  }
                  width={50}
                  height={50}
                  alt="Ritu Raman"
                  title="Ritu Raman"
                />
              </div>
              <div className="text">
                <p>
                  BRAND is the best property search website out there. I use it
                  for all of my property searches, and I have been able to close
                  out deals quickly because of it. It has a very user-friendly
                  interface and I highly recommend it to anyone looking either
                  to buy or rent a property.
                </p>
                <h4>Ritu Raman</h4>
                <span>Noida</span>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="reviewItem ">
              <div className="figure">
                <Image
                  src={
                    "https://projects.maqtheworldgroup.com/assets/images/testimonials6.jpg"
                  }
                  width={50}
                  height={50}
                  alt="Puja Mannan"
                  title="Puja Mannan"
                />
              </div>
              <div className="text">
                <p>
                  I am very grateful to MAQ The World Projects for helping me
                  close out a deal quickly and allowing me to focus on other
                  things. I got a lot of responses, which is not the norm in
                  this market, and I really liked that it was so easy for me to
                  post my property.
                </p>
                <h4>Puja Mannan</h4>
                <span>Mumbai</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostTestimonials;
