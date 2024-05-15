import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = ({ showMobileNav, setShowMobileNav, handleLogout }) => {
  const toggleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  return (
    <div className="flex flex-col justify-center bg-emerald-500 shadow- text-white h-[50px]">
      <nav className="flex justify-between items-center px-10">
        <NavLink to="./" className="font-bold text-xl">
          Noteefy
        </NavLink>
        <ul className="hidden sm:flex flex-row items-center gap-5">
          <li className="hover:underline hover:underline-offset-4 hover:cursor-pointer hover:scale-105">
            Profile
          </li>
          <li
            onClick={handleLogout}
            className="hover:underline hover:underline-offset-4 hover:cursor-pointer hover:scale-105"
          >
            Logout
          </li>
        </ul>
        <button className="flex sm:hidden font-bold text-xl" onClick={toggleMobileNav}>
          {!showMobileNav ? <FaBars /> : <FaTimes />}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
