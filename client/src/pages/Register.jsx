import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col border min-w-[25%] p-10 mt-5 shadow-xl">
        <h1 className="text-2xl font-bold text-center">Sign up to Noteefy</h1>

        <div className="flex flex-col justify-center mt-5">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            placeholder="Enter your first name"
            className="border rounded-sm w-full px-3 py-1"
          />
        </div>

        <div className="flex flex-col justify-center mt-5">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            placeholder="Enter your last name"
            className="border rounded-sm w-full px-3 py-1"
          />
        </div>


        <div className="flex flex-col justify-center mt-5">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="border rounded-sm w-full px-3 py-1"
          />
        </div>

        <div className="flex flex-col justify-center mt-5">
          <label htmlFor="email">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="border rounded-sm w-full px-3 py-1"
          />
        </div>

        <div className="flex flex-col justify-center mt-5">
          <button type="submit" className="bg-emerald-500 hover:bg-emerald-600 text-white py-2 w-full">
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
      </div>
    </div>
    </div>
  );
};

export default Register;
