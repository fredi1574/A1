import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const UserButton = ({ userName, backgroundColor, hoverColor }) => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("username");
    navigate("/");
  };

  return (
    <div>
      {/* User button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`text-xl ${hoverColor} duration-200 rounded-full focus:outline-none`}
      >
        <div className="flex gap-2 p-2">
          <div>{userName}</div>
          <div>&#9660;</div>
        </div>
      </button>

      {/* Background overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-50"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Dropdown menu */}
      {isOpen && (
        <div
          className={`absolute right-0 mt-2 w-48 ${backgroundColor} rounded-lg shadow-lg p-2 shadow-black/40 border-2 z-50`}
        >
          <ul>
            <li>
              <Link
                to="/ChangePassword"
                className={`block px-4 py-2 text-white ${hoverColor} rounded-lg transition duration-200 w-full text-left`}
              >
                Change password
              </Link>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className={`block px-4 py-2 text-white ${hoverColor} rounded-lg transition duration-200 w-full text-left`}
              >
                Log out
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserButton;
