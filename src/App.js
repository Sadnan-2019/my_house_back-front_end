import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import DashBoard from "./components/DashBoard/DashBoard";
import Footer from "./components/Footer/Footer";
import LandLord from "./components/LandLord/LandLord";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Sidebar></Sidebar>

      <Routes>
            <Route path="/" element={<DashBoard />}></Route>
        <Route path="dashboard" element={<DashBoard />}></Route>
        <Route path="add-land-lord" element={<LandLord />}></Route>
    
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
