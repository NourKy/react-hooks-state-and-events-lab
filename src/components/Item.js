import React,{useState} from "react";

function Item({ name, category }) {
  const[inCart,setCart]=useState(false);
  const className = inCart ? "in-cart" : "";
    const buttonText = inCart ? "Remove From Cart" : "Add to Cart";
  
  function handleCart(e)
  {
    
    setCart((inCart)=>!inCart);

  }
  return (
    <li className={className}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCart} >{buttonText}</button>
    </li>
  );
}

export default Item;
