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
    let a = sup2 * 2;
    console.log(a);
}
multiplyNumber2(3);