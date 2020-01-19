/* STRINGS
const oldString = "old 'string'";
const commonString = 'common string';

const yearOld = 1997;

const es6String = `something here`; //Интерполяция строк

console.log(`${myName} born in ${yearOld}`);

console.log(`asd
qwe`);

const myNameUpperCase = myName.toUpperCase();

console.log(myNameUpperCase);

console.log("privet my code".toUpperCase());

console.log("ALL LOWER CASE LETTERS".toLowerCase());

//Slice - 2 numbers where to start and when go after
const myName = "andrew";
console.log(myName[0].toUpperCase() + myName.slice(1));
//Youtube 
const Youtube = 'Yoube';

console.log(`${Youtube.slice(0, 3)}t${Youtube.slice(2)}`);

// .split → transfer string in to array 

console.log(myName.split(''));

const myNameArray = 'Andrew Stepchuk'.split(' ');
console.log(myNameArray);

// 01-12-1997 transform into  ['01', '12' '1997']

const myDateTest = "01-12-1997".split('-');
console.log(myDateTest);

// .replace

console.log('Yahoo'.replace('o', '@').replace('o', '@'));

console.log('The Avengers'.indexOf('e', 4));
console.log('The Avengers'.includes('E'));

console.log('easy length: ', 'easy'.length);

console.log(" why ".trim()); // cut spaces from deges
console.log ("supboi".repeat(3));

STRINGS */

// MATH

console.log(10 + 20, 10 / 1, 20 * 5, 10 + 10 - 20);

console.log('' +  10); // string + number == string
console.log(' ' + 10); // number + string == string

console.log([] + []); // array + array == empty line
console.log([] + {}); // array/object + array/object == Object object
console.log(10 == 10); // true comparing
console.log('10' == 10); // true
console.log('10' === 10); // false  comparing by the type firstly

console.log('empty string', '' == true);
console.log('something in string', '1' == true);

console.log(15 % 2, 15 % 5); // Module (the rest from the /)

const year2018 = 2018;
console.log(year2018 % 2000);

console.log(!true == false); // true
console.log(!!false == false); // ture

console.log(!0); // ture

console.log(!''); // true
console.log(!' '); // false 

console.log(Math.pow(2, 6)); //64  vvedenie v stepen`
console.log(2 ** 6); // 64 vvedenie v stepen`

console.log(Math.round(4.3, 4.5)); //4.3 = 4 rounding as in math
console.log(Math.round(4.5)); // 5 rounding as in math
console.log(Math.floor(6.9)); // 6 rounding to lower
console.log(Math.abs(-10)); // 10 remove -
console.log(Math.max(1, 2, 25, 100, -250)); // 100 showing max number in raw

const myMaxArray = [1, 2, 25, 100, -1, Infinity]; //NAN dont understand array need switch to numbers
console.log(Math.max(...myMaxArray)); // infinity ... needs to switch array to numbers

console.log();

var userAge = 33;
var userName = 'Andrew';
var usersSkills = ['what', 23];
var car = undefined;
const user = {};

console.log(typeof userAge);
console.log(typeof userName);
console.log('isArray?', Array.isArray(usersSkills));
console.log(typeof car);
console.log(typeof user);
console.log(typeof NaN); // number :)
////

const student = {
    skills: ['JS', 'React'],
    salary: '2000$',
}

console.log(student);

student.salary = '3000$';
student['offers'] = ['facebook, google'];
 
console.log(student);

console.log();





