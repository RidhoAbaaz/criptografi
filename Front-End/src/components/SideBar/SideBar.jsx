import styles from "./SideBar.module.css";
import HomeIcon from "../../assets/home.png";
import MenuIcon from "../../assets/menu.png";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function SideBar({ ref = null }) {
    const [sidebar, setSidebar] = useState(false);
    const location = useLocation();

    const toggleSidebar = () => {
        setSidebar(prev => {
            console.log("Sidebar Toggled:", !prev);

            if (!prev) {
                ref.current.classList.add(styles.blur);
                ref.current.style.filter = "blur(5px)";
            } else {
                ref.current.style.filter = "blur(0px)";
                setTimeout(() => {
                    ref.current.classList.remove(styles.blur);
                }, 300); // Sesuai dengan durasi transition
            }

            return !prev;
        });
    };

    return (
        <>
            {sidebar && <div className={styles.overlay} onClick={toggleSidebar}></div>}
            <div className={`${styles.sidebarContainer} ${sidebar ? styles.expanded : ''}`}>
                <div className={styles.wrapperMenu} >
                    <button onClick={toggleSidebar}>
                        <img src={MenuIcon} alt="menu" />
                    </button>
                    <h2 onClick={!sidebar ? toggleSidebar : null}>Navigation</h2>
                </div>
                <div className={`${styles.wrapperHome} ${location.pathname === "/" ? styles.wrapperHomeSelected : styles.wrapperHomeUnselected}`} onClick={() => {if (!(location.pathname === "/")) {window.location.href = "/";}}}>
                    <a
                        href={location.pathname !== "/" ? "/" : undefined} 
                        onClick={(e) => { if (location.pathname === "/") e.preventDefault(); }}
                        style={{ cursor: location.pathname === "/" ? "default" : "pointer" }}
                    >
                        <img src={HomeIcon} alt="" />
                    </a>
                    <h3>Home</h3>
                </div>
                <div className={`${styles.wrapper} ${location.pathname === "/vcs" ? styles.wrapperSelected : styles.wrapperUnselected}`} onClick={() => {if (!(location.pathname === "/vcs")) {window.location.href = "/vcs";}}}>
                    <a
                        href={location.pathname !== "/vcs" ? "/vcs" : undefined} 
                        onClick={(e) => { if (location.pathname === "/vcs") e.preventDefault(); }}
                        style={{ cursor: location.pathname === "/vcs" ? "default" : "pointer" }}
                    >1</a>
                    <h3>Vigenere Cipher Standard</h3>
                </div>
                <div className={`${styles.wrapper} ${location.pathname === "/akvc" ? styles.wrapperSelected : styles.wrapperUnselected}`} onClick={() => {if (!(location.pathname === "/akvc")) {window.location.href = "/akvc";}}}>
                    <a
                        href={location.pathname !== "/akvc" ? "/akvc" : undefined} 
                        onClick={(e) => { if (location.pathname === "/akvc") e.preventDefault(); }}
                        style={{ cursor: location.pathname === "/akvc" ? "default" : "pointer" }}
                    >2</a>
                    <h3>Auto-Key Vigenere Cipher</h3>
                </div>
                <div className={`${styles.wrapper} ${location.pathname === "/evc" ? styles.wrapperSelected : styles.wrapperUnselected}`} onClick={() => {if (!(location.pathname === "/evc")) {window.location.href = "/evc";}}}>
                    <a
                        href={location.pathname !== "/evc" ? "/evc" : undefined} 
                        onClick={(e) => { if (location.pathname === "/evc") e.preventDefault(); }}
                        style={{ cursor: location.pathname === "/evc" ? "default" : "pointer" }}
                    >3</a>
                    <h3>Extended Vigenere Cipher</h3>
                </div>
                <div className={`${styles.wrapper} ${location.pathname === "/ac" ? styles.wrapperSelected : styles.wrapperUnselected}`} onClick={() => {if (!(location.pathname === "/ac")) {window.location.href = "/ac";}}}>
                    <a
                        href={location.pathname !== "/ac" ? "/ac" : undefined} 
                        onClick={(e) => { if (location.pathname === "/ac") e.preventDefault(); }}
                        style={{ cursor: location.pathname === "/ac" ? "default" : "pointer" }}
                    >4</a>
                    <h3>Affine Cipher</h3>
                </div>
                <div className={`${styles.wrapper} ${location.pathname === "/pc" ? styles.wrapperSelected : styles.wrapperUnselected}`} onClick={() => {if (!(location.pathname === "/pc")) {window.location.href = "/pc";}}}>
                    <a
                        href={location.pathname !== "/pc" ? "/pc" : undefined} 
                        onClick={(e) => { if (location.pathname === "/pc") e.preventDefault(); }}
                        style={{ cursor: location.pathname === "/pc" ? "default" : "pointer" }}
                    >5</a>
                    <h3>Playfair Cipher</h3>
                </div>
                <div className={`${styles.wrapper} ${location.pathname === "/hc" ? styles.wrapperSelected : styles.wrapperUnselected}`} onClick={() => {if (!(location.pathname === "/hc")) {window.location.href = "/hc";}}}>
                    <a
                        href={location.pathname !== "/hc" ? "/hc" : undefined} 
                        onClick={(e) => { if (location.pathname === "/hc") e.preventDefault(); }}
                        style={{ cursor: location.pathname === "/hc" ? "default" : "pointer" }}
                    >6</a>
                    <h3>Hill Cipher</h3>
                </div>
            </div>
        </>
    )
}