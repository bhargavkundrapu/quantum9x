import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import Container from "./Container";
import useScrollY from "./useScrolly";
import {Link} from 'react-router-dom'

const navCls = ({ isActive }) => `text-sm uppercase tracking-wide transition hover:text-[var(--q9x-red-600)] ${isActive ? "text-[var(--q9x-red-600)]" : "text-slate-900/90 dark:text-white/90"}`;
const navLinkClass = "text-sm uppercase tracking-wide transition hover:text-[var(--q9x-red-600)] text-slate-900/90 dark:text-white/90";
const mobileNavCls = ({ isActive }) => `text-base transition ${isActive ? "text-[var(--q9x-red-600)]" : "text-slate-900/90 dark:text-white/90"}`;
const mobileLinkClass = "text-base transition text-slate-900/90 dark:text-white/90";

const Navbar = () => {
  const y = useScrollY();
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const location = useLocation();

  useEffect(() => { setOpen(false); }, [location.pathname]);

  const translucent = y > 16;

  return (
    <div className="fixed top-0 inset-x-0 z-50">
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`border-b ${translucent ? "bg-white/60 dark:bg-black/40 backdrop-blur-xl" : "bg-transparent"} border-black/10 dark:border-white/10`}
      >
        <Container className="flex items-center justify-between h-16">
          <NavLink to="/" className="group inline-flex items-center gap-2">
            <Link to="/">
              <span className="text-lg font-semibold tracking-wide text-slate-900 dark:text-white">Quantum9x</span>
            </Link>
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <NavLink className={navCls} to="/">Home</NavLink>
            <a className={navLinkClass}   href="#about">About</a>
            <a className={navLinkClass} href="#why">Why Us</a>
            <a className={navLinkClass} href="#team">Team</a>
            <a className={navLinkClass} href="#social">Social</a>
            <NavLink className={navCls} to="/courses">Courses</NavLink>
            <NavLink className={navCls} to="/contact">Contact</NavLink>
            
          </div>

          {/* Mobile */}
          <button className="md:hidden text-slate-900 dark:text-white" onClick={() => setOpen(o => !o)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </Container>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden border-t border-black/10 dark:border-white/10 bg-white/80 dark:bg-black/80 backdrop-blur-xl"
            >
              <Container className="flex flex-col py-4 gap-3">
                <NavLink className={mobileNavCls} to="/">Home</NavLink>
                <a className={mobileLinkClass} href="#about">About</a>
                <a className={mobileLinkClass} href="#why">Why Us</a>
                <a className={mobileLinkClass} href="#team">Team</a>
                <a className={mobileLinkClass} href="#social">Social</a>
                <NavLink className={mobileNavCls} to="/courses">Courses</NavLink>
                <NavLink className={mobileNavCls} to="/contact">Contact</NavLink>
              
              </Container>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
      {/* Spacer */}
      <div className="h-16" />
    </div>
  );
};


export default Navbar;
