import React from "react";
import EstateSearch from "./estate-search/EstateSearch";
import { BsArrowUpRight } from "react-icons/bs";
import { FiKey } from "react-icons/fi";
import { TbBuildingCommunity } from "react-icons/tb";
import { MdOutlineShareLocation } from "react-icons/md";

import { MdMoreTime } from "react-icons/md";
import PopularProperties from "./popular-properties/PopularProperties";
import Agents from "./agents/Agents";
import { GoFileDirectory } from "react-icons/go";

import { GrCertificate } from "react-icons/gr";
import { BiMessageDetail } from "react-icons/bi";
import { HiMiniCurrencyRupee } from "react-icons/hi2";
import Image from "next/image";
import { FaRegCheckCircle } from "react-icons/fa";
import Villas from "./villas/Villas";
import ExploreLocal from "./explore-local/ExploreLocal";

const Home = () => {
  return (
    <>
      <EstateSearch />
      <section className="nearState sectionSpace">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="sectionTitle">
                <h2>Because you searched New Delhi</h2>
              </div>
            </div>
            <div className="col-md-3">
              <div className="stateInfo">
                <h5>
                  <span>28K+</span> Properties listed for you
                </h5>
                <a href="#">
                  Continue last search <BsArrowUpRight />
                </a>
                <div className="boxIcon">
                  <MdMoreTime />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="stateInfo">
                <h5>Get personalised property recommendations from us</h5>
                <a href="#">
                  See all <BsArrowUpRight />
                </a>
                <div className="boxIcon">
                  <FiKey />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="stateInfo">
                <h5>
                  Top Handpicked Projects <br /> for you
                </h5>
                <a href="#">
                  See all <BsArrowUpRight />
                </a>
                <div className="boxIcon">
                  <TbBuildingCommunity />
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="stateInfo">
                <h5>
                  Top Exclusive Owner <br /> property
                </h5>
                <a href="#">
                  See all <BsArrowUpRight />
                </a>
                <div className="boxIcon">
                  <MdOutlineShareLocation />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="projectGallery">
        <div className="container-fluid">
          <div className="sectionTitle">
            <h2>Project Galley</h2>
          </div>
          <div
            className="galleyFigure bgCover"
            style={{
              backgroundImage: `url("https://projects.maqtheworldgroup.com/assets/images/download.webp")`,
            }}
          ></div>
        </div>
      </section>

      <PopularProperties />
      <Agents />
      <section className="launchSec sectionSpace">
        <div className="container-fluid">
          <div className="launchBody">
            <div className="title">
              <span>New Launch</span>
              <h3>BRAND</h3>
              <h6>Encyclopedia For All New Projects</h6>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="projectView one">
                  <div className="icon">
                    <GoFileDirectory />
                  </div>
                  <h4>Directory for All New Projects</h4>
                </div>
              </div>
              <div className="col-md-4">
                <div className="projectView two">
                  <div className="icon">
                    <GrCertificate />
                  </div>
                  <h4>All Reports from RERA</h4>
                </div>
              </div>
              <div className="col-md-4">
                <div className="projectView three">
                  <div className="icon">
                    <BiMessageDetail />
                  </div>
                  <h4>Expert Reviews & Advice</h4>
                </div>
              </div>
              <div className="col-md-12">
                <div className="viewAll">
                  <a href="#" className="btn">
                    View All New projects
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="marketValueSec">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5">
              <div className="marketFigure">
                <Image
                  src={
                    "https://projects.maqtheworldgroup.com/assets/images/propert8.jpg"
                  }
                  alt="MAQ The World Projects"
                  width={530}
                  height={300}
                />
              </div>
            </div>
            <div className="col-md-7">
              <div className="marketValue">
                <h3>
                  Market Value by <HiMiniCurrencyRupee />
                  PropWorth
                </h3>
                <p>
                  Evaluate the market value of any property in your area,
                  project, or locality.
                </p>
                <ul>
                  <li>
                    <FaRegCheckCircle />
                    Reliable and Up-to-Date Market Data
                  </li>
                  <li>
                    <FaRegCheckCircle />
                    Easy and Quick Valuation
                  </li>
                  <li>
                    <FaRegCheckCircle />
                    Trusted by Thousands of Homeowners and Investors
                  </li>
                </ul>
                <a href="#" className="btn">
                  Check Your Propertys Worth Now!
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Villas />
      <ExploreLocal />
    </>
  );
};

export default Home;
