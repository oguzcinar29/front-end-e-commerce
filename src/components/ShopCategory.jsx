import React, { useContext } from "react";
import { ShopContext } from "./Context/ShopContext";
import PersonCard from "./HomePage/PersonCard";
import Button from "@mui/material/Button";

function ShopCategory({ banner, alt, beginNumb, endNumb }) {
  const { all_product } = useContext(ShopContext);
  return (
    <section className="men">
      <section className="sale">
        <div className="sale-box">
          <img style={{ width: "100%" }} src={banner} alt={alt} />
        </div>
      </section>
      <div className="small-text">
        <p>
          <span>Showing 1-12</span>out of 54 products
        </p>
      </div>
      <section className="men-pho">
        <div className="men-box">
          <div className="cards">
            {all_product?.map((item, index) => {
              if (index > beginNumb && index < endNumb)
                return (
                  <PersonCard id={index} alt={alt} {...item} key={index} />
                );
              return null;
            })}
          </div>
        </div>
      </section>
      <div className="btn-div">
        <Button variant="contained">Explore More</Button>
      </div>
    </section>
  );
}

export default ShopCategory;
