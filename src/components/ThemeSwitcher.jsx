import React from "react";
import useThemeToggle from "../hooks/useThemeToggle";

const CustomSwitch = ({ checked, onChange }) => {
  const { isDarkMode } = useThemeToggle();

  return (
    <div className="inline-flex items-center">
      <div className="relative inline-block w-8 h-4 rounded-full cursor-pointer">
        <input
          defaultChecked={checked}
          id="switch-darkMode"
          type="checkbox"
          className="absolute w-8 h-4 duration-300 rounded-full appearance-none cursor-pointer peer bg-blue-gray-100 checked:bg-blue-500 peer-checked:border-blue-500 peer-checked:before:bg-blue-500"
          onChange={onChange}
        />
        <label
          htmlFor="switch-darkMode"
          className=" absolute top-1/2 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-blue-gray-100 bg-yellow-400 shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-blue-500 peer-checked:before:bg-blue-500"
        >
          <div className="p-5 rounded-full top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"></div>
        </label>
      </div>
    </div>
  );
};

const ThemeSwitcher = () => {
  const { isDarkMode, toggleTheme } = useThemeToggle();

  return (
    <div className="flex items-center justify-center">
      <CustomSwitch checked={isDarkMode} onChange={toggleTheme} />
    </div>
  );
};

export default ThemeSwitcher;
