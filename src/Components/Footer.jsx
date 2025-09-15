
import { NavLink } from "react-router-dom";
import Container from "./Container";

const Footer = () => (
  <footer className="relative border-t border-black/10 dark:border-white/10">
    <Container className="py-10">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-[var(--q9x-red)] grid place-items-center text-white font-bold">Q9</div>
          <span className="text-slate-700 dark:text-white/80 text-sm">© {new Date().getFullYear()} Quantum9x. All rights reserved.</span>
        </div>
        <div className="flex items-center gap-4 text-slate-700 dark:text-white/80 text-sm">
          <a href="#" className="hover:text-slate-900 dark:hover:text-white">Terms</a>
          <a href="#" className="hover:text-slate-900 dark:hover:text-white">Privacy</a>
          <NavLink to="/contact" className="hover:text-slate-900 dark:hover:text-white">Contact</NavLink>
        </div>
      </div>
    </Container>
  </footer>
);

export default Footer;