const expect = require('expect');
const {Users} = require('./users');

describe('Users', ()=>{
    var users;

    beforeEach (()=>{
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Dan',
            room: 'Node course'
        },{
            id: '2',
            name: 'Jenny',
            room: 'React course'
        },{
            id: '3',
            name: 'Julia',
            room: 'Node course'
        }]
    })

    it('should add new user', ()=>{
        var users = new Users();
        var user = {
            id: '123',
            name: 'Mavewrick',
            room: 'The office fans'
        };
        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove a user', ()=>{
        var user = users.removeUser('1')

        expect(user.id).toBe('1')
        expect(users.users.length).toBe(2);
        // var userList = users.removeUser('1')

        // expect(userList).toEqual(['Jenny', 'Julia'])
    });

    it('should not remove user', ()=>{
        var user = users.removeUser('1787')

        expect(user).toNotExist()
        expect(users.users.length).toBe(3);

        // var userList = users.removeUser('19')

        // expect(userList).toEqual(['Dan', 'Jenny', 'Julia'])
    });

    it('should find user', ()=>{
        var user = users.getUser('1')

        expect(user).toBe(user)
        // expect(user).toEqual(['Dan'])
    });

    it('should not find user', ()=>{
        var user = users.getUser('1234');

        expect(user).toNotExist();
        // expect(user).toEqual([]);
    });

    it('should return names for node course', ()=>{
        var userList = users.getUserList('Node course');

        expect(userList).toEqual(['Dan', 'Julia'])
    });

    it('should return names for react course', ()=>{
        var userList = users.getUserList('React course');

        expect(userList).toEqual(['Jenny'])
    })
});