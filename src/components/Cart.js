

export default function Cart(props) {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  // need to track number of items, and need to track items
  // track items with array




  return (
    <div className="Cart">
      <div className="mock-history" aria-label="History">
      {/* This is where command history will go */}
      <div>
        {
         props.history.map((commandList) => (
          // creates a div that is mapped to the command in the history
          <div>
            {/* checks if the mode is verbose */}
            {!props.mode && <p>Command: {commandList[0]}</p>}
            {/* checks if the output is a string */}
            {typeof commandList[1] === "string"? (
              <p>Output: {commandList[1]}</p>
            ) : (
              // checks if the output is a table, and creates one if so
              <div>
                <p>Nothing here just yet!</p>
              </div>
            )}
          </div>
        )
        ) }
      </div>
    </div>
    </div>
  );
}
