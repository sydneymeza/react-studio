export default function BakeryButton(props) {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  //add current item to cart
  // update cart
  function handleClick() {
    // const nextCart = { name: props.name, price: props.price, number: 1 };
    let newItem = true;

    // Re-render with the new array

    let newCartItem = {
      name: props.name,
      price: props.price,
      number: 1,
    };

    for (let i = 0; i < props.cartItems.length; i++) {
      console.log(props.cartItems[i].name);
      if (newCartItem.name === props.cartItems[i].name) {
        newItem = false;
      }
    }

    if (newItem) {
      props.updateCart([...props.cartItems, newCartItem]);
    } else {
      props.updateCart(
        props.cartItems.map((cartItem) => {
          if (cartItem.name === newCartItem.name) {
            // Create a *new* object with changes

            return { ...cartItem, number: cartItem.number + 1 };
          } else {
            // No changes
            return cartItem;
          }
        })
      );
    }
  }

  return (
    <div className="BakeryButton">
      <button onClick={handleClick}>Add to Cart</button>
      {/* TODO: personalize your bakery (if you want) */}
    </div>
  );
}
