import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { levels } from "../utils/Levels";
import SuccessModal from "./SuccessModal";
import DigitDisplay from "./DigitDisplay";
import CalculatorButton from "./CalculatorButton";

function Calculator() {
  const [index, setIndex] = useState(4);
  const [array, setArray] = useState([0, 0, 0, 0]);
  const [level, setLevel] = useState(0);
  // show/Hide success modal
  const [successModal, setSuccessModal] = useState(false);
  const [gameStats, setGameStats] = useState({ time: Date.now(), tryNum: 0 });
  var gameLevel = sessionStorage.getItem("gameLevel");
  const goal = [1, 3, 3, 7];
  let tmpGameStates = {};

  const resetGameStats = () => {
    tmpGameStates = {
      time: Date.now(),
      tryNum: 0,
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

  const gateway = (e) => {
    var number = parseInt(e.target.value);
    levels[level].mecanics(
      number,
      index,
      setIndex,
      array,
      setArray,
      gameStats,
      setGameStats
    );
  };

  useEffect(() => {
    if (array.toString() == goal.toString()) {
      ToggleSuccessModal();
      setLevel((level) => level + 1);
      sessionStorage.setItem("gameLevel", level.toString());
      array.length = 0;
    }
  }, [[array]]);
  console.log("gameLevel:" + gameLevel+ ", level:"+level.toString());

  return (
    <>
      <div className=" w-screen sm:w-96 h-screen py-20 ">
        <div className="h-40"></div>
        <div className="grid grid-cols-4 justify-items-center gap-1 border-b-2 border-gray-500 p-5 py-5 h-20 pb-24">
          {array.map((digit) => (
            <DigitDisplay digit={digit} i={index} />
          ))}
        </div>
        <div className="grid grid-cols-3 gap-2 mt-10  px-4">
          {levels[level].digitArray.map((item, i) => (
            <CalculatorButton item={item} i={i} gateway={gateway} />
          ))}
        </div>
      </div>
      {successModal && (
        <SuccessModal gameStats={gameStats} succesModal={ToggleSuccessModal} />
      )}
    </>
  );
}
export default Calculator;
