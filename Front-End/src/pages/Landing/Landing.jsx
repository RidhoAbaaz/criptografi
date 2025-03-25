import styles from "./Landing.module.css";
import { useRef, useState } from "react";
import MoonIcon from "../../assets/ToggleOnly.png";
import SideBar from "../../components/SideBar/SideBar";

const Landing = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  const landingPage = useRef(null);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };


  return (
    <div className={`${styles.landingContainer} ${isDarkMode ? styles.darkMode : styles.lightMode}`}>
      <SideBar ref={landingPage}/>
      {/* Main Content */}
      <div className={styles.mainContent} ref={landingPage}>
        <div className={styles.navbar}>
          <h1 className={styles.navbarTitle}>CipherVault</h1>
          <button className={styles.toggleDarkmode} onClick={toggleDarkMode}>
            <span>Night Mode</span>
            <img src={MoonIcon} alt="Night Mode" className={styles.moonIcon} />
          </button>
        </div>
        <div className={styles.content}>
          <div className={styles.contentTitle}>
            <h2>Welcome to CipherVault</h2>
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
              <h2 className={styles.chiperTitle}>Vigenere Cipher Standard</h2>
              <p className={styles.chiperText}>
                Vigenere Cipher (Standard) adalah cipher polialfabetik yang mengenkripsi teks dengan menggeser huruf berdasarkan kata kunci berulang.
              </p>
            </div>
            <div className={styles.cipherCard}>
              <h2 className={styles.chiperTitle}>Auto-Key Vigenere Cipher</h2>
              <p className={styles.chiperText}>
                Auto-Key Vigenere Cipher adalah varian Vigenere yang lebih aman karena menggunakan sebagian teks asli sebagai kelanjutan kunci, mengurangi pola berulang.
              </p>
            </div>
            <div className={styles.cipherCard}>
              <h2 className={styles.chiperTitle}>Extended Vigenere Cipher</h2>
              <p className={styles.chiperText}>
                Extended Vigenere Cipher mendukung 256 karakter ASCII, memungkinkan enkripsi huruf, angka, dan simbol untuk fleksibilitas lebih luas.
              </p>
            </div>
            <div className={styles.cipherCard}>
              <h2 className={styles.chiperTitle}>Affine Cipher</h2>
              <p className={styles.chiperText}>
                Affine Cipher menggunakan persamaan matematika (ax + b) mod 26 untuk mengenkripsi huruf, dengan keamanannya bergantung pada pemilihan a yang memiliki invers modular.
              </p>
            </div>
            <div className={styles.cipherCard}>
              <h2 className={styles.chiperTitle}>Playfair Cipher</h2>
              <p className={styles.chiperText}>
                Playfair Cipher mengenkripsi pasangan huruf menggunakan tabel 5x5 berbasis kata kunci, membuatnya lebih sulit dipecahkan dibanding cipher substitusi tunggal.
              </p>
            </div>
            <div className={styles.cipherCard}>
              <h2 className={styles.chiperTitle}>Hill Cipher</h2>
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