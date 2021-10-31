import { useContext, useEffect } from "react";
import MyContext from "../context/MyContext";

function Body() {
  const API_key = "68fa173072924ae601704be2d93569fc";
  const { city, weatherData, setWeatherData, setVideoData } =
    useContext(MyContext);
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  //Seçilen şehre göre ekran arkaplan resmini değiştirme
  let body = document.querySelector("body");
  switch (city.name) {
    case "ANKARA":
      body.style.backgroundImage = `url("https://upload.wikimedia.org/wikipedia/commons/c/ce/An%C4%B1tkabir%2C_Ankara.jpg")`;
      break;
    case "İSTANBUL":
      body.style.backgroundImage = `url("https://www.middleeastmonitor.com/wp-content/uploads/2020/07/20200710_2_43383664_56593866.jpg")`;
      break;
    case "SAMSUN":
      body.style.backgroundImage = `url("https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Samsun-landing.jpg/1200px-Samsun-landing.jpg")`;
      break;
    case "KOCAELİ":
      body.style.backgroundImage = `url("https://upload.wikimedia.org/wikipedia/commons/1/1f/Kocaeli_Kartepe_Tarihi_Hikmetiye_Camii_DSC_6832.jpg")`;
      break;
    case "RİZE":
      body.style.backgroundImage = `url("https://images.unsplash.com/photo-1568960713091-53ccd34c0d7f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80")`;
      break;
    case "ADANA":
      body.style.backgroundImage = `url("https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Adana_Roman_Bridge_(Ta%C5%9Fk%C3%B6pr%C3%BC)%2C_Turkey_(23768087008).jpg/1200px-Adana_Roman_Bridge_(Ta%C5%9Fk%C3%B6pr%C3%BC)%2C_Turkey_(23768087008).jpg")`;
      break;
    case "ADIYAMAN":
      body.style.backgroundImage = `url("https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Adiyaman%2C_Turkey_01.jpg/1200px-Adiyaman%2C_Turkey_01.jpg")`;
      break;
    case "AFYONKARAHİSAR":
      body.style.backgroundImage = `url("https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/AFYON_KALES%C4%B0NDEN_-_panoramio.jpg/1200px-AFYON_KALES%C4%B0NDEN_-_panoramio.jpg")`;
      break;
    case "AĞRI":
      body.style.backgroundImage = `url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/B%C3%BCy%C3%BCk_ve_K%C3%BC%C3%A7%C3%BCk_A%C4%9Fr%C4%B1_Da%C4%9F%C4%B1.jpg/1280px-B%C3%BCy%C3%BCk_ve_K%C3%BC%C3%A7%C3%BCk_A%C4%9Fr%C4%B1_Da%C4%9F%C4%B1.jpg")`;
      break;
    case "AMASYA":
      body.style.backgroundImage = `url("https://upload.wikimedia.org/wikipedia/commons/9/91/Amasya_genelgorunum.jpg")`;
      break;
    case "ANTALYA":
      body.style.backgroundImage = `url("https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Alanya.jpg/1200px-Alanya.jpg")`;
      break;
    case "ARTVİN":
      body.style.backgroundImage = `url("https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Artvin-2611076.jpg/1200px-Artvin-2611076.jpg")`;
      break;
    case "AYDIN":
      body.style.backgroundImage = `url("https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/MonumentAyd%C4%B1n_%283%29.JPG/1920px-MonumentAyd%C4%B1n_%283%29.JPG")`;
      break;
    case "BALIKESİR":
      body.style.backgroundImage = `url("http://upload.wikimedia.org/wikipedia/commons/4/42/IslandsofBal%C4%B1kesir.JPG")`;
      break;
    case "DENİZLİ":
      body.style.backgroundImage = `url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Denizli_6600.jpg/1200px-Denizli_6600.jpg")`;
      break;
    case "BURSA":
      body.style.backgroundImage = `url("https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Ulucami%2CBursa_-_panoramio.jpg/1280px-Ulucami%2CBursa_-_panoramio.jpg")`;
      break;
    case "ÇANAKKALE":
      body.style.backgroundImage = `url("https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/%C3%87anakkale_%C5%9Eehitleri_An%C4%B1t%C4%B1.JPG/1200px-%C3%87anakkale_%C5%9Eehitleri_An%C4%B1t%C4%B1.JPG")`;
      break;
    default:
      body.style.backgroundImage = `url("https://picsum.photos/1200/720")`;
  }

  //City her değiştiğinde API'den yeni bilgileri isteme ve değişkenlere atama
  useEffect(() => {
    const getWeather = async () => {
      const api_call = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${city.lat}&lon=${city.long}&units=metric&exclude=current,minutely,hourly,alerts&appid=${API_key}`
      );
      const res = await api_call.json();
      setWeatherData(res.daily);
      setVideoData(res.daily[0].weather[0].main);
    };
    getWeather();
  }, [city, setWeatherData, setVideoData]);

  return (
    <div className="weathercardscontainer">
      {weatherData &&
        weatherData.map((oneDay, i) => {
          return (
            <div className="dayCard" key={i}>
              <p>{days[new Date(oneDay.dt * 1000).getDay()]}</p>
              <div>
                <img
                  className="myWeatherImg"
                  src={`https://openweathermap.org/img/wn/${oneDay.weather[0].icon}@2x.png`}
                  alt="weather icon"
                />
              </div>
              <p className="tempParagrafi">
                <span>{Math.round(oneDay.temp.min)}&#176;</span>
                <span>{Math.round(oneDay.temp.max)}&#176;</span>
              </p>
            </div>
          );
        })}
    </div>
  );
}

export default Body;
