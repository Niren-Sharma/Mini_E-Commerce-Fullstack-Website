function Cart({ cart, removeFromCart }) {
    const total = cart.reduce(
        (sum, item) => sum + (item.price * item.quantity),
        0
    );

    return (
        <div className="cart">
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? (
                <p style={{ color: '#64748b', textAlign: 'center', padding: '20px 0' }}>
                    Your cart is empty.
                </p>
            ) : (
                cart.map((item, index) => (
                    <div className="cart-item" key={item._id || index}>
                        <div>
                            <strong>{item.name}</strong>
                            <span style={{ marginLeft: '10px', color: '#64748b', fontSize: '13px' }}>
                                (Qty: {item.quantity})
                            </span>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <span className="card-price" style={{ marginBottom: 0 }}>
                                {Number(item.price * item.quantity).toLocaleString('en-IN')}
                            </span>
                            <button onClick={() => removeFromCart(index)}>REMOVE</button>
                        </div>
                    </div>
                ))
            )}
            <h3>TOTAL : ₹{Number(total).toLocaleString('en-IN')}</h3>
        </div>
    );
}

export default Cart;