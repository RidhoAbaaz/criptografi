import "./Cipher.style.css";
import { useState } from "react";
import HomeIcon from "../../assets/home.png";
import MoonIcon from "../../assets/ToggleOnly.png";
import MenuIcon from "../../assets/menu.png"
import DownloadIcon from "../../assets/download.png"; 
import UploadIcon from "../../assets/link.png";
import KeyIcon from "../../assets/key.png";

const Akvc = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  const [sidebar, setSidebar] = useState(false)
  const [selectedFormat, setSelectedFormat] = useState("text");

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  const toggleSidebar = () => {
    setSidebar(!sidebar)
  }

  return (
    <div className={`landing-container ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <div className={`${sidebar ? "openbar-container" : "hide"}`}>
        <div className="wrapper-hideside-menu">
          <button onClick={toggleSidebar}>
            <img src={MenuIcon} alt="menu" />
            <h4>Navigation</h4>
          </button>
        </div>
        <div className="wrapper-hideside-home">
          <a href="/">
            <img src={HomeIcon} alt="" />
            <h4>Home</h4>
          </a>
        </div>
        <div className="wrapper-hideside">
          <a href="/vcs">
            <h1>1</h1>
            <h4>Vigenere Cipher Standard</h4>
          </a>
        </div>
        <div className="wrapper-hideside">
          <a href="/akvc">
            <h1>2</h1>
            <h4>Auto key Vigenere Cipher</h4>
          </a>
        </div>
        <div className="wrapper-hideside">
          <a href="/evc">
            <h1>3</h1>
            <h4>Extended Vigenere Cipher</h4>
          </a>
        </div>
        <div className="wrapper-hideside">
          <a href="/ac">
            <h1>4</h1>
            <h4>Affine Cipher</h4>
          </a>
        </div>
        <div className="wrapper-hideside">
          <a href="/pc">
            <h1>5</h1>
            <h4>Playfair Cipher</h4>
          </a>
        </div>
        <div className="wrapper-hideside">
          <a href="/hc">
            <h1>6</h1>
            <h4>Hill Cipher</h4>
          </a>
        </div>
      </div>
      <div className="sidebar-container">
        <div className="wrapper-menu">
          <button><img src={MenuIcon} alt="menu" onClick={toggleSidebar} /></button>
        </div>
        <div className="wrapper-home">
          <a href="/"><img src={HomeIcon} alt="" /></a>
        </div>
        <div className="wrapper">
          <a href="/vcs">1</a>
        </div>
        <div className="wrapper">
          <a href="/akvc">2</a>
        </div>
        <div className="wrapper">
          <a href="/evc">3</a>
        </div>
        <div className="wrapper">
          <a href="/ac">4</a>
        </div>
        <div className="wrapper">
          <a href="/pc">5</a>
        </div>
        <div className="wrapper">
          <a href="/hc">6</a>
        </div>
      </div>


      {/* Main Content */}
      <div className="main-content">
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
            <div className="chiper-plaintext">
              <div className="plaintext-title">
                <h2>Plaintext</h2>
                <select value={selectedFormat} onChange={(e) => setSelectedFormat(e.target.value)}>
                  <option value="text">Text</option>
                  <option value="binary">Binary</option>
                </select>
              </div>
              <hr></hr>

              <textarea className="plaintext-input" placeholder="Write plainteks here..." />
              <hr></hr>

              <div className="plaintext-footer">
                <button className="upload-btn">
                  Upload File
                  <img src={UploadIcon} className="icon" alt="Upload" />
                </button>
                <button className="download-btn">
                  Download <img src={DownloadIcon} className="icon" alt="Download" />
                </button>
              </div>
            </div>

            <div className="flex-container">
              <div className="icon-arrow">
                  <h1>&#8596;</h1>
              </div>
              <div className="chiper-key">
                <div className="key-title">
                  <img src={KeyIcon} className="icon-key" alt="Key" />
                  <h2>Key</h2>
                </div>
                <hr></hr>
                <input type="text"placeholder="Write the key here..."/>
              </div>
            </div>

            <div className="chiper-chipertext">
              <div className="chipertext-title">
                <h2>Chipertext</h2>
                <select value={selectedFormat} onChange={(e) => setSelectedFormat(e.target.value)}>
                  <option value="text">Text</option>
                  <option value="binary">Binary</option>
                </select>
              </div>
              <hr></hr>

              <textarea className="chipertext-input" placeholder="Write chipertext here..." />
              <hr></hr>

              <div className="chipertext-footer">
                <button className="upload-btn">
                  Upload File
                  <img src={UploadIcon} className="icon" alt="Upload" />
                </button>
                <button className="download-btn">
                  Download <img src={DownloadIcon} className="icon" alt="Download" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Akvc;
