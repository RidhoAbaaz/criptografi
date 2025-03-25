import styles from "./SideBar.module.css";
import HomeIcon from "../../assets/home.png";
import MenuIcon from "../../assets/menu.png";
import { useState } from "react";

export default function SideBar({ ref = null}) {
    const [sidebar, setSidebar] = useState(false);

    const toggleSidebar = () => {
        setSidebar(prev => {
        console.log("Sidebar Toggled:", !prev);
        return !prev;
        });

        if (!sidebar) {
            ref.current.style.filter = "blur(5px)";
        }
        else {
            ref.current.style.filter = "blur(0px)";
        }
    };

    return (
        <div className={`${styles.sidebarContainer} ${sidebar ? styles.expanded : ''}`}>
            <div className={styles.wrapperMenu} >
                <button  onClick={toggleSidebar}>
                <img src={MenuIcon} alt="menu" />
                </button>
                <h2 onClick={!sidebar ? toggleSidebar : null}>Navigation</h2>
            </div>
            <div className={styles.wrapperHome}>
                <a href="/">
                <img src={HomeIcon} alt="" />
                </a>
                <h3>Home</h3>
            </div>
            <div className={styles.wrapper}  onClick={() => window.location.href = '/vcs'}>
                <a href="/vcs">1</a>
                <h3>Vigenere Cipher Standard</h3>
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
    )
}