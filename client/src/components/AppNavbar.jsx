import { Navbar } from "flowbite-react";
import { PiNotepadFill } from "react-icons/pi";

const AppNavbar = () => {
  return (
    <Navbar className="py-5 shadow-sm bg-white">
      <div className="flex flex-row justify-center items-center">
        <PiNotepadFill className="text-4xl text-gray-500" />
        <h1 className="text-2xl font-extrabold text-cyan-700">Noteefy</h1>
      </div>
    </Navbar>
  );
};

export default AppNavbar;
