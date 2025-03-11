import { useState } from "react"
import './website.css';
import { decryptAutokeyVigenere, encryptAutokeyVigenere } from "../services/autoKeyVigenere";

export default function Website() {
    const [encrypt, setEncrypt] = useState({
        plainText: "",
        key: "",
        cipherText: "",
    });

    const [decrypt, setDecrypt] = useState({
        plainText: "",
        key: "",
    });

    const handleChange = (e) => {
        setEncrypt({
            ...encrypt, 
            [e.target.name] : e.target.value
        });
        setDecrypt({
            ...decrypt, 
            key : e.target.value})
    }

    const handleClickEncrypt = () => {
        const cipherText = encryptAutokeyVigenere(encrypt.plainText, encrypt.key);
        setEncrypt({
            ...encrypt,
            plainText : "",
            key: "",
            cipherText: cipherText,
        })
    }

    const handleClickDecrypt = () => {
        const plainText = decryptAutokeyVigenere(encrypt.cipherText, decrypt.key);
        setDecrypt({
            ...decrypt,
            plainText: plainText
        });
    }


    return (
        <div className="wrapper">
            <input type="text" onChange={handleChange} value={encrypt.plainText} name="plainText"/>
            <input type="text" onChange={handleChange} value={encrypt.key} name="key"/>
            <button onClick={handleClickEncrypt}>Encrypt Text</button>
            <div>
                <h2>Cipher Text</h2>
                <p>{ encrypt.cipherText }</p>
            </div>
            <button onClick={handleClickDecrypt}>Decrypt</button>
            <div>
                <h2>Plain Text</h2>
                <p>{ decrypt.plainText }</p>
            </div>
        </div>
    )
}