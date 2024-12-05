import Image from "next/image";
import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import HowWork from "./how-work/HowWork";
import TipsSelling from "./tips-selling/TipsSelling";
import Benefits from "./benefits/Benefits";
import PostTestimonials from "./post-testimonials/PostTestimonials";
import PropertyRates from "./property-rates/PropertyRates";
import PostFaq from "./post-faq/PostFaq";

const PostDetailContent = () => {
  return (
    <>
      <div className="postDetailContent">
        <div className="pageInfoTitle">
          <div className="figure">
            <Image
              src={
                "https://projects.maqtheworldgroup.com/assets/images/home-img02.webp"
              }
              width={300}
              height={300}
              alt="home-img02"
              title="home-img02"
             />
          </div>
          <div className="text">
            <h2>
              Post property Ad to sell or rent online for{" "}
              <span className="free">Free!</span>
            </h2>
            <ul>
              <li>
                <FaCircleCheck />
                Get Access to 4 Lakh + Buyers
              </li>
              <li>
                <FaCircleCheck />
                Sell Faster with Premium Service
              </li>
              <li>
                <FaCircleCheck />
                Get Expert Advice on Market Trends and Insights
              </li>
            </ul>
          </div>
        </div>
        <HowWork />
        <TipsSelling />
        <Benefits />
        <PostTestimonials />
        <PropertyRates />
        <PostFaq />
      </div>
    </>
  );
};

export default PostDetailContent;
