import { useEffect, useState } from "react";
import SareBox from "./ShareBox";
import HardModeStats from "./HardModeStats";

function Progress({ userLevel }:{userLevel:any}) {
  var userScore:any = sessionStorage.getItem("userScore");
  var [score, setScore] = useState(0);
  const progressBar = [0, 1, 2, 3, 4, 5, 6];
  const rankTitle= ["Iron", "Silver", "Gold", "Diamond", "Challenger", "Master", "Grand Master"]

  var rank:number = parseInt(userLevel);
  //const [rank, setRank] = useState(0);
  //setRank(parseInt(userLevel))

  useEffect(() => {
    if (userScore != null){
      setScore((score) => (score + parseInt(userScore)))
    }
  },[userScore])
  var msg = `Rank: ${rankTitle[rank]}\nScore: ${score}\nLevel: ${userLevel} \n${"🔵".repeat(
    rank
  )}🟡`;

  const setRankShape = (item:any, rank:number) => {
    if (item < rank) {
      return (
        <div key={item} className=" w-8 h-8 rounded-full  bg-blue-300 flex justify-center items-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
            />
          </svg>
        </div>
      );
    } else if (item == rank) {
      return (
        <div
          key={item}
          className=" w-12 h-12  border-blue-300 border-2 rounded-full bg-yellow-500 shadow-lg shadow-yellow-900/50 flex justify-center items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 4.942c1.827 1.105 3.474 1.6 5 1.833v7.76c0 1.606-.415 1.935-5 4.76v-14.353zm9-1.942v11.535c0 4.603-3.203 5.804-9 9.465-5.797-3.661-9-4.862-9-9.465v-11.535c3.516 0 5.629-.134 9-3 3.371 2.866 5.484 3 9 3zm-2 1.96c-2.446-.124-4.5-.611-7-2.416-2.5 1.805-4.554 2.292-7 2.416v9.575c0 3.042 1.69 3.83 7 7.107 5.313-3.281 7-4.065 7-7.107v-9.575z" />
          </svg>
        </div>
      );
    } else {
      return (
        <div key={item} className=" w-2 h-2 rounded-full  bg-slate-500"></div>
      );
    }
  };

  return (
    <div className="absolute top-4 place-self-auto w-full h-20  flex flex-col justify-center  items-center ">
      
      <div className=" font-mono text-sm p-1 mt-16 ">{rankTitle[rank]}</div>
      <div className="flex gap-4 justify-center items-center px-4">
        {progressBar.map((item) => setRankShape(item, rank))}
      </div>
      <div className=" flex gap-4 p-4">
        {" "}
        <div className=" h-10 w-40 flex justify-center items-center bg-yellow-500 p-2 rounded-2xl text-blue-700 font-mono shadow-2xl text-sm hover:border-blue-700 hover:border-2 hover:text-yellow-500 hover:bg-white transition duration-500">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
              />
            </svg>
          </span>
          Score: {score}
        </div>{" "}
        <div className=" h-10 w-40 flex justify-center items-center bg-yellow-500 p-2 rounded-2xl text-blue-700 font-mono shadow-2xl text-sm hover:border-blue-700 hover:border-2 hover:text-yellow-500 hover:bg-white transition duration-500">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
              />
            </svg>
          </span>
          Level: {userLevel}
        </div>
      </div>
      
      <SareBox textToShare = {msg} />
  
    </div>
  );
}
export default Progress;
