import { useContext, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { Navigate } from "react-router-dom";

import AuthContext from "../context/AuthContext";
import Navbar from "../components/Navbar";
import CreateNote from "../components/CreateNote";
import MobileNav from "../components/MobileNav";
const Home = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);

  const handleLogout = () => {
    logout();
  };

  return isAuthenticated ? (
    <div>
      <Navbar
        handleLogout={handleLogout}
        showMobileNav={showMobileNav}
        setShowMobileNav={setShowMobileNav}
      />
      {showMobileNav && <MobileNav handleLogout={handleLogout} />}
      <CreateNote isOpen={isOpen} setIsOpen={setIsOpen} />
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-10 right-10 bg-emerald-500 p-3 rounded-full text-2xl text-white shadow-2xl"
      >
        <FaPlus />
      </button>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default Home;
