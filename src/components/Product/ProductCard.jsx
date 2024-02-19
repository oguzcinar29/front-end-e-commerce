import React, { useContext, useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Rating from "@mui/material/Rating";
import { ShopContext } from "../Context/ShopContext";

function ProductCard(props) {
  const { product } = props;
  const [size, setSize] = useState("");
  const [isFound, setFound] = useState(false);
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="product-card">
      <div className="product-box">
        <div className="texts">
          <p>HOME</p>
          <ArrowForwardIosIcon />
          <p>SHOP</p>
          <ArrowForwardIosIcon />
          <p id="setBigFirstLetter">{product.category}</p>
          <ArrowForwardIosIcon />
          <p>{product.name}</p>
        </div>
        <div className="three-box">
          <div className="four-photo">
            <img src={product.image} alt={product.category} />
            <img src={product.image} alt={product.category} />
            <img src={product.image} alt={product.category} />
            <img src={product.image} alt={product.category} />
          </div>
          <div className="big-photo">
            <img src={product.image} alt={product.category} />
          </div>
          <div className="photo-info">
            <h2>{product.name}</h2>
            <div className="stars">
              <Rating
                name="half-rating-read"
                defaultValue={2.5}
                precision={0.5}
                readOnly
              />
              <p>(122)</p>
            </div>
            <div className="price">
              <p id="old-price">${product.old_price}</p>
              <p id="new-price">${product.new_price}</p>
            </div>
            <p>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in
              massa egestas mollis varius; dignissim elementum. Mollis tincidunt
              mattis hendrerit dolor eros enim
            </p>
            <h3>Select Size</h3>
            <div className="size-box">
              <button onClick={(e) => setSize(e.target.textContent)}>S</button>
              <button onClick={(e) => setSize(e.target.textContent)}>M</button>
              <button onClick={(e) => setSize(e.target.textContent)}>L</button>
              <button onClick={(e) => setSize(e.target.textContent)}>XL</button>
              <button onClick={(e) => setSize(e.target.textContent)}>
                XXL
              </button>
            </div>
            <button
              style={{ cursor: "pointer" }}
              onClick={() => addToCart(product.id)}
            >
              ADD TO CART
            </button>
            <div className="last-texts">
              <p>
                <span>Category : </span>Woman,T-shirt,Crop Top
              </p>
              <p>
                <span>Tags : </span>Modern, Latest
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
