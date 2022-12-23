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
      <script
        type="text/javascript"
        id="hs-script-loader"
        async
        defer
        src="//js-eu1.hs-scripts.com/26751550.js"
      ></script>
    </div>
  );
};

export default Layout;
