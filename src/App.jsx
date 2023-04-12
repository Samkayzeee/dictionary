import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

useEffect(() => {
  const getMeaning = async() => {
    const get = await axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/angel');
    const show = get.data;
    console.log(show);
  }
  getMeaning();

},[])


  return (
    <div className="App">
      
    </div>
  )
}

export default App
