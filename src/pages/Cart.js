
function Cart({cart, onRemoveFromCart}){
  return(
    <>
    <h2>Shopping Cart</h2>
    <div  className="card-container">
    {cart.map((item) => (
      <div key={item.id} className= "card">
        <div className="card-details">
        <img src={item.image} alt={item.name} className="card-image"  />
          <p> {item.name}</p>
          <p><span>Brand:</span> {item.brand}</p>
          <p><span>Price:</span> {item.price}</p>
          <p><span>Size:</span> {item.size}</p>
          <p><span>Stock:</span> {item.stock}</p>
          </div>
        
        <button className="remove-from.cart" onClick={() => onRemoveFromCart(item.id)}>
          Remove from Cart
        </button>
      </div>
    ))}
  </div>
  </>
  )
}
export default Cart