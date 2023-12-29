import React from "react";
// import PropTypes from "prop-types";
import "./Category.scss";

import { useNavigate } from "react-router-dom";

const Category = ({ categories }) => {
  if (!categories) {
    return null;
  }
  const navigate = useNavigate();

  return (
    <>
      <div className="shop-by-category">
        <div className="categories">
          {categories?.data?.map((item) => (
            <div
              key={item.id}
              className="category"
              onClick={() => navigate(`/category/${item.id}`)}
            >
              <img
                src={
                  import.meta.env.VITE_REACT_APP_DEV_URL +
                  item.attributes.img.data[0].attributes.url
                }
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

// Category.propTypes = {
//   categories: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       attributes: PropTypes.shape({
//         img: PropTypes.shape({
//           data: PropTypes.shape({
//             attributes: PropTypes.shape({
//               url: PropTypes.string.isRequired,
//               alt: PropTypes.string.isRequired, // Assuming alt text is also provided
//             }).isRequired,
//           }).isRequired,
//         }).isRequired,
//       }).isRequired,
//     })
//   ),
// };

export default Category;
