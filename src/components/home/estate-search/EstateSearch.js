"use client";
import { MdMyLocation } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa";
import { useEffect } from "react";

const EstateSearch = () => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.js");
  }, []);
  return (
    <>
      <section
        style={{
          backgroundImage: `url(${"https://projects.maqtheworldgroup.com/assets/images/header.jpg"})`,
        }}
        className="bgCover heroSec"
      >
        <div className="container-fluid">
          <div className="searchArea">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="Buy-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#Buy-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="Buy-tab-pane"
                  aria-selected="true"
                >
                  Buy
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="rent-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#rent-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="rent-tab-pane"
                  aria-selected="false"
                >
                  rent
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="projects-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#projects-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="projects-tab-pane"
                  aria-selected="false"
                >
                  new projects
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pg-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#pg-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="PG-tab-pane"
                  aria-selected="false"
                >
                  PG
                </button>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="Buy-tab-pane"
                role="tabpanel"
                aria-labelledby="Buy-tab"
                tabIndex={0}
              >
                <form className="mainForm">
                  <select className="form-select">
                    <option value="all residential">all residential</option>
                    <option value="apartment">Apartment</option>
                  </select>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Search '3BHK for sale in Mumbai'"
                      className="form-control"
                    />
                  </div>
                  <div className="actionBtn">
                    <div className="icon">
                      <MdMyLocation />
                    </div>
                    <div className="icon">
                      <FaMicrophone />
                    </div>
                    <button className="searchBtn btn">Search</button>
                  </div>
                </form>
              </div>
              <div
                className="tab-pane fade"
                id="rent-tab-pane"
                role="tabpanel"
                aria-labelledby="rent-tab"
                tabIndex={0}
              >
                <form className="mainForm">
                  <select className="form-select">
                    <option value="all residential">all residential</option>
                    <option value="apartment">Apartment</option>
                  </select>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Search '3BHK for sale in Mumbai'"
                      className="form-control"
                    />
                  </div>
                  <div className="actionBtn">
                    <div className="icon">
                      <MdMyLocation />
                    </div>
                    <div className="icon">
                      <FaMicrophone />
                    </div>
                    <button className="searchBtn btn">Search</button>
                  </div>
                </form>
              </div>
              <div
                className="tab-pane fade"
                id="projects-tab-pane"
                role="tabpanel"
                aria-labelledby="projects-tab"
                tabIndex={0}
              >
                <form className="mainForm">
                  <select className="form-select">
                    <option value="all residential">all residential</option>
                    <option value="apartment">Apartment</option>
                  </select>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Search '3BHK for sale in Mumbai'"
                      className="form-control"
                    />
                  </div>
                  <div className="actionBtn">
                    <div className="icon">
                      <MdMyLocation />
                    </div>
                    <div className="icon">
                      <FaMicrophone />
                    </div>
                    <button className="searchBtn btn">Search</button>
                  </div>
                </form>
              </div>
              <div
                className="tab-pane fade"
                id="pg-tab-pane"
                role="tabpanel"
                aria-labelledby="pg-tab"
                tabIndex={0}
              >
                <form className="mainForm">
                  <select className="form-select">
                    <option value="all residential">all residential</option>
                    <option value="apartment">Apartment</option>
                  </select>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Search '3BHK for sale in Mumbai'"
                      className="form-control"
                    />
                  </div>
                  <div className="actionBtn">
                    <div className="icon">
                      <MdMyLocation />
                    </div>
                    <div className="icon">
                      <FaMicrophone />
                    </div>
                    <button className="searchBtn btn">Search</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EstateSearch;
