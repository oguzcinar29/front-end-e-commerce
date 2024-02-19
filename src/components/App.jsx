import React from "react";
import Navbar from "./Navbar/Navbar";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import { Route, Routes } from "react-router-dom";
import Product from "./Product/Product";
import Footer from "./Footer";
import Shop from "./HomePage/Shop";
import ShopCategory from "./ShopCategory";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/men"
            element={
              <ShopCategory
                alt="men"
                banner="./images/banner_mens.png"
                beginNumb={11}
                endNumb={24}
              />
            }
          />
          <Route
            path="/women"
            element={
              <ShopCategory
                alt="women"
                banner="./images/banner_women.png"
                beginNumb={-1}
                endNumb={12}
              />
            }
          />
          <Route
            path="/kids"
            element={
              <ShopCategory
                alt="kid"
                banner="./images/banner_kids.png"
                beginNumb={23}
                endNumb={36}
              />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
