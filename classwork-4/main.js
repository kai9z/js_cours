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

// const array = [
//     'JavaScript Ninja',
//     'Clean Code ch.3',
//     'JavaScript Good parts',
//     'eloquent JavaScript',
// ];

// for (let i = 0; i < array.length; i++) {
//     const elem = array[i];
//     console.log(`${i+1} book name:`, elem);    
// }

// Here is the object
const webStore = {
    // this object has another object
    category: {
        // That contains diff Arrays
        pc: ['WindowsPC', 'RandomPC'],
        noteBook: ['Asus', 'Lenovo', 'Dell'],
        mobile: ['Nokia', 'Apple'],
        
    }
}
// To display Name of the category And what Cat (Array contains)
function showWebStore(content) {
    // First - simple access to object inside object
    const category = content.category
    // our "KEY" checking FIRST element (PC ins our case)
    for (let key in category){
        console.log(`Category: ${key}`)
        // And display CATEGORY : PC
        for (i = 0; i < category[key].length; i++){
            // now we go inside 1 elem of object PC
            // that is Array and wee need to dispaly each element of this Array
            // our 'i' will be moving 'category[key].length' time to take care about all elemets of array
            const elem = category[key][i];
            // and display each element 'elem' category[key]↑[i](0,1,2...)
            console.log(`    Content of category: ${elem}`)
        }
    }
}

showWebStore(webStore);

// HomeWork:
console.log("")
// task 1 - done
console.log("task 1")

function returnArg(arg) {
    if (typeof(arg) == "object" || typeof(arg) == "number") {
        console.log(true);
    } else if (typeof(arg) == "function"){
        console.log(false)
    } else {
        let result = (typeof(arg) == "string" && arg.length < 10) ? `your string length is ${arg}` : "you win"
        return console.log(result)
    }
}

k = function(){
    return 'hi'
}

returnArg('qwerqwerqwerqwer');

console.log("")
//task 2
console.log("task 2")

function rawArray(num1, num2) {
    let emptyArray = [];
    if (num1 < num2) {
        const a = num2 - num1;
        for (i = 0; i <= a; i++) {
            //console.log(i+num1)
            emptyArray[i] = i + num1
        }
    } else {
        const a = num1 - num2;
        for (i = 0; i <= a; i++) {
            //console.log(num1 - i)
            emptyArray[i] = num1 - i;
        }
    }
    console.log(emptyArray)
}

rawArray(15, 10);

console.log("")
// task 3 (Refactoring)
console.log("task 3")

// function fizzBuzz(num) {
//     let str = ''
//     for (i = 0; i <= num; i++) {
//         if (i % 3 == 0) {
//             str = str + "Fizz";
//             console.log(str);
//             str = ''
//         }

//         if (i % 5 == 0) {
//             str = str + "Buzz";
//             console.log(str);
//             str = ''
//         }

//         if (i % 3 == 0 && i % 5 == 0) {
//             str = str + "FizzBuzz";
//             console.log(str);
//             str = ''
//         }   
//     }
// }

// fizzBuzz(100)

console.log('')
// task 4 
console.log(" Task 4")

function typesOf(somArr) {
    let mass = []
    for (i = 0; i <= somArr.length-1; i++){
        mass[i] = typeof(somArr[i]);
    }
    console.log(mass)
}
typesOf([1,4,5,'str'])

console.log('')
// task SUPER
console.log(" Task Super")

let objArray = [
    firstObj = {
        age: 23,
        sup: 'dud'
    },
    secondObj = {
        age: 15,
    },
    anotherOjb = {
        age: 'fuck'
    },
    nanoObj = {
        age: NaN,
    }
];
const onlyTrueArray = [];
function makeAge(thisArray) {
    //const onlyTrueArray = [];
    for (let i = 0; i < thisArray.length; i++) {
        const elem = thisArray[i];
        if (isNaN(elem.age )) {
            elem.unkAge = true;
            onlyTrueArray[onlyTrueArray.length] = elem
        } 
    }
    return onlyTrueArray;
}   

console.log(makeAge(objArray))
console.log(objArray)
console.log(onlyTrueArray)