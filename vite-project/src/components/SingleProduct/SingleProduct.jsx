import React from "react";
import { useState, useContext } from "react";
import "./SingleProductPage.scss";
import {
  FaCartPlus,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

//import proimg from "../../assets/products/headphone.webp";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import { Context } from "../../Utils/Context";
const SingleProduct = () => {
  const [change, setChange] = useState(1);
  const { id } = useParams();
  const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);
  const { handleAddtocart } = useContext(Context);
  if (!data) return;
  const product = data.data[0].attributes;

  const increase = () => {
    setChange((value) => value + 1);
  };
  const decrease = () => {
    setChange((value) => {
      if (value == 1) return 1;
      else {
        return value - 1;
      }
    });
  };

  return (
    <>
      <div className="main-container">
        <div className="layout">
          <div className="single-page-items">
            <div className="left">
              <img
                src={
                  import.meta.env.VITE_REACT_APP_DEV_URL +
                  product.img.data[0].attributes.url
                }
                alt="Loading...."
              />
            </div>
            <div className="right">
              <span className="Name">{product.title}</span>
              <span className="price">&#8377;{product.price}</span>
              <span className="desc">{product.desc}</span>
              <div className="cart-buttons">
                <div className="quatity-buttons">
                  <span onClick={increase}>+</span>
                  <span>{change}</span>
                  <span onClick={decrease}>-</span>
                </div>
                <button
                  className="add-to-cart"
                  onClick={() => {
                    handleAddtocart(data.data[0], change), setChange(1);
                  }}
                >
                  <FaCartPlus size={20} />
                  Add to cart
                </button>
              </div>
              <span className="divider" />
              <div className="info-items">
                <span className="text-bold">
                  Category:
                  <span>{product.categories.data[0].attributes.title}</span>
                </span>
                <span className="text-bold">
                  Share:
                  <span className="social-icons">
                    <FaFacebook size={20} />
                    <FaInstagram size={20} />
                    <FaLinkedin size={20} />
                    <FaTwitter size={20} />
                  </span>
                </span>
              </div>
            </div>
          </div>
          <RelatedProducts
            productid={id}
            categoryid={product.categories.data[0].id}
          />
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
