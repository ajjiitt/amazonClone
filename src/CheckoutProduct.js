import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import "./css/checkoutProduct.css";
function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkProduct__image" src={image} alt="" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
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
            value={price} // Part of the homework
            displayType={"text"}
            thousandSeparator={true}
            prefix={"INR "}
          />
        </p>
        <p className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </p>
        <button onClick={removeFromBasket} className="checkout__button">
          Remove from Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
