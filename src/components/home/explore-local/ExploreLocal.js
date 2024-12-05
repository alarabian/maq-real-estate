import React from "react";
import ExploreCard from "./explore-card/ExploreCard";

const ExploreLocal = () => {
  const localityData = [
    {
        locality: "Dwarka",
        priceRange: "₹9,779 - ₹64,000 per sqft",
        rating: 4.2,
        reviews: 160,
        propertiesForSale: 378
    },
    {
        locality: "Najafgarh Road Tagore Garden",
        priceRange: "₹7,407 - ₹64,000 per sqft",
        rating: 4.2,
        reviews: 13,
        propertiesForSale: 5
    },
    {
        locality: "Shivaji Marg",
        priceRange: "₹24,752 - ₹64,000 per sqft",
        rating: 3.5,
        reviews: 5,
        propertiesForSale: 1
    }
];

  return (
    <>
      <section className="exploreLocal">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <div className="exploreTitle">
                <h5>Explore</h5>
                <h3>Popular Localities in New Delhi</h3>
              </div>
            </div>
            {localityData.map((item, i) => {
              return <ExploreCard key={i} item={item} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ExploreLocal;
