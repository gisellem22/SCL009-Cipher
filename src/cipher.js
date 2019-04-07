window.cipher = {
  encode: (offsetEn, textToCipher) => {
    let result ="";
    for (let i = 0; i < textToCipher.length; i++){
      let ascNumEn = '';
      ascNumEn += textToCipher.charCodeAt(i);
      if(ascNumEn >= 65 && ascNumEn <=  90) {
        result += String.fromCharCode((ascNumEn - 65 + offsetEn) % 26 + 65);
      } else if(ascNumEn >= 97 && ascNumEn <=  122) {
        result += String.fromCharCode((ascNumEn - 97 + offsetEn) % 26 + 97);
      } else {
        result += textToCipher[i];
      }
    }
    return result; 
  },

  decode: (offsetDe, textToDecipher) => {
    let result2 ="";
            for (let i = 0; i < textToDecipher.length; i++){
                let ascNumDe = '';
                ascNumDe += textToDecipher.charCodeAt(i);
             if(ascNumDe >= 65 && ascNumDe <=  90) {
                result2 += String.fromCharCode((ascNumDe - 65 + (26 - offsetDe %26)) % 26 + 65);    
              } else if(ascNumDe >= 97 && ascNumDe <=  122) {
                result2 += String.fromCharCode((ascNumDe - 97 + (26 - offsetDe %26)) % 26 + 97);
              } else {
            result2 += textToDecipher[i];
          }
        }
        return result2;
      }
    };
