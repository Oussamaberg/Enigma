import { useScroll } from "framer-motion";
import { motion } from "framer-motion";
import bg from "../assets/img/img.jpg"

function Contact() {
    const {scrollYProgress} = useScroll()
    console.log(scrollYProgress)
  return <div className=" absolute top-10 w-full sm:w-10/12 2xl:w-1/2  h-auto flex flex-col rounded-lg  shadow-2xl  gap-10 p-4" >
    <motion.h1
    initial={{opacity:0,y:15}}
    animate={{opacity:1, y:0}}
    transition={{
      duration:0.5,

      
    }}
    className=" w-60 text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500" >
      Contact
      </motion.h1>
    </div>;
}
export default Contact;
