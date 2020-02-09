import React from 'react'
import Tags from '../Tags/Tags'
import './Restaurant.css'

const Restaurant = (props) => {
  const { name, tags, image, delivery_price } = props.restaurant
//TODO put a switch statement for the different currencies

  return (<>
    <div className="Restaurant">
      <div className="image-container">
        <img src={image} alt="restaurant"/>
      </div>
      <div className="Restaurant-info">
        <h2>{name}</h2>
        
        <Tags tagArr={tags} />
        <p>Delivery Price &euro;{(delivery_price/100).toFixed(2)}</p>

      </div> 

     
    </div>
  </>)
}

export default Restaurant
/** */