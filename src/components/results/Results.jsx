import { useEffect, useState } from "react";
import './Results.css';
import axios from 'axios';

const Results = () => {
    const [data, setData] = useState([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        const GetMeaning = async () => {
          setLoading(true);
          try {
            if (input === '') {
              const response = await axios.get("https://api.dictionaryapi.dev/api/v2/entries/en/dictionary");
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
            console.log(error.message);
            
          }
          setLoading(false);
        }
        GetMeaning();
      
      },[input])

      const search = (e) => {
        e.preventDefault();
        let input = e.target.search.value;
        setInput(input);
      }
      
    return ( 
        <>

    <div className="search-section">
        <form action="" onSubmit={search}>
          <input type="search" name="search" id="search" placeholder='Search...'/>
          <button>Search</button>
        </form>
      </div>
            <div className="result">
        {
          data.map((result, index) => {
            return(
              <div className="main-results" key={index}>
                {
                    
                }
                {/* sound button */}
                      <button className="sound-button" onClick={async() => {
                  let audio = result.phonetics;

                  if (audio.length >= 1) {
                    let found = audio.find((item) => item.audio != '');
                    if (!found) {
                      console.log('Not Found');
                    }
                    else{
                      let okay = await axios.get(found.audio, {
                        responseType: 'blob'
                      });
    
                      const play = new window.Audio(URL.createObjectURL(okay.data));
                      play.play();
                    }
                  }
                  else{
                    console.log('Audio Not found');
                    return
                  }
                }}><i className="fa-solid fa-volume-high"></i></button>
                {/* sound button */}
                <h1 className="word">{result.word}  {result.phonetic} </h1>

          
                {
                  result.meanings.map((meanings, index) => {
                    return(
                      <div className="definitions" key={index}>
                        <h4 className="partofspeech">{meanings.partOfSpeech}</h4>

                          {meanings.definitions.map((definition, index) => {
                              return(
                                <ul key={index}>
                                    <li>
                                        <h1>{definition.definition}</h1>
                                    </li>
                                    {
                                      definition.example?<p className="example">Example: <span>{definition.example}</span></p>:null
                                    }
                                </ul>
                                
                              );
                          })}
                      </div>
                    )
                  })
                }
              </div>
            )
          })
        }
    </div>

        </>
     );
}
 
export default Results;