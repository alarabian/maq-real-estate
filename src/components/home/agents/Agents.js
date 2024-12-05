import AgentCard from "./agent-card/AgentCard";

const Agents = () => {
  const agentsData = [
    {
      id: "1",
      company: {
        name: "MB Preferred",
        url: "https://projects.maqtheworldgroup.com/assets/images/profile.jpg",
        agent: {
          name: "Ravi Kumar",
          url: "https://projects.maqtheworldgroup.com/assets/images/paul.jpg",
          status: "Verified",
        },
        affiliation: "Paul Associated",
        operation_year: 2001,
        buyers_served: 1000,
        properties: {
          for_sale: 34,
          for_rent: 19,
        },
      },
    },
    {
      id: "2",
      company: {
        name: "MB Preferred",
        url: "https://projects.maqtheworldgroup.com/assets/images/Profile-1-1618959_253_200.jpg",
        agent: {
          name: "Raj Gupta",
          url: "https://projects.maqtheworldgroup.com/assets/images/1618959_17070524O1400664285DEALER_4172822_LOGO_180_240.jpg",
          status: "Verified",
        },
        affiliation: "Karya Property Management ",
        operation_year: 2001,
        buyers_served: 3500,
        properties: {
          for_sale: 96,
          for_rent: 177,
        },
      },
    },
    {
      id: "3",
      company: {
        name: "MB Preferred",
        url: "https://projects.maqtheworldgroup.com/assets/images/Profile-1-5244028_197_200.jpg",
        agent: {
          name: "Sahil Gupta",
          url: "https://projects.maqtheworldgroup.com/assets/images/5244028_IMG_8318_180_240.jpg",
          status: "Verified",
        },
        affiliation: "Gupta Realtors",
        operation_year: 2005,
        buyers_served: 50000,
        properties: {
          for_sale: 872,
          for_rent: 2,
        },
      },
    },
    {
      id: "4",
      company: {
        name: "MB Preferred",
        url: "https://projects.maqtheworldgroup.com/assets/images/Profile-1-45403397_267_200.jpg",
        agent: {
          name: "Ashok Singh",
          url: "https://projects.maqtheworldgroup.com/assets/images/45403397_globallogo1_180_240.jpg",
          status: "Verified",
        },
        affiliation: "Global Property",
        operation_year: 2001,
        buyers_served: 1000,
        properties: {
          for_sale: 52,
          for_rent: 19,
        },
      },
    },
    {
      id: "6",
      company: {
        name: "MB Preferred",
        url: "https://projects.maqtheworldgroup.com/assets/images/Profile-1-1618959_253_200.jpg",
        agent: {
          name: "Raj Gupta",
          url: "https://projects.maqtheworldgroup.com/assets/images/1618959_17070524O1400664285DEALER_4172822_LOGO_180_240.jpg",
          status: "Verified",
        },
        affiliation: "Karya Property Management ",
        operation_year: 2001,
        buyers_served: 3500,
        properties: {
          for_sale: 96,
          for_rent: 177,
        },
      },
    },
    {
      id: "6",
      company: {
        name: "MB Preferred",
        url: "https://projects.maqtheworldgroup.com/assets/images/Profile-1-5244028_197_200.jpg",
        agent: {
          name: "Sahil Gupta",
          url: "https://projects.maqtheworldgroup.com/assets/images/5244028_IMG_8318_180_240.jpg",
          status: "Verified",
        },
        affiliation: "Gupta Realtors",
        operation_year: 2005,
        buyers_served: 50000,
        properties: {
          for_sale: 872,
          for_rent: 2,
        },
      },
    },
    {
      id: "7",
      company: {
        name: "MB Preferred",
        url: "https://projects.maqtheworldgroup.com/assets/images/Profile-1-45403397_267_200.jpg",
        agent: {
          name: "Ashok Singh",
          url: "https://projects.maqtheworldgroup.com/assets/images/45403397_globallogo1_180_240.jpg",
          status: "Verified",
        },
        affiliation: "Global Property",
        operation_year: 2001,
        buyers_served: 1000,
        properties: {
          for_sale: 52,
          for_rent: 19,
        },
      },
    },
    {
      id: "8",
      company: {
        name: "MB Preferred",
        url: "https://projects.maqtheworldgroup.com/assets/images/profile.jpg",
        agent: {
          name: "Ravi Kumar",
          url: "https://projects.maqtheworldgroup.com/assets/images/paul.jpg",
          status: "Verified",
        },
        affiliation: "Paul Associated",
        operation_year: 2001,
        buyers_served: 1000,
        properties: {
          for_sale: 34,
          for_rent: 19,
        },
      },
    },
  ];
  return (
    <>
      <section className="agentsSec">
        <div className="container-fluid">
          <div className="sectionTitle">
            <h2>MB Preferred Agents in New Delhi</h2>
          </div>
          <div className="row">
            {agentsData.map((item) => {
              return <AgentCard key={item.id} item={item} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Agents;
