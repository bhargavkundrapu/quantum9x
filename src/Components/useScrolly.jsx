import React, { createContext, useContext, useState, useEffect, useMemo } from "react";




const useScrollY = () => {
  const [y, setY] = useState(0);
  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return y;
};

export default useScrollY;