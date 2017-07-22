const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {

    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'user1',
            room: 'Node Course'
        },{
            id: '2',
            name: 'user2',
            room: 'React Course'
        },{
            id: '3',
            name: 'user3',
            room: 'Node Course'
        }]
    });
    it('should add new user to users array', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'name',
            room: 'test room'
        }

        var res = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove a user when a valid id is passed', () => {
        var userId = '1';
        var user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove a user when an invalid id is passed', () => {
        var userId = '100';
        var user = users.removeUser(userId);

        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('should find a user when a valid id is passed', () => {
        var userId = '2';
        var user = users.getUser(userId);

        expect(user.id).toBe(userId);
    });

    it('should not find a user when an invalid id is passed', () => {
        var userId = '100';
        var user = users.getUser(userId);

        expect(user).toNotExist();
    });

    it('should return names for node course', () => {
        var userList = users.getUserList('Node Course');
        expect(userList).toEqual(['user1', 'user3']);
    });

    it('should return names for react course', () => {
        var userList = users.getUserList('React Course');
        expect(userList).toEqual(['user2']);
    });
});