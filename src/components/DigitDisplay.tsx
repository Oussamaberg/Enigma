import { motion, AnimatePresence } from "framer-motion";
function DigitDisplay({ digit, i }) {
  const digitContainer = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.5,
      },
    },

    exit: {
      y: 20,
      opacity: 0,
    },
  };

  return (
    <AnimatePresence>
      <motion.span
        variants={digitContainer}
        key={i}
        initial="hidden"
        animate="show"
        exit="exit"
        className="h-20 w-10 dark:bg-gray-900  border-2 border-gray-500 rounded-lg bg-slate-100  flex justify-center items-center font-serif text-5xl shadow-2xl"
      >
        <p>{digit}</p>
      </motion.span>
    </AnimatePresence>
  );
}

export default DigitDisplay;
