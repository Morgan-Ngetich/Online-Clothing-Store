import { useState,useEffect } from "react"
import Trousers from "./Trousers"
import Shirts from "./Shirts"
import Shoes from "./Shoes"
import Cart from "./Cart"
function Home(){
  const[isproduct,setIsProduct]=useState([])
  const[cart,setCart]=useState([])
  const [isLoader,setIsLoader]=useState(false)
  useEffect(()=>{
    fetch(" http://localhost:3000/products")
    .then(res=>res.json())
    .then((products)=>{
      setIsProduct(products)
      setIsLoader(true)
    
    })
  },[])
  if (!isLoader) {
    return <h3>Loading...</h3>;
  }
  function handleAddToCart(product) {
    if (!cart.some((cartItem) => cartItem.id === product.id)) {
      setCart([...cart, { ...product }]);
    }
  }
  function handleRemoveFromCart(productId) {
    setCart( cart.filter((item) => item.id !== productId));
    
  }
  return (
    <>
    <h1>HOME</h1>
    <Cart cart={cart} onRemoveFromCart={handleRemoveFromCart}/>
    <Shirts isproduct={isproduct} onAddToCart={handleAddToCart}/>
    <Trousers isproduct={isproduct}  onAddToCart={handleAddToCart}/>
    <Shoes isproduct={isproduct}  onAddToCart={handleAddToCart}/>
    </>
  )
}
export default Home