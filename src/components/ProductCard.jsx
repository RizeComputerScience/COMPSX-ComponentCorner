import './ProductCard.css'


function ProductCard({ name, price, image, description, onAddToCart }) {
    return (
        <div className="product-card">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p className="description">{description}</p>
            <p className="price">${price}</p>
            <button 
                className="add-to-cart-btn"
                onClick={() => onAddToCart({name, price, image, description})}
            >
                Add to Cart
            </button>
        </div>
    );
}

export default ProductCard;