let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 93, maths: 77, art: 95},
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 87, art: 95},
    }
];

/**
 * You will use destructuring assignment to create two variables and you will 
 * assign them values from calling the map method on the students array. 
 * The function provided to the map method can either be created within the 
 * map method or outside and passed in but in either case, it should use an arrow function. 
 * The map method should return an array for each item in the students array and this new array 
 * should contain two items the items name value and the items results value.
 */

/**
 * 1. Create variables named john and rest using the destructuring assignment.
 * 2. Assign the variables values from calling the map method on the students array.
 * 3. Within the map method either use an arrow function or provide a function created 
 *    outside of the map method (note this function should also be an arrow function).
 * 4. Log out the variable named: john to see its value.
 * 5. Log out the variable named: rest to see its value.
 */

// single line, used different variable names so as not to clash with those below.

// This line uses destructuring assignment to extract values from the array returned by the map method.
// The map method is called on the students array. For each item (itm) in the array, a new array is created 
// containing the name and results properties of that item.
// [John, ...Rest]: The result of the map method is an array of arrays where each inner array contains the name and results of a student.
// John: The first element of this resulting array is assigned to the variable John, which will contain the name and results of the first student.
// ...Rest: The rest of the elements are collected into an array called Rest, which will contain the name and results of the remaining students.
let [John, ...Rest] = students.map(itm => [itm.name, itm.results]);
console.log(John);

// console.log(John): This line logs the value of the variable John, which contains the name and results of the first student.
// This line logs the value of the variable Rest, which contains an array of arrays with names and results for the rest of the students.
console.log(Rest);
console.log(Rest);

console.log('\n');

// Or create function first and use in map
const mapper = (itm) => [itm.name, itm.results];
let [john, ...rest] = students.map(mapper);
console.log(john);
console.log(rest);