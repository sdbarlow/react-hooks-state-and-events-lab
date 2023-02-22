import React, {useState} from "react";

function Item({ name, category }) {
  console.log("hello")
  const [addToCart, setaddToCart] = useState(false);
  const buttonText = addToCart ? "Add to Cart" : "Remove From Cart"
  function HandleButtonClick(){
    setaddToCart(!addToCart)

  }

  return (
    <li className={addToCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={HandleButtonClick}className="add">{buttonText}</button>
    </li>
  );
}

export default Item;
