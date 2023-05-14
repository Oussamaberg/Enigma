import { useScroll } from "framer-motion";
import { motion } from "framer-motion";
import bg from "../assets/img/img.jpg";
import TextAnimation1 from "./animations/TextAnimation1";
import TextAnimation2 from "./animations/TextAnimation2";
import Footer from "./Footer";

function About() {
  return (
    <div className="top-10 w-max sm:w-10/12 2xl:w-1/2  flex flex-col dark:bg-black rounded-lg  shadow-2xl gap-20 p-4 dark:shadow-xl dark:shadow-cyan-500/50">
      <div className=" border-b-2 ">
        <TextAnimation2 text={"About me"} />
      </div>
      <div className="flex flex-col gap-5 justify-center items-center">
        <div className=" rounded-full bg-profile-bg bg-cover h-80 w-80 shadow-xl border-4 border-purple-600 dark:shadow-xl dark:shadow-purple-600/50"></div>
        <div className=" p-10   text-lg font-serif text-slate-700 dark:text-slate-200 ">
          <p>
            Hello there! My name is Oussama Berghai, and I am from the beautiful
            country of Morocco. I am a proud husband and father of one adorable
            kid, who is the light of my life.
          </p>
          <p>
            I have always had a passion for <strong>technology</strong> and software development,
            and I am lucky enough to be able to do what I love for a living. I
            love to code and build challenging solutions that push me to my
            limits and help me grow as a developer.
          </p>
          <p>
            I have experience working with a variety of programming languages,
            but my favorites is <strong>Javascript</strong> and my prefered library is <strong>ReactJS</strong>. I
            find that they are both incredibly versatile and allow me to build a
            wide range of applications, from simple scripts to complex web
            applications.
          </p>
          <p>
            {" "}
            In addition to my coding skills, I am also well-versed in using
            <strong> TailwindCSS</strong>, which allows me to create stunning and responsive user
            interfaces for my applications.
          </p>
          <p>
            When I am not coding, I enjoy spending time with my family,
            exploring new places, and trying new foods. I am also an avid reader
            and enjoy learning about new technologies and techniques that I can
            incorporate into my work.
          </p>
          <p>
            Thank you for taking the time to read a little bit about me. If you
            have any questions or would like to discuss a project, please don't
            hesitate to reach out!
          </p>
          <motion.div 
      initial={{opacity:0,y:-10 }}
      animate={{opacity:1,y:-20}}
      transition={{duration:0.5}}
      className="bg-gradient-to-r from-green-400 to-blue-500 p-1 mt-20 text-2xl rounded-xl shadow-xl shadow-cyan-500/50 w-40">
        <a href="mailto:ossama.berghai@gmail.com" ><div className="bg-white dark:bg-black p-5 rounded-lg">Sent Mail</div></a>
      </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default About;
