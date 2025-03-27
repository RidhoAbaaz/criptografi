import "./Cipher.style.css";
import { useRef, useState, useContext } from "react";
import MoonIcon from "../../assets/ToggleOnly.png";
import SideBar from "../../components/SideBar/SideBar";
import ChipertextField from "../../components/TextField/CipherTextField";
import PlainTextField from "../../components/TextField/PlainTextField";
import KeyField from "../../components/TextField/KeyField";
import { ThemeContext } from "../../context/ThemeContext";

const Pc = () => {
  const { isDarkMode, setDarkMode } = useContext(ThemeContext);
  const playfair = useRef(null);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <div className="landing-container">
      <SideBar ref={playfair}  isDarkmode={isDarkMode}/>
      {/* Main Content */}
      <div className="main-content" ref={playfair} style={{ backgroundColor : isDarkMode ? "#303030" : "#E8EAF6"}}>
        <div className="navbar"  style={{ backgroundColor : isDarkMode ? "#3F51B5" : undefined}}>
          <h1 className="navbar-title">ChiperVault</h1>
          <div className={`${"toggle-darkmode"} ${isDarkMode ? "toggle-darkmode-t" : "toggle-darkmode-f"}`} onClick={toggleDarkMode}>
            <span>Night Mode</span>
            <div className="slider" style={{ backgroundColor: isDarkMode ? "#3F51B5" : "#8590cf" }}>
            <i className={`bi ${isDarkMode ? "bi-moon" : "bi-sun"}`} style={{ marginLeft : isDarkMode ? "20px" : "0px", color: isDarkMode ? "#3F51B5" : "#8590cf"}}></i>
            </div>
          </div>
        </div>
        <div className="content" style={{ backgroundColor : isDarkMode ? "#282828" : undefined }}>
          <div className="content-title">
            <h2>Playfair Cipher</h2>
          </div>
        </div>

        <div className="chiper">
          <div className="chiper-grid">
            <PlainTextField />
            <div className="flex-container">
              <h1 className="icon-arrow">&#8596;</h1>
              <KeyField />
            </div>
            <ChipertextField />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pc;
