import { useState, useEffect } from "react";
import API from "../services/api";

function Admin({ refreshProducts }) {
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState({
        name: "",
        price: "",
        category: "",
        image: "",
        description: "",
        stock: ""
    });

    const fetchProducts = async () => {
        try {
            const response = await API.get("/products");
            setProducts(response.data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    };

    const addProduct = async (e) => {
        e.preventDefault();
        
        if (!product.name || !product.price || !product.category || !product.image || !product.stock) {
            alert("Please fill in all required fields!");
            return;
        }

        try {
            await API.post("/products", product);
            alert("Product Added Successfully!");
            
            setProduct({
                name: "",
                price: "",
                category: "",
                image: "",
                description: "",
                stock: ""
            });
            
            fetchProducts();
            refreshProducts();
        } catch (error) {
            console.error("Error adding product:", error);
            alert("Failed to add product.");
        }
    };

    const deleteProduct = async (id) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            try {
                await API.delete("/products/" + id);
                fetchProducts();
                refreshProducts();
            } catch (error) {
                console.error("Error deleting product:", error);
            }
        }
    };

    return (
        <div className="admin">
            <h2>Add New Product</h2>
            <form onSubmit={addProduct}>
                <input name="name" placeholder="Product Name"
                    value={product.name} onChange={handleChange} />

                <input name="price" placeholder="Product Price (₹)" type="number"
                    value={product.price} onChange={handleChange} />

                <input name="category" placeholder="Category (e.g. Electronics)"
                    value={product.category} onChange={handleChange} />

                <input name="image" placeholder="Product Image URL"
                    value={product.image} onChange={handleChange} />

                <textarea name="description" placeholder="Product Description"
                    value={product.description} onChange={handleChange} />

                <input name="stock" placeholder="Product Stock" type="number"
                    value={product.stock} onChange={handleChange} />

                <button type="submit">ADD PRODUCT</button>
            </form>

            <hr style={{ margin: '35px 0', borderColor: '#f1f5f9' }} />

            <h2>Manage Existing Products</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {products.length === 0 ? (
                    <p style={{ color: '#64748b' }}>No products available in store.</p>
                ) : (
                    products.map((item) => (
                        <div key={item._id} style={{
                            display: 'flex', 
                            justifyContent: 'space-between', 
                            alignItems: 'center',
                            padding: '12px 16px',
                            background: '#f8fafc',
                            borderRadius: '8px',
                            border: '1px solid #e2e8f0'
                        }}>
                            <div>
                                <strong style={{ fontSize: '14px' }}>{item.name}</strong>
                                <span style={{ color: '#64748b', fontSize: '13px', marginLeft: '10px' }}>
                                    ₹{Number(item.price).toLocaleString('en-IN')}
                                </span>
                            </div>
                            <button 
                                className="delete" 
                                style={{ width: 'auto', marginTop: 0, padding: '6px 14px' }} 
                                onClick={() => deleteProduct(item._id)}
                            >
                                Delete
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Admin;