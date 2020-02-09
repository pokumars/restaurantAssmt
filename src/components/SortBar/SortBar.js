import React from 'react'
import './SortBar.css'

const SortBar = (props) => {
  const { sortBy, handleSort } = props


  return (<>
    <div className="SortBar">
    <label>Sort By: </label>
        <select value={sortBy} onChange={handleSort}>
          <option value="Default">Default</option>
          <option value="Alphabetically">Alphabetically</option>
          <option value="Reverse Alphabetically">Reverse Alphabetically</option>
        </select>
    </div>
      
  
  </>)
}

export default SortBar