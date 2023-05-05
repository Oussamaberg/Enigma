import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import SareBox from "./ShareBox";

function SuccessModal({ gameStats, succesModal, level }) {
  const [time, setTime] = useState(new Date());

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },

    exit: {
      opacity: 0,
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  useEffect(() => {
    setTime(new Date(Date.now() - gameStats.time));
  }, []);

  const formatTime = () => {
    var hour = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    if (hour != 0) {
      if (hour < 10) {
        hour = "0" + hour + ":";
      }
    } else {
      hour = "";
    }

    if (min < 10) {
      min = "0" + min;
    }
    if (sec < 10) {
      sec = "0" + sec;
    }

    return `${hour}${min}:${sec}`;
  };

  const scoreCalculator = () => {
    const maxScore = 120;
    var starsArray = [0,0,0,0,0];
    var n_try = gameStats.tryNum;
    var score = maxScore - (time / 1000) * 0.3 * n_try;
    score = score < 0 ? 0 : score;
    sessionStorage.setItem("userScore", score.toString());
    var stars = parseInt(score / 20);
    for (var i = 0; i < stars; i++) {
      starsArray[i] = 1;
    }
    return [starsArray, stars];
  };
 const [starsArray, stars] = scoreCalculator();
  var msg = `Level: ${level - 1}\nTime: ${formatTime()}\nTry: ${gameStats.tryNum}\n${"🌟".repeat(stars)}`
  console.log("text ti share:" + msg)

  const setStars = (item) =>{
    if (item == 1){
      return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1"
        stroke="currentColor"
        className="w-12 h-12 fill-yellow-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
        />
      </svg>
    )
  }else{
      return  (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1"
          stroke="currentColor"
          className="w-12 h-12 fill-gray-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />
        </svg>
      )
    }
    
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div
        className="relative z-10 "
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
        
      >
        <div className="fixed inset-0 z-10 overflow-y-auto mt-60">
          <div className="flex place-content-center p-4 text-center sm:items-center sm:p-0">
            <div className="backdrop-blur-md bg-white/30   h-max w-screen sm:w-7/12 md:w-6/12 lg:w-4/12 border-1 rounded-lg flex flex-col  justify-center items-center shadow-2xl p-10">
              <motion.div
                variants={item}
                className=" bg-emerald-400 border rounded-full p-2 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
              </motion.div>
              <div className="grid grid-rows-2 grid-flow-col   gap-4 pt-5">
                <div className="flex gap-4">
                  <span className=" bg-gradient-to-r w-40 rounded-xl p-2 font-mono text-4xl hover:bg-gradient-to-r hover:-translate-y-1 transition duration-1000 ">
                    Time {formatTime()}
                  </span>
                  <span className=" flex flex-col rounded-xl p-2 font-mono text-4xl hover:-translate-y-1 transition duration-1000">
                    <div>Try </div> <div>{gameStats.tryNum}</div>
                  </span>
                </div>
                <div className="flex justify-center mt-5">
                  {starsArray.map((item) => setStars(item))}
                </div>
              </div>
              <SareBox textToShare={msg} />
              <motion.div variants={item} className="h-32">
                <h3 className="p-2 font-bold text-2xl">Good Job</h3>

                <p>Congratulation you have unlocked the next level 🎉</p>
              </motion.div>
              <motion.div variants={item} className="">
                <button
                  onClick={succesModal}
                  className=" bg-gradient-to-r from-emerald-500 to-green-500 hover:opacity-50 hover:scale-x-95 w-full  ring-1  rounded-md text-3xl shadow-xl transition ease-out duration-500 p-3"
                >
                  Next
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
export default SuccessModal;
