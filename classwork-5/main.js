let user = {
    name: 'Andrew',
    birthday: '23',
    friends: [
        { name: 'Seriy', birthday: '20.01.1996' },
        { name: 'Toha', birthday: '08.2.1998' },
        { name: 'danila', birthday: undefined },
        { name: 'random', birthday: '03.12.1765' },
    ],
};

function showUserFriends(userObj) {
    const userName = user.name;
    console.log(`${userName}'s friends:`)
    const userFriends = Object.values(user.friends);
    for (i in userFriends) {
        friend = userFriends[i]
        if (!friend.birthday) {
            continue
        }
        console.log(`${friend.name} | Birthday: ${friend.birthday}`)
    }       
}
showUserFriends(user);


 
let someObject = {
    name: 'Test',
    someNumber: 25,
    someArray: [1, 2, 'test', 25, 50],
    nextArray: [30, 40]
}

let randomArray = [45, 1, 200, 'text']

function showHightNumber(firstArg, secondArg) {
    if (Array.isArray(firstArg)){
        for (i in firstArg) {
            const elem = firstArg[i]
            if (elem > secondArg) {
                console.log(elem)
                break
            }
        }
    } else if (typeof(firstArg) == 'object') {
        elem = Object.values(firstArg)
        for (i in elem) {
            if (Array.isArray(elem[i])) {
                for (j in elem[i]) {
                    if (elem[i][j] > secondArg){
                        console.log(elem[i][j])
                        break
                    }
                }
            }
        }
    }
}



showHightNumber(someObject, 24);