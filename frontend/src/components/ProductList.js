import { useEffect, useState } from "react";
import API from "../services/api";
import ProductCard from "./ProductCard";

function ProductList({ addToCart, refresh }) {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    
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
    }, [refresh]);

    const filtered = products.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <input 
                className="search"
                placeholder="🔍 Search products by name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <div className="product-grid">
                {filtered.map((product) => (
                    <div key={product._id}>
                        <ProductCard
                            product={product}
                            addToCart={addToCart} 
                        />
                    </div>
                ))}
            </div>
        </>
    );
}

export default ProductList;