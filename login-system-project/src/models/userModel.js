const fs = require('fs');
const path = require('path');

const userFilePath = path.join(__dirname, '../usuario.json');

class UserModel {
    constructor() {
        this.users = this.loadUsers();
    }

    loadUsers() {
        if (fs.existsSync(userFilePath)) {
            const data = fs.readFileSync(userFilePath);
            return JSON.parse(data);
        }
        return [];
    }

    saveUsers() {
        fs.writeFileSync(userFilePath, JSON.stringify(this.users, null, 2));
    }

    createUser(username, password, permissions) {
        const newUser = { username, password, permissions };
        this.users.push(newUser);
        this.saveUsers();
        return newUser;
    }

    getUser(username) {
        return this.users.find(user => user.username === username);
    }

    updateUser(username, updatedData) {
        const userIndex = this.users.findIndex(user => user.username === username);
        if (userIndex !== -1) {
            this.users[userIndex] = { ...this.users[userIndex], ...updatedData };
            this.saveUsers();
            return this.users[userIndex];
        }
        return null;
    }

    deleteUser(username) {
        const userIndex = this.users.findIndex(user => user.username === username);
        if (userIndex !== -1) {
            const deletedUser = this.users.splice(userIndex, 1);
            this.saveUsers();
            return deletedUser;
        }
        return null;
    }

    getAllUsers() {
        return this.users;
    }
}

module.exports = new UserModel();