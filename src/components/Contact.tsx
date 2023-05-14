import { useScroll } from "framer-motion";
import { motion } from "framer-motion";
import bg from "../assets/img/img.jpg"
import TextAnimation1 from "./animations/TextAnimation1";
import TextAnimation2 from "./animations/TextAnimation2";
import Footer from "./Footer";

function Contact() {
    
  return <div className=" w-full h-full sm:w-10/12 2xl:w-1/2  flex flex-col dark:bg-black rounded-lg  shadow-2xl gap-20 p-4 dark:shadow-xl dark:shadow-cyan-500/50" >
    <div className=" border-b-2 ">
    <TextAnimation2 text={"Contact"} />
    
    </div>
     <div className="relative">
     <TextAnimation1 text={"Twitter:"} />
     <motion.div 
     initial={{opacity:0,y:-10 }}
     animate={{opacity:1,y:0}}
     transition={{duration:0.5, delay:1.2
    }}
     className="absolute top-3 left-[220px] md:left-[320px] text-2xl">
      <a href="https://twitter.com/oussamabergai"> @oussamabergai </a>
     </motion.div>
     </div>
     <div className="relative">
     <TextAnimation1 text={"Github:"} />
     <motion.div 
     initial={{opacity:0,y:-10 }}
     animate={{opacity:1,y:0}}
     transition={{duration:0.5, delay:1.4
    }}
     className="absolute top-3 left-[220px] md:left-[320px] text-2xl">
      <a href="https://github.com/Oussamaberg"> Oussamaberg.git </a>
     </motion.div>
     </div>
     <div className="relative">
     <TextAnimation1 text={"LinkedIn:"} />
     <motion.div 
     initial={{opacity:0,y:-10 }}
     animate={{opacity:1,y:0}}
     transition={{duration:0.5, delay:1.6
    }}
     className="absolute top-3 left-[220px] md:left-[320px] text-2xl ">
      <a href="https://www.linkedin.com/in/oussama-berghai-889205197/"> Oussama-Berghai.connect </a>
     </motion.div>
   
     </div>
     <div className="flex justify-center ">
      <motion.div 
      initial={{opacity:0,y:-10 }}
      animate={{opacity:1,y:-20}}
      transition={{duration:0.5, delay:1.8}}
      className="bg-gradient-to-r from-green-400 to-blue-500 p-1 mt-20 text-2xl rounded-xl shadow-xl shadow-cyan-500/50">
        <a href="mailto:ossama.berghai@gmail.com" ><div className="bg-white dark:bg-black p-5 roundced-xl">Sent Mail</div></a>
      </motion.div>
     </div>
     <Footer />
    </div>;
}
export default Contact;
