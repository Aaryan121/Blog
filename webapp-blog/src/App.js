import Navbar from "./components/Navbar/Navbar"
import "./styles.css"
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";

function App() {
  return (
  <div className="main">
    <Navbar/>
    <Write />
  </div>
  );
}

export default App;
