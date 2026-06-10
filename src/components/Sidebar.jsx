import {
  FiGrid,
  FiCreditCard,
  FiFileText,
  FiSettings,
  FiLogIn,
} from "react-icons/fi";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-[250px] bg-white border-r min-h-screen p-5">
      <h1 className="text-2xl font-bold text-teal-700 mb-10">Admin Dash</h1>

      <div className="space-y-4">
        <div className="flex items-center gap-3 text-teal-700 font-medium bg-teal-50 p-3 rounded-xl">
          <FiGrid />
          Dashboard
        </div>

        <div className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-xl cursor-pointer">
          <FiFileText />
          <Link to="/about">About</Link>
        </div>

        <div className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-xl cursor-pointer">
          <FiCreditCard />
          <Link to="/report">Reports</Link>
        </div>

        <div className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-xl cursor-pointer">
          <FiLogIn />
          <Link to="/login">Login / SignUp</Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;