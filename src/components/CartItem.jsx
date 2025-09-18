import './CartItem.css'

// CartItem.jsx (new component in components folder)
function CartItem({ item, onRemove }) {
  return (
    <div className="cart-item">
      <div className="cart-item-info">
        <h4>{item.name}</h4>
        <p>${item.price.toFixed(2)}</p>
      </div>
      <button 
        className="remove-btn"
        onClick={() => onRemove(item.id)}
      >
        Remove
      </button>
    </div>
  );
}

export default CartItem;