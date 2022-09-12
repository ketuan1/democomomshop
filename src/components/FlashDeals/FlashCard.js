import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useState } from "react";

 // funcrion nextArrow
 const NextArrow  = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <i className="fa fa-long-arrow-alt-right"></i>
      </button>
    </div>
  );
};

//function prevArrow
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <i className="fa fa-long-arrow-alt-left"></i>
      </button>
    </div>
  );
};


function FlashCard({ productItems, addToCart }) {

  //tang luot thich cho product
  const [count, setCount] = useState(0);

  //function Increment cho product
  function Increment() {
    setCount(count + 1);
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    // 1 => 4
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      {/* Slick -> Slider */}
      <Slider {...settings}>
        {/* function */}
        {productItems.map((productItems, index) => {
          return (
            <div className="box" key={index}>
              <div className="product mtop">
                <div className="img">
                  {/* data */}
                  <span className="discount">{productItems.discount}% Off</span>
                  {/* data */}
                  <img src={productItems.cover} alt="" />
                  <div className="product-like">
                    <label>0</label>
                    <br />
                    <i className="fa-regular fa-heart" onClick={Increment}></i>
                  </div>
                </div>
                <div className="product-details">
                  {/* data */}
                  <h3>{productItems.name}</h3>
                  <div className="rate">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>

                  <div className="price">
                    {/* data */}
                    <h4>{productItems.price}.00</h4>
                    <button onClick={() => addToCart(productItems)}>
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
}

export default FlashCard;
