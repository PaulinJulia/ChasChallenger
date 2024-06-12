import React, { useState } from "react";
import axios from "axios";
import style from "../components/SignUpForm.module.css";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

function SignUpForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    try {
      const response = await axios.post(
        /* "http://localhost:5106/api/register", */
         `https://chasfantasy.azurewebsites.net/register`,
        /* `/api/register`, */

        {
          email,
          password,
        }
      );
      console.log("User signed up:", response.data);
      navigate("/login");
      alert("Grattis! Nu är du en av oss!!! Varken du vill eller inte");
    } catch (error) {
      console.error("There was an error during signup:", error);
      alert("Error signing up, please try again later.");
    }
  };

  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={handleSubmit}>
        <h2><div className={style.title}>Bli medlem</div></h2>
        <div className={style.inputs}>
          <label className={style["label-name"]} htmlFor="email">
            E-post*
          </label>
          <input
            className={style["input-form"]}
            type="email"
            placeholder="Mejladress"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={style.inputs}>
          <label className={style["label-name"]} htmlFor="password">
            Ange ett lösenord*
          </label>
          <input
            className={style["input-form"]}
            type="password"
            placeholder="Lösenord"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className={style.inputs}>
          <label className={style["label-name"]} htmlFor="password">
           Bekräfta lösenord*
          </label>
          <input
            className={style["input-form"]}
            type="password"
            placeholder="Lösenord"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
      {/*   <div className={style["agree-checkbox-wrapper"]}>
          <input
            className={style["input-checkbox"]}
            title="Agree terms"
            type="checkbox"
            value=""
            required
          />
          <label className={style["agree-text"]} htmlFor="checkbox">
            I have read and agree to the terms of use.
          </label>
        </div> */}
        <div className={style["signup-button-wrapper"]}>
          <button
            className={style["signup-button"]}
            title="Sign Up"
            type="submit"
          >
            Bli medlem
          </button>
        </div>
      </form>
      <div className={style.goback}>
        <Link className={style["goback-link"]} title="Go Back" to="/login">
          <FaArrowLeftLong className={style["back-icon"]} />
          <button className={style["goback-button"]} title="Go Back">
            Bakåt
          </button>
        </Link>
      </div>
    </div>
  );
}

export default SignUpForm;
