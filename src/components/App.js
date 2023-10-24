import React,{useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
const[isDark,setLight]=useState("false")
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  let appClass = isDark ? "App dark" : "App light"
function handleLight()
{

setLight((isDark)=>!isDark);


}
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleLight}>{isDark ? "Dark mood" : "Light Mood"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
