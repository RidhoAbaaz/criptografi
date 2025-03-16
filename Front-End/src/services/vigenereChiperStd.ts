export function vigenereEncrypt(plaintext, key) {
    let ciphertext = "";
    key = key.toLowerCase();
    let keyLength = key.length;
  
    for (let i = 0, j = 0; i < plaintext.length; i++) {
        let char = plaintext[i];

        if (char.match(/[a-z]/i)) { 
            let shift = key.charCodeAt(j % keyLength) - 97;
            let base = char === char.toUpperCase() ? 65 : 97;
            ciphertext += String.fromCharCode((char.charCodeAt(0) - base + shift) % 26 + base);
            j++;
        } else {
            ciphertext += char;
        }
    }
  
    return ciphertext;
}

export function vigenereDecrypt(ciphertext, key) {
    let plaintext = "";
    key = key.toLowerCase();
    let keyLength = key.length;
  
    for (let i = 0, j = 0; i < ciphertext.length; i++) {
        let char = ciphertext[i];

        if (char.match(/[a-z]/i)) { 
            let shift = key.charCodeAt(j % keyLength) - 97;
            let base = char === char.toUpperCase() ? 65 : 97;
            plaintext += String.fromCharCode((char.charCodeAt(0) - base - shift + 26) % 26 + base);
            j++;
        } else {
            plaintext += char;
        }
    }
  
    return plaintext;
}