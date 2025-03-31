function mod(n, m) {
    return ((n % m) + m) % m;
}

// Mengonversi huruf ke angka (A=0, B=1, ..., Z=25)
function charToNum(c) {
    return c.toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0);
}

// Mengonversi angka ke huruf, mempertahankan kapitalisasi
function numToChar(n, isUpperCase) {
    let char = String.fromCharCode(n + 'A'.charCodeAt(0));
    return isUpperCase ? char : char.toLowerCase();
}

// Mengubah string kunci menjadi matriks sesuai ukuran
function keyToMatrix(key) {
    key = key.toUpperCase().replace(/[^A-Z]/g, '');
    let size = Math.sqrt(key.length);
    if (size % 1 !== 0) {
        throw new Error("Panjang kunci harus merupakan kuadrat sempurna (4, 9, 16, dst.).");
    }
    
    let matrix = [];
    for (let i = 0; i < size; i++) {
        matrix.push(key.slice(i * size, (i + 1) * size).split('').map(charToNum));
    }
    return matrix;
}

// Perkalian matriks dengan vektor
function multiplyMatrixVector(matrix, vector) {
    return matrix.map(row => mod(row.reduce((sum, val, i) => sum + val * vector[i], 0), 26));
}

// Mencari determinan matriks
function determinant(matrix) {
    let size = matrix.length;
    if (size === 2) {
        return mod(matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0], 26);
    }

    let det = 0;
    for (let i = 0; i < size; i++) {
        let subMatrix = matrix.slice(1).map(row => row.filter((_, j) => j !== i));
        det += (i % 2 === 0 ? 1 : -1) * matrix[0][i] * determinant(subMatrix);
    }
    return mod(det, 26);
}

// Mencari invers modulo 26
function modInverse(a, m) {
    for (let i = 1; i < m; i++) {
        if ((a * i) % m === 1) return i;
    }
    return -1;
}

// Mencari invers matriks
function matrixInverse(matrix) {
    let size = matrix.length;
    let det = determinant(matrix);
    let detInv = modInverse(det, 26);
    if (detInv === -1) throw new Error("Matriks kunci tidak memiliki invers.");

    if (size === 2) {
        return [
            [mod(matrix[1][1] * detInv, 26), mod(-matrix[0][1] * detInv, 26)],
            [mod(-matrix[1][0] * detInv, 26), mod(matrix[0][0] * detInv, 26)]
        ];
    }

    let adj = Array(size).fill(0).map(() => Array(size).fill(0));
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let subMatrix = matrix.filter((_, row) => row !== i).map(row => row.filter((_, col) => col !== j));
            let cofactor = determinant(subMatrix);
            adj[j][i] = mod((i + j) % 2 === 0 ? cofactor : -cofactor, 26);
        }
    }

    return adj.map(row => row.map(val => mod(val * detInv, 26)));
}

// Enkripsi Hill Cipher
function hillEncrypt(plainText, key) {
    let keyMatrix = keyToMatrix(key);
    let size = keyMatrix.length;

    let formattedText = plainText.replace(/[^a-zA-Z]/g, '');
    while (formattedText.length % size !== 0) {
        formattedText += 'X';
    }

    let cipherText = '';
    for (let i = 0; i < formattedText.length; i += size) {
        let block = formattedText.slice(i, i + size).split('').map(char => ({
            num: charToNum(char),
            isUpperCase: char === char.toUpperCase()
        }));
        let encryptedBlock = multiplyMatrixVector(keyMatrix, block.map(b => b.num));
        cipherText += encryptedBlock.map((num, idx) => numToChar(num, block[idx].isUpperCase)).join('');
    }

    return cipherText;
}

// Dekripsi Hill Cipher
function hillDecrypt(cipherText, key) {
    let keyMatrix = keyToMatrix(key);
    let size = keyMatrix.length;
    let inverseKey = matrixInverse(keyMatrix);

    let plainText = '';
    for (let i = 0; i < cipherText.length; i += size) {
        let block = cipherText.slice(i, i + size).split('').map(char => ({
            num: charToNum(char),
            isUpperCase: char === char.toUpperCase()
        }));
        let decryptedBlock = multiplyMatrixVector(inverseKey, block.map(b => b.num));
        plainText += decryptedBlock.map((num, idx) => numToChar(num, block[idx].isUpperCase)).join('');
    }

    return plainText;
}

module.exports = { hillEncrypt, hillDecrypt };