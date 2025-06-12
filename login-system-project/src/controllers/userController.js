class UserController {
    constructor(userModel) {
        this.userModel = userModel;
    }

    getUser(req, res) {
        const { username } = req.params;
        const user = this.userModel.findUserByUsername(username);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    }

    updateUser(req, res) {
        const { username } = req.params;
        const updatedData = req.body;
        const updatedUser = this.userModel.updateUser(username, updatedData);
        if (updatedUser) {
            res.status(200).json(updatedUser);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    }

    deleteUser(req, res) {
        const { username } = req.params;
        const success = this.userModel.deleteUser(username);
        if (success) {
            res.status(200).json({ message: "User deleted successfully" });
        } else {
            res.status(404).json({ message: "User not found" });
        }
    }
}

export default UserController;