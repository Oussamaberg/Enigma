import { useEffect, useState } from "react";

function Progress({ userLevel }) {
  const progressBar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var rank = parseInt(userLevel);
  //const [rank, setRank] = useState(0);
    //setRank(parseInt(userLevel))
  

  const setRankShape = (item, rank) => {
    if (item < rank) {
      return (<div key ={item}  className=" w-8 h-8 rounded-full  bg-blue-300"></div>);
    } else if (item == rank) {
      return (
        <div key ={item} className=" w-12 h-12  border-blue-300 border-2 rounded-full bg-yellow-500 shadow-lg shadow-yellow-900/50 flex justify-center items-center">
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
      return <div key ={item}  className=" w-2 h-2 rounded-full  bg-slate-500"></div>;
    }
  };

  return (
    <div className="absolute top-0 place-self-auto w-full h-20  flex justify-center  items-center ">
      <div className=" font-mono text-sm p-1 ">Grand Master</div>
      <div className="flex gap-4 justify-center items-center p-4">
        {progressBar.map((item) => setRankShape(item, rank))}
      </div>
    </div>
  );
}
export default Progress;
