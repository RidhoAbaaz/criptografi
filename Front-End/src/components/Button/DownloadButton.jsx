import styles from "./Button.module.css";

export default function DownloadButton({ text, icon }) {
    return (
        <button className={styles.downloadBtn}>
            {text}
            <i class={icon}></i>
        </button>
    )
}