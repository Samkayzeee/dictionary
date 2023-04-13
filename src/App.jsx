import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

useEffect(() => {
  const getMeaning = async () => {
    setLoading(true);
    try {
      if (input === '') {
        const response = await axios.get("https://api.dictionaryapi.dev/api/v2/entries/en/word");
        const data = response.data;
        console.log(data);
        setData(data);
      }
      else{
        const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`);
        if (response.status !== 200) {
          throw Error('Theirs is an Error Showing your Result.');
        }
        const data = response.data;
        console.log(data);
        setData(data);
      }
    } catch (error) {
      setError(error.message);
      if (error) {
        setLoading(false);
      }
      
    }
    setLoading(false);
  }
  getMeaning();

},[input])


const search = (e) => {
  e.preventDefault();
  let input = e.target.search.value;
  setInput(input);
}


  return (
    <div className="App">


      <div className="section1">
        <form action="" onSubmit={search}>
          <input type="search" name="search" id="search" />
          <button>done</button>
        </form>
      </div>


    <div className="result">

    </div>

    </div>
  )
}

export default App
