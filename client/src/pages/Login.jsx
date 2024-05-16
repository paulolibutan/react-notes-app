import { Label, TextInput, Button } from "flowbite-react";
import { useEffect, useState } from "react";
import { MdEmail } from "react-icons/md";

import PasswordInput from "../components/PasswordInput";
import { validateEmail } from "../utils/helper";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setError("Please input a valid email address");
    } else if (formData.password === "") {
      setError("Please input a valid password");
    }

    // API call below
  };

  useEffect(() => {
    setError("");
  }, []);

  return (
    <div className="flex justify-center items-center mt-32">
      <form
        onSubmit={(e) => handleLogin(e)}
        className="flex flex-col gap-4 max-w-md w-full bg-transparent shadow-2xl p-10"
      >
        <h1 className="text-2xl text-center font-bold text-cyan-600">
          Login to Noteefy
        </h1>
        <div>
          <div className="block mb-2">
            <Label htmlFor="email" value="Email Address" />
          </div>
          <TextInput
            id="email"
            name="email"
            type="text"
            value={formData.email}
            onChange={(e) => handleInputChange(e)}
            placeholder="Enter your email address"
            icon={MdEmail}
            sizing="md"
          />
        </div>

        <PasswordInput
          handleInputChange={handleInputChange}
          value={formData.password}
        />

        <div className="text-red-500 text-sm">{error}</div>

        <Button className="w-full mt-2" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
