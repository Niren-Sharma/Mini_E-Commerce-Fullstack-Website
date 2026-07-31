# 🛒 Mini E-Commerce Platform (MERN Stack)

A modern **Full-Stack MERN E-Commerce Platform** built using **MongoDB, Express.js, React.js, and Node.js**. The application provides a seamless online shopping experience with secure user authentication, role-based admin access, real-time cart management, order processing, and an intuitive admin dashboard.

---

# ✨ Features

## 👥 Authentication System

- User Registration
- User Login
- JWT Authentication
- Secure Password Hashing using bcrypt.js
- Persistent Login with Local Storage
- Logout Functionality
- Role-Based Access (Admin & Customer)

---

## 🛍️ Customer Store

- Responsive Product Listing
- Real-Time Product Search
- Product Categories
- Indian Currency (₹) Formatting
- Add to Cart
- Update Cart Quantity
- Remove Products from Cart
- Dynamic Cart Total Calculation
- Stock Availability
- Responsive UI

---

## 💳 Checkout & Orders

- Customer Checkout Form
- Order Summary
- Order Creation
- MongoDB Order Storage
- Automatic Cart Clearing After Checkout
- Order Confirmation

---

## 👑 Admin Dashboard

Only Admin users can access the dashboard.

### Dashboard Features

- 📦 View Total Products
- 🛒 View Total Orders
- 💰 Revenue Analytics

### Product Management

- Add New Products
- Delete Existing Products
- Inventory Management
- Stock Validation

---

# ⚙️ REST API

## Authentication

```http
POST /api/auth/register
POST /api/auth/login
```

## Products

```http
GET    /api/products
POST   /api/products
DELETE /api/products/:id
```

## Orders

```http
GET    /api/orders
POST   /api/orders
```

---

# 🛠 Tech Stack

### Frontend

- React.js
- Axios
- CSS3

### Backend

- Node.js
- Express.js
- JWT Authentication
- bcrypt.js

### Database

- MongoDB Atlas
- Mongoose

### Deployment

- Netlify
- Render
- MongoDB Atlas

---

# 📂 Project Structure

# 📂 Project Structure

```text
Mini_E-Commerce-Fullstack-Website/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   ├── Order.js
│   │   ├── Product.js
│   │   └── User.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── orderRoutes.js
│   │   └── productRoutes.js
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.js
│   │   └── App.css
│   ├── .gitignore
│   ├── package.json
│   └── README.md
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/Niren-Sharma/Mini_E-Commerce-Fullstack-Website.git
```

## Backend Setup

```bash
cd backend

npm install

npm start
```

## Frontend Setup

```bash
cd frontend

npm install

npm start
```

---

# 🌐 Live Demo

🚀 **Frontend (Netlify)**

https://ecombyniren.netlify.app

---

# 📖 Learning Outcomes

This project demonstrates practical implementation of:

- Full-Stack MERN Development
- RESTful API Design
- MongoDB Integration
- JWT Authentication
- Role-Based Authorization
- CRUD Operations
- React State Management
- Axios API Integration
- Responsive UI Development
- Deployment using Netlify & Render
- Cloud Database with MongoDB Atlas

---

# 🚀 Future Improvements

- Payment Gateway Integration
- Product Wishlist
- Order History
- User Profile Management
- Product Reviews & Ratings
- Pagination & Advanced Filtering
- Image Upload with Cloudinary
- Email Notifications

---

# 👨‍💻 By Niren Sharma


- 💻 GitHub: https://github.com/Niren-Sharma
- 💼 LinkedIn: https://www.linkedin.com/in/niren-sharma/
- 🌐 Portfolio: https://niren.netlify.app/

---

## ⭐ If you found this project useful, consider giving it a star on GitHub!