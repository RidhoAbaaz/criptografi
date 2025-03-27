import "./Cipher.style.css";
import { useRef, useState } from "react";
import MoonIcon from "../../assets/ToggleOnly.png";
import ChipertextField from "../../components/TextField/CipherTextField";
import PlainTextField from "../../components/TextField/PlainTextField";
import SideBar from "../../components/SideBar/SideBar";
import KeyField from "../../components/TextField/KeyField";

const Akvc = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  const autokey = useRef(null);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <div className="landing-container">
      <SideBar ref={autokey}/>
      {/* Main Content */}
      <div className="main-content" ref={autokey} style={{ backgroundColor : isDarkMode ? "#1C1C1E" : undefined}}>
        <div className="navbar"  style={{ backgroundColor : isDarkMode ? "#3F51B5" : undefined}}>
          <h1 className="navbar-title">ChiperVault</h1>
          <div className="toggle-darkmode" onClick={toggleDarkMode}>
            <span>Night Mode</span>
            <div className="slider">
              <i className="bi bi-moon" style={{ marginLeft : isDarkMode ? "20px" : "0px" }}></i>
            </div>
          </div>
        </div>
        <div className="content" style={{ backgroundColor : isDarkMode ? "#282828" : undefined }}>
          <div className="content-title">
            <h2>Auto key Vigenere Cipher</h2>
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

export default Akvc;