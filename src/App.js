/** @format */

import "./App.css";

import NAvbar from "./components/Navbar/NAvbar";
import Footer from "./components/footer/Footer";
import Allroute from "./components/main_routes/Allroute";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <NAvbar />
          <Allroute />
        </BrowserRouter>
      </div>

      <Footer />
    </>
  );
}

export default App;
