import { useContext, useEffect } from "react";
import MyContext from "../context/MyContext";

function Body() {
  const API_key = "68fa173072924ae601704be2d93569fc";
  const { city, myWeather, setMyWeather } = useContext(MyContext);

  let myDateArray = [];
  for (let day = 0; day < 8; day++) {
    let date = new Date();
    date = date.getDate() + day;
    myDateArray.push(date);
  }

  const getWeather = async () => {
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${city.lat}&lon=${city.long}&units=metric&exclude=current,minutely,hourly,alerts&appid=${API_key}`
    );

    const myresponse = await api_call.json();

    setMyWeather((prev) => ({
      cond0: myresponse.daily[0].weather[0].main,
      min0: Math.floor(myresponse.daily[0].temp.min),
      max0: Math.floor(myresponse.daily[0].temp.max),
      cond1: myresponse.daily[1].weather[0].main,
      min1: Math.floor(myresponse.daily[1].temp.min),
      max1: Math.floor(myresponse.daily[1].temp.max),
      cond2: myresponse.daily[2].weather[0].main,
      min2: Math.floor(myresponse.daily[2].temp.min),
      max2: Math.floor(myresponse.daily[2].temp.max),
      cond3: myresponse.daily[3].weather[0].main,
      min3: Math.floor(myresponse.daily[3].temp.min),
      max3: Math.floor(myresponse.daily[3].temp.max),
      cond4: myresponse.daily[4].weather[0].main,
      min4: Math.floor(myresponse.daily[4].temp.min),
      max4: Math.floor(myresponse.daily[4].temp.max),
      cond5: myresponse.daily[5].weather[0].main,
      min5: Math.floor(myresponse.daily[5].temp.min),
      max5: Math.floor(myresponse.daily[5].temp.max),
      cond6: myresponse.daily[6].weather[0].main,
      min6: Math.floor(myresponse.daily[6].temp.min),
      max6: Math.floor(myresponse.daily[6].temp.max),
      cond7: myresponse.daily[7].weather[0].main,
      min7: Math.floor(myresponse.daily[7].temp.min),
      max7: Math.floor(myresponse.daily[7].temp.max),
    }));
  };

  const myImgFunc = () => {
    let myimg = document.getElementsByClassName("myWeatherImg");
    for (let i = 0; i < myimg.length; i++) {
      switch (myimg[i].parentNode.previousSibling.textContent) {
        case "Clear":
          return "http://openweathermap.org/img/wn/01d@2x.png";
          break;
        case "Rain":
          return "http://openweathermap.org/img/wn/10d@2x.png";
          break;
        case "Clouds":
          return "http://openweathermap.org/img/wn/02d@2x.png";
          break;
        case "Snow":
          return "http://openweathermap.org/img/wn/13d@2x.png";
          break;
        case "Drizzle":
          return "http://openweathermap.org/img/wn/09d@2x.png";
          break;
        case "Thunderstorm":
          return "http://openweathermap.org/img/wn/11d@2x.png";
          break;
        default:
          return "http://openweathermap.org/img/wn/01n@2x.png";
      }
    }
  };

  let body = document.querySelector("body");
  switch (city.name) {
    case "Ankara":
      body.style.backgroundImage = `url("https://upload.wikimedia.org/wikipedia/commons/c/ce/An%C4%B1tkabir%2C_Ankara.jpg")`;
      break;
    case "İstanbul":
      body.style.backgroundImage = `url("https://www.middleeastmonitor.com/wp-content/uploads/2020/07/20200710_2_43383664_56593866.jpg")`;
      break;
    case "Samsun":
      body.style.backgroundImage = `url("https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Samsun-landing.jpg/1200px-Samsun-landing.jpg")`;
      break;
    case "Kocaeli":
      body.style.backgroundImage = `url("https://upload.wikimedia.org/wikipedia/commons/1/1f/Kocaeli_Kartepe_Tarihi_Hikmetiye_Camii_DSC_6832.jpg")`;
      break;
    case "Rize":
      body.style.backgroundImage = `url("https://images.unsplash.com/photo-1568960713091-53ccd34c0d7f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80")`;
      break;
    default:
      body.style.backgroundColor = "white";
  };

  // let Apps = document.getElementsByClassName("app");
  // let myApp = Apps[0];
  // switch (myWeather.cond0) {
  //   case "Clear":
  //     myApp.style.backgroundImage = `url("https://upload.wikimedia.org/wikipedia/commons/c/ce/An%C4%B1tkabir%2C_Ankara.jpg")`;
  //     break;
  //   case "Rain":
  //     myApp.style.backgroundImage = `url("https://www.middleeastmonitor.com/wp-content/uploads/2020/07/20200710_2_43383664_56593866.jpg")`;
  //     break;
  //   case "Clouds":
  //     myApp.style.backgroundImage = `url("https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Samsun-landing.jpg/1200px-Samsun-landing.jpg")`;
  //     break;
  //   case "Kocaeli":
  //     myApp.style.backgroundImage = `url("https://upload.wikimedia.org/wikipedia/commons/1/1f/Kocaeli_Kartepe_Tarihi_Hikmetiye_Camii_DSC_6832.jpg")`;
  //     break;
  //   case "Rize":
  //     myApp.style.backgroundImage = `url("https://images.unsplash.com/photo-1568960713091-53ccd34c0d7f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80")`;
  //     break;
  //   default:
  //     myApp.style.backgroundColor = "white";
  // };



  useEffect( () => {
    getWeather();
    myImgFunc();
  }, [city]);

  return (
    <div className="weathercardscontainer">
      <div className="dayCard">
        <p>Today</p>
        <p>{myWeather.cond0}</p>
        <p>
          <img className="myWeatherImg" src={myImgFunc()} alt="" />
        </p>
        <p className="tempParagrafi">
          <span>{myWeather.max0}&#176; </span>
          <span>{myWeather.min0}&#176; </span>
        </p>
      </div>
      <div className="dayCard">
        <p>{myDateArray[1]}</p>
        <p>{myWeather.cond1}</p>
        <p>
          <img className="myWeatherImg" src={myImgFunc()} alt="" />
        </p>
        <p className="tempParagrafi">
          <span>{myWeather.max1}&#176; </span>
          <span>{myWeather.min1}&#176; </span>
        </p>
      </div>
      <div className="dayCard">
        <p>{myDateArray[2]}</p>
        <p>{myWeather.cond2}</p>
        <p className="tempParagrafi">
          <img className="myWeatherImg" src={myImgFunc()} alt="" />
        </p>
        <p className="tempParagrafi">
          <span>{myWeather.max2}&#176; </span>
          <span>{myWeather.min2}&#176; </span>
        </p>
      </div>
      <div className="dayCard">
        <p>{myDateArray[3]}</p>
        <p>{myWeather.cond3}</p>
        <img className="myWeatherImg" src={myImgFunc()} alt="" />
        <p className="tempParagrafi">
          <span>{myWeather.max3}&#176; </span>
          <span>{myWeather.min3}&#176; </span>
        </p>
      </div>
      <div className="dayCard">
        <p>{myDateArray[4]}</p>
        <p>{myWeather.cond4}</p>
        <img className="myWeatherImg" src={myImgFunc()} alt="" />
        <p className="tempParagrafi">
          <span>{myWeather.max4}&#176; </span>
          <span>{myWeather.min4}&#176; </span>
        </p>
      </div>
      <div className="dayCard">
        <p>{myDateArray[5]}</p>
        <p>{myWeather.cond5}</p>
        <img className="myWeatherImg" src={myImgFunc()} alt="" />
        <p className="tempParagrafi">
          <span>{myWeather.max5}&#176; </span>
          <span>{myWeather.min5}&#176; </span>
        </p>
      </div>
      <div className="dayCard">
        <p>{myDateArray[6]}</p>
        <p>{myWeather.cond6}</p>
        <img className="myWeatherImg" src={myImgFunc()} alt="" />
        <p className="tempParagrafi">
          <span>{myWeather.max6}&#176; </span>
          <span>{myWeather.min6}&#176; </span>
        </p>
      </div>
      <div className="dayCard">
        <p>{myDateArray[7]}</p>
        <p>{myWeather.cond6}</p>
        <img className="myWeatherImg" src={myImgFunc()} alt="" />
        <p className="tempParagrafi">
          <span>{myWeather.max7}&#176; </span>
          <span>{myWeather.min7}&#176; </span>
        </p>
      </div>
    </div>
  );
}

export default Body;
