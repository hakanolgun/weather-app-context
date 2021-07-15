import { createContext, useState } from "react";

const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [myWeather, setMyWeather] = useState({
    cond0: "Clear",
    min0: undefined,
    max0: undefined,
    cond1: undefined,
    min1: undefined,
    max1: undefined,
    cond2: undefined,
    min2: undefined,
    max2: undefined,
    cond3: undefined,
    min3: undefined,
    max3: undefined,
    cond4: undefined,
    min4: undefined,
    max4: undefined,
    cond5: undefined,
    min5: undefined,
    max5: undefined,
    cond6: undefined,
    min6: undefined,
    max6: undefined,
    cond7: undefined,
    min7: undefined,
    max7: undefined,
  });

  const cities = [
    { name: "Ankara", lat: 39.92, long: 32.85 },
    { name: "İstanbul", lat: 41.12, long: 28.97 },
    { name: "Samsun", lat: 41.29, long: 36.33 },
    { name: "Kocaeli", lat: 40.85, long: 29.88 },
    { name: "Rize", lat: 40.01, long: 40.52 },
  ];

  const [city, setCity] = useState(cities[0]);

  const values = {
    city,
    setCity,
    cities,
    myWeather,
    setMyWeather
  };
  return <MyContext.Provider value={values}>{children}</MyContext.Provider>;
};

export default MyContext;
