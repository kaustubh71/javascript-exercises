const repeatString = function(string, num) {
    let greeting = []
    if (num<0){
        greeting.push("ERROR")
    } else if (num>0) {
        for (let i=0; i<num; i++) {
        greeting.push(string)
        }
    } else if (string === "") {
        return
    }
    return greeting.join("")
}

// Do not edit below this line
module.exports = repeatString;
