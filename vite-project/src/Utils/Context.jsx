import { createContext, useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
export const Context = createContext();

const AppContext = ({ children }) => {
  const [categories, setCategories] = useState();
  const [products, setProducts] = useState();
  const [cartItems, setcartItems] = useState([]);
  const [cartCount, setcartCount] = useState(0);
  const [cartSubtotal, setcartSubtotal] = useState(0);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  useEffect(() => {
    let count = 0;
    cartItems.map((item) => (count += item.attributes.quantity));
    setcartCount(count);

    let subtotal = 0;
    cartItems.map(
      (item) => (subtotal += item.attributes.price * item.attributes.quantity)
    );
    setcartSubtotal(subtotal);
  }, [cartItems]);

  const handleAddtocart = (product, quantity) => {
    let items = [...cartItems];
    let index = items.findIndex((p) => p.id === product.id);
    if (index !== -1) {
      items[index].attributes.quantity += quantity;
    } else {
      product.attributes.quantity = quantity;
      items = [...cartItems, product];
    }
    setcartItems(items);
    //console.log(items);
  };

  const handleRemoveFromCart = (product) => {
    let items = [...cartItems];
    items = items.filter((p) => p.id !== product.id);
    setcartItems(items);
  };

  const handleCartProductQuantity = (type, product) => {
    let items = [...cartItems];
    let index = items.findIndex((p) => p.id === product.id);
    if (type === "inc") {
      items[index].attributes.quantity += 1;
    } else if (type === "dec") {
      if (items[index].attributes.quantity === 1) return;
      else {
        items[index].attributes.quantity -= 1;
      }
    }
    setcartItems(items);
  };

  return (
    <>
      <Context.Provider
        value={{
          categories,
          setCategories,
          products,
          setProducts,
          cartItems,
          setcartItems,
          cartCount,
          setcartCount,
          cartSubtotal,
          setcartSubtotal,
          handleAddtocart,
          handleCartProductQuantity,
          handleRemoveFromCart,
          location,
        }}
      >
        {children}
      </Context.Provider>
    </>
  );
};

export default AppContext;
