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