import React, {useState} from "react";
import Item from "./Item";


function ShoppingList({ items }) {
  const [selectedCategory, setselectedCategory] = useState("All")
  console.log(items)

  let filtered = [];

function HandleChange(e){
  setselectedCategory(e.target.value);
   console.log(filtered)
}

filtered = items.filter((item) => {if (selectedCategory === "All") return true;{
  return item.category === selectedCategory
  // console.log(item)
 }})


console.log(selectedCategory)

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={HandleChange} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filtered.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
