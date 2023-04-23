import Circle from "./components/Cirle";
import Headings from "./components/Headings";
import Navbar from "./components/Navbar";
import Calculator from "./components/Calculator";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black dark:text-white">
      <Navbar />
      <div className="flex min-h-screen justify-center items-center">
        <Calculator />
      </div>
    </div>
  );
}

export default App;
