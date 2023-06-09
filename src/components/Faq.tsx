import { useScroll } from "framer-motion";
import { motion } from "framer-motion";
import bg from "../assets/img/img.jpg";
import SlideToRight from "./animations/SlideToRight";
import Footer from "./Footer";

function Faq() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <div className=" top-10 w-full sm:w-10/12 2xl:w-1/2 dark:bg-black   flex flex-col rounded-lg  shadow-2xl  gap-10 p-4">
        <div className="relative pb-40">
          <motion.h1
            initial={{ x: 0, scale: 1 }}
            animate={{ x: [0, -10, 0, 10, 0], scale: [1, 1.01, 1] }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className=" absolute text-6xl font-extrabold pb-10 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 blur-md"
          >
            {" "}
            Frequently Asked Questions?
          </motion.h1>
          <h1 className=" absolute text-6xl font-extrabold pb-10 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 ">
            {" "}
            Frequently Asked Questions?
          </h1>
        </div>
        <SlideToRight>
          <div className="flex flex-col gap-4 p-4">
            <h4 className="text-2xl font-bold">Q: How do I play the game?</h4>
            <p>
              A: The game is simple to play! To display 1337 on the calculator,
              try experimenting by taping on different buttons and observing how
              they affect the logic of the device.
            </p>
          </div>
        </SlideToRight>

        <SlideToRight>
          <div className="flex flex-col gap-4 p-4">
            <h4 className="text-2xl font-bold">
              Q: Is there a time limit to complete the puzzles?
            </h4>
            <p>
              A: No, there is no time limit to complete the puzzles. Take your
              time and enjoy the game at your own pace.
            </p>
          </div>
        </SlideToRight>
        <SlideToRight>
          <div className="flex flex-col gap-4 p-4">
            <h4 className="text-2xl font-bold">
              Q: Can I skip a puzzle if I get stuck?
            </h4>
            <p>
              A: No, but in the futur you can skip a puzzle if you are unable to
              solve by using a "Skip" token which can be earned or purchased in
              the game.
            </p>
          </div>
        </SlideToRight>

        <SlideToRight>
          <div className="flex flex-col gap-4 p-4">
            <h4 className="text-2xl font-bold">Q: How do I earn tokens?</h4>
            <p>
              A: Tokens can be earned by completing puzzles or by purchasing
              them with real money in the game store.
            </p>
          </div>
        </SlideToRight>

        <SlideToRight>
          <div className="flex flex-col gap-4 p-4">
            <h4 className="text-2xl font-bold">
              Q: Where can i find hints for puzzles?
            </h4>
            <p>
              A: There are no hints provided in the game, as solving challenges
              without assistance is an integral part of the gameplay
            </p>
          </div>
        </SlideToRight>

        <SlideToRight>
          <div className="flex flex-col gap-4 p-4">
            <h4 className="text-2xl font-bold">
              Q: Can I play the game offline?
            </h4>
            <p>
              A: Yes, you can play the game offline. However, you will not be
              able to earn tokens or access certain features of the game without
              an internet connection.
            </p>
          </div>
        </SlideToRight>

        <SlideToRight>
          <div className="flex flex-col gap-4 p-4">
            <h4 className="text-2xl font-bold">
              Q: Is there a way to reset the desplay to "0"?
            </h4>
            <p>
              A: yes, you can reset your by tapping the "Reset" button located
              on the bottom of the screen.
            </p>
          </div>
        </SlideToRight>

        <SlideToRight>
          <div className="flex flex-col gap-4 p-4">
            <h4 className="text-2xl font-bold">Q: Is the game free to play?</h4>
            <p>
              A: Yes, the game is free to play. However, there are in-app
              purchases available if you wish to buy additional tokens or remove
              ads from the game.
            </p>
          </div>
        </SlideToRight>

        <SlideToRight>
          <div className="flex flex-col gap-4 p-4">
            <h4 className="text-2xl font-bold">
              Q: Are there different levels of difficulty in the game?
            </h4>
            <p>
              A: Yes, the game has different levels of difficulty ranging from
              easy to hard. The puzzles become more challenging as you progress
              through the levels.
            </p>
          </div>
        </SlideToRight>
        <SlideToRight>
          <div className="flex flex-col gap-4 p-4">
            <h4 className="text-2xl font-bold">
              Q: Are there different Ranks in the game?
            </h4>
            <p>
              A: Yes, the game has different Ranks ranging from "Iron" to "Grand
              Master".
            </p>
          </div>
        </SlideToRight>
        <Footer />
      </div>
    </>
  );
}
export default Faq;
