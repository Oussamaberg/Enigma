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

  const [showScore, setShowScore] = useState(true);

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 640) {
      setShowScore(false);
    } else {
      setShowScore(true);
    }
  };
  var theme = sessionStorage.getItem("theme");
  var gameMode = sessionStorage.getItem("gameMode");
  var userLevel: string | null = sessionStorage.getItem("userLevel");
  useEffect(() => {
    if (theme != null) {
      SetDarkMode(theme == "dark");
    }
    if (gameMode != null) {
      setHardMode(gameMode == "hard");
    }
    //show progress Component if the window is bigger than 640px.
    handleResize();
    // listen for window resizing in order to show/hide the progress Component:
    window.addEventListener("resize", handleResize);
  }, []);

  const toggleHelp = () => {
    if (settings == true) {
      setSettings(false);
    }

    setHelp(!help);
  };

  const toggleScore = () => {
    if (settings == true) {
      setSettings(false);
    }
    if (help == true) {
      setHelp(false);
    }
    setShowScore(!showScore);
  };

  const toggleSettings = () => {
    if (help == true) {
      setHelp(false);
    }

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
      <div className="  h-max dark:bg-black dark:text-white ">
        <Navbar
          toggleHelp={toggleHelp}
          toggleSettings={toggleSettings}
          toggleScore={toggleScore}
        />
        <div className="  relative flex h-max  justify-center items-center dark:bg-black ">
          <Routes>
            <Route
              path="/"
              element={
                <Calculator
                  userLevel={userLevel}
                  hardMode={hardMode}
                  showScore={showScore}
                />
              }
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
