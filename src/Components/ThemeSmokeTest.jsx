import { useTheme }from './ThemeProvider' ;
import React, { createContext, useContext, useState, useEffect, useMemo } from "react";
const ThemeSmokeTest = () => {
  const { theme } = useTheme();
  useEffect(() => {
    const isHtmlDark = document.documentElement.classList.contains("dark");
    const isBodyDark = document.body.classList.contains("dark");
    console.assert((theme === "dark") === isHtmlDark, "[TEST] Theme vs <html>.dark mismatch");
    console.assert((theme === "dark") === isBodyDark, "[TEST] Theme vs <body>.dark mismatch");
    console.assert(!!document.querySelector("nav"), "[TEST] Navbar should render");
  }, [theme]);
  return null;
};
export default ThemeSmokeTest;