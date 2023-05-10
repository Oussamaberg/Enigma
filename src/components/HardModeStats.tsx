import { motion } from "framer-motion";
import { useState } from "react";
function HardModeStats({leftAttempts}) {
    const [show, setShow] = useState(false);
  return (
    <>

    <div className=" flex absolute top-44  items-center">
    <motion.div 
    initial={{scale:0}}
    animate={{scale:1}}
    transition={{
        duration:1

    }}
    onMouseEnter={() => setShow(true)}
    onMouseLeave={()=> setShow(false)}
    className="flex flex-col bg-white dark:bg-black  place-self-auto h-16 justify-center items-center shadow-xl text-red-500 dark:text-red-300 border-2 border-red-500  mt-2 rounded-full p-2">
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="3"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
          />
        </svg>
        <span></span>
      </span>
      <span>{leftAttempts}</span>
    </motion.div>
    <span
          className={
            show
              ? "absolute translate-x-12 flex items-center"
              : "absolute invisible"
          }
        >
          <div className="h-0 w-0 border-x-8 border-x-transparent rotate-[270deg] border-b-[16px] border-b-slate-200 dark:border-b-slate-700"></div>
          <span className="bg-slate-200 dark:bg-slate-700 p-2 rounded-md text-xs font-thin w-20 shadow-lg">
            Hard Mode activated!
          </span>
        </span>
        </div>
    </>
  );
}
export default HardModeStats;
