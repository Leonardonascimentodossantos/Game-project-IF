# Login System Project

This project implements a login system with user permissions, allowing users to register and manage their accounts. User data is stored in a JSON file (`usuario.json`), and the application is built using Node.js and Express.

## Project Structure

```
login-system-project
├── src
│   ├── controllers
│   │   ├── authController.js
│   │   └── userController.js
│   ├── models
│   │   └── userModel.js
│   ├── routes
│   │   ├── authRoutes.js
│   │   └── userRoutes.js
│   ├── middleware
│   │   └── permissions.js
│   ├── utils
│   │   └── fileHandler.js
│   ├── usuario.json
│   └── app.js
├── package.json
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd login-system-project
   ```

3. Install the required dependencies:
   ```
   npm install
   ```

## Usage

1. Start the application:
   ```
   npm start
   ```

2. Access the application in your web browser at `http://localhost:3000`.

## Features

- User registration and login functionality.
- User data is stored securely in a JSON file.
- Middleware for checking user permissions.
- Modular structure with controllers, models, and routes for better maintainability.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.