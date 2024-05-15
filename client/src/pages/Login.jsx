import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AuthContext from "../context/AuthContext";

const Login = () => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
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
        if (data.message === "Email or password is invalid") {
          toast.error(data.message, {
            theme: "colored",
          });
        }

        if (data.error) {
          toast.error(data.error, {
            theme: "colored",
          });
        }

        if (typeof data.accessToken !== "undefined") {
          login(data.accessToken);
        }
      });
    setFormData({
      ...formData,
      email: "",
      password: "",
    });
  };

  return isAuthenticated ? (
    <Navigate to="/" />
  ) : (
    <>
      <ToastContainer autoClose={2500} pauseOnHover={false} />
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
                value={formData.email}
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
                value={formData.password}
                onChange={(e) => handleInputChange(e)}
                placeholder="Enter your password"
                className="border rounded-sm w-full px-3 py-1"
              />
            </div>

            <div className="flex flex-col justify-center mt-5">
              <button
                type="submit"
                className="bg-emerald-500 hover:bg-emerald-600 text-white py-2 w-full"
              >
                Login
              </button>
            </div>

            <div className="flex flex-col justify-center mt-3 text-sm">
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
    </>
  );
};

export default Login;
