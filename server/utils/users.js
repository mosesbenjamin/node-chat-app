[{
    id: '/ihuigiuh' ,
    name: 'Mavewrick',
    room: 'Some room name'  
}]

// addUser(id, name, room)
// removeUser(id)
// getUser(id)
// getUserList(room)

class Users {
    constructor () {
        this.users = [];
    }
    addUser (id, name, room) {
        var user = {id, name, room};
        this.users.push(user);
        return user;
    }
    removeUser (id) {
        var user = this.getUser(id);

        if(user){
            this.users = this.users.filter((user)=>user.id !== id)
        }
        return user;
        // var newUserObject = this.users.filter((user)=>user.id !== id)
        // var namesArray = newUserObject.map((user)=>user.name)
        // return namesArray;
    }
    getUser (id){
        var user = this.users.filter((user)=>user.id === id)[0]
        return user
        // var user = this.users.filter((user)=>user.id === id)
        // var nameArray = user.map((user)=>user.name)
        // return nameArray
    }
    getUserList (room) {
        var users = this.users.filter((user)=>user.room === room);
        var namesArray = users.map((user)=>user.name)

        return namesArray;
    }
}

module.exports = {Users}


// class Person {
//     constructor (name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     getUserDescription () {
//         return `${this.name} is ${this.age} year(s) old.`
//     }
// }

// var me = new Person('Mavewrick', 21);
// var description = me.getUserDescription();
// console.log(description)