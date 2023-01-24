import "./App.css";
import Main from "./components/Main";
import { Routes, Route } from "react-router-dom";
import Login from "./components/admin/Login";
import OurStory from "./components/OurStory";
import MemberShip from "./components/MemberShip";
import Write from "./components/Write";
import PieChart from "./components/admin/PieChart";
import Admin from "./components/admin/Admin";
import Dashboard from "./components/admin/Dashboard";
import News from "./components/admin/News";
import User from "./components/admin/User";

function App() {
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
        <Route path="/admin" element={<Admin />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="news" element={<News />} />
          <Route path="user" element={<User />} />
        </Route>
        <Route path="/piechart" element={<PieChart />} />
      </Routes>
    </div>
  );
}

export default App;
