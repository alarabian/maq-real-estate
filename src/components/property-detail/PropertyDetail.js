import React from "react";
import PropertyCard from "./property-card/PropertyCard";
import PropertyMoreInfo from "./property-more-info/PropertyMoreInfo";
import AboutColony from "./about-colony/AboutColony";
import AvailableProperty from "./available-property/AvailableProperty";

const PropertyDetail = () => {
  return (
    <>
      <section className="propertyDetailSec sectionSpace">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <div className="propertyDetail">
                <PropertyCard />
                <PropertyMoreInfo />
                <AboutColony />
              </div>
            </div>
            <div className="col-md-4">
              <div className="contactOwner">
                <h3>Contact Owner</h3>
                <p>Kewal Krishan Batra</p>
                <span>+91-98XXXXXXXX </span>
                <button className="btn">Ask Society Name</button>
              </div>
            </div>
            <div className="col-md-12">
                <AvailableProperty />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PropertyDetail;
