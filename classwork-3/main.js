// Модальные окна браузера Логические операции функции
// Modal window blocks all scripts before you complete it

// alert('Hello'); // ничего не возвращает
// prompt('sup', 'dude')
// confirm('yes no?');

// Logical operations
/*
if(10 == 100) {
    //ESLI
    console.log('yeap there is TEN!')
} else if (null != undefined) {
    //INACHE ESLI
    console.log('yeap you are here...')
} else {
    // INACHE
    console.log('ruined')
};
*/
/*
const number1 = +prompt('put number:');
if (number1 > 150) {
    console.log('Tailand')
} else if (number1 <= 100) {
    if (number1 >= 0) {
    console.log('Bali')
    }
} else {
    console.log('Italy')
}
*/
/*
const testString = 'fuck';
if (10 == 20) {
    console.log('not an oprtion')
} else if (testString == testString) {
    if (testString.length < 2) {
        console.log('you lost');
    }
    if (testString.length > 2){
        console.log('you win')
    }
}
*/

/* TASK */
/*
let userNumber1 = +prompt('Enter number 1');

if (isNaN(userNumber1)) {
    alert('Enter number only');

    let userNumber1 = +prompt('Enter number 1')
    let userNumber2 = +prompt('Enter number 2')
    alert(`'Your number is: ', ${+userNumber1 + +userNumber2}`);
    
} else {
    const userNumber2 = +prompt('Enter number 2')
    alert(`'Your number is: ', ${+userNumber1 + +userNumber2}`);
}
*/
// MACHINA SOSTOIANI 
// BANKOMAT
// function

/*
function show3Numbers() {
    console.log(1)
    console.log(2)
    console.log(3)
}
console.log('sobiraus v magaz');
show3Numbers();

function helloToUser(userName) {
    console.log('Privet username: ', userName)
}

helloToUser('Bazual');

console.log('________________________________');

function showNumber(supboi) {
    console.log(supboi)
}
showNumber(3);

function multiplyNumber2(sup2) {
    console.log(sup2 * 2);
    return sup2 * 2;
}

const myNumber = multiplyNumber2(10);

console.log(myNumber);
*/


// If function not returning anything its called PROCEDURA
// Function - returning smth

/*
function checkNum() {
    var forNum = +prompt('enter number')

    if (isNaN(forNum)) {
        alert('you entered NaN');
        return forNum = checkNum();
        // recursia
    }  
    return forNum;
} 

const check = checkNum();
console.log(check);


function sumMy(first, second) {
    return first + second;
}
console.log(sumMy(1, 2));

function greeting(name) {
    const hello = `Greeting, ${name}!`;
    return hello;
}
const helloName = greeting('Andrew');
console.log(helloName);
*/

// First Done
 function nameFunction(a) {
    const person = {
        name: a,
        lastName: 'william',
    }
    return 'privet', person
}
console.log(nameFunction('andrew'));

// 2 Done
let objName = {
    name: 'done',
    stat: 1
};
console.log (objName);

function allToUp(a) {
    takeFirstSvoisvto = a['name']
    makeItUpperCase = takeFirstSvoisvto.toUpperCase();
    const nameToUp = {
        name: makeItUpperCase,
        stat: 2
    } 
    return nameToUp
}
console.log(allToUp(objName))

// 3 done
let arr = ['s', 'u', 'c', 'k', 100];
arr[5] = 'opa';
q = 'ai dir dir dri dri die';
console.log(arr);

function addToArray(arrayActually, newElement) {
    // Меряем длинну массива
    arrLangh = arrayActually.length;
    // так как елементы массива с 0 то елементов на 1 больше
    // следовательно последняя позиция и будет новый елемент
    arrayActually[arrLangh] = newElement
    return arrayActually
}

console.log(addToArray(arr, q))

// 4 
function paramsTypes(a,b,c) {
    aType = typeof(a);
    bType = typeof(b);
    cType = typeof(c);
    reuslt = [aType, bType, cType]
    return reuslt;
}

console.log(paramsTypes(('test'),{name}, true))

// 5
const testPerson = {
    name: 'vasia'
}

function forThreeArgs(one, two, three){
    newObject = {
        one: two,
    }
    if (three == three['name']){
        newObject = {
            addName: three['name']
        }
    }
    return newObject
};



console.log(forThreeArgs('My name is', "Skirlix:D", testPerson))

function hardMode(one) {
    if ((one % 3) == 0){
        if ((one % 5) == 0) {
            return 'FIzzBuzz'
        }
    } else if ((one % 3) == 0){
        return 'Fizz'    
    } else {
        if ((one % 5) == 0){
            return 'Buzz'
        } else {
            return one
        }
    }
}

console.log(hardMode(6))