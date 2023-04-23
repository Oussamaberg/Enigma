import Circle from "./components/Cirle";
import Headings from "./components/Headings";
import Navbar from "./components/Navbar";
import Calculator from "./components/Calculator";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black dark:text-white">
      <Navbar />
      <div className=" relative flex min-h-screen justify-center items-center">
        <Calculator />
        <div className="flex flex-col absolute  w-screen h-3/5 sm:w-3/5 md:w-2/4 lg:w-2/5 bg-slate-900 opacity-95 ">
          <div className=" grid justify-items-end px-5">X</div>
          <div className=" grid justify-items-center pb-1 pt-20 font-serif text-4xl"> <h3>How To Play?</h3></div>
          <div className="px-5 text-blue-200 font-mono text-lg border-b-2 border-blue-200 py-10"> try to undrestand the mecanicof the calculator in order to display the required 4 digits.</div>
          <div className="px-5 py-10 font-mono text-slate-400"> A new puzzle is released daily at midnight. If you haven’t already, you can sign up for our daily reminder email.</div>
        </div>
      </div>
    </div>
  );
}

export default App;
