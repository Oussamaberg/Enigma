import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Menu from "./Menu";
import Hamburger from "./Hamburger";
import HideMenu from "./HideMenu";
function Navbar({toggleHelp, toggleSettings}) {
  const [toggleButton, setToggleButton] = useState(false);
  const hamburgerClick = () => {
    setToggleButton(!toggleButton);
  };
  return (
    <nav className="bg-gradient-to-r from-white to-sky-100 dark:bg-gradient-to-r dark:from-slate-900 dark:to-black flex justify-between items-center px-5 h-24 relative border-b-2 border-slate-500 ">
      <div className="flex items-center">
        {toggleButton ? (
          <HideMenu hamburgerClick={hamburgerClick} />
        ) : (
          <Hamburger hamburgerClick={hamburgerClick} />
        )}

        <h1 className="md:hidden text-2xl ">Enigma</h1>
      </div>
      <h1 className=" hidden md:block text-2xl ">Enigma</h1>
      <div className=" flex justify-between items-center">
        <button className="p-3" onClick={toggleSettings}>
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
        <button className=" p-3  " onClick={toggleHelp}>
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
