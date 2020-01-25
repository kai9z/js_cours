/*STRINGS
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
/*
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

const easyWord = {
    0:'e',
    1:'a',
    2:'s',
    3:'y',
    length: 4,
}

console.log(easyWord.length);
console.log(easyWord[0]);
*/
// Homework
/*
 1. Составить предложение из нижестоящих переменных:
 "Сколько нужно программистов чтобы сделать проект ? 1, 25, команда"
 */

let numbers = [25, 1]
let project = 'проект'
let team = `команда`
let howMuch = 'Сколько'
let sentence = 'нужно программистов чтобы сделать проект ?'

let task1 = (`HW task 1: "${howMuch} ${sentence} ${numbers[1]}, ${numbers[0]}, ${team}"`);
console.log(task1);

/*
 2. Составьте предложение из представленного массива
 и выведите предложение в консоль;
 "Так, когда Будда достиг Просветления, он обнаружил, что больше не ощущает себя мишенью.
  Он не был больше ни телом, к которому рано или поздно ..."
  // index +++
 */

let array = [
  'Он',
  'был больше ни телом, к которому рано или поздно',
  'он обнаружил',
  'не',
  'Так, когда Будда достиг Просветления',
  '...',
  'что больше',
  'ощущает себя мишенью',
  'не',
]

let homeSentence = (`HW task 2: "${array[4]}, ${array[2]}, ${array[6]} ${array[3]} ${array[7]}.
${array[0]} ${array[3]} ${array[1]} ${array[5]}"`);
console.log(homeSentence);

/*
 3. Добавьте свойста 4 новых свойства в объект используя
    квадратные скобки и точку.
 */

let myObj = {}
myObj.howitwork = [
    'sup boi',
    88005553535,

];
myObj.level = 25;
myObj['3property'] = ['this hoes aint loyal'];
myObj['DUDE'] = ['IM DONE'];
console.log('HW task 3: ', myObj);

/*
 5. Преобразуйте строку x,
    в максимально удобно читаемый для программиста вид
 */

let frameworks = [4.7, 'Angular', '6Angular', 'React/Redux']

const angular4 = frameworks[1] + Math.floor(frameworks[0]);
const reactRedux = frameworks[frameworks.length - 1];

const solutionHWT4 = `Google released new verison ${angular4} But real speed is ${reactRedux}`;
console.log(solutionHWT4);