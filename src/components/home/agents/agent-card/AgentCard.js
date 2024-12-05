import Image from "next/image";
import React from "react";

const AgentCard = ({ item }) => {
  return (
    <>
      <div className="col-md-3">
        <div className="agentCard">
          <div className="header">
            <div className="profile">
              <Image
                src={item.company.url}
                width={60}
                height={60}
                alt="MAQ The World Projects"
              />
              <div className="text">
                <a href="/agent-profile">{item.company.name}</a>
                <h6>{item.company.agent.name}</h6>
              </div>
            </div>
            <div className="verified">{item.company.agent.status}</div>
          </div>
          <div className="body">
            <div className="profile">
              <Image
                src={item.company.agent.url}
                width={60}
                height={30}
                alt="MAQ The World Projects"
              />
              <h6>{item.company.affiliation}</h6>
              <p>Operating Since {item.company.operation_year}</p>
            </div>
            <div className="serve">
              <p>Buyers Served {item.company.buyers_served}+</p>
            </div>
          </div>
          <div className="footer">
            <ul>
              <li>
                <strong>{item.company.properties.for_sale}</strong>
                Properties for sale
              </li>
              <li>
                <strong>{item.company.properties.for_rent}</strong>
                Properties for rent
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgentCard;
