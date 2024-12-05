import { IoDocumentTextOutline } from "react-icons/io5";

const TipsSelling = () => {
  return (
    <>
      <div className="tipsSelling wayOfWork ">
        <div className="title">
          <h3>Tips on Selling a Property Online </h3>
        </div>
        <div className="workItem">
          <div className="figure">
            <IoDocumentTextOutline />
          </div>
          <div className="text">
            <h4>Post your Property Ad</h4>
            <p>
              Enter all details like locality name, amenities etc. along with
              uploading Photos
            </p>
          </div>
        </div>
        <div className="workItem">
          <div className="figure">
            <IoDocumentTextOutline />
          </div>
          <div className="text">
            <h4>Add Quality Photos</h4>
            <p>
              Do not forget to add high-quality photos as it iss key for any
              property to stand out. You can always request a photoshoot of your
              property through MAQ The World Projects Photoshoot Service.
            </p>
          </div>
        </div>
        <div className="workItem">
          <div className="figure">
            <IoDocumentTextOutline />
          </div>
          <div className="text">
            <h4>Choose Correct Locality/Address</h4>
            <p>
              Make sure to accurately map your locality while filling in the
              details of your property. Adding a correct locality is essential
              to receive genuine queries for your property.
            </p>
          </div>
        </div>
        <div className="workItem">
          <div className="figure">
            <IoDocumentTextOutline />
          </div>
          <div className="text">
            <h4>Write a Great Description</h4>
            <p>
              Provide a short description for your property highlighting the key
              USPs and all the relevant details to help buyers make a decision.
              On MAQ The World Projects, you can always request a stellar
              description by Content Experts.
            </p>
          </div>
        </div>
        <div className="workItem">
          <div className="figure">
            <IoDocumentTextOutline />
          </div>
          <div className="text">
            <h4>Add additional details</h4>
            <p>
              You need to add all the relevant details about your property like
              the type of furnishing, flooring, water supply, etc. for it to
              rank higher in search results to catch the buyers eye.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TipsSelling;
