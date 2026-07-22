function ProductCard({ product, addToCart }) {
    const formattedPrice = Number(product.price).toLocaleString('en-IN');

    return (
        <div className="card">
            <div className="card-img-container">
                <img src={product.image} alt={product.name} />
            </div>
            <div className="card-info">
                <p>{product.category}</p>
                <h2>{product.name}</h2>
                <div className="card-price">{formattedPrice}</div>
                <button className="card-button" onClick={() => addToCart(product)}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default ProductCard;