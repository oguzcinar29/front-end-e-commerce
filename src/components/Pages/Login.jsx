import React, { useState } from "react";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import { pink } from "@mui/material/colors";
import { Link } from "react-router-dom";

// i was about to set css of login keep goin'

function Login() {
  const [isAccountAvailable, setAccount] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [isCheckBoxClicked, setCheckBox] = useState(false);
  const [isTextsOkay, setTexts] = useState(false);

  function handleSubmit() {}
  return (
    <section className="login-section">
      <div className="box">
        <h1>{isAccountAvailable ? "Login" : "Sign Up"}</h1>
        <form className="log-form" onSubmit={handleSubmit}>
          {!isAccountAvailable && (
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
            ></input>
          )}
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Adress"
          ></input>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          ></input>

          <Link
            onClick={() => {
              if (!isAccountAvailable) {
                if (
                  email.search("@") !== -1 &&
                  password.length !== 0 &&
                  name.length !== 0
                ) {
                  if (isCheckBoxClicked) {
                    setTexts((prevText) => {
                      prevText = true;
                      return prevText;
                    });
                  }
                }
              }
              if (isAccountAvailable) {
                if (password.length !== 0 && email.search("@") !== -1) {
                  if (isCheckBoxClicked) {
                    setTexts((prevText) => {
                      prevText = true;
                      return prevText;
                    });
                  }
                }
              }
              console.log(isAccountAvailable);
            }}
            to={isTextsOkay && isCheckBoxClicked && "/"}
          >
            <Button>Continue</Button>
          </Link>
        </form>
        <div className="click-text">
          <p>
            {isAccountAvailable
              ? "Create an account?"
              : "Already have an account?"}
          </p>
          <p
            style={{ color: "red" }}
            onClick={() => {
              setAccount(!isAccountAvailable);
              setCheckBox(false);
              setTexts(false);
              setEmail("");
              setName("");
              setPassword("");
            }}
          >
            {isAccountAvailable ? "Click Here" : "Login Here"}
          </p>
        </div>
        <div className="check-box">
          <Checkbox
            onClick={() =>
              setCheckBox((prevCheck) => {
                prevCheck = true;
                return prevCheck;
              })
            }
            {...label}
            sx={{
              color: pink[800],
              "&.Mui-checked": {
                color: pink[600],
              },
            }}
          />
          <p>By contuining, i agree to term of use & privacy policy.</p>
        </div>
      </div>
    </section>
  );
}

export default Login;
