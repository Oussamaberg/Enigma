import { motion } from "framer-motion";

function SuccessModal({ succesModal}) {
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
      onClick={succesModal}
    >
      
      <div className="fixed inset-0 z-10 overflow-y-auto mt-60">
        <div className="flex place-content-center p-4 text-center sm:items-center sm:p-0">
          <div className="bg-white dark:bg-gray-800 h-64 w-2/3 sm:w-6/12 md:w-4/12 lg:w-3/12 border-1 rounded-lg flex flex-col  justify-center items-center shadow-2xl">
            <motion.div  variants={item} className=" bg-emerald-400 border rounded-full p-2 ">
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
                  d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
            </motion.div>
            <motion.div  variants={item} className="h-32 p-4">
              
              <h3 className="p-2 font-bold text-2xl">Good Job</h3>

              <p>Congratulation you have unlocked the next level 🎉</p>
            </motion.div>
            <motion.div  variants={item} className="">
              <button onClick={succesModal} className=" bg-gradient-to-r from-emerald-500 to-green-500 hover:opacity-50 hover:scale-x-95 w-full  ring-1  rounded-md text-3xl shadow-xl transition ease-out duration-500 p-3">
                Next
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
    </motion.div>
  );
}
export default SuccessModal;
