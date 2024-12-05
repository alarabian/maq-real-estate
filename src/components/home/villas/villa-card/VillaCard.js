import Image from 'next/image'
import React from 'react'

const VillaCard = ({item}) => {
  return (
    <>
      <div className="col-md-3">
        <div className="villaCard">
          <div className="figureCard">
              <a href="#" style={{backgroundColor: `${item.color}`}}>
              <Image src={item.url} width={300} height={400} alt={item.type} title={item.type} />
              <div className="text">
                <p>{item.properties}+</p>
                <h3>{item.type}</h3>
              </div>
              </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default VillaCard