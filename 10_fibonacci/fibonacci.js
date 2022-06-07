const fibonacci = function(fibonacciIndex) {
    const convertedFibonacciIndex = parseInt(fibonacciIndex)
    if (fibonacciIndex < 0) return "OOPS"
    if (fibonacciIndex === 0) return 0
        
    fibonacciArray = [1]
    let precedingNumber1 = 0
    let precedingNumber2 = 1
        
    for (let i=0; i<=fibonacciIndex-1; i++) {
        let newNumber = precedingNumber1 + precedingNumber2
        precedingNumber1 = precedingNumber2
        precedingNumber2 = newNumber
        fibonacciArray.push(newNumber)
        }
        return fibonacciArray[fibonacciIndex-1]

};

// Do not edit below this line
module.exports = fibonacci;
