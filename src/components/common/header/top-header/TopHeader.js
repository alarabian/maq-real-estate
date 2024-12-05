import Image from "next/image";
import Link from "next/link";
import React from "react";

const TopHeader = () => {
  return (
    <>
      <div className="topHeader">
        <div className="container-fluid">
          <div className="topHeaderInfo">
            <div className="brandSec">
              <div className="logo today">
                <a href="/">
                  <Image
                    src={"/MAQlogo.8d006b992d4737e71b53.jpg"}
                    alt="MAQ The World Projects "
                    width={50}
                    height={30}
                  />
                  MAQ The World Projects
                </a>
              </div>
              <div className="location">
                <select className="form-select">
                  <option value="New Delhi">New Delhi</option>
                  <option value="Mumbai">Mumbai</option>
                </select>
              </div>
            </div>
            <div className="loginSec">
              <ul>
                <li className="dropdown">
                  <button
                    className="btn dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    MAQ Advice
                  </button>
                  <div className="dropdown-menu loginDropdown">
                    <ul>
                      <li>
                        <a href="#">Contact upto 30 Owners directly</a>
                      </li>
                      <li>
                        <a href="#">Access to Prime Exclusive Properties</a>
                      </li>
                    </ul>
                    <div className="login">
                      <a href="/login" className="btn btn-danger">
                        Join Now
                      </a>
                    </div>
                  </div>
                </li>

                <li className="dropdown">
                  <button
                    className="btn dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Login
                  </button>
                  <div className="dropdown-menu loginDropdown">
                    <h6>Your Activity</h6>
                    <ul>
                      <li>
                        <Link href="/">Requested PropertiesNEW</Link>
                      </li>
                      <li>
                        <Link href="#">Contacted Properties</Link>
                      </li>
                      <li>
                        <Link href="#">Viewed Properties</Link>
                      </li>
                      <li>
                        <Link href="#">Shortlisted Properties</Link>
                      </li>
                      <li>
                        <Link href="#">Searches</Link>
                      </li>
                      <hr />
                      <li>
                        <Link href="#">Recommendations</Link>
                      </li>
                      <li>
                        <Link href="/agent-profile">My Profile</Link>
                      </li>
                    </ul>
                    <div className="login">
                      <Link href="/login" className="btn btn-danger">
                        Login
                      </Link>
                      <Link href="/signup" className="btn">
                        Sign Up
                      </Link>
                    </div>
                  </div>
                </li>
                <li>
                  <Link className="btn postProperty" href="/post-property">
                    Post Property <span className="free"> free</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
