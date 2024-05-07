import { useContext } from "react";
import { Navigate } from "react-router-dom";

import AuthContext from "../context/AuthContext";
import Navbar from "../components/Navbar";
const Home = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? (
    <div>
      <Navbar />
      <h1>This is the homepage</h1>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default Home;
