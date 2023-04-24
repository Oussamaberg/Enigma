import Circle from "./components/Cirle";
import Headings from "./components/Headings";
import Navbar from "./components/Navbar";
import Calculator from "./components/Calculator";
import Help from "./components/Help";
import { useState } from "react";
import Settings from "./components/Settings";
import { AnimatePresence } from "framer-motion";
import SuccessModal from "./components/SuccessModal";

function App() {
  // Show/Hide help window
  const [help, setHelp] = useState(false);
  //Show/Hide settings window
  const [settings, setSettings] = useState(false);
  // Toggle dark theme
  const [darkTheme, SetDarkMode] = useState(false);
  // Activate/Deactivate hard mode
  const [hardMode, setHardMode] = useState(false);
  // show/Hide success modal
  const [successModal, setSuccessModal] = useState(false);
  const toggleHelp = () => {
    if (settings == true) {
      setSettings(false);
    }
    if (successModal == true) {
      setSuccessModal(false);
    }
    setHelp(!help);
  };

  const toggleSettings = () => {
    if (help == true) {
      setHelp(false);
    }
    if (successModal == true) {
      setSuccessModal(false);
    }
    setSettings(!settings);
    console.log(successModal)
  };

  const toggledarkTheme = () => {
    SetDarkMode(!darkTheme);
    console.log(darkTheme);
  };
  const toggleHardMode = () => {
    setHardMode(!hardMode);
    console.log(hardMode);
  };
  const ToggleSuccessModal = () => {
    setSuccessModal(!successModal)
    console.log("togle sucsses" + successModal)
  }

  return (
    <div className={darkTheme && "dark"}>
      <div className="  min-h-screen bg-slate-50 dark:bg-black dark:text-white ">
        <Navbar toggleHelp={toggleHelp} toggleSettings={toggleSettings} />
        <div className="  relative flex min-h-screen justify-center items-center">
          <Calculator succesModal={ToggleSuccessModal}  />
          <AnimatePresence>
          {successModal && <SuccessModal succesModal={ToggleSuccessModal} />}
            {help && <Help toggleHelp={toggleHelp} />}

            {settings && (
              <Settings
                toggleSettings={toggleSettings}
                darkMode={toggledarkTheme}
                hardMode={toggleHardMode}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default App;
