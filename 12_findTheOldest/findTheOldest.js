const findTheOldest = function(array) {
    return array.reduce((oldestPerson, currentPerson) => {
        const oldAge = getAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath)
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath)
        return oldAge > currentAge ? oldestPerson : currentPerson 
    })

    // Using the map function to get the age of each object in an array
    // const age = people.map(({yearOfBirth, yearOfDeath}) => (yearOfDeath - yearOfBirth) )
    // console.log(age)

    //Using reduce function and ternary expression inside to get the oldest person from the age array
    // console.log(age.reduce((previousValue, currentValue) => {
    //     return (previousValue > currentValue) ? previousValue : currentValue
    // } ))
};

const getAge = (birth, death) => {
    if (!death) {
        death = new Date().getFullYear()
    }
    return death - birth
    }


// Do not edit below this line
module.exports = findTheOldest;
