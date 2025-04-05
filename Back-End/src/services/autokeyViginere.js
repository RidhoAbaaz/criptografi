const charToIndex = (char) => char.toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0);

const indexToChar = (index) => {
    return String.fromCharCode((index % 26) + 'A'.charCodeAt(0));
};

const encryptAutokeyVigenere = (plaintext, key) => {
    let ciphertext = "";
    key = key.replace(/[^a-zA-Z]/g, "").toUpperCase(); // hanya huruf, jadi kapital
    let keyIndex = 0;
    let fullKey = key;

    for (let i = 0; i < plaintext.length; i++) {
        let char = plaintext[i];

        if (char.match(/[a-zA-Z]/)) {
            let p = charToIndex(char);
            let k = charToIndex(fullKey[keyIndex]);
            let c = (p + k) % 26;
            
            ciphertext += indexToChar(c);
            fullKey += indexToChar(p); // tambahkan huruf plaintext kapital ke fullKey
            keyIndex++;
        }
    }

    return ciphertext;
};

const decryptAutokeyVigenere = (ciphertext, key) => {
    let plaintext = "";
    key = key.replace(/[^a-zA-Z]/g, "").toUpperCase();
    let keyIndex = 0;
    let fullKey = key;

    for (let i = 0; i < ciphertext.length; i++) {
        let char = ciphertext[i];

        if (char.match(/[a-zA-Z]/)) {
            let c = charToIndex(char);
            let k = charToIndex(fullKey[keyIndex]);
            let p = (c - k + 26) % 26;
            let decryptedChar = indexToChar(p);

            plaintext += decryptedChar;
            fullKey += decryptedChar;
            keyIndex++;
        }
    }

    return plaintext;
};

module.exports = { encryptAutokeyVigenere, decryptAutokeyVigenere };