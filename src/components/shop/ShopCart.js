import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import { Checkbox } from "@mui/material";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";

//icon start
const labels = {
  0.5: "",
  1: "",
  1.5: "",
  2: "",
  2.5: "",
  3: "",
  3.5: "",
  4: "",
  4.5: "",
  5: "",
};
function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

// heart
const label = { inputProps: { "aria-label": "Checkbox demo" } };

function ShopCart({ shopItems, addToCart }) {
  const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   };

  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  return (
    <>
      {shopItems.map((shopItems, index) => {
        return (
          <div className="box" key={index}>
            <div className="product mtop">
              <div className="img">
                <span className="discount">{shopItems.discount}% Off</span>
                <img src={shopItems.cover} alt="" />
                <div className="product-like">
                  <label>0</label> <br />
                  {/* <i className="fa-regular fa-heart" onClick={increment}></i> */}
                  <Checkbox
                    {...label}
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite sx={{color: 'primary'}} />}
                  />
                </div>
              </div>

              <div className="product-details">
                {/* data */}
                <h3>{shopItems.name}</h3>
                <div className="rate">
                  {/* <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i> */}

                  <Box
                    sx={{
                      width: 200,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Rating
                      name="hover-feedback"
                      value={value}
                      precision={0.5}
                      getLabelText={getLabelText}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                      onChangeActive={(event, newHover) => {
                        setHover(newHover);
                      }}
                      emptyIcon={
                        <StarIcon
                          style={{ opacity: 0.55 }}
                          fontSize="inherit"
                        />
                      }
                    />
                    {value !== null && (
                      <Box sx={{ ml: 2 }}>
                        {labels[hover !== -1 ? hover : value]}
                      </Box>
                    )}
                  </Box>
                </div>

                <div className="price">
                  {/* data */}
                  <h4>{shopItems.price}.00</h4>
                  <button onClick={() => addToCart(shopItems)}>
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ShopCart;
