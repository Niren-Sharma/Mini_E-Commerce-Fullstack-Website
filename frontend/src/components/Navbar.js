function Navbar({ cartCount, activeTab, setActiveTab, user, onLogout }) {
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
                
                {/* Admin Panel tab search karke tabhi dikhega jab Logged in User 'admin' hoga */}
                {user?.role === 'admin' && (
                    <button 
                        className={`nav-btn ${activeTab === 'admin' ? 'active' : ''}`}
                        onClick={() => setActiveTab('admin')}
                    >
                        Admin Panel 👑
                    </button>
                )}
                
                <button 
                    className={`nav-btn ${activeTab === 'cart' ? 'active' : ''}`}
                    onClick={() => setActiveTab('cart')}
                >
                    Cart <span className="cart-badge">{cartCount}</span>
                </button>

                {/* Login / User Status Button */}
                {user ? (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ fontSize: '13px', color: '#c6925e', fontWeight: '700' }}>
                            Hi, {user.name}
                        </span>
                        <button 
                            className="nav-btn" 
                            onClick={onLogout}
                            style={{ background: 'rgba(220, 38, 38, 0.2)', borderColor: 'rgba(220, 38, 38, 0.4)' }}
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <button 
                        className={`nav-btn ${activeTab === 'auth' ? 'active' : ''}`}
                        onClick={() => setActiveTab('auth')}
                    >
                        Login
                    </button>
                )}
            </div>
        </nav>
    );
}

export default Navbar;