import "./Cart.scss";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import CartItem from "../Cart/CartItem/CartItem";
import { useContext } from "react";
import { Context } from "../../Utils/Context";
import { useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { makePaymentRequest } from "../../Utils/api";
const Cart = ({ setshowCart }) => {
  const { cartItems, cartSubtotal } = useContext(Context);
  const navigate = useNavigate();
  const type = import.meta.env.VITE_REACT_APP_STRIPE_PUBLISHABLE_KEY;
  const stripePromise = loadStripe(type);
  const handlepayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makePaymentRequest.post("/api/orders", {
        products: cartItems,
      });

      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="cart-panel">
        <div className="opac-layer"></div>
        <div className="cart-content">
          <div className="cart-header">
            <div className="content">
              <span className="heading">Shopping cart</span>
              <span className="close-btn" onClick={() => setshowCart(false)}>
                <MdClose />
                <span className="text">Close</span>
              </span>
            </div>
          </div>
          {!cartItems?.length && (
            <div className="return-to-cart">
              <BsCartX size={90} color="rgba(0,0,0,0.2)" />
              <span className="textc">No product in the cart</span>
              <button
                className="return-cta"
                onClick={() => {
                  navigate("/");
                  setshowCart(false);
                }}
              >
                Return to shop
              </button>
            </div>
          )}
          {!!cartItems?.length && (
            <>
              <CartItem />
              <div className="cart-footer">
                <div className="subtotal">
                  <span className="text">Subtotal:</span>
                  <span className="text total">&#8377;{cartSubtotal}</span>
                </div>
                <div className="button">
                  <button className="button-cta" onClick={handlepayment}>
                    Checkout
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
