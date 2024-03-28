import useThemeToggle from "../hooks/useThemeToggle";

const CustomSwitch = ({ checked, onChange }) => {
  return (
    <div className="">
      <div className="relative inline-block w-8 h-4 rounded-full cursor-pointer top-1 left-1">
        <input
          defaultChecked={checked}
          id="switch-darkMode"
          type="checkbox"
          className="absolute w-14 h-8 duration-300 rounded-full appearance-none cursor-pointer peer bg-cyan-500 checked:bg-indigo-800 peer-checked:border-blue-500 peer-checked:before:bg-blue-500"
          onChange={onChange}
        />
        <label
          htmlFor="switch-darkMode"
          className=" absolute top-full left-1 h-6 w-6 -translate-y-2/4 cursor-pointer rounded-full border border-blue-100 bg-yellow-400 shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-slate-600 peer-checked:bg-slate-500"
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
