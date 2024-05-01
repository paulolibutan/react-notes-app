import { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

import AuthContext from "../context/AuthContext";

const Login = () => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();
  const { login, isAuthenticated } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    fetch(`${baseUrl}/api/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (typeof data.accessToken !== "undefined") {
          login(data.accessToken);
          navigate("/");
        }
      });
  };

  return isAuthenticated ? (
    <Navigate to="/" />
  ) : (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col border min-w-[25%] p-10 mt-5 shadow-xl">
        <h1 className="text-2xl font-bold text-center">Login to Noteefy</h1>
        <form onSubmit={(e) => handleLogin(e)}>
          <div className="flex flex-col justify-center mt-5">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => handleInputChange(e)}
              placeholder="Enter your email"
              className="border rounded-sm w-full px-3 py-1"
            />
          </div>

          <div className="flex flex-col justify-center mt-5">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              onChange={(e) => handleInputChange(e)}
              className="border rounded-sm w-full px-3 py-1"
            />
          </div>

          <div className="flex flex-col justify-center mt-5">
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white py-2 w-full">
              Login
            </button>
          </div>

          <div
            type="submit"
            className="flex flex-col justify-center mt-3 text-sm"
          >
            <span>
              No account yet?{" "}
              <Link to="/register" className="underline underline-offset-2">
                Sign up here
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
