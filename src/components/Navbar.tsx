import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Menu from "./Menu";
import Hamburger from "./Hamburger";
import HideMenu from "./HideMenu";
import { Link } from "react-router-dom";

interface navBarTypes {
  toggleHelp: () => void;
  toggleSettings: () => void;
  toggleScore:() => void
}

function Navbar({ toggleHelp, toggleSettings,toggleScore }: navBarTypes) {
  const [toggleButton, setToggleButton] = useState(false);
  const hamburgerClick = () => {
    setToggleButton(!toggleButton);
  };

  return (
    <nav className="sm:bg-gradient-to-r sm:from-white sm:to-sky-100 dark:sm:bg-gradient-to-r dark:sm:from-slate-900 dark:sm:to-black flex justify-between items-center px-5 sm:h-24 relative sm:border-b-2 border-slate-500 ">
      <div className="flex items-center">
        {toggleButton ? (
          <HideMenu hamburgerClick={hamburgerClick} />
        ) : (
          <Hamburger hamburgerClick={hamburgerClick} />
        )}

        <h1 className="hidden sm:block md:hidden text-2xl ">
          <Link to={"/"}>Enigma</Link>
        </h1>
      </div>
      <h1 className=" hidden md:block text-2xl ">
        <Link to={"/"}>Enigma</Link>
      </h1>
      <div className=" flex justify-between items-center gap-3 mt-2">
        <button
          className="p-2 bg-slate-200 dark:bg-slate-800 rounded-lg sm:bg-transparent sm:hidden"
          onClick={ toggleScore }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
            />
          </svg>
        </button>
        <button
          className="p-2  bg-slate-200 dark:bg-slate-800 rounded-lg sm:bg-transparent"
          onClick={toggleSettings}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
            />
          </svg>
        </button>
        <button
          className=" p-2  bg-slate-200 dark:bg-slate-800 rounded-lg sm:bg-transparent"
          onClick={toggleHelp}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
            />
          </svg>
        </button>
      </div>
      <AnimatePresence>{toggleButton && <Menu />}</AnimatePresence>
    </nav>
  );
}
export default Navbar;
