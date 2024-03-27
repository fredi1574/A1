import { useState, useEffect } from "react";

// Custom hook to manage theme toggling
const useThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle the theme
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
    localStorage.setItem("theme", !isDarkMode ? "dark" : "light");
  };

  useEffect(() => {
    // Retrieve theme preference from local storage
    const storedTheme = localStorage.getItem("theme");

    // Set the initial theme based on stored preference or system preference
    setIsDarkMode(
      storedTheme === "dark" ||
        (!storedTheme &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
    );

    // Add event listener for changes in system theme preference
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      setIsDarkMode(mediaQuery.matches);
    };
    mediaQuery.addEventListener("change", handleChange);

    // Cleanup
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  // Update local storage and apply theme preference
  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return { isDarkMode, toggleTheme };
};

export default useThemeToggle;
