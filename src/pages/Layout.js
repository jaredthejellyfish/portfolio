import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import "../App.scss";
const Layout = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="page">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
