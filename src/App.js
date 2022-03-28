import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { apiKey } from "./config/apiKey";

function App() {
  const lang = "pt_br";
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState([]);

  const getWeather = (event) => {
    if (event.key === "Enter") {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=${lang}&APPID=${apiKey}`
      )
        .then(async (data) => {
          if (data.ok) {
            data = await data.json();
            setWeatherData([...weatherData, data]);
            setCity("");
          }
        })
        .catch((e) => console.log("Connection error", e));
    }
  };

  const handleDeleteButton = (name) => {
    const newWeatherData = weatherData.filter(weather => weather.name !== name);
    setWeatherData(newWeatherData)
  }

  return (
    <>
      <Header />
      <Main
        city={city}
        setCity={setCity}
        getWeather={getWeather}
        weatherData={weatherData}
        handleDeleteButton={handleDeleteButton}
      />
    </>
  );
}

export default App;
