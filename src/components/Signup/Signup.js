import "./Signup.css";
import React, { useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordRetype = useRef();
  const history = useHistory();
  //   const REACT_APP_BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
  //   console.log(REACT_APP_BACKEND_URL + "/register");
  const handleSubmit = async (e) => {
    toast.info("submitting");
    e.preventDefault();
    if (passwordRetype.current.value !== password.current.value) {
      // password.current.setCustomValidity("Passwords donot match");
      toast.error("Password Donot match");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      console.log(user);

      try {
        await axios.post(
          // "http://localhost:8000/api/signup",
          "https://newsapp-node.herokuapp.com/api/signup",
          user
        );

        toast.info("Singup Sucessful");
        history.push("/");
      } catch (err) {
        // toast.error(err.response.data.message);
        console.log(err.response.data.message);
      }
    }
  };
  return (
    <>
      <ToastContainer />
      <div className="Reg_navbar">
        <div className="Reg_nav__container">
          <div className="Reg_nav__logo">
            <img
              src="\assets\journalism.png"
              alt=""
              className="Reg_navlogin__companylogo"
            />
            <div className="Reg_nav__companyname">Why-News?</div>
          </div>
          <div className="Reg_nav__logs">
            <a href="https://www.facebook.com" className="nav__link">
              <FacebookIcon className="Reg_nav__facebooklogo" />
            </a>
            <a href="https://www.instagram.com" className="nav__link">
              <InstagramIcon className="Reg_nav__facebooklogo" />
            </a>
            <a href="https://www.twitter.com" className="nav__link">
              <TwitterIcon className="Reg_nav__facebooklogo" />
            </a>
          </div>
        </div>
      </div>
      <div className="register">
        <div className="registerWrapper">
          <div className="registerLeft">
            <img src="\assets\News-rafiki.svg" alt="" className="login__img" />
            <div className="register__company">
              {/* <img
                src="\assets\journalism.png"
                alt=""
                className="companylogo"
              /> */}
              {/* <div className="companyname__container">
                <span className="companyname">Why-News?</span>
              </div> */}
            </div>
            {/* <hr className="hr__line" /> */}

            <span className="login__Desc">
              <small>Find the Latest and Exclusive News, with Why-News?</small>
            </span>
          </div>
          <div className="registerRight">
            <form className="registerBox" onSubmit={handleSubmit}>
              <div className="register__credentails">
                <small>Username</small>
                <input
                  // placeholder="Username"
                  ref={username}
                  className="registerInput"
                  type="text"
                  required
                />
              </div>
              <div className="register__credentails">
                <small>Email</small>
                <input
                  // placeholder="Email"
                  ref={email}
                  className="registerInput"
                  type="email"
                  required
                />
              </div>
              <div className="register__credentails">
                <small>Password</small>
                <input
                  // placeholder="Password"
                  ref={password}
                  className="registerInput"
                  type="password"
                  required
                  minLength="6"
                />
              </div>
              <div className="register__credentails">
                <small>Password Again</small>
                <input
                  // placeholder="Password Again"
                  ref={passwordRetype}
                  className="registerInput"
                  type="password"
                  required
                />
              </div>

              <button className="registerButton" type="submit">
                Sign Up
              </button>
              <Link to="/login" className="registerRegisterButtonLink">
                <button className="registerRegisterButton">
                  Log into Account
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
