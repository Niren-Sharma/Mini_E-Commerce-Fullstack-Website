import { useState } from "react";
import API from "../services/api";

function Checkout({ cart, clearCart }) {
    const [customerName, setCustomerName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const placeOrder = async () => {
        if (!customerName.trim() || !phone.trim() || !address.trim()) {
            alert("Please fill in all the details (Name, Phone, and Address)!");
            return;
        }

        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

        try {
            await API.post("/orders", {
                customerName,
                phone,
                address,
                products: cart.map(item => ({
                    name: item.name,
                    quantity: item.quantity,
                    price: item.price
                })),
                totalAmount: total
            });
            
            alert("Order Placed Successfully!");
            clearCart();
            setCustomerName("");
            setPhone("");
            setAddress("");
        } catch (error) {
            console.error("Error placing order:", error);
            alert("Failed to place order. Please try again.");
        }
    };

    return (
        <div className="checkout">
            <h2>Checkout Page</h2>
            <input 
                placeholder="Customer Name" 
                value={customerName} 
                onChange={(e) => setCustomerName(e.target.value)}
            />
            <input 
                placeholder="Phone" 
                value={phone} 
                onChange={(e) => setPhone(e.target.value)}
            />
            <textarea 
                placeholder="Address" 
                value={address} 
                onChange={(e) => setAddress(e.target.value)}
            />

            <button onClick={placeOrder}>
                Place Order
            </button>
        </div>
    );
}

export default Checkout;