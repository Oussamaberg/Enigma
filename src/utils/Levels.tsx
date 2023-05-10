const updateGameState = (
  index,
  setIndex,
  array,
  gameStats,
  setGameStats,
  hardMode
) => {
  var maxAttempt = 6;
  if (hardMode && gameStats.tryNum >= maxAttempt) {
    return "0";
  }
  if (index === 4) {
    array.length = 0;
    setIndex(0);
    setGameStats({
      ...gameStats,
      tryNum: gameStats.tryNum + 1,
      tryLeft: gameStats.tryLeft - 1,
    });
  }
  return "1";
};

const level_1 = (
  number,
  index,
  setIndex,
  array,
  setArray,
  gameStats,
  setGameStats,
  hardMode
) => {
  var response = updateGameState(
    index,
    setIndex,
    array,
    gameStats,
    setGameStats,
    hardMode
  );
  var arr;
  if (array.length == 0){
    arr = [0,0,0,1]
  }else{
    arr = array;
  }
  var sum = parseInt(number) * parseInt(arr.join(''))
  var strsum = sum.toString()
  var newArray = strsum.split('').slice(0, 4)
  
  setArray(newArray);
  setIndex(0);
  return response;
};

const level_2 = (
  number,
  index,
  setIndex,
  array,
  setArray,
  gameStats,
  setGameStats,
  hardMode
) => {
  var response = updateGameState(
    index,
    setIndex,
    array,
    gameStats,
    setGameStats,
    hardMode
  );
  var arr;
  if (array.length == 0){
    arr = [0,0,0,1]
  }else{
    arr = array;
  }
  var sum;
  if (index % 2 == 0){
    var sum = parseInt(number) * parseInt(arr.join(''))
  }else{
    var sum = parseInt(number) + parseInt(arr.join(''))
  }
  
  var strsum = sum.toString()
  console.log(strsum.split(''))
  var newArray = strsum.split('').slice(0, 4)
  console.log()
  setArray(newArray);
  setIndex((index) => index + 1);
  return response;
};

const level_3 = (
  number,
  index,
  setIndex,
  array,
  setArray,
  gameStats,
  setGameStats,
  hardMode
) => {
  var response = updateGameState(
    index,
    setIndex,
    array,
    gameStats,
    setGameStats,
    hardMode
  );
  setArray([...array, number % 10]);
  setIndex((index) => index + 1);
  return response;
};


const levels = [
  {
    digitArray: ["1910", "1287", "1112", "1300", "3500", "1987", "1027", "5620", "1109", "2000"],
    mecanics: level_1,
  },
  {
    digitArray: ["7", "30", "97", "63", "91", "5", "50", "500", "2", "100"],
    mecanics: level_2,
  },
  {
    digitArray: [0.7, 1.8, 3.9, 0.5, 1.5, 1, 3, 2, 1, 3.5],
    mecanics: level_3,
  },
  {
    digitArray: [77, 87, 97, 63, 47, 51, 31, 21, 11, 10],
    mecanics: level_2,
  },
  {
    digitArray: [77, 87, 97, 63, 47, 51, 31, 21, 11, 10],
    mecanics: level_2,
  },
  {
    digitArray: [77, 87, 97, 63, 47, 51, 31, 21, 11, 10],
    mecanics: level_2,
  },
  {
    digitArray: [77, 87, 97, 63, 47, 51, 31, 21, 11, 10],
    mecanics: level_2,
  },
  {
    digitArray: [77, 87, 97, 63, 47, 51, 31, 21, 11, 10],
    mecanics: level_2,
  },
  {
    digitArray: [1, 3, 5, 3, 11, 7, 17, 13, 19, 0],
    mecanics: level_2,
  },
  {
    digitArray: [77, 87, 97, 63, 47, 51, 31, 21, 11, 10],
    mecanics: level_2,
  },
];

export { levels };
