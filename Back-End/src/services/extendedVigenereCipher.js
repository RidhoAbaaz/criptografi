function extendedVigenereEncrypt(plaintext, key) {
    let ciphertext = "";
    let keyLength = key.length;

    for (let i = 0; i < plaintext.length; i++) {
        let pI = plaintext.charCodeAt(i);
        let kI = key.charCodeAt(i % keyLength);
        let cI = (pI + kI) % 256;
        ciphertext += String.fromCharCode(cI);
    }

    return ciphertext;
}

function extendedVigenereDecrypt(ciphertext, key) {
    let plaintext = "";
    let keyLength = key.length;

    for (let i = 0; i < ciphertext.length; i++) {
        let cI = ciphertext.charCodeAt(i);
        let kI = key.charCodeAt(i % keyLength);
        let pI = (cI - kI + 256) % 256;
        plaintext += String.fromCharCode(pI);
    }

    return plaintext;
}  

module.exports = { extendedVigenereEncrypt, extendedVigenereDecrypt };