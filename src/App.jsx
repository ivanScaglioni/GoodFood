
import "./App.css";
import Promo from "./components/Promo";
import Menu from "./components/Menu";
import Order from "./components/Order";
import NavBar from "./components/NavBar";

function App() {

  return (
    <>
      <NavBar/>
      <div className="max-w-[800px] mx-auto ">
        <Order />
        <Promo />
        <Menu />
      </div>
    </>


     
  
  );
}

export default App;
