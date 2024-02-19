import React, { useState } from "react";
import { Link } from "react-router-dom";
import data_product from "../../data";
import new_collections from "../../new_collections";

import PersonCard from "./PersonCard";
function Shop() {
  const [womenArr, setWomenArr] = useState(data_product);
  const [newCollArr, setNewCollArr] = useState(new_collections);
  const [email, setEmail] = useState("");
  function handleClick(e) {
    e.preventDefault();
    console.log(email);
    setEmail("");
  }
  return (
    <section className="home">
      <section className="part1 big-girl-child">
        <div className="home-box">
          <div className="home-texts">
            <h3>NEW ARRIVALS ONLY </h3>
            <h1>New 👏 Collections For Everyone </h1>
            <Link className="home-btn" to="/">
              <p>Latest Collection</p>
            </Link>
          </div>
          <img src="./images/hero_image.png" alt="childeren"></img>
        </div>
      </section>
      <section className="part2 women-area">
        <div className="part2-box">
          <div className="part2-text">
            <h1>POPULAR IN WOMEN</h1>
            <hr></hr>
          </div>
          <div className="cards">
            {womenArr?.map((item, index) => {
              return (
                <PersonCard id={index} alt="woman" {...item} key={index} />
              );
            })}
          </div>
        </div>
      </section>
      <section className="part3 big-woman-photo">
        <div className="part3-box">
          <div className="part3-texts">
            <h1>Exclusive Offers For You</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <Link className="home-btn upper" to="/">
              <p>Check now</p>
            </Link>
          </div>
          <img src="./images/exclusive_image.png" alt="womanphoto"></img>
        </div>
      </section>
      <section className="part2">
        <div className="part2-box">
          <div className="part2-text">
            <h1>NEW COLLECTIONS</h1>
            <hr></hr>
          </div>
          <div className="cards">
            {newCollArr.map((item, index) => {
              return (
                <PersonCard
                  id={index}
                  alt="newcollection"
                  {...item}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </section>
      <section className="part4">
        <div className="part4-box">
          <h1>Get Exclusive Offers On Your Email</h1>
          <p>Subscribe to our newsletter and stay updated.</p>
          <form className="form" onSubmit={handleClick}>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              value={email}
            ></input>
            <button type="submit" className="button-78">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </section>
  );
}

export default Shop;
