import { Link } from "react-router-dom";
import { motion } from "framer-motion";
interface settingTypes {
  darkModeChecked: boolean;
  hardModeChecked: boolean;
  toggleSettings: () => void;
  darkMode: () => void;
  hardMode: () => void;
}

function Settings({
  darkModeChecked,
  hardModeChecked,
  toggleSettings,
  darkMode,
  hardMode,
}: settingTypes) {
  const container = {
    hidden: {
      opacity: 0,
    },
    show: {
      y: -100,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      y: 0,
      opacity: 0,
    },
  };
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
      className="flex flex-col font-mono absolute   top-60 w-screen h-max sm:w-3/5 md:w-2/4 lg:w-2/5 backdrop-blur-xl bg-white/30  divide-y divide-solide dark:divide-dashed shadow-2xl"
    >
      <div className="grid justify-items-end pr-5  pt-5 pb-10">
        <button onClick={toggleSettings}>
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="flex justify-center text-4xl text-slate-600 dark:text-slate-200 font-mono ">
        Settings
      </div>
      <div className="flex justify-between p-5">
        <div className="flex flex-col">
          <span>Hard Mode</span>
          <span className=" text-xs text-slate-600 dark:text-slate-200 ">
            {" "}
            the number of attempts will be limitied
          </span>
        </div>

        <span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              onChange={hardMode}
              type="checkbox"
              value=""
              className="sr-only peer"
              checked={hardModeChecked}
            />
            <div
              className="w-11 h-6 bg-gray-400 dark:bg-gray-400 peer-focus:outline-none  rounded-full peer  peer-checked:after:translate-x-full
               after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-slate-100 dark:after:bg-slate-100 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all
                dark:border-gray-600 peer-checked:bg-blue-500 dark:peer-checked:bg-green-500"
            ></div>
          </label>
        </span>
      </div>
      <div className="flex justify-between p-5">
        <span>Dark Theme</span>
        <span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              onChange={darkMode}
              type="checkbox"
              value=""
              className="sr-only peer"
              checked={darkModeChecked}
            />
            <div
              className="w-11 h-6 bg-gray-400 dark:bg-gray-400 peer-focus:outline-none  rounded-full peer  peer-checked:after:translate-x-full
               after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-slate-100 dark:after:bg-slate-100 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all
                dark:border-gray-600 peer-checked:bg-blue-500 dark:peer-checked:bg-green-500"
            ></div>
          </label>
        </span>
      </div>
      <div className="flex justify-between p-5">
        <span>Community</span>
        <span className="text-sm text-sky-500"><a href="twitter.com">Twitter</a></span>
      </div>
      <div className="flex justify-between p-5">
        <span>Questions?</span>
        <span className="text-sm text-sky-500"><Link to="/FAQ">FAQ</Link></span>
      </div>
      <div className="flex justify-between p-5">
        <span>Feed Back</span>
        <span className="text-sm text-sky-500"><a href="mailto:ossama.berghai@gmail.com">Email</a></span>
      </div>
    </motion.div>
  );
}
export default Settings;
