import { Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const PasswordInput = ({ value, handleInputChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className="block mb-2">
        <Label htmlFor="email" value="Password" />
      </div>
      <div className="flex relative">
        <TextInput
          id="password"
          name="password"
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={(e) => handleInputChange(e)}
          placeholder="Enter your password"
          sizing="md"
          icon={FaLock}
          className="w-full"
        />
        <button
          type="button"
          className="absolute right-3 top-3 text-gray-500 text-xl"
          onClick={toggleShowPassword}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;
