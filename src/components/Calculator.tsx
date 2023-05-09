import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { levels } from "../utils/Levels";
import SuccessModal from "./SuccessModal";
import DigitDisplay from "./DigitDisplay";
import CalculatorButton from "./CalculatorButton";
import successSound from "../assets/sound/success.wav";
import Progress from "./Progress";
import LooseModal from "./LooseModal";
import HardModeStats from "./HardModeStats";

function Calculator({ userLevel, hardMode }) {
  const [index, setIndex] = useState(4);
  const [array, setArray] = useState([0, 0, 0, 0]);
  const [level, setLevel] = useState(0);
  const [looseGame, setLooseGame] = useState(false);
  // show/Hide success modal
  const [successModal, setSuccessModal] = useState(false);
  const [gameStats, setGameStats] = useState({ time: Date.now(), tryNum: 0, tryLeft:6 });
  const goal = [1, 3, 3, 7];

  useEffect(() => {
    if (userLevel != null) {
      setLevel(parseInt(userLevel));
    }
  }, []);

  const resetGameStats = () => {
    var tmpGameStates = {
      time: Date.now(),
      tryNum: 0,
      tryLeft:6
    };
    setGameStats((obj) => ({
      ...obj,
      ...tmpGameStates,
    }));
  };

  const ToggleSuccessModal = () => {
    setSuccessModal(!successModal);
    if (successModal == true) resetGameStats();
  };

  const ToggleLooseModal = () => {
    setLooseGame(!looseGame);
    if (looseGame == true) resetGameStats();
  };

  const gateway = (e) => {
    var returnValue = "";
    var number = parseInt(e.target.value);
    returnValue = levels[level].mecanics(
      number,
      index,
      setIndex,
      array,
      setArray,
      gameStats,
      setGameStats,
      hardMode
    );
    if (returnValue == "0") {
      setLooseGame(true);
    }
  };
  const audioPlayer = () => {
    const audio = new Audio(successSound);
    audio.play();
  };
  useEffect(() => {
    if (array.toString() == goal.toString()) {
      audioPlayer();
      ToggleSuccessModal();
      setLevel((level) => level + 1);
      //array.length = 0;
      setArray([0, 0, 0, 0]);
      sessionStorage.setItem("userLevel", (level + 1).toString());
    }
    if (looseGame) {
      setArray([0, 0, 0, 0]);
      setIndex(4);
      //ToggleLooseModal();
    }
  }, [[array], looseGame]);

  console.log(gameStats);
  return (
    <>
      <Progress userLevel={level} />
      <HardModeStats leftAttempts ={gameStats.tryLeft}/>
      
      <div className=" w-screen sm:w-96 h-screen py-20 ">
        <div className="h-40"></div>
        <div className="grid grid-cols-4 justify-items-center gap-1 border-b-2 border-gray-500 p-5 py-5 h-20 pb-24">
          {array.map((digit, j) => (
            <DigitDisplay digit={digit} i={j} />
          ))}
        </div>
        <motion.div
          initial={{ scale: 1 }}
          animate={
            array.length == 1 && gameStats.tryNum != 1
              ? {
                  rotate: [-5, 5, -5, 5, 0],
                  x: [3, -3, 0],
                  y: [3, -3, 0],
                  scale: 1,
                }
              : { scale: 1, rotate: 0, x: 0, y: 0 }
          }
          transition={{
            duration: 0.3,
          }}
          className="grid grid-cols-3 gap-2 mt-10  px-4"
        >
          {levels[level].digitArray.map((item, i) => (
            <CalculatorButton item={item} i={i} gateway={gateway} />
          ))}
        </motion.div>
      </div>
      {successModal && (
        <SuccessModal
          gameStats={gameStats}
          succesModal={ToggleSuccessModal}
          level={level}
        />
      )}
      {looseGame && (
        <LooseModal
          gameStats={gameStats}
          looseModal={ToggleLooseModal}
        />
      )}
    </>
  );
}
export default Calculator;
