import { CiCircleInfo } from "react-icons/ci";
import { IoBedOutline } from "react-icons/io5";
import { MdOutlineBathroom } from "react-icons/md";
import { MdBalcony } from "react-icons/md";
import { RiArchiveDrawerLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";

import { LuMoreVertical } from "react-icons/lu";
import Image from "next/image";

const PropertyCard = () => {
  return (
    <>
      <div className="propertyCard">
        <div className="header">
          <div className="priceList">
            <ul>
              <li>
                <strong>₹17,000</strong>
              </li>
              <li>
                See other charges <CiCircleInfo />
              </li>
            </ul>
          </div>
          <div className="moreOP">
            <LuMoreVertical />
          </div>
        </div>
        <div className="body">
          <p>
            2 BHK 900 Sq-ft Flat/Apartment For Rent in{" "}
            <a href="#">Dilshad Colony, New Delhi</a>
          </p>
          <div className=" row">
            <div className="col-md-4">
              <Image
                src={
                  "https://projects.maqtheworldgroup.com/assets/images/property6.jpg"
                }
                width={300}
                height={300}
                alt="home-img02"
                title="Maq"
                className="img-fluid"
              />
            </div>
            <div className="col-md-8">
              <div className="flatInfoBody">
                <div className="flatInfoList">
                  <ul>
                    <li>
                      <IoBedOutline />2 Beds
                    </li>
                    <li>
                      <MdOutlineBathroom />2 Baths
                    </li>
                    <li>
                      <MdBalcony />2 Balconies
                    </li>
                    <li>
                      <RiArchiveDrawerLine />
                      Semi-Furnished
                    </li>
                  </ul>
                </div>
                <div className="flatBodyItem">
                  <ul>
                    <li>
                      Carpet Area
                      <strong>810 sqft</strong>
                    </li>
                    <li>
                      Floor
                      <strong>3(Out of 3 Floors)</strong>
                    </li>
                    <li>
                      Status
                      <strong>Immediately</strong>
                    </li>
                    <li>
                      Facing
                      <strong>South - West</strong>
                    </li>
                    <li>
                      Furnished Status
                      <strong>Semi-Furnished</strong>
                    </li>
                    <li>
                      Car Parking
                      <strong>3 Open</strong>
                    </li>
                    <li>
                      Age Of Construction
                      <strong>Less than 5 years</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="contactBtn">
            <button className="btn btn-primary">Contact Owner</button>
            <button className="btn">Ask Society Name</button>
          </div>
          <p className="time">
            <FaRegUser />
            Last contact made 3 days ago
          </p>
        </div>
      </div>
    </>
  );
};

export default PropertyCard;
