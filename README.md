# 🏋️‍♂️ Gym Membership App

Welcome to the **Gym Membership App**!  
This project was created as a **study project** to learn and practice building web applications using the **T3 Stack**. It provides a simple and secure way to manage gym memberships. 🚀

---

## 🌟 Features

- 🔒 **Secure Registration**: User passwords are hashed using `bcrypt` for maximum security.
- 📋 **Member List**: View all registered members in a clean and organized table.
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

### 3. Set Up the Database

- Update the `.env` file with your database connection string:
  ```env
  DATABASE_URL="file:./db.sqlite"
  ```
- Run the Prisma migrations:
  ```bash
  npx prisma migrate dev
  ```

### 4. Start the Development Server

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
│   │   └── register/   # User registration API
│   ├── register/       # Registration page
│   └── members/        # Member list page
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

---

## 📸 Screenshots

### Registration Page

![Registration Page](https://via.placeholder.com/800x400?text=Registration+Page)

### Member List Page

![Member List Page](https://via.placeholder.com/800x400?text=Member+List+Page)

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
