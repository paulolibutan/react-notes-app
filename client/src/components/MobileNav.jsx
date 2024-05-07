import { NavLink } from "react-router-dom";

const MobileNav = ({ handleLogout }) => {
  return (
    <div className="bg-emerald-500 text-white">
      <ul className="flex flex-col items-center py-5">
        <NavLink className="hover:underline hover:underline-offset-4 hover:cursor-pointer hover:scale-105">
          Edit Profile
        </NavLink>
        <NavLink onClick={handleLogout} className="hover:underline hover:underline-offset-4 hover:cursor-pointer hover:scale-105">
          Logout
        </NavLink>
      </ul>
    </div>
  );
};

export default MobileNav;
