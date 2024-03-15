export default function BakeryButton(props) {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  //add current item to cart
  // update cart
  function handleClick() {
    // const nextCart = { name: props.name, price: props.price, number: 1 };
    // let newItem = false;
      
    // Re-render with the new array

    let cartItem = {
        name: props.name,
        price: props.price,
        amount: props.number,
    }
  }


  return (
    <div className="BakeryButton">
      <button onClick={handleClick}>Add to Cart</button>
      {/* TODO: personalize your bakery (if you want) */}
    </div>
  );
}
