const reverseString = function(string) {
    const contents = string
    let reverseContent = ""

    if (string !="") {
        for (let i=contents.length-1; i>=0; i--) {
            reverseContent += contents[i]
        }
        return reverseContent
    } else {return reverseContent}
};

// Official solution
// const reverseString = function(string) {
//     return string.split('').reverse().join('');
//    };
   

// Do not edit below this line
module.exports = reverseString;
