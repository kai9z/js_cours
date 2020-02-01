// // javascript однопоточный 

// /* HW 3
// function returnObject(name) {
//     return {
//         name: name
//     };
// }

// console.log(returnObject('Andrew'));

// function toUpperCase(obj) {
//     return {
//         name: obj.name.toUpperCase(),
//     };
// }

// console.log(toUpperCase(returnObject('My name is')))

// function addToArray(arrParam, newElem) {
//     arrParam[arrParam.length] = newElem
//     return arrParam
// }

// console.log(addToArray(['sup'], 'dude'))

// function simpleObjectGenerator(one, two, three) {
//     return {
//         argument1: typeof(one),
//         argument2: typeof(two),
//         argument3: typeof(three),
//     }
// }

// console.log(simpleObjectGenerator('this is string', {}, 8))

// let myName = {name: 'Andrew'};

// function addNewToUser(newKey, newValue, obj){
//     const myObj = {
//     [newKey]: newValue
//     }

//     if (obj.name) {
//         myObj.name = obj.name;
//     }
//     return myObj
// }

// console.log(addNewToUser('vasia', 'rabotaet', myName));

// function fizzBuzz(num) {
//     let str = '';

//     if (num % 3 == 0) {
//         str = str + 'Fizz'
//     }

//     if (num % 5 == 0) {
//         str = str + 'Buzz'
//     }

//     if (str.length == 0){
//         return num
//     }

//     return str;
// }

// console.log(fizzBuzz(15))

// function super2(arg1, arg2, arg3, callback) {
//     const myArray = [arg1, arg2, arg3];

//     callback(myArray);
// }

// function myFunction(someArray) {
//     console.log(someArray);
// }

// super2(10, 20, 30, myFunction);

// */

// // LESSON 3
// /*
// var add2 = console.log(sum(10,20));

// // Function expreession - выражение
// const add = function newNameAdd (a, b) {
//     return a + b;
// }

// // Function declaration -выражение
// function sum(a,b) {
//     return a +  b;
// }
// */
// /*
// * 1 - фаза инициализации переменных и функций
// * 2 - запуск программы
// */

// // && - AND
// // || - or
// // ! - no
// /*
// const someUser = {
//     skill: {
//         programingLanguages: 'js',
//     },
// };

// const userName = someUser.name || 'defaultName0';

// console.log(someUser);
// console.log(userName);
// */
// function argArray(mass) {
//     if (Array.isArray(mass) && (typeof mass[0]) == 'number' && isNaN(mass[0]) != true ) {
//         return 'win'
//     } else if ((typeof mass[0]) == 'string' || (typeof mass[0] == 'object')) {
//         return (mass[0])
//     } else {
//         return "NANI?";
//     }

// }
// const randomgArr = [1, 41, 2, 3]

// //console.log(randomgArr)
// console.log(argArray(randomgArr));


// // ++  and  +=

// let number = 10;
// number = number +1;
// console.log(number);

// number += 1;
// console.log(number);

// console.log(++number);

// console.log(number++); //добавь и верни мне это число

// console.log(number++);

// //Тернарный оператор (?) Ternari operator (TRUE ? <USLVOIE>: <ANOTHER USLOVIE>)

// function chetnoeChislo(number) {
//     //if (number % 2 == 0) {
//     //    return 'hello man'
//     //} 
    
//     return number % 2 == 0 ? ' HELLO MAN ': 'TERN BRO'
// }
// console.log(chetnoeChislo(2));

// function showSomeNumber(num) {
//     while(num <= 12) {
//         if (num % 2 == 0) {
//             console.log(num);
//         }
//         num++
//     }
// }

// console.log(showSomeNumber(0));

// CHCLI

// for(let num = 0; num <= 10; num++) {
//     if(num % 2 == 0){
//         console.log(num);
//     }
// }

// let num2 = 0;
// while(num2 < 10) {
//     if(num2 % 2 == 1){
//         console.log(num2);
//     }
//     num2++;
// } 

сconst array = [
    'JavaScript Ninja',
    'Clean Code ch.3',
    'JavaScript Good parts',
    'eloquent JavaScript'
]

