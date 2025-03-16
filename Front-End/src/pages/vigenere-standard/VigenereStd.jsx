import { useState } from "react";
import "./VigenereStd.css";
import { vigenereEncrypt, vigenereDecrypt } from "../../services/vigenereChiperStd";

export default function VigenereStd() {
    const [plainText, setPlainText] = useState("");
    const [encryptedText, setEncryptedText] = useState("");
    const [key, setKey] = useState("");

    const handleTextChange = (e, isPlainText) => {
        const value = e.target.value;
        if (!key) {
            setPlainText("");
            setEncryptedText("");
            return;
        }
        if (isPlainText) {
            setPlainText(value);
            setEncryptedText(vigenereEncrypt(value, key));
        } else {
            setEncryptedText(value);
            setPlainText(vigenereDecrypt(value, key));
        }
    };

    const handleKeyChange = (e) => {
        setKey(e.target.value);
        setPlainText("");
        setEncryptedText("");
    };

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const text = e.target.result;
                setPlainText(text);
                setEncryptedText(vigenereEncrypt(text, key));
            };
            reader.readAsText(file);
        }
    };

    const handleDownload = () => {
        const blob = new Blob([encryptedText], { type: "text/plain" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "encrypted.txt";
        link.click();
    };

    return (
        <div className="vigenere-container">
            <h1>Vigenère Cipher</h1>
            <div className="input-group">
                <label>Key:</label>
                <input type="text" value={key} onChange={handleKeyChange} placeholder="Enter key..." />
            </div>

            <div className="file-group">
                <input type="file" accept=".txt" onChange={handleFileUpload} />
            </div>

            <div className="input-group">
                <label>Plain Text:</label>
                <textarea value={plainText} onChange={(e) => handleTextChange(e, true)} placeholder="Enter plain text..." />
            </div>

            <div className="input-group">
                <label>Encrypted Text:</label>
                <textarea value={encryptedText} onChange={(e) => handleTextChange(e, false)} placeholder="Encrypted text..." />
            </div>

            <button onClick={handleDownload} className="download-btn" disabled={!encryptedText}>Download Encrypted File</button>
        </div>
    );
}