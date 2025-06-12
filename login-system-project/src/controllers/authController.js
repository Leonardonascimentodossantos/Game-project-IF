class AuthController {
    constructor(userModel, fileHandler) {
        this.userModel = userModel;
        this.fileHandler = fileHandler;
    }

    async register(req, res) {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ message: "All fields are required." });
        }

        const existingUser = await this.userModel.findUserByUsername(username);
        if (existingUser) {
            return res.status(400).json({ message: "Username already exists." });
        }

        const newUser = { username, email, password, permissions: "user" };
        await this.userModel.createUser(newUser);
        return res.status(201).json({ message: "User registered successfully." });
    }

    async login(req, res) {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ message: "All fields are required." });
        }

        const user = await this.userModel.findUserByUsername(username);
        if (!user || user.password !== password) {
            return res.status(401).json({ message: "Invalid username or password." });
        }

        return res.status(200).json({ message: "Login successful.", user });
    }
}

export default AuthController;