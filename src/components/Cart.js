export default function Cart(props) {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  // need to track number of items, and need to track items
  // track items with array

  if (props.cartItems.length === 0) {
    return (
      <div className="Cart">
        <div className="mock-history" aria-label="History">
          {/* This is where command history will go */}
          <div>
            <h1>Cart</h1>
            <p>Nothing is here yet!</p>
          </div>

        </div>
      </div>
    );
  } else {
    return (
      <div className="Cart">
        <div className="mock-history" aria-label="History">
          {/* This is where command history will go */}
          <div>
            <h1>Cart</h1>
            {props.cartItems.map((cartItem) => (
              <div>
                <p>
                  {cartItem.number}x {cartItem.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
