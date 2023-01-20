import "./App.css";
// import news from './data';
// import trendingItems from './trending';
// import Header from "./components/Header";
import Main from "./components/Main";
import { Routes, Route } from "react-router-dom";
// import LoginModal from "./components/LoginModal";
// import GoogleLogin from "./components/GoogleLogin";
// import NewsDetail from "./components/NewsDetail";
import Login from "./components/admin/Login";
// import Admin from "./components/admin/Admin";
import { useState } from "react";
// import BarChart from "./components/admin/BarChart";
// import ImageSection from "./components/ImageSection";
import OurStory from "./components/OurStory";
import MemberShip from "./components/MemberShip";
import Write from "./components/Write";
import AdminIndex from "./components/admin/AdminIndex";
import PieChart from "./components/admin/PieChart";
import Admin from "./components/admin/Admin";
// import Modal from "./components/modal";

function App() {
  const [user, setUser] = useState();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/ourstory" element={<OurStory />} />
        <Route path="/membership" element={<MemberShip />} />
        <Route path="/write" element={<Write />} />
      </Routes>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/barchart" element={<AdminIndex />} />
        <Route path="/piechart" element={<PieChart />} />
      </Routes>
    </div>
  );
}

export default App;
