import "./Landing.style.css";
import { useState } from "react";
import HomeIcon from "../../assets/home.png";
import MoonIcon from "../../assets/ToggleOnly.png";
import MenuIcon from "../../assets/menu.png"


const Landing = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  const [sidebar, setSidebar] = useState(false)

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
        <div className="wrapper-hides
        ide">
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
          <a href="/vc">6</a>
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
            <h2>Welcome to ChiperVault</h2>
          </div>

          <div className="content-text"> 
            <p>
              Explore encryption and decryption with six powerful cryptographic algorithms.
              Our platform provides easy-to-use tools to encrypt and decrypt messages while learning the fundamentals of cryptography.
            </p>
            <br></br>
            <p>
              Try these six encryption and decryption methods :
            </p>
          </div>
          
          <div className="cipher-cards">
            <div className="cipher-card">
              <h2 className="chiper-title">Vigenere Chiper Standard</h2>
              <p className="chiper-text">Vigenere Cipher (Standard) adalah cipher polialfabetik yang mengenkripsi teks dengan menggeser huruf berdasarkan kata kunci berulang.</p>
            </div>
            <div className="cipher-card">
              <h2 className="chiper-title">Auto Key Vignere Chiper</h2>
              <p className="chiper-text">Auto-Key Vigenere Cipher adalah varian Vigenere yang lebih aman karena menggunakan sebagian teks asli sebagai kelanjutan kunci, mengurangi pola berulang.</p>
            </div>
            <div className="cipher-card">
              <h2 className="chiper-title">Extended Vigenere Chiper</h2>
              <p className="chiper-text">Extended Vigenere Cipher mendukung 256 karakter ASCII, memungkinkan enkripsi huruf, angka, dan simbol untuk fleksibilitas lebih luas.</p>
            </div>
            <div className="cipher-card">
              <h2 className="chiper-title">Affine Chiper</h2>
              <p className="chiper-text">Affine Cipher menggunakan persamaan matematika (ax + b) mod 26 untuk mengenkripsi huruf, dengan keamanannya bergantung pada pemilihan a yang memiliki invers modular.</p>
            </div>
            <div className="cipher-card">
              <h2 className="chiper-title">Playfair Chiper</h2>
              <p className="chiper-text">Playfair Cipher mengenkripsi pasangan huruf menggunakan tabel 5x5 berbasis kata kunci, membuatnya lebih sulit dipecahkan dibanding cipher substitusi tunggal.</p>
            </div>
            <div className="cipher-card">
              <h2 className="chiper-title">Hill Chiper</h2>
              <p className="chiper-text">Hill Cipher mengenkripsi blok huruf menggunakan perkalian matriks modulo 26, menjadikannya lebih tahan terhadap analisis frekuensi dibanding cipher sederhana.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
