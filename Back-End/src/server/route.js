const { autokeyVigenereHandler, affineCipherHandler, hillCipherHandler, vigenereCipherHandler } = require("./handler")

const routes = [
    {
        method: "POST",
        path: "/autokeyVigenere",
        handler: autokeyVigenereHandler,
    },
    {
        method:"POST",
        path: "/affineCipher",
        handler: affineCipherHandler,
    },
    {
        method: "POST",
        path: "/hillCipher",
        handler: hillCipherHandler,
    },
    {
        method: "POST",
        path: "/vigenereCipher",
        handler: vigenereCipherHandler,
    }
]

module.exports = routes