import React from "react";
import { Link } from "react-router-dom";

function PersonCard({ id, alt, image, name, new_price, old_price }) {
  return (
    <div className="card">
      <Link to={`/product/${id}`}>
        <img onClick={window.scrollTo(0, 0)} src={image} alt={alt} />
      </Link>
      <p>{name}</p>
      <div className="price">
        <p className="new-price">${new_price}</p>
        <p className="old-price">${old_price}</p>
      </div>
    </div>
  );
}

export default PersonCard;
