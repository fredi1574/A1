import useThemeToggle from "../hooks/useThemeToggle";

const ThemeSwitcher = () => {
  const { isDarkMode, toggleTheme } = useThemeToggle();

  return (
    <div className="relative inline-block w-8 h-4 rounded-full cursor-pointer">
      <input
        defaultChecked={isDarkMode}
        id="switch-darkMode"
        type="checkbox"
        className="w-14 h-8 rounded-full appearance-none cursor-pointer peer bg-cyan-500 checked:bg-indigo-800 peer-checked:border-blue-500 peer-checked:before:bg-blue-500"
        onChange={toggleTheme}
      />
      <label
        htmlFor="switch-darkMode"
        className="absolute top-full left-1 h-6 w-6 -translate-y-1/2 cursor-pointer rounded-full border border-blue-100 bg-yellow-400 shadow-md duration-500 hover:scale-[1.75] peer-checked:translate-x-full peer-checked:border-slate-800 peer-checked:bg-slate-500"
      ></label>
    </div>
  );
};

export default ThemeSwitcher;
