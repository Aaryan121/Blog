import Navbar from "./components/Navbar/Navbar"
import "./styles.css"
import Home from "./pages/home/Home";

function App() {
  return (
  <div className="main">
    <Navbar/>
    <Home />
  </div>
  );
}

export default App;
