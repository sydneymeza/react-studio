// TODO: create a component that displays a single bakery item
import BakeryButton from "./BakeryButton";

export default function BakeryItem(props) {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  return (
    <div className="BakeryItem">
      <div>
        <img alt="photo of bakery item" src={props.image} />
      </div>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <p>{props.price}</p>
      {/* TODO: personalize your bakery (if you want) */}
      <BakeryButton cartItems={props.cart} price={props.price} updateCart={props.updateCart} name={props.name}/>
    </div>
  );
}
