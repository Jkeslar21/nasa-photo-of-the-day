import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Description from "./components/Description";
import Title from './components/Title';
import Media from './components/Media';
import Date from './components/Date';


function App() {
  const [nasaData, setNasaData] = useState([]);

  const fetchData = () => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
         .then(res => {
           setNasaData(res.data)
         })
         .catch(err => console.log(err))
  }

  useEffect( () => {
    fetchData();
  }, [])

  return (
    <div className="App">
      <Title nasaData={nasaData} />
      <Date nasaData={nasaData} />
      <Media nasaData={nasaData} />
      <Description nasaData={nasaData} />
    </div>
  );
}

export default App;
