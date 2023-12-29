import "./Search.scss";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/img2.webp";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useFetch from "../../../hooks/useFetch";
const Search = ({ setShowSearch }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  let { data } = useFetch(
    `/api/products?populate=*&filters[title][$contains]=${query}`
  );
  //console.log(data);

  if (!query.length) {
    data = null;
  }
  return (
    <>
      <div className="search-modal">
        <div className="form-field">
          <input
            type="text"
            autoFocus
            placeholder="Search for products"
            value={query}
            onChange={onChange}
          />
          <MdClose
            onClick={() => {
              setShowSearch(false);
            }}
          />
        </div>
        <div className="search-result-content">
          <div className="search-result">
            {data?.data?.map((item) => (
              <div
                key={item.id}
                className="search-result-items"
                onClick={() => {
                  setShowSearch(false);
                  navigate("/product/" + item.id);
                }}
              >
                <div className="image">
                  <img
                    src={
                      import.meta.env.VITE_REACT_APP_DEV_URL +
                      item.attributes.img.data[0].attributes.url
                    }
                    alt="Loading..."
                  />
                </div>
                <div className="prod-details">
                  <span className="Name">{item.attributes.title}</span>
                  <span className="desc">Desc...</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
