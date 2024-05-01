import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import AuthContext from "../context/AuthContext";

const Home = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return isAuthenticated ? (
    <div>
      <h1>This is the homepage!</h1>
      <button
        type="button"
        onClick={handleLogout}
        className="bg-emerald-500 px-3 py-2 rounded text-white"
      >
        Logout
      </button>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default Home;
