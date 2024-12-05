import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";

const PopularPropertyItem = ({ item }) => {
  return (
    <>
      <div className="col-md-3">
        <div className="propertyItem">
          <div className="propertyFigure">
            <Link href="/property-detail">
              <Image
                src={item.url}
                alt={item.title}
                title={item.title}
                width={300}
                height={200}
              />
              <span className="num">30</span>
            </Link>
          </div>
          <div className="propertyContent">
            <div className="text">
              <h6>{item.area}</h6>
              <h3>{item.title}</h3>
              <p>{item.add}</p>
            </div>
            <Link href="/property-detail" className="detail">
              Detail <BsArrowUpRight />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularPropertyItem;
