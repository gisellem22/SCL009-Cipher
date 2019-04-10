//Declarando variables
const containerRoot = document.getElementById("root");
const btnCipher = document.getElementById("button_cipher");
const btnDecipher = document.getElementById("button_decipher");
const showCipher = document.getElementById("cipher_screen");
const showDecipher = document.getElementById("decipher_screen");
const btnEncode = document.getElementById("btn_encode");
const btnDecode = document.getElementById("btn_decode");
const btnBackEn = document.getElementById("back_from_encode");
const btnBackDe = document.getElementById("back_from_decode");
let showTextToCipher = document.getElementById("textcipher1");
let showOffsetEn = document.getElementById("key1");
let showCipheredSecret = document.getElementById("ciphered_secret");
let showTextToDecipher = document.getElementById("textdecipher2");
let showOffsetDe = document.getElementById("key2");
let showDecipheredSecret = document.getElementById("deciphered_secret");

//Cambiar de atributo de display - Mostrar Div Cifrar
btnCipher.addEventListener("click", () => {
    containerRoot.style.display = (containerRoot.style.display == "block") ? "none" : "block";
    showCipher.style.display = (showCipher.style.display == "none") ? "block" : "none";
});
//Cambiar de atributo de display - Mostra DIV Descifrar
btnDecipher.addEventListener("click", () => {
    containerRoot.style.display = (containerRoot.style.display=="block") ?"none" : "block";
    showDecipher.style.display = (showDecipher.style.display=="none") ?"block" : "none";
});
//Botón volver desde Cifrar
btnBackEn.addEventListener("click", () => {
    showCipher.style.display = (showCipher.style.display == "none") ? "block" : "none";
    containerRoot.style.display = (containerRoot.style.display == "block") ? "none" : "block";
    showTextToCipher.value = "";
    showOffsetEn.value = "";
    showCipheredSecret.value ="";
})
//Botón volver desde Descifrar
btnBackDe.addEventListener("click", () => {
    showDecipher.style.display = (showDecipher.style.display=="none") ?"block" : "none";
    containerRoot.style.display = (containerRoot.style.display == "block") ? "none" : "block";
    showTextToDecipher.value = "";
    showOffsetDe.value = "";
    showDecipheredSecret.value = "";
})
//Botón que llama a la función CIFRAR
btnEncode.addEventListener("click", () => {
    let textToCipher = showTextToCipher.value;
    let offsetEn = parseInt(showOffsetEn.value);
    showCipheredSecret.value = window.cipher.encode(offsetEn, textToCipher);
}
);
//Botón que llama a la función DESCIFRAR
btnDecode.addEventListener("click", () => {
    let textToDecipher = showTextToDecipher.value;
    let offsetDe = parseInt(showOffsetDe.value);
    showDecipheredSecret.value = window.cipher.decode(offsetDe, textToDecipher);
}
);