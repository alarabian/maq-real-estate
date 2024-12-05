const rentalPropertyDetails = [
  { category: "Rental Value", value: "₹17,000 | ₹1,000" },
  {
    category: "Address",
    value:
      "C 62 Z2 Dilshad Garden, near opposite post office, Dilshad Colony, New Delhi - East, Delhi NCR",
  },
  { category: "Landmarks", value: "Opposite Post office" },
  { category: "Furnishing", value: "Semi-Furnished" },
  { category: "Flooring", value: "Marble" },
  { category: "Overlooking", value: "Garden/Park, Main Road" },
  { category: "Age of Construction", value: "Less than 5 years" },
  { category: "Water Availability", value: "24 Hours Available" },
  { category: "Status of Electricity", value: "No/Rare Powercut" },
  { category: "Authority Approval", value: "Developer" },
  {
    category: "Description",
    value:
      "No parking problem. Sufficient open space nearby. Near by Temple, post office, hospitals, schools, and metro.",
  },
];

const PropertyMoreInfo = () => {
  return (
    <>
      <div className="propertyCard propertyMoreInfo">
        <h3>More Details</h3>
        <ul>
          {rentalPropertyDetails.map((item, i) => {
            return (
              <li key={i}>
                <span>{item.category} </span>
                <strong>{item.value}</strong>
              </li>
            );
          })}
        </ul>
        <div className="footer">
          <div className="contactBtn">
            <button className="btn btn-primary">Contact Owner</button>
            <button className="btn">Report Owner</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyMoreInfo;
