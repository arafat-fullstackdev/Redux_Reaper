import { Outlet } from "react-router";
import Navbar from "./components/layout/Navbar";
import Login from "./components/account/Login";

function App() {
  return (
    <>
      <Navbar />
      <Login/>
      <Outlet />
    </>
  );
}

export default App;
