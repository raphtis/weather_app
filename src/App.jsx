import axios from 'axios'
import { useState } from 'react'
import './App.css';


function App() {
  const [ data, setData ] = useState({})
  const [ location, setLocation ] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=aaa77aec8939b09a0ca583eca113379c`;

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
    axios.get(url).then((response) => {
      setData(response.data)
      console.log(response.data)
    })
    setLocation('')
  }
  }
  return (
    <div className="app">
      <div className="search">
        <input 
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter location '
          type="text"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ?  <h1>{data.main.temp}°F</h1> : null}
          </div>
          <div className="desc">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
        <div className="bottom">
          <div className="feelsLike">
          {data.main ?  <p className='bold'>{data.main.feels_like}°F</p> : null}
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            {data.main ? <p className='bold'>{data.main.humidity}</p> : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p className='bold'>12mph</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
