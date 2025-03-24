import { useState } from "react";
import styles from "./TextField.module.css";
import UploadButton from "../Button/UploadButton";
import DownloadButton from "../Button/DownloadButton";

export default function PlainTextField() {
    const [selectedFormat, setSelectedFormat] = useState("text");

    return (
        <div className={styles.textField}>
            <div className={styles.textTitle}>
                <h2>Ciphertext</h2>
                <select value={selectedFormat} onChange={(e) => setSelectedFormat(e.target.value)}>
                    <option value="text">Text</option>
                    <option value="binary">Binary</option>
                </select>
            </div>
            <hr />

            <textarea className={styles.textInput} placeholder="Write ciphertext here..." />
            <hr />

            <div className={styles.textFooter}>
                <div className={styles.footerWrap}>
                    <UploadButton text="Upload File" icon="bi bi-paperclip" />
                    <DownloadButton text="Download" icon="bi bi-download" />
                </div>
                <DownloadButton text="Decrypt" icon="bi bi-unlock" />
            </div>
        </div>
    );
}
