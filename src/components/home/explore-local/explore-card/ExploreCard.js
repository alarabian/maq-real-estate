import Image from "next/image";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { FaStar } from "react-icons/fa6";

const ExploreCard = ({ item }) => {
  return (
    <>
      <div className="col-md-3">
        <div className="exploreCard">
          <div className="header">
            <h4>{item.locality}</h4>
            <p>{item.priceRange}</p>
            <ul>
              <li>
                <strong>
                  {item.rating} <FaStar />
                </strong>
              </li>
              <li>{item.reviews}</li>
            </ul>
          </div>

          <div className="footer1">
            <Image
              src="https://projects.maqtheworldgroup.com/assets/images/topLocality00.png"
              width={60}
              height={60}
              title={item.locality}
              alt={item.locality}
            />
            <p>
              {item.propertiesForSale} Properties for sale <GoArrowUpRight />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreCard;
