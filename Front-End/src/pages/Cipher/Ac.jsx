import "./Cipher.style.css";
import { useRef, useContext, useState } from "react";
import SideBar from "../../components/SideBar/SideBar";
import PlainTextField from "../../components/TextField/PlainTextField";
import KeyIcon from "../../assets/key.png";
import CipherTextField from "../../components/TextField/CipherTextField";
import { ThemeContext } from "../../context/ThemeContext";

const Ac = () => {
  const { isDarkMode, setDarkMode } = useContext(ThemeContext);
    const [input, setInput] = useState({
      plainText: "",
      multiplicationKey: "",
      additionKey : "",
      cipherText: "",
    });
  
    const handleChange = (e) => {
        setInput({
            ...input, 
            [e.target.name] : e.target.value
        });
    }
  
    const handleClickEncrypt = () => {
      fetch('http://localhost:8080/affineCipher', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          method : "encrypt",
          plainText : input.plainText,
          multiplicationKey : Number(input.multiplicationKey),
          additionKey: Number(input.additionKey),
        })
      })
        .then(response => response.json())
        .then(data => {
          setInput({
            ...input,
            plainText : "",
            multiplicationKey : "",
            additionKey: "",
            cipherText: data.cipherText,
        })
        })
        .catch(error => console.error('Terjadi kesalahan:', error));    
    }
  
    const handleClickDecrypt = () => {
      fetch('http://localhost:8080/affineCipher', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          method : "decrypt",
          cipherText : input.cipherText,
          multiplicationKey : Number(input.multiplicationKey),
          additionKey: Number(input.additionKey),
        })
      })
        .then(response => response.json())
        .then(data => {
          setInput({
            ...input,
            cipherText : "",
            multiplicationKey : "",
            additionKey: "",
            plainText : data.plainText,
          })
        })
        .catch(error => console.error('Terjadi kesalahan:', error));
    }

  const affinePage = useRef(null);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <div className="landing-container">
      <SideBar ref={affinePage}  isDarkmode={isDarkMode}/>
      {/* Main Content */}
      <div className="main-content" ref={affinePage} style={{ backgroundColor : isDarkMode ? "#303030" : "#E8EAF6"}}>
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
          <h2>Affine Cipher</h2>
        </div>
        <div className="chiper">
          <div className="chiper-grid">
            <PlainTextField value={input.plainText} handler={handleChange} encrypt={handleClickEncrypt}/>
            <div className="affine-container">
              <h1 className="icon-arrow">&#8596;</h1>
              <div className="chiper-key">
                <div className="key-title">
                  <img src={KeyIcon} className="icon-key" alt="Key" />
                  <h2>Key for (m)</h2>
                </div>
                <input type="text" name="multiplicationKey" onChange={handleChange} value={input.multiplicationKey} placeholder="Write m key here..."/>
                <p>Note : <br /> Key m must be a positive integer and comprime with 26</p>
                <div className="key-title">
                  <img src={KeyIcon} className="icon-key" alt="Key" />
                  <h2>Key for (b)</h2>
                </div>
                <input type="text" name="additionKey" onChange={handleChange} value={input.additionKey} placeholder="Write b key here..."/>
                <p>Note : <br /> Key b can be any integer (positive/negative) for letter shifting</p>
              </div>
            </div>
            <CipherTextField value={input.cipherText} handler={handleChange} decrypt={handleClickDecrypt}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ac;