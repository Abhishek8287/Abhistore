import "./Banner.scss";
import img1 from "../../../assets/banner-img.png";
const Banner = () => {
  return (
    <>
      <div className="hero-banner ">
        <div className="content">
          <div className="text-content">
            <h1>hadfon</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              aperiam quisquam earum iure
              <br /> consequatur eos, possimus omnis in quibusdam ab iusto
              blanditiis dolores a tempora cum laborum voluptate inventore
              maiores.
            </p>
            <div className="ctas">
              <div className="banner-ctas ">Read more...</div>

              <div className="banner-ctas vta ">Show more..</div>
            </div>
          </div>

          <div className="image">
            <img className="banner-img" src={img1} alt="loadinf..." />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
