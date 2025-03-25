import "./Cipher.style.css";
import { useRef, useState } from "react";
import MoonIcon from "../../assets/ToggleOnly.png";
import SideBar from "../../components/SideBar/SideBar";
import PlainTextField from "../../components/TextField/PlainTextField";
import KeyField from "../../components/TextField/KeyField";
import CipherTextField from "../../components/TextField/CipherTextField";

const Ac = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  const affinePage = useRef(null);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <div className={`landing-container ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <SideBar ref={affinePage}/>
      {/* Main Content */}
      <div className="main-content" ref={affinePage}>
        <div className="navbar">
          <h1 className="navbar-title">ChiperVault</h1>
          <button className="toggle-darkmode" onClick={toggleDarkMode}>
            <span>Nightmode</span>
            <img src={MoonIcon} alt="Night Mode" className="moon-icon" />
          </button>
        </div>
        <div className="content">
          <div className="content-title">
            <h2>Affine Cipher</h2>
          </div>
        </div>
        <div className="chiper">
          <div className="chiper-grid">
            <PlainTextField />
            <div className="flex-container">
              <div className="icon-arrow">
                  <h1>&#8596;</h1>
              </div>
              <KeyField />
            </div>
            <CipherTextField />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ac;