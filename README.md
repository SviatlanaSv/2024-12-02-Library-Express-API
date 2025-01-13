# Library User Management API

A simple Node.js-based API for managing user accounts, including user registration, login, retrieval, update, and deletion. Built with Express and Body-Parser.

---

## Features
- **User Registration**: Register a new user.
- **User Login**: Validate user credentials.
- **Retrieve User Information**: Get information about a specific user or all users.
- **Update User**: Update the username or password of a user.
- **Delete User**: Remove a user from the system.

---

## Prerequisites
- node.js 
- npm 

---

## Installation and Setup

1. **Clone the repository**:
    ```bash
    git clone https://github.com/SviatlanaSv/2024-12-02-Library-Express-API.git
    cd 2024-12-02-Library-Express-API
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the server**:
    ```bash
    node index.js
    ```

   The API will be available at `http://localhost:3000`.

---   

## API Endpoints

### 1. User Registration

- **Endpoint**: `POST /register`
- **Request Body**:
    ```json
    {
      "username": "exampleUser",
      "password": "examplePass"
    }
    ```
- **Responses**:
    - `201`: User registered successfully.
    - `400`: Username and password are required, or user already exists.


### 2. User Login

- **Endpoint**: `POST /login`
- **Request Body**:
    ```json
    {
      "username": "exampleUser",
      "password": "examplePass"
    }
    ```
- **Responses**:
    - `200`: Login successful.
    - `401`: Invalid username or password.


### 3. Get All Users
- **Endpoint**: `GET /users`
- **Responses**:
    - `200`: List of all users.


### 4. Get User Information
- **Endpoint**: `GET /users/:username`
- **Path Parameter**: `:username` - The username of the user to retrieve.
- **Responses**:
    - `200`: User details.
    - `404`: User not found.


### 5. Update User
- **Endpoint**: `PUT /users/:username`
- **Path Parameter**: `:username` - The username of the user to update.
- **Request Body**:
    ```json
    {
      "newUsername": "newUser",
      "newPassword": "newPass"
    }
    ```
- **Responses**:
    - `200`: User updated successfully.
    - `404`: User not found.


### 6. Delete User
- **Endpoint**: `DELETE /users/:username`
- **Path Parameter**: `:username` - The username of the user to delete.
- **Responses**:
    - `200`: User deleted successfully.
    - `404`: User not found.


### 7. Get User Password (Demo Purposes Only)
- **Endpoint**: `GET /password/:username`
- **Path Parameter**: `:username` - The username to retrieve the password for.
- **Responses**:
    - `200`: User's password.
    - `404`: User not found.

---

## Testing with Postman and Newman

### Postman Testing
- Import the API into Postman.
- Test each endpoint using the appropriate method, URL, and request body.


### Automating Tests with Newman

1. Export the Postman collection **"Library Express API.postman_collection.json"** as a `.json` file.

2. Install Newman globally:
    ```bash
    npm install -g newman
    ```
3. Run tests:
    ```bash
    npm run test
    ```
















# Library User Management API

A simple REST API for managing users in a library system. Built with Express.js and body-parser.
---

## Features

- **User Registration:** Register a new user with a username and password.
- **User Login:** Authenticate a user with their credentials.
- **Retrieve User Information:** Fetch information about a specific user or all users.
- **Update User Information:** Update a user's username or password.
- **Delete User:** Remove a user from the system.

## Requirements

- Node.js
- npm 

## Installation

1. Clone this repository:
```bash
git clone https://github.com/SviatlanaSv/2024-12-02-Library-Express-API.git
```
2. Install dependencies:
```bash
npm install
```

## Usage

1. Start the server:

```bash
node index.js
```

2. The API will be available at: **http://localhost:3000**



