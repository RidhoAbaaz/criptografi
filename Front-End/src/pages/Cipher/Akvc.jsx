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
    <div className={`landing-container ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <SideBar ref={autokey}/>
      {/* Main Content */}
      <div className="main-content" ref={autokey}>
        <div className="navbar">
          <h1 className="navbar-title">ChiperVault</h1>
          <button className="toggle-darkmode" onClick={toggleDarkMode}>
            <span>Nightmode</span>
            <img src={MoonIcon} alt="Night Mode" className="moon-icon" />
          </button>
        </div>

        <div className="content">
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