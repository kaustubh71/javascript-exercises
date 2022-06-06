// This code works as well but the other code is shorter
// const removeFromArray = function(...restArguments) {
//     const firstArgument = restArguments[0]
//     const outputArray = []

//     firstArgument.forEach((firstArgumentArrayElement) => {
//         if (!restArguments.includes(firstArgumentArrayElement)) {
//             outputArray.push(firstArgumentArrayElement)
//         }
//     })

//     return outputArray
// }

const removeFromArray = function(...restArguments) {
    const firstArgument = restArguments[0]
    return firstArgument.filter((firstArgumentArrayElement) => !restArguments.includes(firstArgumentArrayElement))
}








// failed code. Just works with first exercise
//     let firstArgument = Array.from(randomArrayArgument)
//     for (let i=0; i<randomArrayArgument.length; i++) {
//         for (let j=1; j<arguments.length; j++) {
//             if (randomArrayArgument[i] === arguments[j]) {
//             firstArgument.splice(i, 1)
//             }
//         }
//     }
//     return firstArgument
// };
// removeFromArray([1, 2, 3, 4], 3, 2)


// const removeFromArray = function(randomArrayArgument, ...restArguments) {
//     let outputArray = []
//     for (let i=0; i<randomArrayArgument.length; i++) {
//         for (let j=1; j<arguments.length; j++) {
//             if (randomArrayArgument[i] === arguments[j]) {
//             continue
//             } else { outputArray.push(randomArrayArgument[i])}
//         }
//     }
//     return outputArray
// };



// Do not edit below this line
module.exports = removeFromArray;
