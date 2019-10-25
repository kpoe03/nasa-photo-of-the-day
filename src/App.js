import React, {useState, useEffect} from "react";
import axios from 'axios'
import "./App.scss";
import PhotoCard from './Components/PhotoCard';
import { Input } from 'semantic-ui-react';
import CommentForm from './Components/CommentForm';
import GridExampleColumnWidth from './Components/GridLayout';

function App() {

  const [cardState, cardSetter] = useState({})
  const [date, dateSetter] = useState('')

  useEffect(() => {
    // Make a request for a user with a given ID
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then( res =>{
        // handle success
        console.log(res);
        cardSetter(res.data);
      })
  },[date])

  

  return (
    <div className="App">

      <Input onChange={(event) => dateSetter(event.target.value)} type="date"/>

      {/* <input  type={"date"}></input> */}

      <div className="photo-cards">
        {cardState
        ? <PhotoCard 
            title={cardState.title}
            url={cardState.url}
            explanation={cardState.explanation}
            date={cardState.date}
            type={cardState.media_type}
          /> : <div>loading</div>
          }
      </div>    
      <div>{App}</div>
     <div className="comments">{CommentForm}</div>
    </div>
  );
}

export default App;

