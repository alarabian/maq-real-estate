import React from "react";
import PopularPropertyItem from "./popular-property-item/PopularPropertyItem";

const PopularProperties = () => {
  const property = [
    {
      id: "1",
      title: "₹2.35 Cr 1400 sqft",
      area: "3 BHK Flat",
      add: "Mayur Vihar 1, New Delhi",
      url: "https://projects.maqtheworldgroup.com/assets/images/property1.jpg",
    },
    {
      id: "2",
      title: "₹2 Cr 2997 sqft",
      area: "4 BHK Flat",
      add: "Block A Ashok Vihar, New Delhi",
      url: "https://projects.maqtheworldgroup.com/assets/images/property2.jpg",
    },
    {
      id: "3",
      title: "₹31 Lac 700 sqft",
      area: "2 BHK Flat",
      add: "Palam Colony Palam, New Delhi",
      url: "https://projects.maqtheworldgroup.com/assets/images/property3.jpg",
    },
    {
      id: "4",
      title: "₹29.5 Lac 4500 sqft",
      area: "3 BHK Flat",
      add: "Raja Puri Matiala, New Delhi",
      url: "https://projects.maqtheworldgroup.com/assets/images/property4.jpg",
    },
    {
      id: "5",
      title: "₹2.35 Cr 1400 sqft",
      area: "3 BHK Flat",
      add: "Mayur Vihar 1, New Delhi",
      url: "https://projects.maqtheworldgroup.com/assets/images/property5.jpg",
    },
    {
      id: "6",
      title: "₹2 Cr 2997 sqft",
      area: "4 BHK Flat",
      add: "Block A Ashok Vihar, New Delhi",
      url: "https://projects.maqtheworldgroup.com/assets/images/property6.jpg",
    },
    {
      id: "7",
      title: "₹31 Lac 700 sqft",
      area: "2 BHK Flat",
      add: "Palam Colony Palam, New Delhi",
      url: "https://projects.maqtheworldgroup.com/assets/images/property7.jpg",
    },
    {
      id: "8",
      title: "₹29.5 Lac 4500 sqft",
      area: "3 BHK Flat",
      add: "Raja Puri Matiala, New Delhi",
      url: "https://projects.maqtheworldgroup.com/assets/images/property8.jpg",
    },
  ];
  return (
    <>
      <section className="popularProperty sectionSpace">
        <div className="container-fluid">
          <div className="sectionTitle">
            <h2>Popular Owner Properties</h2>
          </div>
          <div className="row">
            {property.map((item) => {
              return <PopularPropertyItem key={item.id} item={item} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default PopularProperties;
