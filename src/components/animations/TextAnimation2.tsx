import { motion } from "framer-motion";

function TextAnimation2({ text }:{text:string}) {
  return (
    <div className="relative pb-20">
      <motion.h1
        initial={{ x: 0, scale: 1 }}
        animate={{ x: [0, -5, 0, 5, 0], scale: [1, 1.01, 1] }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className=" absolute text-6xl font-extrabold pb-10 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 blur-md"
      >
        {" "}
        {text}
      </motion.h1>
      <h1 className=" absolute text-6xl font-extrabold pb-10 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 ">
        {" "}
        {text}
      </h1>
    </div>
  );
}
export default TextAnimation2;
