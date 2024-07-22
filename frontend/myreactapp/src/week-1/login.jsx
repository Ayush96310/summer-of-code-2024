import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./styles/login.module.css";
import { handleFormSubmit } from "../week-2/static/scripts/login";
const Login = () => {
  useEffect(() => {
    const form = document.getElementById("myForm");
    form.addEventListener("submit", handleFormSubmit);

    return () => {
      form.removeEventListener("submit", handleFormSubmit);
    };
  }, []);
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>PoS Login</title>
      <link rel="stylesheet" href="styles/login_style.css" />
      <link
        rel="shortcut icon"
        href="/frontend/week-1/img/favicon_io/favicon-16x16.png"
      />
      <div className={styles.background_wrapper}>
        <div className={`${styles.container} ${styles.slideintop}`}>
          <form className={styles.form} id="myForm">
            <img
              src="https://yt3.googleusercontent.com/cax203dzXyCCYVUwNfBgeugi5M9McrMllU_hpWTHBovPKFeTvViAynVwK2D-EPXxSEvoPgYCQEE=s900-c-k-c0x00ffffff-no-rj"
              alt="Lightspeed"
              className={styles.logo}
            />
            <div id="loginMessage" />
            <h2 className={styles.Login_Title}>Login</h2>
            <label htmlFor="e-mail">
              <p className={styles.Email}>Email Address</p>
              <input
                type="email"
                name="Email_Address"
                id="e-mail"
                placeholder="Enter your Email"
                className={styles.input}
                required
              />
            </label>
            <label htmlFor="password">
              <p className={styles.password}>Password</p>
              <input
                type="password"
                name="Password"
                id="password"
                placeholder="Enter your Password"
                className={styles.input}
                required
              />
            </label>
            <a href="#" className={styles.Forget}>
              Forgot Password?
            </a>
            <div className={styles.Role}>
              Enter as:
              <label htmlFor="Admin">
                <input
                  type="radio"
                  name="Role"
                  id="Admin"
                  className={styles.display_inline}
                  defaultValue={1}
                  required
                />
                Admin
              </label>
              <label htmlFor="Cashier">
                <input type="radio" name="Role" id="Cashier" defaultValue={0} />
                Cashier
              </label>
            </div>
            <div className={styles.end}>
              <button type="submit" id="myButton" className={styles.end_button}>
                Log in
              </button>
            </div>
            <p className={styles.no_acc}>
              Don't have an account yet?
              <Link className={styles.signup} to="/signup">
                Sign up here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
