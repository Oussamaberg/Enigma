import Circle from "./components/Cirle";
import Headings from "./components/Headings";
import Navbar from "./components/Navbar";
import Calculator from "./components/Calculator";
import Help from "./components/Help";
import { useState } from "react";
import Settings from "./components/Settings";
import { AnimatePresence } from "framer-motion";

function App() {
  const [help, setHelp] = useState(false)
  const [settings, setSettings] = useState(false)
  const toggleHelp = () =>{
    if (settings == true){
      setSettings(false)
    }
    setHelp(!help)
  }

  const toggleSettings = () =>{
    if (help == true){
      setHelp(false)
    }
    setSettings(!settings)
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black dark:text-white ">
      <Navbar toggleHelp={toggleHelp} toggleSettings={toggleSettings}/>
      <div className=" relative flex min-h-screen justify-center items-center">
        <Calculator />
        <AnimatePresence>
        {help && <Help toggleHelp={toggleHelp} />}
        
        {settings && <Settings toggleSettings={toggleSettings} />}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
