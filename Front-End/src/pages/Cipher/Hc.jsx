import "./Cipher.style.css";
import { useRef, useState, useContext } from "react";
import MoonIcon from "../../assets/ToggleOnly.png";
import SideBar from "../../components/SideBar/SideBar";
import ChipertextField from "../../components/TextField/CipherTextField";
import PlainTextField from "../../components/TextField/PlainTextField";
import KeyField from "../../components/TextField/KeyField";
import { ThemeContext } from "../../context/ThemeContext";

const Hc = () => {
  const { isDarkMode, setDarkMode } = useContext(ThemeContext);
  const [input, setInput] = useState({
    plainText: "",
    key: "",
    cipherText: "",
  });

  const handleChange = (e) => {
      setInput({
          ...input, 
          [e.target.name] : e.target.value
      });
  }

  const handleClickEncrypt = () => {
    fetch('http://localhost:8080/hillCipher', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        method : "encrypt",
        plainText : input.plainText,
        key : input.key,
      })
    })
      .then(response => response.json())
      .then(data => {
        setInput({
          ...input,
          plainText : "",
          key: "",
          cipherText: data.cipherText,
      })
      })
      .catch(error => console.error('Terjadi kesalahan:', error));    
  }

  const handleClickDecrypt = () => {
    fetch('http://localhost:8080/hillCipher', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        method : "decrypt",
        cipherText : input.cipherText,
        key : input.key,
      })
    })
      .then(response => response.json())
      .then(data => {
        setInput({
          ...input,
          cipherText : "",
          key: "",
          plainText : data.plainText,
        })
      })
      .catch(error => console.error('Terjadi kesalahan:', error));
  }
  const hillCipher = useRef(null);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <div className="landing-container" style={{ backgroundColor : isDarkMode ? "#303030" : "#E8EAF6"}}>
      <SideBar ref={hillCipher}  isDarkmode={isDarkMode}/>
      {/* Main Content */}
      <div className="main-content" ref={hillCipher}>
        <div className="navbar"  style={{ backgroundColor : isDarkMode ? "#3F51B5" : undefined}}>
          <h1 className="navbar-title">ChiperVault</h1>
          <div className={`${"toggle-darkmode"} ${isDarkMode ? "toggle-darkmode-t" : "toggle-darkmode-f"}`} onClick={toggleDarkMode}>
            <span>Night Mode</span>
            <div className="slider" style={{ backgroundColor: isDarkMode ? "#3F51B5" : "#8590cf" }}>
            <i className={`bi ${isDarkMode ? "bi-moon" : "bi-sun"}`} style={{ marginLeft : isDarkMode ? "20px" : "0px", color: isDarkMode ? "#3F51B5" : "#8590cf"}}></i>
            </div>
          </div>
        </div>
        <div className="content"  style={{ backgroundColor : isDarkMode ? "#282828" : undefined }}>
          <div className="content-title">
            <h2>Hill Cipher</h2>
          </div>
        </div>

        <div className="chiper">
          <div className="chiper-grid">
            <PlainTextField value={input.plainText} handler={handleChange} encrypt={handleClickEncrypt}/>
            <div className="flex-container">
              <h1 className="icon-arrow">&#8596;</h1>
              <KeyField value={input.key} handler={handleChange}/>
            </div>
            <ChipertextField value={input.cipherText} handler={handleChange} decrypt={handleClickDecrypt}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hc;
