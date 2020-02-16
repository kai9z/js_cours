// let user = {
//     name: 'Andrew',
//     birthday: '23',
//     friends: [
//         { name: 'Seriy', birthday: '20.01.1996' },
//         { name: 'Toha', birthday: '08.2.1998' },
//         { name: 'danila', birthday: undefined },
//         { name: 'random', birthday: '03.12.1765' },
//     ],
// };

// function showUserFriends(userObj) {
//     const userName = user.name;
//     console.log(`${userName}'s friends:`)
//     const userFriends = Object.values(user.friends);
//     for (i in userFriends) {
//         friend = userFriends[i]
//         if (!friend.birthday) {
//             continue
//         }
//         console.log(`${friend.name} | Birthday: ${friend.birthday}`)
//     }       
// }
// showUserFriends(user);


 
// let someObject = {
//     name: 'Test',
//     someNumber: 25,
//     someArray: [1, 2, 'test', 25, 50],
//     nextArray: [30, 40]
// }

// let randomArray = [45, 1, 200, 'text']

// function showHightNumber(firstArg, secondArg) {
//     if (Array.isArray(firstArg)){
//         findBiggestNumber(firstArg, secondArg)  
//     } else if (typeof(firstArg) == 'object') {
//         const key = Object.values(firstArg)
//         for (i in key) {
//             const elem = key[i]
//             if (Array.isArray(elem)) {
//                 findBiggestNumber(elem, secondArg)
//             }
//         }
//     }
// }

// function findBiggestNumber(firstArg, secondArg) {
//     for (i in firstArg) {
//         const elem = firstArg[i]
//         if (elem > secondArg) {
//             console.log(elem)
//             break
//         }
//     }
// }

// showHightNumber(someObject, 24);

// RECURSIA

// function sum(num) {
//     let counter = 0;
//     while (num > 0) {
//         counter = counter + num;
//         num = num - 1;
//     }
//     return counter;
// }

// function sumRecursive(num) {
//     if (num <= 0){
//         return num;
//     }
//     const newNumber = num + sumRecursive(num -1)
//     return newNumber;
    
// }

// console.log(sumRecursive(5))
// console.log(sum(3));

/* ARRAYS */

// const myArray = [1, 2, 3];
// console.log(myArray);

// /* 
//  push - add elem in the end of array 
//  and return undefine (nothing)
// */
// myArray.push(4);
// console.log(myArray);

// /* 
//  pop - delete last elem
//  and return it
// */
// const lastArray = myArray.pop();
// console.log(lastArray);
// console.log(myArray);

// /* 
//  shift - delete first elem 
//  and return it
// */
// const firstElem = myArray.shift();
// console.log(firstElem);
// console.log(myArray); 

// /* 
//  unshift - adding 1 elem of array
//  and return length of array
// */
// const unshift = myArray.unshift(10);
// console.log(unshift); 
// console.log(myArray); 

// /*
//  slice - copy of array
// */

// const myArray2 = myArray.slice(0);
// console.log(myArray2); 
// console.log(myArray); 

// /*
//  reverse - perevorachivaet array
// */
// console.log(myArray.reverse());

// const myString = 'JavaScript is Awesome';

// let reversedString = [];
// for (i in myString) {
//     letter = myString[i]
//     reversedString.push(letter)
// }
// reversedString = reversedString.reverse();
// console.log(reversedString);
// console.log(reversedString.join(''));

let arr1 = [1, false, 2, 0, 3, null, 0, 4, 0, 25];
let arr2 = [
  "a",
  0,
  0,
  "b",
  null,
  "c",
  "d",
  0,
  1,
  false,
  0,
  1,
  0,
  3,
  [],
  0,
  1,
  9,
  0,
  0,
  {},
  0,
  0,
  9
];
//console.log(arr1)
function moveToZero(arr) {
    let arrZero = [];
    let arrNumo = [];

    for (let i = 0; i < arr.length; i++) {
        const elem = arr[i];
        
        if (elem === 0) {
            arrZero.push(elem);
            //console.log(arrZero)
            continue
        }

        arrNumo.push(elem)
        //console.log(arrNumo)

    }

    return arrNumo.concat(arrZero)

}

console.log(moveToZero(arr1));
let arrNum = [1, 30, 50, 100, 250, 350, 3]
// 2. Верните сумму двух найменьших чисел в массиве
// [10,20,30,1,31,11,10] => 11
// [-1,0,25] => -1
// [-4,-10,25,10] => -14
// [0,200,10,25,15] => 10

function minimalNumber(arr) {
    let firstLoverNum 
    for (let i = 0; i < arr.length; i++){
        if (arr[i] <= arr[i+1]) {
            firstLoverNum = arr[i]
            console.log(firstLoverNum)
        
        }
    }


    
}

console.log(minimalNumber(arrNum))