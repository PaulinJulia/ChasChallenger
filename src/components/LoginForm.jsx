import React, { useState } from "react";
import axios from "axios";
import style from "./LoginForm.module.css";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

axios.defaults.withCredentials = true;

const handleKeyDown = (event) => {
  if (event.key === 'Enter') {
    handleLogin(event);
  }
};

function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    setErrorMessage("");

    try {
      const response = await axios.post(
        /* "http://localhost:5106/api/login?useCookies=true", */
        `https://chasfantasy.azurewebsites.net/api/login?useCookies=true`,
        /* `/api/login?useCookies=true`, */

        {
          email,
          password,
        }
      );

   
      if (response.status === 200) {
        console.log("Login succeeded!");
      }
      /* alert("Välkommen in i värmen!"); */
      navigate("/characters");

      if (response.headers["set-cookie"]) {
        console.log(
          "Cookies from Set-Cookie header:",
          response.headers["set-cookie"]
        );
      } else {
        console.log("Login failed:", response.data.message);
        /* setErrorMessage(response.data.message); */
      }
    } catch (error) {
      console.error(
        "Login error:",
        /* error.response ? error.response.data : "Server error" */
        alert("Server error. Nån har inte gjort sitt jobb!")
      );
      /* setErrorMessage(error.response ? error.response.data : "Server error"); */
    }
  };

 

  return (
    <div className="container">
      <form className={style.form}>
        <h2 className={style.title}>Logga in</h2>
        <div className={style["inputs"]}>
          <label className={style["label-name"]} htmlFor="email">
            E-post*
          </label>
          <input
            id="email"
            className={style["input-form"]}
            type="email"
            placeholder="Mejladress"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            /* onKeyDown={handleLogin}  */
            
          />
        </div>
        <div className={style["inputs"]}>
          <label className={style["label-name"]} htmlFor="password">
            Lösenord*
          </label>
          <input
            id="password"
            className={style["input-form"]}
            placeholder="Lösenord"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            /* onKeyDown={handleLogin}  */
          />
        </div>
        {errorMessage && <p className="error">{errorMessage}</p>}
      </form>
      <button
        type="submit"
        title="Log in"
        className={style["login-button"]}
        onClick={handleLogin}
      >
        <p>Logga in</p>
      </button>
      
      <div className={style["forgot-password"]}>
        <Link title="Har du bort ditt lösenord?" to={"/error"}>
          Har du tappat bort ditt lösenord?
        </Link>
      </div>
      <div className={style["signup-back-wrapper"]}>
        <Link to="/signup">
          <button title="Sign up" className={style["signup-button"]}>
            Bli medlem
          </button>
        </Link>
      </div>
      <div className={style.goback}>
        <Link className={style["goback-link"]} title="Go Back" to="/">
          <FaArrowLeftLong className={style["back-icon"]} />
          <button className={style["goback-button"]} title="Go Back">
            Bakåt
          </button>
        </Link>
      </div>
    </div>
  );
}

export default LoginForm;
