import Navbar from "./components/Navbar";
import Calculator from "./components/Calculator";
import Help from "./components/Help";
import { useEffect, useState } from "react";
import Settings from "./components/Settings";
import Faq from "./components/Faq";
import { AnimatePresence } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  // Show/Hide help window
  const [help, setHelp] = useState(false);
  //Show/Hide settings window
  const [settings, setSettings] = useState(false);
  // Toggle dark theme
  const [darkTheme, SetDarkMode] = useState(false);
  // Activate/Deactivate hard mode
  const [hardMode, setHardMode] = useState(false);

  var theme = sessionStorage.getItem("theme");
  var gameMode = sessionStorage.getItem("gameMode");
  var userLevel = sessionStorage.getItem("userLevel");

  useEffect(() => {
    if (theme != null) {
      SetDarkMode(theme == "dark");
    }
    if (gameMode != null) {
      setHardMode(gameMode == "hard");
    }
  }, []);

  const toggleHelp = () => {
    if (settings == true) {
      setSettings(false);
    }
    //if (successModal == true) {
    //setSuccessModal(false);
    // }
    setHelp(!help);
  };

  const toggleSettings = () => {
    if (help == true) {
      setHelp(false);
    }
    //if (successModal == true) {
    //  setSuccessModal(false);
    //}
    setSettings(!settings);
  };

  const toggledarkTheme = () => {
    var theme;
    SetDarkMode(!darkTheme);
    theme = darkTheme ? "light" : "dark";
    sessionStorage.setItem("theme", theme);
  };
  const toggleHardMode = () => {
    var gameMode;
    setHardMode(!hardMode);
    gameMode = hardMode ? "easy" : "hard";
    sessionStorage.setItem("gameMode", gameMode);
  };

  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="  min-h-screen  dark:bg-black dark:text-white ">
        <Navbar toggleHelp={toggleHelp} toggleSettings={toggleSettings} />
        <div className="  relative flex min-h-screen justify-center items-center">
          <Routes>
            <Route
              path="/"
              element={<Calculator userLevel={userLevel} hardMode={hardMode} />}
            />
            <Route path="/FAQ" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>

          <AnimatePresence>
            {help && <Help toggleHelp={toggleHelp} />}

            {settings && (
              <Settings
                hardModeChecked={hardMode}
                darkModeChecked={darkTheme}
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
