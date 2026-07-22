const express = require("express");
const cors = require("cors");

const dotenv = require("dotenv");
const send = require("send");

const connectDB = require("./config/db");

const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");

dotenv.config();
connectDB();
const app = express();
app.use(cors());

app.use(express.json());
// ROUTES
app.use("/api/products",productRoutes);
app.use("/api/orders", orderRoutes);

//HOMEPAGE ROUTES

app.get("/",(req,res)=> {
    res.send("Mini E-Commerce App Backend Running!");
});
const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server Running on Port ${PORT}`);
});