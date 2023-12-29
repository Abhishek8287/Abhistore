import "./CartItem.scss";
import { useContext } from "react";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/img2.webp";
import { Context } from "../../../Utils/Context";
const CartItem = () => {
  const { cartItems, handleRemoveFromCart, handleCartProductQuantity } =
    useContext(Context);
  console.log(cartItems);
  return (
    <>
      <div className="cartitem-products">
        {cartItems.map((item) => (
          <div key={item.id} className="cartitem-product">
            <div className="image">
              <img
                src={
                  import.meta.env.VITE_REACT_APP_DEV_URL +
                  item.attributes.img.data[0].attributes.url
                }
                alt="Loading..."
              />
            </div>
            <div className="product-details">
              <span className="name">{item.attributes.title}</span>
              <MdClose onClick={() => handleRemoveFromCart(item)} />
              <div className="quanity-buttons">
                <span onClick={() => handleCartProductQuantity("inc", item)}>
                  +
                </span>
                <span>{item.attributes.quantity}</span>
                <span onClick={() => handleCartProductQuantity("dec", item)}>
                  -
                </span>
              </div>
              <div className="text">
                <span>{item.attributes.quantity}</span>
                <span>X</span>
                <span className="highlight">
                  &#8377;{item.attributes.price * item.attributes.quantity}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CartItem;
