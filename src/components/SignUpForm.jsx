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
        /* `https://chasfantasy.azurewebsites.net/register`, */
        `/api/register`,
        
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
    <div>
      <form className={style.form} onSubmit={handleSubmit}>
        <div className={style.title}>Sign Up</div>
        <div className={style.inputs}>
          <label className={style["label-name"]} htmlFor="email">
            E-mail
          </label>
          <input
            className={style["input-form"]}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={style.inputs}>
          <label className={style["label-name"]} htmlFor="password">
            Set up a password
          </label>
          <input
            className={style["input-form"]}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className={style.inputs}>
          <label className={style["label-name"]} htmlFor="password">
            Confirm your password
          </label>
          <input
            className={style["input-form"]}
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div className={style["agree-checkbox-wrapper"]}>
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
        </div>
        <div className={style["signup-button-wrapper"]}>
          <button
            className={style["signup-button"]}
            title="Sign Up"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
      <div className={style.goback}>
        <Link className={style["goback-link"]} title="Go Back" to="/login">
          <FaArrowLeftLong className={style["back-icon"]} />
          <button className={style["goback-button"]} title="Go Back">
            Go back
          </button>
        </Link>
      </div>
    </div>
  );
}

export default SignUpForm;
