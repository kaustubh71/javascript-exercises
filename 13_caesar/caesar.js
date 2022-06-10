const caesar = function(string, shift) {
    return string.split("").map((char) => charShift(char, shift)).join("")
};

const charShift = (char, shift) => {
    const utfCode = char.charCodeAt()

    if ((utfCode>=65 && utfCode<=90) || (utfCode>=97 && utfCode<=122)) {
        return String.fromCharCode(
            negativeNumberMod(utfCode + shift - codeSet(utfCode), 26) + codeSet(utfCode)
        )
    }
    return char
}

const codeSet = code => code < 97 ? 65 : 97

const negativeNumberMod = (n,m) => (n % m + m) % m



// Do not edit below this line
module.exports = caesar;
