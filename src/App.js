import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import DashBoard from "./components/DashBoard/DashBoard";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Sidebar></Sidebar>

      <Routes>
        <Route path="dashboard" element={<DashBoard />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
