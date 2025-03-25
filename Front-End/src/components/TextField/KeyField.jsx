import styles from "./TextField.module.css";
import KeyIcon from "../../assets/key.png";

export default function KeyField() {
    return (
    <div className={styles.chiperKey}>
        <div className={styles.keyTitle}>
            <img src={KeyIcon} className={styles.iconKey} alt="Key" />
            <h2>Key</h2>
        </div>
        <hr></hr>
        <input type="text"placeholder="Write the key here..."/>
    </div>
    )
}