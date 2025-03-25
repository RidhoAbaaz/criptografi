import styles from "./Button.module.css";

export default function UploadButton({ text, icon, event }) {
    return (
        <button className={styles.uploadBtn} onClick={event}>
            {text}
            <i class={icon}></i>
        </button>
    )
}