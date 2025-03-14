import { useState } from "react";
import "./VigenereStd.css";
import { vigenereEncrypt, vigenereDecrypt } from "../../services/vigenereChiperStd";

export default function VigenereStd() {
    const [text, setText] = useState("");
    const [key, setKey] = useState("");
    const [result, setResult] = useState("");

    const handleEncrypt = () => {
        setResult(vigenereEncrypt(text, key));
    };

    const handleDecrypt = () => {
        setResult(vigenereDecrypt(text, key));
    };

    return (
        <div className="vigenere-container">
            <h1>Vigenère Cipher</h1>
            <div className="input-group">
                <label>Text:</label>
                <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
            </div>

            <div className="input-group">
                <label>Key:</label>
                <input type="text" value={key} onChange={(e) => setKey(e.target.value)} placeholder="Enter key..." />
            </div>

            <div className="button-group">
                <button onClick={handleEncrypt} className="encrypt-btn">Encrypt</button>
                <button onClick={handleDecrypt} className="decrypt-btn">Decrypt</button>
            </div>

            {result && (
                <div className="result">
                    <h3>Result:</h3>
                    <p>{result}</p>
                </div>
            )}
        </div>
    );
}
