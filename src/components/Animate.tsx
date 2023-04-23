
import { motion } from "framer-motion";

function Animate({children}) {
  const container = {
    hidden: {
      opacity: 0,
    },
    show: {
      y: -100,
      opacity: 0.95,
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
    >
      {children}
    </motion.div>
  );
}
 export default Animate;