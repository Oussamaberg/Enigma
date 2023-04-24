import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { levels } from "../utils/Levels";
import SuccessModal from "./SuccessModal";
import DigitDisplay from "./DigitDisplay";
import CalculatorButton from "./CalculatorButton";

function Calculator({ succesModal }) {
  const [index, setIndex] = useState(4);
  const [array, setArray] = useState([0, 0, 0, 0]);
  const [level, setLevel] = useState(0);
  const [gameStats, setGameStats] = useState({ time: Date.now(), tryNum: 0 });

  const goal = [1, 3, 3, 7];
  let tmpGameStates = {};
  let calculatedTime;

  const gateway = (e) => {
    var number = parseInt(e.target.value);
    levels[level].mecanics(number, index, setIndex, array, setArray,gameStats, setGameStats);
  };

  useEffect(() => {
    if (array.toString() == goal.toString()) {
      succesModal();
      setLevel((level) => level + 1);
      array.length = 0;
      calculatedTime = new Date(Date.now() - gameStats.time);
      console.log(
        calculatedTime.getMinutes() + ":" + calculatedTime.getSeconds()
      );
      tmpGameStates = {
        time: Date.now(),
        tryNum: 0,
      };
      setGameStats((obj) => ({
        ...obj,
        ...tmpGameStates,
      }));
    }
    
  }, [[array]]);
  console.log(gameStats);

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
    </>
  );
}
export default Calculator;
