import { useContext } from "react";
import MyContext from "../context/MyContext";

function Header() {
  const { city, setCity, cities } = useContext(MyContext);


  let citiesList =
    cities.length > 0 &&
    cities.map((item, i) => {
      return (
        <option key={i} value={item.name}>
          {item.name}
        </option>
      );
    }, this);

    const setMe = (e) =>{
        for (let i = 0; i < cities.length; i++) {
            if(e.target.value === cities[i].name){
                setCity(cities[i]);
            }
        }
    } 

  return (
    <div className="headerContainer">
      <select value={city.name} onChange={setMe} className="citySelect">{citiesList}</select>
    </div>
  );
}

export default Header;