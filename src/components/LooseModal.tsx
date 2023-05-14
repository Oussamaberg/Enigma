import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import SareBox from "./ShareBox";

function LooseModal({ gameStats, looseModal }:{gameStats:any, looseModal:()=>void}) {
  const [time, setTime] = useState(new Date());

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },

    exit: {
      opacity: 0,
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  useEffect(() => {
    setTime(new Date(Date.now() - gameStats.time));
  }, []);

  const formatTime = () => {
    var hour:any = time.getHours();
    var min:any = time.getMinutes();
    var sec:any = time.getSeconds();
    if (hour != 0) {
      if (hour < 10) {
        hour = "0" + hour + ":";
      }
    } else {
      hour = "";
    }

    if (min < 10) {
      min = "0" + min;
    }
    if (sec < 10) {
      sec = "0" + sec;
    }

    return `${hour}${min}:${sec}`;
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div
        className="relative z-10 "
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 z-10 overflow-y-auto mt-60 ">
          <div className="flex place-content-center  text-center sm:items-center sm:p-0">
            <div className="backdrop-blur-md bg-red/30   h-80 w-screen sm:w-7/12 md:w-6/12 lg:w-4/12 border-2 dark:border-slate-800 rounded-lg flex flex-col  justify-center items-center shadow-2xl p-10">
              <motion.div
                variants={item}
                className=" bg-red-400 border rounded-full p-1 text-white mt-5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                  />
                </svg>
              </motion.div>
              <div className="grid grid-rows-2 grid-flow-col">
                <div className="flex ">
                  <span className=" bg-gradient-to-r w-40 rounded-xl p-2 font-mono text-4xl hover:bg-gradient-to-r hover:-translate-y-1 transition duration-1000 ">
                    Time {formatTime()}
                  </span>
                  <span className=" flex flex-col rounded-xl p-2 font-mono text-4xl hover:-translate-y-1 transition duration-1000">
                    <div>Try </div> <div>{gameStats.tryNum}</div>
                  </span>
                </div>
                <div className="flex justify-center text-5xl font-extrabold items-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-black dark:to-white"> You Loose</div>
              </div>

              <motion.div variants={item} className=" ">
                <button
                  onClick={looseModal}
                  className=" bg-gradient-to-r from-red-500 to-red-900 hover:opacity-50 hover:scale-x-95 w-max  ring-1  rounded-md text-3xl shadow-xl transition ease-out duration-500 p-1 text-white mb-5 flex justify-center items-center gap-1"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                      />
                    </svg>
                  </span>
                  <span>Try Again</span>
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
export default LooseModal;
