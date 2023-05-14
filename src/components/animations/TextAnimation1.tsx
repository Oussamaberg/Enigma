import { useScroll } from "framer-motion";
import { motion } from "framer-motion";
import bg from "../assets/img/img.jpg";

function TextAnimation1({ text }:{text:string}) {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: "auto"}}
        transition={{
          duration: 0.8,
        }}
        className="  absolute text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500  blur-sm "
      >
        <h1>{text}</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: "auto" }}
        transition={{
          duration: 1,
        }}
        whileHover={{
          rotate: [0,2,0,-2],

          transition: { duration: 0.2, repeat:Infinity },
        }}
        className=" absolute text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 "
      >
        <h1>{text}</h1>
      </motion.div>
    </div>
  );
}
export default TextAnimation1;
