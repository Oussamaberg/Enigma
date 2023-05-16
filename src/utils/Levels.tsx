interface updateGameStateTypes{
  index:number,
  setIndex: (a:any)=>void,
  array:Array<any>,
  gameStats:any,
  setGameStats: (a:any)=> void,
  hardMode: boolean
}

interface levelTypes{
  number: any,
  index: number,
  setIndex: (a:any)=>void,
  array:Array<any>,
  setArray:(a:Array<any>)=> void,
  gameStats:any,
  setGameStats:(a:any)=> void,
  hardMode: boolean
}

const updateGameState1 = (
  {
  index,
  setIndex,
  array,
  gameStats,
  setGameStats,
  hardMode
  }:updateGameStateTypes
):string => {
  var maxAttempt = 6;
  if (hardMode && gameStats.tryNum >= maxAttempt) {
    return "0";
  }
  if (array.length === 4) {
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

const updateGameState = (
  {
  index,
  setIndex,
  array,
  gameStats,
  setGameStats,
  hardMode
  }:updateGameStateTypes
):string => {
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

const initialArray = (arr:Array<any>, init:Array<number>) =>{
  if (arr.length == 0){
    return init
  }else{
    return arr;
  }
}

const level_1 = (
  {
  number,
  index,
  setIndex,
  array,
  setArray,
  gameStats,
  setGameStats,
  hardMode
  }:levelTypes
) => {
  var response = updateGameState(
    {
    index,
    setIndex,
    array,
    gameStats,
    setGameStats,
    hardMode
    }
  );
  var arr = initialArray(array,[0,0,0,1]);
  arr = (arr.toString() == [0,0,0,0].toString())?[0,0,0,1]:arr
  var sum = parseInt(number) * parseInt(arr.join(''))
  var strsum = sum.toString()
  var newArray = strsum.split('').slice(0, 4)
  
  setArray(newArray);
  setIndex(0);
  return response;
};

const level_2 = (
  {
  number,
  index,
  setIndex,
  array,
  setArray,
  gameStats,
  setGameStats,
  hardMode
  }:levelTypes
) => {
  var response = updateGameState(
    {
    index,
    setIndex,
    array,
    gameStats,
    setGameStats,
    hardMode
    }
  );
  var arr = initialArray(array,[0,0,0,0]);
  var sum:number;
  if (index % 2 == 0){
    var sum = parseInt(number) * parseInt(arr.join(''))
  }else{
    var sum = parseInt(number) + parseInt(arr.join(''))
  }
  var strsum = sum.toString()
  var newArray = strsum.split('').slice(0, 4)
  setArray(newArray);
  setIndex((index:number) => index + 5);
  return response;
};

const level_3 = (
  {
  number,
  index,
  setIndex,
  array,
  setArray,
  gameStats,
  setGameStats,
  hardMode
  }:levelTypes
) => {
  var response = updateGameState1(
    {
    index,
    setIndex,
    array,
    gameStats,
    setGameStats,
    hardMode
    }
  );
  setArray([...array, number % 10]);
  setIndex((index:number) => index + 1);
  return response;
};
const level_4 = (
  {
  number,
  index,
  setIndex,
  array,
  setArray,
  gameStats,
  setGameStats,
  hardMode
  }:levelTypes
) => {
  var response = updateGameState(
    {
    index,
    setIndex,
    array,
    gameStats,
    setGameStats,
    hardMode
    }
  );
  var arr = initialArray(array, [0,0,0,0]);
  var sum = parseInt(number) + parseInt(arr.join(''))
  var strsum = sum.toString()
  var newArray = strsum.split('').slice(0, 4)
  
  setArray(newArray);
  setIndex(0);
  return response;
};



const levels = [
  {
    difficulty:"easy",
    digitArray: ["71", "30", "97", "63", "91", "5", "50", "500", "2", "100"],
    mecanics: level_3,
  },
  {
    difficulty:"easy",
    digitArray: ["71", "30", "97", "63", "91", "5", "50", "500", "2", "100"],
    mecanics: level_4,
  },
  {
    difficulty:"easy",
    digitArray: ["711", "50", "95", "93", "27", "52", "48", "123", "196", "10"],
    mecanics: level_4,
  },
  {
    difficulty:"easy",
    digitArray: ["16", "300", "97", "63", "199", "666", "50", "501", "5", "100"],
    mecanics: level_4,
  },
  {
    difficulty:"medium",
    digitArray: ["7", "30", "97", "63", "91", "5", "50", "500", "2", "100"],
    mecanics: level_2,
  },
  {
    difficulty:"medium",
    digitArray: ["1", "30", "97", "63", "191", "5", "50", "500", "2", "100"],
    mecanics: level_2,
  },
  {
    difficulty:"hard",
    digitArray: ["1910", "1287", "1112", "1300", "3500", "1987", "1027", "5620", "1109", "2000"],
    mecanics: level_1,
  }
];

export { levels };
