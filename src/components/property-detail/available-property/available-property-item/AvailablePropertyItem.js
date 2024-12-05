import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";

const AvailablePropertyItem = ({item}) => {
  return (
    <>
      <div className="col-md-3">
        <div className="propertyItem">
          <div className="propertyFigure">
            <a href="/property-detail">
              <Image
                src={item.url}
                alt={item.title}
                title={item.title}
                width={300}
                height={200}
                
              />
              <span className="num">30</span>
            </a>
          </div>
          <div className="propertyContent">
            <div className="text">
              <h6>{item.area}</h6>
              <h3>{item.title}</h3>
              <p>{item.add}</p>
            </div>
            <a href="#" className="detail">
              Detail <BsArrowUpRight />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default AvailablePropertyItem