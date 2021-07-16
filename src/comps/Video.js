import { useContext, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import MyContext from "../context/MyContext";
import cloudy from "../assests/cloudy.mp4";
import rainy from "../assests/rainy.mp4";
import sunny from "../assests/sunny.mp4";
import snowy from "../assests/snowy.mp4";

function Video() {
  const { myWeather } = useContext(MyContext);
  const [myVidi, setMyVidi] = useState(sunny);

  useEffect(() => {
    setMyVidi(() => {
      switch (myWeather.cond0) {
        case "Clear":
          return sunny;
        case "Rain":
          return rainy;
        case "Clouds":
          return cloudy;
        case "Snow":
          return snowy;
        default:
          return sunny;
      }
    });
  }, [myWeather]);

  return (
    <div className="videoContainer">
      <ReactPlayer
        url={myVidi}
        width="100%"
        height="auto"
        playing="true"
        loop="true"
        volume="0"
      />
    </div>
  );
}

export default Video;
