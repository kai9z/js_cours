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

function showUser(userObj) {
    const userName = user.name;
    console.log(`${userName}'s friends:`)
    const userFriends = Object.values(user.friends);
    for (i in userFriends) {
        elem = userFriends[i]
        if (!elem.birthday) {
            continue
        }
        console.log(`${elem.name} | Birthday: ${elem.birthday}`)
    }       
}
showUser(user);