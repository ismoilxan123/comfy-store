import { NavLink } from "react-router-dom";

const HomeBtn = () => {
  return (
    <div className="hidden lg:flex md:flex sm:flex btn btn-secondary text-3xl items-center active">
      <NavLink to="/"> C</NavLink>
    </div>
  );
};

export default HomeBtn;
