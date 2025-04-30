# 🏋️‍♂️ Gym Membership App

Welcome to the **Gym Membership App**!  
This project was created as a **study project** to learn and practice building web applications using the **T3 Stack**. It provides a simple and secure way to manage gym memberships. 🚀

---

## 🌟 Features

- 🔒 **Secure Authentication**: User passwords are hashed using `bcrypt`, and JWT is used for secure authentication.
- 📋 **Member Management**: View all registered members in a clean and organized table.
- 🎨 **Modern UI**: Styled with **Tailwind CSS** for a responsive and sleek design.
- 🛠️ **Powered by T3 Stack**: Combines the best tools like **Next.js**, **Prisma**, and **TypeScript**.

---

## 🚀 Getting Started

Follow these steps to set up the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/long-910/t3_stack_study.git
cd t3_stack_study
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up the Environment Variables

Create a `.env` file in the root directory and add the following:

```env
DATABASE_URL="file:./db.sqlite"
JWT_SECRET="your_jwt_secret"
```

Replace `your_jwt_secret` with a secure random string. You can generate one using Node.js:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### 4. Set Up the Database

Run the Prisma migrations to set up the database schema:

```bash
npx prisma migrate dev --name init
```

### 5. Start the Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to view the app.

---

## 📂 Project Structure

```plaintext
src/
├── app/                # App Router for Next.js
│   ├── api/            # API routes
│   │   ├── login/      # Login API
│   │   └── members/    # Members API
│   ├── login/          # Login page
│   ├── register/       # Registration page
│   └── members/        # Members page
├── prisma/             # Prisma schema and migrations
└── styles/             # Global styles (Tailwind CSS)
```

---

## 🛠️ Technologies Used

- **Next.js**: The React framework for production.
- **Prisma**: Database ORM for managing user data.
- **TypeScript**: Type-safe development.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **bcrypt**: Secure password hashing.
- **jsonwebtoken**: For secure authentication using JWT.

---

## 📸 Screenshots

### Registration Page

![Registration Page](https://github.com/user-attachments/assets/eae5b84d-64c3-4549-9e4c-708d01e95573)

### Members Page

![Member List Page](https://github.com/user-attachments/assets/b8071c9e-470b-4c75-b200-dea383511331)

---

## 📖 API Endpoints

### **Login API**

- **Endpoint**: `/api/login`
- **Method**: `POST`
- **Description**: Authenticates a user and returns a JWT token.
- **Request Body**:
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- **Response**:
  ```json
  {
    "token": "your_jwt_token"
  }
  ```

### **Members API**

- **Endpoint**: `/api/members`
- **Method**: `GET`
- **Description**: Returns a list of all registered members. Requires a valid JWT token in the `Authorization` header.
- **Headers**:
  ```json
  {
    "Authorization": "Bearer your_jwt_token"
  }
  ```
- **Response**:
  ```json
  [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com"
    }
  ]
  ```

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## 📖 References

This project was built using the following resources:

- [T3 Stack Documentation](https://create.t3.gg/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [bcrypt Documentation](https://github.com/kelektiv/node.bcrypt.js#readme)

---
