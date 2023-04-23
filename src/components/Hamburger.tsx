import { motion } from "framer-motion";
function Hamburger({ hamburgerClick }) {
  const icon = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        type: "spring",
        duration: 5,
      },
    },
    exit: {opacity: 0}
  };
  return (
    <motion.button
      variants={icon}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={hamburgerClick}
    >
      <svg
        className="block h-6 w-6 mr-3"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </motion.button>
  );
}
export default Hamburger;
