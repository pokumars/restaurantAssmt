import React, { useState } from 'react';
import './App.css';
import spots from './restaurants'
import ResultList from './components/ResultList/ResultList';
import SortBar from './components/SortBar/SortBar';

const App = () => {
  const [ restaurants, setRestaurants ] = useState([...spots.restaurants])
  const [ sortBy, setSortBy ] = useState("default")
  

  const handleSort = (event) => {
    event.preventDefault();
    alert('Your choice ' + event.target.value);
    setSortBy(event.target.value);
  }
 
  return (<>
  
  <SortBar sortBy= {sortBy} handleSort={handleSort}/>  
  <ResultList restaurants={restaurants} />
  </>)
}

export default App;
