import styles from "./Button.module.css";

export default function UploadButton({ text, icon }) {
    return (
        <button className={styles.uploadBtn}>
            {text}
            <i class={icon}></i>
        </button>
    )
}