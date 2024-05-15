import { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AuthContext from "../context/AuthContext";

const Register = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
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

  const handleRegister = (e) => {
    e.preventDefault();
    fetch(`${baseUrl}/api/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message !== "Registered successfully") {
          toast.error(data.message, { theme: "colored" });
        }

        if (data.error) {
          toast.error(data.error, { theme: "colored" });
        }

        if (data.message === "Registered successfully") {
          toast.success(data.message, {
            theme: "colored",
            onClose: () => navigate("/login"),
          });
        }
      });
    setFormData({
      ...formData,
      firstName: "",
      lastName: "",
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
          <h1 className="text-2xl font-bold text-center">Sign up to Noteefy</h1>

          <form onSubmit={(e) => handleRegister(e)}>
            <div className="flex flex-col justify-center mt-5">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={(e) => handleInputChange(e)}
                placeholder="Enter your first name"
                className="border rounded-sm w-full px-3 py-1"
              />
            </div>

            <div className="flex flex-col justify-center mt-5">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={(e) => handleInputChange(e)}
                placeholder="Enter your last name"
                className="border rounded-sm w-full px-3 py-1"
              />
            </div>

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
                Sign Up
              </button>
            </div>

            <div className="flex flex-col justify-center mt-3 text-sm">
              <span>
                Already have an account?{" "}
                <Link to="/login" className="underline underline-offset-2">
                  Login here
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
