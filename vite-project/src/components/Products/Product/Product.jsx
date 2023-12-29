import "./Product.scss";
import p1 from "../../../assets/products/img1.webp";
import { useNavigate } from "react-router-dom";
const Product = ({ id, data }) => {
  // console.log(data);
  const navigate = useNavigate();
  return (
    <>
      <div className="product-card" onClick={() => navigate("/product/" + id)}>
        <div className="thumbnail">
          <img
            src={
              import.meta.env.VITE_REACT_APP_DEV_URL +
              data.img.data[0].attributes.url
            }
            alt="Loading..."
          />
        </div>
        <div className="product-details">
          <span className="productname">{data.title}</span>
          <span className="price">&#8377;{data.price}</span>
        </div>
      </div>
    </>
  );
};

export default Product;
