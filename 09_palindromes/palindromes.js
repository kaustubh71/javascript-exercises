const palindromes = function (string) {
       const convertedString = string.lowercase().replace(/[^a-z]/g, "")
       return ( 
           convertedString.split("").reverse().join("") === convertedString
       )
};

// Do not edit below this line
module.exports = palindromes;
