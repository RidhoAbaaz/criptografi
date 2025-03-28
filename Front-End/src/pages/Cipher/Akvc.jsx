import "./Cipher.style.css";
import { useRef, useContext, useState } from "react";
import ChipertextField from "../../components/TextField/CipherTextField";
import PlainTextField from "../../components/TextField/PlainTextField";
import SideBar from "../../components/SideBar/SideBar";
import KeyField from "../../components/TextField/KeyField";
import { ThemeContext } from "../../context/ThemeContext";

const Akvc = () => {
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
    fetch('http://localhost:8080/autokeyVigenere', {
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
    fetch('http://localhost:8080/autokeyVigenere', {
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

  const autokey = useRef(null);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <div className="landing-container">
      {console.log(input.plainText)}
      <SideBar ref={autokey}  isDarkmode={isDarkMode}/>
      {/* Main Content */}
      <div className="main-content" ref={autokey} style={{ backgroundColor : isDarkMode ? "#303030" : "#E8EAF6"}}>
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
            <h2>Auto key Vigenere Cipher</h2>
          </div>
        </div>

        <div className="chiper">
          <div className="chiper-grid">
            <PlainTextField handler={handleChange} value={input.plainText} encrypt={handleClickEncrypt}/>
            <div className="flex-container">
              <h1 className="icon-arrow">&#8596;</h1>
              <KeyField handler={handleChange} value={input.key}/>
            </div>
            <ChipertextField value={input.cipherText} handler={handleChange} decrypt={handleClickDecrypt}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Akvc;