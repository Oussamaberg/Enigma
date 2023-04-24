const level_2 = (number, index, setIndex, array, setArray,gameStats, setGameStats) => {
  if (index === 4) {
    array.length = 0;
    setIndex(0);
    setGameStats({...gameStats, tryNum:gameStats.tryNum+1})
  }
  setArray([...array, number % 10]);
  setIndex((index) => index + 1);
};

const level_1 = (number, index, setIndex, array, setArray,gameStats, setGameStats) => {
  if (index === 4) {
    array.length = 0;
    setIndex(0);
    setGameStats({...gameStats, tryNum:gameStats.tryNum+1})
  }

  setArray([...array, number]);
  setIndex((index) => index + 1);
};

const levels = [
  {
    digitArray: [7, 8, 9, 6, 4, 5, 3, 2, 1, 0],
    mecanics: level_1,
  },
  {
    digitArray: [77, 87, 97, 63, 47, 51, 31, 21, 11, 10],
    mecanics: level_2,
  },
];

export { levels };
