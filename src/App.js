import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";
import Cart from "./components/Cart";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  const [cart, updateCart] = useState([]);
  const [cartPrice, updateCartPrice] = useState(0.0);

  // const updatePrice = () => {updateCartPrice(cartPrice)}

  return (
    <div className="App">
      <h1>Sydney's Bakery</h1>
      {/* TODO: personalize your bakery (if you want) */}
      {bakeryData.map(
        (
          item,
          index // TODO: map bakeryData to BakeryItem components
        ) => (
          // <p>Bakery Item {index}</p> // replace with BakeryItem component
          <BakeryItem
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
            updateCart={updateCart}
            cart={cart}
            updatePrice={updateCartPrice}
            currPrice={cartPrice}
          />
        )
      )}
      <div>
        {/* <h2>Cart</h2> */}
        {/* TODO: render a list of items in the cart */}
        <Cart cartItems={cart} cartPrice={cartPrice} curPrice={cartPrice}/>
      </div>
    </div>
  );
}

export default App;
