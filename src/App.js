import React, { useState } from "react"
import "./App.css"
import spots from "./restaurants"
import ResultList from "./components/ResultList/ResultList"
import SortBar from "./components/SortBar/SortBar"

const App = () => {
  const [ restaurants, setRestaurants ] = useState([...spots.restaurants])
  const [ sortBy, setSortBy ] = useState("Default")

  const handleSort = (event) => {
    event.preventDefault()
    setSortBy(event.target.value)

    const sortAlphabeticallly = (a, b) => {
      var objA = a.name.toUpperCase()
      var objB = b.name.toUpperCase()
      return (objA < objB) ? -1 : (objA > objB) ? 1 : 0
    }

    switch (event.target.value) {
    case "Alphabetically":
      setRestaurants([...spots.restaurants].sort(sortAlphabeticallly))
      console.log("Alphabetically")
      break

    case "Reverse Alphabetically":
      setRestaurants([...spots.restaurants].sort(sortAlphabeticallly).reverse())
      console.log("Alphabetically")
      break
        
    default:
      setRestaurants([...spots.restaurants])
    }
  }
 
  return (<>
    <h1> Bonsoir </h1>
    <SortBar sortBy= {sortBy} handleSort={handleSort}/>  
    <ResultList restaurants={restaurants} />
  </>)
}

export default App
