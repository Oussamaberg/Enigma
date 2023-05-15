import { motion, spring } from "framer-motion";
import { useState } from "react";
function HardModeStats({ leftAttempts }: { leftAttempts: number }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className=" flex absolute  -top-12 sm:top-[84px]   sm:left-auto  items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.5,
          }}
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
          className="flex flex-col bg-red-500 dark:bg-black   h-8 w-8 justify-center items-center shadow-xl text-slate-200 dark:text-red-300 border-2 border-red-500 rounded-md mt-2  p-2 drop-shadow-xl"
        >
          <span>
            <span></span>
          </span>
          <span>
            {leftAttempts >= 0 ? (
              leftAttempts
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                />
              </svg>
            )}
          </span>
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
