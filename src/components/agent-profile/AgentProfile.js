import Image from "next/image";

const agentData = {
  name: "Ravi Kumar",
  title: "Paul Associate",
  operating_since: 2001,
  properties: {
    for_sale: 34,
    for_rent: 19,
  },
  deals_in: ["Rent/Lease", "Pre-launch", "Original Booking", "Resale"],
  operates_in: [
    "Kalkaji",
    "Hemkunt Colony",
    "Chittaranjan Park",
    "Greater Kailash 1",
    "Greater Kailash 2",
    "East Of Kailash",
    "Greater Kailash Part 3",
    "Defence Colony",
    "Vikram Vihar Lajpat Nagar 4",
    "Alaknanda",
  ],
};

const AgentProfile = () => {
  return (
    <>
      <section className="agentProfileSec sectionSpace">
        <div className="container-fluid">
          <div className="sectionTitle mb-5">
            <h2>About Paul Associate</h2>
            <p>
              We are one of the oldest and most reliable Real Estate Consultants
              network in Delhi/NCR. Our management team consists of a strong
              team of people with more than 15+ years of experience in the real
              estate industry.
            </p>
          </div>

          <div className="agentProfileInfo">
            <div className="row">
              <div className="col-md-3">
                <div className="profileFigure">
                  <Image
                    src="/assets/images/Profile-1-5244028_197_200.jpg"
                    width={200}
                    height={200}
                    alt="Profile"
                    title="Profile"
                  />
                  <button className="btn">Contact Agent</button>
                </div>
              </div>
              <div className="col-md-9">
                <div className="profileCard">
                  <div className="header">
                    <h4>{agentData.name}</h4>
                    <p>{agentData.title}</p>
                    <span>Operating Since: {agentData.operating_since}</span>
                  </div>
                  <div className="body">
                    <div className="prop">
                      <p>
                        <strong>34</strong> Properties For Sale{" "}
                      </p>
                      <p>
                        <strong>19</strong> Properties For rent{" "}
                      </p>
                    </div>
                    <div className="propItem">
                      <h5>Deals in</h5>
                      <ul>
                        {agentData.deals_in.map((item, i) => {
                          return <li key={i}>{item}</li>;
                        })}
                      </ul>
                    </div>
                    <div className="propItem">
                      <h5>Operates in</h5>
                      <ul>
                        {agentData.operates_in.map((item, i) => {
                          return <li key={i}>{item}</li>;
                        })}
                      </ul>
                    </div>
                  </div>
                  <div className="tableList">
                    <ul>
                      <li>
                        <strong>Team Size</strong> 2 people{" "}
                      </li>
                      <li>
                        <strong>Address</strong> B-301, Ground Floor,
                        Chittaranjan Park, New Delhi, Delhi 110019
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid"></div>
      </section>
    </>
  );
};

export default AgentProfile;
