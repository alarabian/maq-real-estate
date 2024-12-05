import React from "react";

const Footer = () => {
  const data = [
    {
      id: "1",
      title: "Popular Residential Searches",
      PropertyTypes: [
        "Property for Sale in New Delhi",
        "Flats in New Delhi",
        "Studio Apartments in New Delhi",
        "Resale House in New Delhi",
        "Flats in Delhi NCR",
        "Property in Delhi NCR",
        "House in Delhi NCR",
        "Farm House in Delhi NCR",
        "House for Sale in New Delhi",
        "Villas for Sale in New Delhi",
        "Penthouse in New Delhi",
        "Ready To Move Flats in New Delhi",
        "Resale Flats in New Delhi",
      ],
    },
    {
      id: "2",
      title: "BHK Specific Searches",
      PropertyTypes: [
        "BHK Flats in New Delhi",
        "BHK Flats in New Delhi",
        "BHK Flats in New Delhi",
        "BHK Flats in New Delhi",
        "BHK House for Sale in New Delhi",
        "BHK House for Sale in New Delhi",
        "BHK House for Sale in New Delhi",
        "BHK House for Sale in New Delhi",
        "BHK Villa for Sale in New Delhi",
        "BHK Villa for Sale in New Delhi",
        "BHK Villa for Sale in New Delhi",
      ],
    },
    {
      id: "3",
      title: "PopularFlatSearches",
      PropertyTypes: [
        "Saket",
        "Karol Bagh",
        "Lajpat Nagar",
        "Malviya Nagar",
        "Dwarka Mor",
        "Vasant Kunj",
        "Kalkaji",
        "Paschim Vihar",
        "Uttam Nagar",
        "Dwarka",
      ],
    },
    {
      id: "4",
      title: "Popular House Searches",
      PropertyTypes: [
        "Dwarka",
        "Uttam Nagar",
        "Janakpuri",
        "Najafgarh",
        "Vasant Vihar",
        "Safdarjung Enclave",
        "Saket",
        "Vasant Kunj",
        "Defence Colony",
      ],
    },
  ];
  const ftr = {
    about: {
      section: "Platform Overview",
      details: [
        "As the largest platform connecting property buyers and sellers, MAQ The World Projects boasts over 2 crore monthly visitors and 15 lakh active property listings. With over 17 years of experience, MAQ The World Projects has evolved into a comprehensive service provider, offering home loans, interiors and expert advice.",
        ,
        "MAQ The World Projects also offers extensive research-based knowledge and insight-driven platforms like MBTV, India's leading online real estate YouTube channel, along with proprietary tools providing home buyers with price trends, forecasts and locality reviews.",
      ],
    },

    network: {
      section: "More from Our Network",
      publications: [
        "Times of India",
        "Economic Times",
        "Navbharat Times",
        "India Times",
        "Filmfare",
        "MensXp",
        "iDiva",
        "TimesJobs",
        "Gadgets Now",
      ],
    },

    location: {
      section: "Properties in India",
      locations: [
        "New Delhi",
        "Mumbai",
        "Chennai",
        "Pune",
        "Noida",
        "Gurgaon",
        "Bangalore",
        "Ahmedabad",
      ],
    },

    project: {
      section: "New Projects in India",
      projects: [
        "New Projects in New Delhi",
        "New Projects in Mumbai",
        "New Projects in Chennai",
        "New Projects in Pune",
        "New Projects in Noida",
        "New Projects in Gurgaon",
        "New Projects in Bangalore",
        "New Projects in Ahmedabad",
      ],
    },

    secondary: [
      "Sitemap",
      "Terms & Conditions",
      "Privacy Policy",
      "Blog",
      "Careers",
      "Testimonials",
      "Feedback",
      "Unsubscribe",
      "Help Center",
      "Sales Enquiry",
      "Buy Our Services",
    ],
    disclaimer:
      "Disclaimer: BRAND Realty Services Limited is only an intermediary offering its platform to advertise properties of Seller for a Customer/Buyer/User coming on its Website and is not and cannot be a party to or privy to or control in any manner any transactions between the Seller and the Customer/Buyer/User. All the offers and discounts on this Website have been extended by Read more",
    copyRight:
      "All trademarks, logos and names are properties of their respective owners. All Rights Reserved. © Copyright 2024 ABARIS SOFTECH.",
  };

  return (
    <>
      <footer className="footer sectionSpace">
        <div className="container-fluid">
          <div className="row">
            {data.map((item) => {
              return (
                <div className="col-md-3" key={item.id}>
                  <div className="footerInfo">
                    <h4>{item.title}</h4>
                    <ul>
                      {item.PropertyTypes.map((name, i) => {
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
          <div className="midFooter">
            <div className="row">
              <div className="col-md-6">
                <div className="ftrInfo">
                  <h4>{ftr.about.section}</h4>
                  {ftr.about.details.map((item, i) => {
                    return <p key={i}>{item}</p>;
                  })}
                </div>
                <div className="ftrList">
                  <h4>{ftr.network.section}</h4>
                  <ul>
                    {ftr.network.publications.map((item, i) => {
                      return (
                        <li key={i}>
                          <a href="#">{item}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="ftrList">
                  <h4>{ftr.location.section}</h4>
                  <ul>
                    {ftr.location.locations.map((item, i) => {
                      return (
                        <li key={i}>
                          <a href="#">{item}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="ftrList">
                  <h4>{ftr.project.section}</h4>
                  <ul>
                    {ftr.project.projects.map((item, i) => {
                      return (
                        <li key={i}>
                          <a href="#">{item}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="secondarySec">
        <div className="container-fluid">
          <div className="secondaryInfo">
            <ul>
              {ftr.secondary.map((name, i) => {
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
      <div className="disclaimer">
        <div className="container-fluid">
          <p>{ftr.disclaimer}</p>
          <ul>
            <li className="address">
              <strong>Address</strong>
              <p>
                98B, 2nd Floor, Namberdar Estate, Taimoor Nagar, New Friends
                Colony, New Delhi-110025
              </p>
            </li>
            <li>
              <strong>Mobile</strong>
              <a href="8851746286">8851746286</a>
            </li>
            <li>
              <strong>Email</strong>
              <a href="#">info@maqtheworldgroup.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyRight">
        <div className="container-fluid">
          <p>{ftr.copyRight}</p>
        </div>
      </div>
    </>
  );
};
export default Footer;
