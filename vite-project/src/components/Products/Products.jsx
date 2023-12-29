import "./Products.scss";
import Product from "./Product/Product";
const Products = ({ innerPage, headingText, products }) => {
  //console.log(productslist);
  // Check if productslist is undefined or falsy
  //console.log(products);
  if (!products) {
    return <div>Loading...</div>; // Handle loading state
  }
  return (
    <div className="product-container">
      {!innerPage && <div className="mainheading">{headingText}</div>}
      <div className="products">
        {products?.data?.map((item) => (
          <Product key={item.id} id={item.id} data={item.attributes} />
        ))}
      </div>
    </div>
  );
};

export default Products;
