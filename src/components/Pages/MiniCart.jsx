import React from "react";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
function MiniCart({ id, image, name, new_price, howMany, removeFromCart }) {
  return (
    <div className="mini-cart">
      <img src={image} alt="e" />
      <p className="long-text">{name}</p>
      <p>${new_price}</p>
      <p className="howmany-box">{howMany}</p>
      <p>{howMany * new_price}</p>
      <Button onClick={() => removeFromCart(id)}>
        <CloseIcon />
      </Button>
    </div>
  );
}

export default MiniCart;
