function Navbar({ cartCount, activeTab, setActiveTab }) {
    return (
        <nav className="navbar">
            <h1 onClick={() => setActiveTab('shop')} style={{ cursor: 'pointer' }}>
                Mini-E-Commerce Store
            </h1>

            <div className="nav-links">
                <button 
                    className={`nav-btn ${activeTab === 'shop' ? 'active' : ''}`}
                    onClick={() => setActiveTab('shop')}
                >
                    Shop
                </button>
                
                <button 
                    className={`nav-btn ${activeTab === 'admin' ? 'active' : ''}`}
                    onClick={() => setActiveTab('admin')}
                >
                    Admin Panel
                </button>
                
                <button 
                    className={`nav-btn ${activeTab === 'cart' ? 'active' : ''}`}
                    onClick={() => setActiveTab('cart')}
                >
                    Cart <span className="cart-badge">{cartCount}</span>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;