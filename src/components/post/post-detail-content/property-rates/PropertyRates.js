import React from "react";

const PropertyRates = () => {
  return (
    <>
      <div className="propertyRates">
        <div className="title">
          <h3>Property Rates</h3>
        </div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Sale Properties</th>
              <th>Price Range</th>
              <th>Rent Properties</th>
              
                <th>Price Range</th>
              
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>36K+ Flats</td>
              <td>Rs. 6,250 /Sq-ft </td>
              <td>21K+ Flats</td>
              <td>Rs. 18.68 /Sq-ft</td>
            </tr>
            <tr>
              <td>12K+ House/Villa
              </td>
              <td>Rs. 7,438 /Sq-ft </td>
              <td>10K+ House/Villa</td>
              <td>Rs. 16.25 /Sq-ft</td>
            </tr>
            <tr>
              <td>14K+ Plots</td>
              <td>Rs. 45,292 /Sq-yrd </td>
              <td>6K+ Office Space</td>
              <td>Rs. 51.36 /Sq-ft  </td>
            </tr>
            <tr>
              <td>2K+ Commercial</td>
              <td>Rs. 9,667 /Sq-ft </td>
              <td>1K+ Shops</td>
              <td>Rs. 51.45 /Sq-ft</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PropertyRates;
