/* eslint-disable react/prop-types */
import React from "react"
import "./Tags.css"


const Tags = ({ tagArr }) => {
  
  return (<>
    <div className="Tags">
      {
        tagArr.map(tag => {
          return <p key={tag} className="Tag"> {tag}</p>
        })
      }
    </div>
  </>)
}

export default Tags