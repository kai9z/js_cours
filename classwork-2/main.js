/*
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
*/
//Slice - 2 numbers where to start and when go after
const myName = "andrew";
console.log(myName[0].toUpperCase() + myName.slice(1));
/* → Youtube */
const Youtube = 'Yoube';

console.log(`${Youtube.slice(0, 3)}t${Youtube.slice(2)}`);

/* .split → transfer string in to array */

console.log(myName.split(''));

const myNameArray = 'Andrew Stepchuk'.split(' ');
console.log(myNameArray);

/* 01-12-1997 transform into  ['01', '12' '1997']*/

const myDateTest = "01-12-1997".split('-');
console.log(myDateTest);

// .replace

console.log('Yahoo'.replace('o', '@').replace('o', '@'));

console.log('The Avengers'.indexOf('e', 4));
console.log('The Avengers'.includes('E'));

console.log('easy length: ', 'easy'.length);

