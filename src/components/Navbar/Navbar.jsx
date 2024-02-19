import React, { useContext } from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { ShopContext } from "../Context/ShopContext";
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

function Navbar() {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const { cartItems } = useContext(ShopContext);
  const findTotalClothes = () => {
    let total = 0;
    for (let i = 0; i < Object.keys(cartItems).length; i++) {
      total += cartItems[i];
    }
    return total;
  };
  const [isClickedButton, setButtonClicked] = useState(false);
  const [menu, setMenu] = useState("Shop");

  function menuClicked(e) {
    const newMenu = e.target.textContent;
    console.log(newMenu);
    if (newMenu === "SHOPPER") {
      setMenu("Shop");
    } else {
      setMenu(newMenu);
    }
  }
  return (
    <nav className="navbar">
      <div className="img-box">
        <Link onClick={menuClicked} to="/">
          <img src="/images/logo_big.png" alt="logo"></img>
          <h2>SHOPPER</h2>
        </Link>
      </div>
      <div className={windowSize[0] < 768 ? "display" : "nav-links"}>
        <Link
          className={menu === "Shop" ? "put-line" : "none"}
          onClick={menuClicked}
          to="/"
        >
          Shop
        </Link>
        <Link
          className={menu === "Men" ? "put-line" : "none"}
          onClick={menuClicked}
          to="/men"
        >
          Men
        </Link>
        <Link
          className={menu === "Women" ? "put-line" : "none"}
          onClick={menuClicked}
          to="/women"
        >
          Women
        </Link>
        <Link
          className={menu === "Kids" ? "put-line" : "none"}
          onClick={menuClicked}
          to="/kids"
        >
          Kids
        </Link>
      </div>
      <div
        className={
          windowSize[0] > 768
            ? "login-box"
            : isClickedButton
            ? "display"
            : "login-box"
        }
      >
        <Link
          onClick={menuClicked}
          to="/login"
          className={windowSize[0] > 431 ? "left-btn" : "display"}
        >
          <p>Login</p>
        </Link>
        <Link
          className={windowSize[0] > 431 ? null : "display"}
          onClick={menuClicked}
          to="/cart"
        >
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={findTotalClothes()} color="secondary">
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
        </Link>
      </div>
      {windowSize[0] < 768 && (
        <div className={isClickedButton ? "display" : "nav-menu"}>
          <Button onClick={() => setButtonClicked(true)}>
            <MenuIcon className="menu-icon" />
          </Button>
        </div>
      )}
      {isClickedButton && windowSize[0] < 768 && (
        <div className="mobile-menu">
          <Button
            style={{ width: "3px" }}
            className="close-icon"
            onClick={() => setButtonClicked(false)}
          >
            <CloseIcon className="menu-icon" />
          </Button>
          <Link to="/">Shop</Link>
          <Link to="/men">Men</Link>
          <Link to="/women">Women</Link>
          <Link to="/kids">Kids</Link>
          <Link to="/login" className="left-btn">
            <p>Login</p>
          </Link>
          <Link to="/cart">
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={findTotalClothes()} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
