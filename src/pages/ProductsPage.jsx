import ProductCard from "../components/ProductCard";
import './ProductsPage.css';

function ProductsPage({ products, addToCart }) {
    return(
        <>
            <h2>Featured Products</h2>
            <div className="products-container">
            {products.map(product => (
                <ProductCard 
                key={product.id}
                name = {product.name}
                price = {product.price}
                image={product.image}
                description={product.description}
                onAddToCart={() => addToCart(product)}
                />
            ))}
            </div>
        </>
    )
}

export default ProductsPage;