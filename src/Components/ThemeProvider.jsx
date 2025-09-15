import React, { createContext, useContext, useState, useEffect, useMemo } from "react";




const ThemeContext = createContext({ theme: "dark", toggle: () => {} });
const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("q9x-theme");
      if (saved === "light" || saved === "dark") return saved;
      return "dark"; // default dark
    }
    return "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    const apply = (isDark) => {
      // Toggle class on html
      root.classList.toggle("dark", isDark);
      // Also mirror on body to help any body-scoped styles
      body.classList.toggle("dark", isDark);
      body.setAttribute("data-theme", isDark ? "dark" : "light");
    };
    apply(theme === "dark");
    localStorage.setItem("q9x-theme", theme);
  }, [theme]);

  const value = useMemo(
    () => ({ theme, toggle: () => setTheme((t) => (t === "dark" ? "light" : "dark")) }),
    [theme]
  );
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;

};

export { ThemeProvider, useTheme };
