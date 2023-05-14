import { motion } from "framer-motion";
function HideMenu({ hamburgerClick }:{hamburgerClick:()=>void}) {
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
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6 mr-3"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
        />
      </svg>
    </motion.button>
  );
}
export default HideMenu;
