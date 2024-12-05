import { FaRegCircleCheck } from "react-icons/fa6";

const Benefits = () => {
  return (
    <>
      <div className="benefits wayOfWork ">
        <div className="title">
          <h3>Benefits of Selling Your Property Online</h3>
          <p>
            With a plethora of real estate websites to choose from, posting
            property online is now easy, convenient and hassle-free. Here are
            some benefits of buying and selling your property online:
          </p>
        </div>
        <div className="workItem">
          <div className="figure">
            <FaRegCircleCheck />
          </div>
          <div className="text">
            <h4>Time-Efficient</h4>
            <p>
              Selling your property online with portals such as MAQ
              The World Projects can help you save time, manage your bookings at
              your convenience and receive quality leads quickly.
            </p>
          </div>
        </div>
        <div className="workItem">
          <div className="figure">
            <FaRegCircleCheck />
          </div>
          <div className="text">
            <h4>Get Better Exposure To Potential Buyers</h4>
            <p>
              A large number of prospective buyers search online, a far easier
              way than visiting individuals properties. This helps your property
              get wider exposure to lakhs of buyers present online.
            </p>
          </div>
        </div>
        <div className="workItem">
          <div className="figure">
            <FaRegCircleCheck />
          </div>
          <div className="text">
            <h4>Cost-Effective</h4>
            <p>
              By opting to sell online, you can expect a significant reduction
              in agent fees and overall cost associated with selling a home
              traditionally.
            </p>
          </div>
        </div>
        <div className="workItem">
          <div className="figure">
            <FaRegCircleCheck />
          </div>
          <div className="text">
            <h4>More Services</h4>
            <p>
              Not only MAQ The World Projects offers a multitude of property
              services such as rent agreements, home cleaning, renovation,
              tenant verification, and more for your convenience.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Benefits;
