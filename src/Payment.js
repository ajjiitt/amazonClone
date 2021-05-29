import React from "react";
import './css/payment.css'
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer.js";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();
  return (
    <div className="payment">
      <div className="payment__container">
          <h1>Checkout {<Link to ="/checkout">{basket.length}items</Link>}</h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user ? user.email : ""}</p>
            <p>Charkop</p>
            <p>Mumbai,Maharashtra,India</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title" id="payment__item_title">
            <h3>Review Items 
                <br/>and Delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment__section">
            <div className="payment__title">
                <h3>Payment Method</h3>
            </div>
            <div className="payment__details" id="payment__total_title">
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

      <button  onClick={e => history.push('/orders')} className="subtotal__button">Proceed to Payment</button>
    </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
