import logo from "./assets/logo.png"
import Personajes from "./componentes/Personajes";

function App() {
 
  return (
    <>
      <div className="logo"><img src={logo} alt="logo" /></div>
      <Personajes/>
    </>
  );
}

export default App;
