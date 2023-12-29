import React from "react";
import { useParams } from "react-router-dom";
import "./Category.scss";
import Products from "../Products/Products";
import useFetch from "../../hooks/useFetch";
function Category() {
  const { id } = useParams();
  const { data } = useFetch(
    `/api/products?populate=*&[filters][categories][id]=${id}`
  );
  
  console.log(data?.[0]?.attributes?.categories);
  return (
    <>
      <div className="maincontainer">
        <div className="layout">
          <div className="main-heading">
            <h1>
              {data?.[0]?.attributes?.categories?.data?.[0]?.attributes?.title}
            </h1>
          </div>
          <Products innerPage={true} products={data} />
        </div>
      </div>
    </>
  );
}

export default Category;
