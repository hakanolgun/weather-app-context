import "./App.css";
import Header from "./comps/Header";
import Body from "./comps/Body";

import { MyProvider } from "./context/MyContext";

function App() {
  return (
    <MyProvider>
      <div className="app">
        <Header />
        <Body />
      </div>
    </MyProvider>
  );
}

export default App;
