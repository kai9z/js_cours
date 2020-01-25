// javascript однопоточный 

/* HW 3
function returnObject(name) {
    return {
        name: name
    };
}

console.log(returnObject('Andrew'));

function toUpperCase(obj) {
    return {
        name: obj.name.toUpperCase(),
    };
}

console.log(toUpperCase(returnObject('My name is')))

function addToArray(arrParam, newElem) {
    arrParam[arrParam.length] = newElem
    return arrParam
}

console.log(addToArray(['sup'], 'dude'))

function simpleObjectGenerator(one, two, three) {
    return {
        argument1: typeof(one),
        argument2: typeof(two),
        argument3: typeof(three),
    }
}

console.log(simpleObjectGenerator('this is string', {}, 8))

let myName = {name: 'Andrew'};

function addNewToUser(newKey, newValue, obj){
    const myObj = {
    [newKey]: newValue
    }

    if (obj.name) {
        myObj.name = obj.name;
    }
    return myObj
}

console.log(addNewToUser('vasia', 'rabotaet', myName));

function fizzBuzz(num) {
    let str = '';

    if (num % 3 == 0) {
        str = str + 'Fizz'
    }

    if (num % 5 == 0) {
        str = str + 'Buzz'
    }

    if (str.length == 0){
        return num
    }

    return str;
}

console.log(fizzBuzz(15))

function super2(arg1, arg2, arg3, callback) {
    const myArray = [arg1, arg2, arg3];

    callback(myArray);
}

function myFunction(someArray) {
    console.log(someArray);
}

super2(10, 20, 30, myFunction);

*/

// LESSON 3
/*
var add2 = console.log(sum(10,20));

// Function expreession - выражение
const add = function newNameAdd (a, b) {
    return a + b;
}

// Function declaration -выражение
function sum(a,b) {
    return a +  b;
}
*/
/*
* 1 - фаза инициализации переменных и функций
* 2 - запуск программы
*/

// && - AND
// || - or
// ! - no
/*
const someUser = {
    skill: {
        programingLanguages: 'js',
    },
};

const userName = someUser.name || 'defaultName0';

console.log(someUser);
console.log(userName);
*/
function argArray(mass) {
    if (Array.isArray(mass) && (typeof mass[0]) == 'number' && isNaN(mass[0]) != true ) {
        return 'win'
    } else if ((typeof mass[0]) == 'string' || (typeof mass[0] == 'object')) {
        return (mass[0])
    } else {
        return false;
    }

}
const randomgArr = [NaN, 41, 2, 3]
//console.log(randomgArr)
console.log(argArray(randomgArr));

if (isNaN(randomgArr[0]) == false){
    console.log('hiii')
} else {
    'Nan???'
}

/*
a = Array.isArray(randomgArr)
console.log(a)
b = typeof randomgArr[0] == 'number'
console.log(b)
c = isNaN(randomgArr[0]) != true
console.log(c)

if ((a && b) && c) {
    console.log('hi')
} else {
    console.log ("nani")
}
*/