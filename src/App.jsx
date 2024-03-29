import axios from 'axios'
import { useState } from 'react'
import './App.css';


function App() {
  const [ data, setData ] = useState({})
  const [ location, setLocation ] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=aaa77aec8939b09a0ca583eca113379c&units=imperial`;

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

      <div className="container">
      <div className="search">
      <h1 className='title'>Weather</h1>
        <input 
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Search City'
          type="text"
        />
      </div>
        <div className="top">
          <div className="location">
            <p className='city_name'>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ?  <h1>{data.main.temp.toFixed()}°F</h1> : null}
          </div>
          <div className="desc">
            {data.weather ? <p className='desc_p'>{data.weather[0].description}</p> : null}
          </div>
        </div>

        {data.name !== undefined &&
        <div className="bottom">
          <div className="feelsLike">
          {data.main ?  <p className='bold'>{data.main.feels_like.toFixed()}°F</p> : null}
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
            <p>Wind Speed</p>
          </div>
        </div>
        }
      </div>
    </div>
  );
}

export default App;
