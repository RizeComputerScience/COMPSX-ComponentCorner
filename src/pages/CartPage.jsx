import CartItem from "../components/CartItem";

function CartPage( { cart, removeFromCart } ) {
    return(
        <section className="cart-section">
          <h2>Shopping Cart</h2>
          {cart.length === 0 ? (
            <p className="empty-cart">Your cart is empty</p>
          ) : (
            <>
              <div className="cart-items">
                {cart.map((item, index) => (
                  <CartItem 
                    key={`${item.id}-${index}`}  // Using index too since items can repeat
                    item={item}
                    onRemove={removeFromCart}
                  />
                ))}
              </div>
              <div className="cart-total">
                <h3>Total: ${cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}</h3>
              </div>
            </>
          )}
        </section>
    )
}

export default CartPage;