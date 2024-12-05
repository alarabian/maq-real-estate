import { FaRegCircleCheck } from "react-icons/fa6";
import { LuMoveRight } from "react-icons/lu";

const AboutColony = () => {
  return (
    <>
      <div className="aboutColony propertyCard">
        <div className="header">
          <h3>About Dilshad Colony </h3>
          <a href="#">
            Explore Locality <LuMoveRight />
          </a>
        </div>
        <div className="rankNum">
          <ul>
            <li>
              <strong>4.2</strong>
              18 Reviews
            </li>
            <li>
              <strong>Rank 361</strong>
              out of 2624 localities
            </li>
          </ul>
        </div>
        <div className="bodyList">
          <div className="row">
            <div className="col-md-4">
              <div className="bodyListItem">
                <h6>Educational Institutes</h6>
                <ul>
                  <li>
                    <FaRegCircleCheck />
                    New Creation Public School
                  </li>
                  <li>
                    <FaRegCircleCheck />
                    University College Of Medical Science
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bodyListItem">
                <h6>Transportation Hubs</h6>
                <ul>
                  <li>
                    <FaRegCircleCheck />
                    Seemapuri Bus Depot
                  </li>
                  <li>
                    <FaRegCircleCheck />
                    Seemapuri (Old)
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-4">
              <div className="bodyListItem">
                <h6>Shopping Centers</h6>
                <ul>
                  <li>
                    <FaRegCircleCheck />
                    Pacific Mall
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="desc">
          <p>
            Dilshad Colony is a well-developed residential locality in North
            East Delhi, adjoining the city of Ghaziabad in Uttar Pradesh. Built
            mainly by private developers, the locality is right next to Dilshad
            Garden, Seemapuri, Shalimar Garden and Old Seemapuri, and enjoys
            metro connectivity through the Red line of the Delhi Metro. It
            comprises of low-rise housing complexes, builder floors and
            individual houses, and possesses a community centre, government
            school, government dispensary, few parks and functional RWA{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutColony;
