import React from "react";
import VillaCard from "./villa-card/VillaCard";

const Villas = () => {
  const propertyData = [
    {
      id: "1",
      color: "#fff5e4",
      type: "Residential Apartment",
      url: "https://projects.maqtheworldgroup.com/assets/images/d_hp_property_type_1.webp",
      properties: 7900,
    },
    {
      id: "2",
      color: "#f0f9ff",
      type: "Residential Land",
      url: "https://projects.maqtheworldgroup.com/assets/images/d_hp_property_type_3.webp",
      properties: 560,
    },
    {
      id: "3",
      color: "#d7f2e3",
      type: "Independent House/Villa",
      url: "https://projects.maqtheworldgroup.com/assets/images/d_hp_property_type_2.webp",
      properties: 390,
    },
    {
      id: "4",
      color: "#fff5e4",
      type: "Independent/Builder Floor",
      url: "https://projects.maqtheworldgroup.com/assets/images/d_hp_property_type_4.webp",
      properties: 60,
    },
    {
      id: "5",
      color: "#f0f9ff",
      type: "1 RK/Studio Apartment",
      url: "https://projects.maqtheworldgroup.com/assets/images/d_hp_property_type_90.webp",
      properties: 50,
    },
    {
      id: "6",
      color: "#d7f2e3",
      type: "Serviced Apartments",
      url: "https://projects.maqtheworldgroup.com/assets/images/d_hp_property_type_22.webp",
      properties: 6,
    },
    {
      id: "7",
      color: "#fff5e4",
      type: "Farm House",
      url: "https://projects.maqtheworldgroup.com/assets/images/d_hp_property_type_5.webp",
      properties: 1,
    },
    {
      id: "8",
      color: "#f0f9ff",
      type: "Residential Apartment",
      url: "https://projects.maqtheworldgroup.com/assets/images/d_hp_property_type_1.webp",
      properties: 7900,
    },
  ];
  return (
    <>
      <section className="villasProperty sectionSpace">
        <div className="container-fluid">
          <div className="sectionTitle">
            <p>in Pune East</p>
            <h2>Apartments, Villas and more</h2>
          </div>
          <div className="row">
            {propertyData.map((item) => {
              return <VillaCard key={item.id} item={item} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Villas;
