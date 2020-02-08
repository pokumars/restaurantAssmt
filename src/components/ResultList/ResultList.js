import React from 'react'
import Restaurant from '../Restaurant/Restaurant'
import './ResultList.css'

const ResultList = ({ restaurants }) => {
  
  return (<>
 <div className="ResultList">
 {
   restaurants.map(r => {
      return <Restaurant restaurant={r} key={r.name}/>
    })
  }
 </div>
  
  </>)
}

export default ResultList