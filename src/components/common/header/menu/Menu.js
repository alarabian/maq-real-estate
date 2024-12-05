"use client";

import Link from "next/link";
import { useEffect } from "react";

const Menu = () => {
  const realEstateOptions = [
    {
      category: "Popular Choices",
      options: [
        "Ready to Move",
        "Owner Properties",
        "Budget Homes",
        "Premium Homes",
        "New Projects",
      ],
    },
    {
      category: "Property Types",
      options: [
        "Flats in New-Delhi",
        "House for sale in New-Delhi",
        "Villa in New-Delhi",
        "Plot in New-Delhi",
        "Office Space in New-Delhi",
        "Commercial Space in New-Delhi",
      ],
    },
    {
      category: "Budget",
      options: [
        "Under ₹ 50 Lac",
        "₹ 50 Lac - ₹ 1 Cr",
        "₹ 1 Cr - ₹ 1.5 Cr",
        "Above ₹ 1.5 Cr",
      ],
    },
    {
      category: "Explore",
      options: [
        "Localities in New-Delhi",
        "Projects in New-Delhi",
        "Investment Hotspot",
        "Find an Agent",
        "Home Interiors in New-Delhi",
      ],
    },
    {
      category: "Buying Tools",
      options: [
        "PropWorth",
        "Rates & Trends",
        "Buy vs Rent",
        "Tips and Guides",
      ],
    },
  ];

  const rentalOptions = [
    {
      category: "Popular Choices",
      options: [
        "Owner Properties",
        "Verified Properties",
        "Furnished Homes",
        "Bachelor Friendly Homes",
        "Immediately Available",
      ],
    },
    {
      category: "Property Types",
      options: [
        "Flat for rent in New-Delhi",
        "House for rent in New-Delhi",
        "Villa for rent in New-Delhi",
        "PG in New-Delhi",
        "Office Space in New-Delhi",
        "Commercial Space in New-Delhi",
        "Coworking Space in New-Delhi",
        "Coliving Space in New-Delhi",
        "Student Hostels in New-Delhi",
        "Luxury PG in New-Delhi",
      ],
    },
    {
      category: "Budget",
      options: [
        "Under ₹ 10,000",
        "₹ 10,000 - ₹ 15,000",
        "₹ 15,000 - ₹ 25,000",
        "Above ₹ 25,000",
      ],
    },
    {
      category: "Explore",
      options: [
        "Localities",
        "Buy Vs Rent",
        "Find an Agent",
        "Share Requirement",
        "Property Services",
        "Rent Agreement",
      ],
    },
  ];

  const userRolesOptions = [
    {
      role: "For Owner",
      options: ["Post Property FREE", "My Dashboard"],
    },
    {
      role: "For Agent & Builder",
      options: [
        "My Dashboard",
        "Ad Packages",
        "iAdvantage",
        "Developer Lounge",
        "Sales Enquiry",
      ],
    },
    {
      role: "Selling Tools",
      options: [
        "Selling Tools",
        "Property Valuation",
        "Find an Agent",
        "Rates & Trends",
        "PropWorth",
      ],
    },
  ];

  const servicesOptions = [
    {
      category: "Rent Services",
      options: ["Rent AgreementFREE", "Generate Rent Receipt"],
    },
    {
      category: "Buy / Sell Services",
      options: ["Home InteriorsNEW", "Property ValuationNEW"],
    },
    {
      category: "Home Services",
      options: ["View All Services"],
    },
  ];

  const informationCategories = [
    {
      category: "MB Research",
      options: ["Insights", "Research", "Prop Index", "Find Pincode"],
    },
    {
      category: "Services & Tools",
      options: [
        "Property ValuationNEW",
        "Rates & Trends",
        "Area Converter",
        "PropWorth",
        "Buy v/s Rent",
      ],
    },
    {
      category: "Localities & Projects",
      options: [
        "Localities in New-Delhi",
        "Locality Review Videos",
        "Compare Localities",
        "New Projects in New-Delhi",
        "Project Review Videos",
        "MBTV Videos",
      ],
    },
    {
      category: "News & Blogs",
      options: [
        "Latest Blogs",
        "Lifestyle",
        "Policies",
        "Finance & Legal",
        "City Blogs",
        "Property News",
        "Trending Web Stories",
      ],
    },
  ];

  const helpCenterOptions = ["Help Center", "Sales Enquiry"];

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.js");
  }, []);
  return (
    <>
      <nav className="navbar navbar-expand-lg pageMenuSec">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto pageMenu">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" href="/about">
                  About
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Buy
                </a>
                <div className="dropdown-menu dropdownSubmenu">
                  <div className="row">
                    {realEstateOptions.map((item, i) => {
                      return (
                        <div className="col-md-3" key={i}>
                          <div className="subMenuInfo">
                            <h5>{item.category}</h5>
                            <ul>
                              {item.options.map((name, i) => {
                                return (
                                  <li key={i}>
                                    <a href="#">{name}</a>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Rent
                </a>
                <div className="dropdown-menu dropdownSubmenu">
                  <div className="row">
                    {rentalOptions.map((item, i) => {
                      return (
                        <div className="col-md-3" key={i}>
                          <div className="subMenuInfo">
                            <h5>{item.category}</h5>
                            <ul>
                              {item.options.map((name, i) => {
                                return (
                                  <li key={i}>
                                    <a href="#">{name}</a>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sell
                </a>
                <div className="dropdown-menu dropdownSubmenu">
                  <div className="row">
                    {userRolesOptions.map((item, i) => {
                      return (
                        <div className="col-md-3" key={i}>
                          <div className="subMenuInfo">
                            <h5>{item.role}</h5>
                            <ul>
                              {item.options.map((name, i) => {
                                return (
                                  <li key={i}>
                                    <a href="#">{name}</a>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Property Services
                </a>
                <div className="dropdown-menu dropdownSubmenu">
                  <div className="row">
                    {servicesOptions.map((item, i) => {
                      return (
                        <div className="col-md-3" key={i}>
                          <div className="subMenuInfo">
                            <h5>{item.category}</h5>
                            <ul>
                              {item.options.map((name, i) => {
                                return (
                                  <li key={i}>
                                    <a href="#">{name}</a>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  MB Advice <span className="new">new</span>
                </a>
                <div className="dropdown-menu dropdownSubmenu">
                  <div className="row">
                    {informationCategories.map((item, i) => {
                      return (
                        <div className="col-md-3" key={i}>
                          <div className="subMenuInfo">
                            <h5>{item.category}</h5>
                            <ul>
                              {item.options.map((name, i) => {
                                return (
                                  <li key={i}>
                                    <a href="#">{name}</a>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Help
                </a>
                <div className="dropdown-menu dropdownSubmenu">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="subMenuInfo">
                        <ul>
                          {helpCenterOptions.map((name, i) => {
                            return (
                              <li key={i}>
                                <a href="#">{name}</a>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className="nav-item">
                <Link className="nav-link" aria-current="page" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Menu;
