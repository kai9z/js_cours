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