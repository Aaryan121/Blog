import Navbar from "./components/Navbar/Navbar"
import "./styles.css"
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";

function App() {
  return (
  <div className="main">
    <Navbar/>
    <Single />
  </div>
  );
}

export default App;
