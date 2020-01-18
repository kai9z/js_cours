// В ДЖАВА СКРИПТЕ ВСЕГО 5 ПРИМИТИВНЫХ ТИПОВ 1 - БУЛЕВО
const primitiveTypeBoolenTrue = true;
const primitiveTypeBoolenFalse = false;
// ВТОРОЙ - ЧИСЛА 
const primitiveTypeNumber = 10;
const primitiveTypeFloat = 10.5;
const primitiveTypeInfinity = Infinity;
const primitiveTypeNotANumber = NaN;
// ТРЕТИЙ - СТРОКА
const primitiveTypeString = 'hi my sting';
const primitiveTypeString_v2 = "hi my string";
const primitiveTypeString_v3 = `sup`;
// ЧЕТВЕРТЫЙ - НУЛЛ (ПУСТОЕ)
const primitiveTypeNull = null;
// ПЯТЫЙ НЕ ОПРЕДЕЛЕННОЕ
const primitiveTypeUndefined = undefined;

console.log(primitiveTypeBoolenTrue, primitiveTypeBoolenFalse);
console.log(primitiveTypeNumber, primitiveTypeFloat, primitiveTypeInfinity, primitiveTypeNotANumber);
console.log(primitiveTypeString, primitiveTypeString_v2, primitiveTypeString_v3);
console.log(primitiveTypeNull);
console.log(primitiveTypeUndefined);

// ОБЬЕКТ
const user1 = {
    firstName: "Andrew",
    lastName: "burger",
    friend: {
        name: "vasia",
        dog: true,
        dogName: "lapa"
    },
    friends: ["VASIA", "GRISHA", "COSTIA"]
};

console.log(user1);

// MASSIV = ARRAY
const myArray = ['blue', 'yellow', 'green'];

console.log(myArray);

//SIMVOL Symbol: -> let asd = Symbol(); (EcmaScript6)

const mySymbol = Symbol('ww');//создает уникальную ссылку
        // на индитификатор который передаем в скобки

console.log(mySymbol);

const myContact = {
    name: 'First',
    surname: 'Last',
    phoneNumber: 0635774414,
    sex: [
        male = true,
        femail = false,
    ],
    note: 'This is my covocer from last job',
    wight: 10.5,
    frined: Infinity,
    age: 18,
    skypeId: undefined,
    twitter: null,
    hear: NaN,
}

console.log(myContact);