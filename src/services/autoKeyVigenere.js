function charToIndex(char) {
    return char.charCodeAt(0) - 'A'.charCodeAt(0);
}

function indexToChar(index) {
    return String.fromCharCode((index % 26) + 'A'.charCodeAt(0));
}

function encryptAutokeyVigenere(plaintext, key) {
    plaintext = plaintext.toUpperCase().replace(/[^A-Z]/g, '');
    key = key.toUpperCase();

    const newPlainText = plaintext.slice(0, -key.length)
    let fullKey = key + newPlainText;

    let ciphertext = '';

    for (let i = 0; i < plaintext.length; i++) {
        let p = charToIndex(plaintext[i]);
        let k = charToIndex(fullKey[i]);
        let c = (p + k) % 26;

        if (i % 5 == 0) {
            ciphertext += " ";
        }
        
        ciphertext += indexToChar(c);
    }

    return ciphertext;
}

function decryptAutokeyVigenere(ciphertext, key) {
    console.log(ciphertext);
    console.log(key);
    ciphertext = ciphertext.toUpperCase().replace(/[^A-Z]/g, '');
    key = key.toUpperCase();
    
    let plaintext = '';
    let fullKey = key; 

    for (let i = 0; i < ciphertext.length; i++) {
        let c = charToIndex(ciphertext[i]);
        let k = charToIndex(fullKey[i]);
        let p = (c - k + 26) % 26;
        let decryptedChar = indexToChar(p);
        
        plaintext += decryptedChar;
        fullKey += decryptedChar;
    }

    return plaintext;
}

export { encryptAutokeyVigenere, decryptAutokeyVigenere };
