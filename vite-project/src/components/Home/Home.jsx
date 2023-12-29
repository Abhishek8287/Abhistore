import Category from "../Home/Category/Category";
import Products from "../Products/Products";
import Banner from "./Banner/Banner";
import { fetchDataFromApi } from "../../Utils/api";
import { useEffect, useContext, useState } from "react";
import { Context } from "../../Utils/Context";
import "./Home.scss";
const Home = () => {
  const { categories, setCategories, products, setProducts } =
    useContext(Context);
  useEffect(() => {
    getProducts();
    getCatogories();
  }, []);

  const getCatogories = () => {
    fetchDataFromApi("/api/categories?populate=*").then((res) => {
      //console.log(res);
      setCategories(res);
      //console.log(categories);
    });
  };
  const getProducts = () => {
    fetchDataFromApi("/api/products?populate=*").then((res) => {
      setProducts(res);
    });
  };
  useEffect(() => {
    console.log(products);
  }, [products]);
  return (
    <>
      <div>
        <Banner />
        <div className="main-content">
          <div className="layout">
            <Category categories={categories} />
            <Products headingText="Popular products" products={products} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
