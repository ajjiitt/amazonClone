import React from 'react'
import "./css/orders.css"
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer.js";
import CurrencyFormat from "react-currency-format";
import "./css/checkoutProduct.css";
function Orders() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className="orders">
            <div className="header_order">
                {basket.length > 0 ?"Your order is successfully Placed":"Oops! Error occured"}
            </div>
            <div className="payment__items">
            {basket.map((item) => (
              <div className="checkoutProduct">
              <img className="checkProduct__image" src={item.image} alt="" />
        
              <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{item.title}</p>
                <p className="checkoutProduct__price">
                  <CurrencyFormat
                    renderText={(value) => (
                      <>
                        <p>
                          <strong>{value}</strong>
                        </p>
                      </>
                    )}
                    decimalScale={2}
                    value={item.price} // Part of the homework
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"INR "}
                  />
                </p>
              </div>
            </div>
            ))}
          </div>
        </div>
    )
}

export default Orders
