import { Outlet } from "react-router-dom";
import Header from "../layout/Header";
import Hero from "../layout/Hero";
const Root = () => {
  return (
    <div className="container">
      <Header />
      <Hero />
      <Outlet />
    </div>
  );
};

export default Root;
