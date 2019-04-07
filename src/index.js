//Declarando variables
const containerRoot = document.getElementById("root");
const btnCipher = document.getElementById("buttonCipher");
const btnDecipher = document.getElementById("buttonDecipher");
let showCipher = document.getElementById("cipherScreen");
let showDecipher = document.getElementById("decipherScreen");
const btnEncode = document.getElementById("btnencode");
const btnDecode = document.getElementById("btndecode");
let textToCipher;
let textToDecipher;
let offsetEn;
let offsetDe;
let encodeResult;
let decodeResult;
//Cambiar de atributo de display - Mostrar Div Cipher
btnCipher.addEventListener("click", () => {
    containerRoot.style.display = (containerRoot.style.display == "block") ? "none" : "block";
    showCipher.style.display = (showCipher.style.display == "none") ? "block" : "none";
});
//Cambiar de atributo de display - Mostra DIV Descifrar
btnDecipher.addEventListener("click", () => {
    containerRoot.style.display = (containerRoot.style.display=="block") ?"none" : "block";
    showDecipher.style.display = (showDecipher.style.display=="none") ?"block" : "none";
});
//Botón que llama a la función CIFRAR
btnEncode.addEventListener("click", () => {
    textToCipher = document.getElementById("textcipher1").value;
    offsetEn = parseInt(document.getElementById("key").value);
    encodeResult = document.getElementById("cipheredSecret");
    encodeResult.innerHTML= window.cipher.encode(offsetEn, textToCipher);
}
);
//Botón que llama a la función DESCIFRAR
btnDecode.addEventListener("click", () => {
    textToDecipher = document.getElementById("textdecipher2").value;
    offsetDe = parseInt(document.getElementById("key2").value);
    decodeResult = document.getElementById("decipheredSecret");
    decodeResult.innerHTML= window.cipher.decode(offsetDe, textToDecipher);
}
);