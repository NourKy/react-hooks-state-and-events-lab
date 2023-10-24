import React,{useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory,setCategory]=useState("All");
  const [filteredItems, setFilteredItems] = useState(items);
  
  
  function filterItems(category)
  {
    console.log(category);
    setCategory((selectedCategory)=>category)
   // setCategory(category);
if (category==="All")
{
  setFilteredItems(items);

}
else
{
  const filteredItem=items.filter((item)=>item.category===category);
  setFilteredItems(filteredItem);
}

    
  }
  
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={(e) => filterItems(e.target.value)} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
