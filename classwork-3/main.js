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

const userNumber1 = +prompt('Enter number 1');

if (isNaN(userNumber1)) {
    alert('Enter number only');

    const userNumber1 = +prompt('Enter number 1')
    const userNumber2 = +prompt('Enter number 2')
    alert(`'Your number is: ', ${+userNumber1 + +userNumber2}`);
    
} else {
    const userNumber2 = +prompt('Enter number 2')
    alert(`'Your number is: ', ${+userNumber1 + +userNumber2}`);
}

