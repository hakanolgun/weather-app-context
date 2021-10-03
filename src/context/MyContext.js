import { createContext, useState } from "react";
import cities from "./data.json";

const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [city, setCity] = useState(cities[33]);
  const [weatherData, setWeatherData] = useState([]);
  const [videoData, setVideoData] = useState("sunny");
  const values = {
    city,
    setCity,
    cities,
    weatherData,
    setWeatherData,
    videoData,
    setVideoData,
  };
  return <MyContext.Provider value={values}>{children}</MyContext.Provider>;
};

export default MyContext;
