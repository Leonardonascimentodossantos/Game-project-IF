const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../../usuario.json');

const readFile = () => {
    if (!fs.existsSync(filePath)) {
        return [];
    }
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
};

const writeFile = (data) => {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

const addUser = (user) => {
    const users = readFile();
    users.push(user);
    writeFile(users);
};

const findUserByUsername = (username) => {
    const users = readFile();
    return users.find(user => user.username === username);
};

module.exports = {
    readFile,
    writeFile,
    addUser,
    findUserByUsername
};