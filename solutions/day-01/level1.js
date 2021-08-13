const emptyArray = []
const fiveNumber = [1, 2, 3, 4, 5]
console.log(fiveNumber.length)
console.log(fiveNumber[0]); // fist item
console.log(fiveNumber[2]); // middle item
console.log(fiveNumber[fiveNumber.length - 1]);

const mixedDataTypes = [
    'sdsds',
    2,
    33.33,
    ['sam', 'dave'],
    {'name': 'samson'},
    'finished',
    '5\'o clock'
]

const itCompanies = [
    'Facebook', 'Google', 'Microsoft', 
    'Apple', 'IBM', 'Oracle', 'Amazon'
]

console.log(mixedDataTypes);
console.log(itCompanies.length);
console.log(itCompanies[0]);
console.log(itCompanies[3]);
console.log(itCompanies[itCompanies.length - 1]);
console.log(itCompanies);
console.log(itCompanies[0].toUpperCase())
console.log(itCompanies[1].toUpperCase())
console.log(itCompanies[2].toUpperCase())
console.log(itCompanies[3].toUpperCase())
console.log(itCompanies[4].toUpperCase())
console.log(itCompanies[5].toUpperCase())
console.log(itCompanies[6].toUpperCase())
console.log(itCompanies.join(',').concat(' are big IT companies'))
// not found, filter
let indexOfMicrosoft = itCompanies.indexOf('Microsoft')

if(indexOfMicrosoft != -1) {
    console.log('IT company found')
} else {
    console.log('a company is not found')
}

let filterCompanyWithO = itCompanies.filter( (itcompany) => {
    return itcompany.includes('o')
})
console.log(filterCompanyWithO);

console.log(itCompanies.sort())
console.log(itCompanies.reverse())
console.log(itCompanies.slice(0,2))
console.log(itCompanies.slice(4, itCompanies.length -1))
console.log(itCompanies.splice()) //23.