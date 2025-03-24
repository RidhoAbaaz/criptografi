import styles from "./Landing.module.css";
import { useState } from "react";
import HomeIcon from "../../assets/home.png";
import MoonIcon from "../../assets/ToggleOnly.png";
import MenuIcon from "../../assets/menu.png";

const Landing = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  const toggleSidebar = () => {
    setSidebar(prev => {
      console.log("Sidebar Toggled:", !prev);
      return !prev;
    });
  };

  return (
    <div className={`${styles.landingContainer} ${isDarkMode ? styles.darkMode : styles.lightMode}`}>
      <div className={`${styles.sidebarContainer} ${sidebar ? styles.expanded : ''}`}>
        <div className={styles.wrapperMenu}  onClick={toggleSidebar}>
          <button>
            <img src={MenuIcon} alt="menu" />
          </button>
          <h2>Navigation</h2>
        </div>
        <div className={styles.wrapperHome} onClick={() => window.location.href = '/'}>
          <a href="/">
            <img src={HomeIcon} alt="" />
          </a>
          <h3>Home</h3>
        </div>
        <div className={styles.wrapper}  onClick={() => window.location.href = '/vcs'}>
          <a href="/vcs">1</a>
          <h3>Vigenere Chiper Standard</h3>
        </div>
        <div className={styles.wrapper} onClick={() => window.location.href = '/akvc'}>
          <a href="/akvc">2</a>
          <h3>Auto-Key Vigenere Cipher</h3>
        </div>
        <div className={styles.wrapper} onClick={() => window.location.href = '/evc'}>
          <a href="/evc">3</a>
          <h3>Extended Vigenere Cipher</h3>
        </div>
        <div className={styles.wrapper} onClick={() => window.location.href = '/ac'}>
          <a href="/ac">4</a>
          <h3>Affine Cipher</h3>
        </div>
        <div className={styles.wrapper} onClick={() => window.location.href = '/pc'}>
          <a href="/pc">5</a>
          <h3>Playfair Cipher</h3>
        </div>
        <div className={styles.wrapper} onClick={() => window.location.href = '/hc'}>
          <a href="/hc">6</a>
          <h3>Hill Cipher</h3>
        </div>
      </div>
      {/* Main Content */}
      <div className={`${styles.overlay} ${sidebar ? styles.visible : ''}`}  onClick={sidebar ? toggleSidebar : null}></div>
      <div className={styles.mainContent}>
        <div className={styles.navbar}>
          <h1 className={styles.navbarTitle}>ChiperVault</h1>
          <button className={styles.toggleDarkmode} onClick={toggleDarkMode}>
            <span>Night Mode</span>
            <img src={MoonIcon} alt="Night Mode" className={styles.moonIcon} />
          </button>
        </div>
        <div className={styles.content}>
          <div className={styles.contentTitle}>
            <h2>Welcome to ChiperVault</h2>
          </div>
          <div className={styles.contentText}>
            <p>
              Explore encryption and decryption with six powerful cryptographic algorithms.
              Our platform provides easy-to-use tools to encrypt and decrypt messages while learning the fundamentals of cryptography.
            </p>
            <br />
            <p>Try these six encryption and decryption methods :</p>
          </div>
          <div className={styles.cipherCards}>
            <div className={styles.cipherCard}>
              <h2 className={styles.chiperTitle}>Vigenere Chiper Standard</h2>
              <p className={styles.chiperText}>
                Vigenere Cipher (Standard) adalah cipher polialfabetik yang mengenkripsi teks dengan menggeser huruf berdasarkan kata kunci berulang.
              </p>
            </div>
            <div className={styles.cipherCard}>
              <h2 className={styles.chiperTitle}>Auto Key Vignere Chiper</h2>
              <p className={styles.chiperText}>
                Auto-Key Vigenere Cipher adalah varian Vigenere yang lebih aman karena menggunakan sebagian teks asli sebagai kelanjutan kunci, mengurangi pola berulang.
              </p>
            </div>
            <div className={styles.cipherCard}>
              <h2 className={styles.chiperTitle}>Extended Vigenere Chiper</h2>
              <p className={styles.chiperText}>
                Extended Vigenere Cipher mendukung 256 karakter ASCII, memungkinkan enkripsi huruf, angka, dan simbol untuk fleksibilitas lebih luas.
              </p>
            </div>
            <div className={styles.cipherCard}>
              <h2 className={styles.chiperTitle}>Affine Chiper</h2>
              <p className={styles.chiperText}>
                Affine Cipher menggunakan persamaan matematika (ax + b) mod 26 untuk mengenkripsi huruf, dengan keamanannya bergantung pada pemilihan a yang memiliki invers modular.
              </p>
            </div>
            <div className={styles.cipherCard}>
              <h2 className={styles.chiperTitle}>Playfair Chiper</h2>
              <p className={styles.chiperText}>
                Playfair Cipher mengenkripsi pasangan huruf menggunakan tabel 5x5 berbasis kata kunci, membuatnya lebih sulit dipecahkan dibanding cipher substitusi tunggal.
              </p>
            </div>
            <div className={styles.cipherCard}>
              <h2 className={styles.chiperTitle}>Hill Chiper</h2>
              <p className={styles.chiperText}>
                Hill Cipher mengenkripsi blok huruf menggunakan perkalian matriks modulo 26, menjadikannya lebih tahan terhadap analisis frekuensi dibanding cipher sederhana.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;