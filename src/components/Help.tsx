import { motion } from "framer-motion";
function Help({toggleHelp}) {
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
    className="flex flex-col absolute  w-screen h-3/5 sm:w-3/5 md:w-2/4 lg:w-2/5 backdrop-blur-md bg-white/30  shadow-2xl ">
      <div className=" grid justify-items-end p-5">
        <button onClick={toggleHelp}>
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
      <div className=" grid justify-items-center pb-1  font-mono text-4xl">
        {" "}
        <h3>How To Play?</h3>
      </div>
      <div className="px-5 text-blue-800 dark:text-blue-200 font-mono text-lg border-b-2 border-blue-200 py-10">
        {" "}
        try to undrestand the mecanicof the calculator in order to display the
        required 4 digits.
      </div>
      <div className="px-5 py-10 font-mono text-slate-600 dark:text-slate-400">
        {" "}
        A new puzzle is released daily at midnight. If you haven’t already, you
        can sign up for our daily reminder email.
      </div>
    </motion.div>

  );
}
export default Help;