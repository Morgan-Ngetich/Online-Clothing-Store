import { useState,useEffect } from "react"
import Trousers from "./Trousers"
import Shirts from "./Shirts"
function Home(){
  const[isproduct,setIsProduct]=useState([])
  useEffect(()=>{
    fetch(" http://localhost:3000/products")
    .then(res=>res.json())
    .then((products)=>setIsProduct(products))
  },[])
  return (
    <>
    <h1>HOME</h1>
    <Shirts isproduct={isproduct}/>
    <Trousers isproduct={isproduct}/>
    </>
  )
}
export default Home