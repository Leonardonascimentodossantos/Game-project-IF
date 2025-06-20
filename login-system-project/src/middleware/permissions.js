const permissions = (requiredRole) => {
    return (req, res, next) => {
        const user = req.user; // Assuming user information is attached to the request object

        if (!user) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        if (user.role !== requiredRole) {
            return res.status(403).json({ message: "Forbidden" });
        }

        next();
    };
};

module.exports = {
    permissions,
};