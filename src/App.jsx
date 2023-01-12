
import "./App.css";

import Menu from "./components/Menu";
import Order from "./components/Order";
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";
import Modal from "./components/Modal";

function App() {

  return (
    <>
      <div id="purple" className="w-[100vw] h-[100vh] fixed ">.</div>
      <Modal/>
      <div id="section-container" className="w-[100vw] flex flex-col max-w-[800px] box-border mx-auto">
        <NavBar/>
        <Welcome />
        <Menu />
        <Order/>  
      </div>
     
      
    </>


     
  
  );
}

export default App;
