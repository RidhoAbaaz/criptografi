import "./Cipher.style.css";
import { useRef, useState } from "react";
import MoonIcon from "../../assets/ToggleOnly.png";
import SideBar from "../../components/SideBar/SideBar";
import ChipertextField from "../../components/TextField/CipherTextField";
import PlainTextField from "../../components/TextField/PlainTextField";
import KeyField from "../../components/TextField/KeyField";

const Hc = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  const hillCipher = useRef(null);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <div className={`landing-container ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <SideBar ref={hillCipher}/>
      {/* Main Content */}
      <div className="main-content" ref={hillCipher}>
        <div className="navbar">
          <h1 className="navbar-title">ChiperVault</h1>
          <button className="toggle-darkmode" onClick={toggleDarkMode}>
            <span>Nightmode</span>
            <img src={MoonIcon} alt="Night Mode" className="moon-icon" />
          </button>
        </div>

        <div className="content">
          <div className="content-title">
            <h2>Hill Cipher</h2>
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

export default Hc;
