import { useContext } from "react";
import Hooks from "./Hooks";
import { ThemeContext } from "./context/ThemeContextComponent";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const theme = useContext(ThemeContext)
  return (
    <div className="App">
      <Navbar/>
      <hr/>
      {theme.isDark?"DARK FROM MAIN":"LIGHT FROM MAIN"}
       <hr/>
      <Main/>
      <hr/>
      <Footer/>
      
      {/* <Hooks/> */}
      
    </div>
  );
}

export default App;
