import "./Cipher.style.css";
import { useRef, useState } from "react";
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
    <div className="landing-container">
      <SideBar ref={affinePage}  isDarkmode={isDarkMode}/>
      {/* Main Content */}
      <div className="main-content" ref={affinePage} style={{ backgroundColor : isDarkMode ? "#1C1C1E" : undefined}}>
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
          <h2>Affine Cipher</h2>
        </div>
        <div className="chiper">
          <div className="chiper-grid">
            <PlainTextField />
            <div className="flex-container">
              <h1 className="icon-arrow">&#8596;</h1>
              <KeyField />
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