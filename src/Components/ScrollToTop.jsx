import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";




const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0); // Immediate scroll without animation
  }, [pathname]);
  
  return null;
};
export default ScrollToTop;