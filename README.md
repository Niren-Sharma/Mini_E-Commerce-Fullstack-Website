# 🛒 Mini E-Commerce Platform (MERN Stack)

A sleek, modern, and fully functional full-stack Mini E-Commerce web application built with the **MERN** stack (MongoDB, Express, React, Node.js). Designed with a luxury-inspired aesthetic, real-time cart functionality, and an interactive admin panel.

---

## ✨ Features

### 🛍️ Storefront (Frontend)
- **Product Showcase**: Beautiful product grid with category badges and Indian Currency (`₹`) formatting.
- **Search & Filter**: Real-time interactive search bar to filter products by title/name instantly.
- **Shopping Cart**: Real-time item counter badge, dynamic quantity management, and automatic total amount calculation.

### 🛠️ Admin Panel
- **Add New Products**: Fully validated form to input product name, price, category, image URL, stock, and description.
- **Manage Inventory**: Dedicated product management section with the capability to view and delete store items safely.

### ⚙️ RESTful API (Backend)
- **Modular Routes**: Clean separation of concerns with dedicated routers for `/api/products` and `/api/orders`.
- **Database Schema**: Mongoose models ensuring strict data validation for products and customer orders.
- **Security & Error Handling**: Configured with CORS, environment variable isolation (`dotenv`), and structured API response codes.

---

## 🛠️ Tech Stack

- **Frontend**: React.js, Modern CSS3 Variables
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose ORM
- **Utilities**: CORS, Dotenv, Postman

---

## 📂 Project Structure

```text
Ecommerce_website/
├── backend/
│   ├── config/
│   │   └── db.js            # MongoDB Connection Logic
│   ├── models/
│   │   ├── Order.js         # Order Schema
│   │   └── Product.js       # Product Schema
│   ├── routes/
│   │   ├── orderRoutes.js   # Order API Routes
│   │   └── productRoutes.js # Product API Routes
│   ├── .env.example         # Sample environment variables
│   ├── .gitignore
│   ├── package.json
│   └── server.js            # Express Server Entry Point
│
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── Admin.jsx       # Admin Management Screen
    │   │   ├── Cart.jsx        # Cart & Summary View
    │   │   ├── Navbar.jsx      # Navigation Header & Badge
    │   │   ├── ProductCard.jsx # Product Card UI Component
    │   │   └── ProductList.jsx # Main Storefront Grid
    │   ├── services/
    │   │   └── api.js          # Axios API Config
    │   ├── App.js              # State Management & View Controller
    │   └── App.css             # Custom CSS Styling
    ├── .gitignore
    └── package.json