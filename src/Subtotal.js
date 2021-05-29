import React from "react";
import CurrencyFormat from "react-currency-format";
import { useHistory } from "react-router";
import "./css/subtotal.css";
import { getBasketTotal } from "./reducer.js";
import { useStateValue } from "./StateProvider";
function Subtotal({ count }) {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input className="subtotal__gift__input " type="checkbox" /> This
              order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick={e => history.push('/payment')} className="subtotal__button">Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
