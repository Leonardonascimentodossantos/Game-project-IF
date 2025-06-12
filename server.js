const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;
const USERS_FILE = path.join(__dirname, 'login-system-project', 'src', 'usuario.json');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname)); // Para servir seus arquivos HTML/CSS/JS

// Rota para registrar novo usuário
app.post('/api/register', (req, res) => {
    const { username, password, email } = req.body;
    if (!username || !password || !email) {
        return res.status(400).json({ message: 'Preencha todos os campos.' });
    }

    let users = [];
    if (fs.existsSync(USERS_FILE)) {
        users = JSON.parse(fs.readFileSync(USERS_FILE, 'utf8'));
    }

    if (users.find(u => u.username === username)) {
        return res.status(409).json({ message: 'Usuário já existe.' });
    }

    users.push({ username, password, email, permissao: "user" });
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
    res.json({ message: 'Usuário cadastrado com sucesso!' });
});

// Rota para login
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    let users = [];
    if (fs.existsSync(USERS_FILE)) {
        users = JSON.parse(fs.readFileSync(USERS_FILE, 'utf8'));
    }
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        res.json({ message: 'Login realizado com sucesso!', permissao: user.permissao });
    } else {
        res.status(401).json({ message: 'Usuário ou senha incorretos!' });
    }
});

// Rota para salvar personagem
app.post('/api/save-character', (req, res) => {
    const { username, character } = req.body;
    if (!username || !character) {
        return res.status(400).json({ message: 'Dados incompletos.' });
    }
    let users = [];
    if (fs.existsSync(USERS_FILE)) {
        users = JSON.parse(fs.readFileSync(USERS_FILE, 'utf8'));
    }
    const userIndex = users.findIndex(u => u.username === username);
    if (userIndex === -1) {
        return res.status(404).json({ message: 'Usuário não encontrado.' });
    }
    users[userIndex].character = character;
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
    res.json({ message: 'Personagem salvo com sucesso!' });
});

// Rota para buscar personagem
app.post('/api/get-character', (req, res) => {
    const { username } = req.body;
    if (!username) {
        return res.status(400).json({ message: 'Usuário não informado.' });
    }
    let users = [];
    if (fs.existsSync(USERS_FILE)) {
        users = JSON.parse(fs.readFileSync(USERS_FILE, 'utf8'));
    }
    const user = users.find(u => u.username === username);
    if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado.' });
    }
    res.json({ character: user.character || null });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});