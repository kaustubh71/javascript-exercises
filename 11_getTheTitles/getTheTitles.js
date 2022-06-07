const getTheTitles = function(books) {
    const titleArray = []
    for (let i=0; i<books.length; i++) {
        titleArray.push(books[i].title)
    }
    return titleArray
};

// Official solution
// const getTheTitles = function(array) {
//     return array.map(book => book.title)
// };

// Do not edit below this line
module.exports = getTheTitles;
