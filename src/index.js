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
    document.getElementById("textcipher1").value = "";
    document.getElementById("key1").value = "";
    document.getElementById("ciphered_secret").value ="";
})
//Botón volver desde Descifrar
btnBackDe.addEventListener("click", () => {
    showDecipher.style.display = (showDecipher.style.display=="none") ?"block" : "none";
    containerRoot.style.display = (containerRoot.style.display == "block") ? "none" : "block";
    document.getElementById("textdecipher2").value = "";
    document.getElementById("key2").value = "";
    document.getElementById("deciphered_secret").value = "";
})
//Botón que llama a la función CIFRAR
btnEncode.addEventListener("click", () => {
    let textToCipher = document.getElementById("textcipher1").value;
    let offsetEn = parseInt(document.getElementById("key1").value);
    let encodeResult = document.getElementById("ciphered_secret");
    encodeResult.innerHTML= window.cipher.encode(offsetEn, textToCipher);
}
);
//Botón que llama a la función DESCIFRAR
btnDecode.addEventListener("click", () => {
    let textToDecipher = document.getElementById("textdecipher2").value;
    let offsetDe = parseInt(document.getElementById("key2").value);
    let decodeResult = document.getElementById("deciphered_secret");
    decodeResult.innerHTML= window.cipher.decode(offsetDe, textToDecipher);
}
);