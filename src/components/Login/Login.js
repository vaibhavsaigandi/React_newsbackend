import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { Link, Redirect, useHistory } from "react-router-dom";
import { authenticate, isAuth } from "../helpers";
// import { FacebookIcon } from "@material-ui/icons";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  let history = useHistory();
  const [values, setValues] = useState({
    email: "",
    password: "",
    buttonText: "Log In",
  });
  const { email, password, buttonText } = values;
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, e.target.value);
    setValues({ ...values, [name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    toast.info("submitting...");

    e.preventDefault();
    setValues({ ...values, buttonText: "Submitting..." });
    await axios({
      method: "POST",
      // url: `http://localhost:8000/api/login`, //this should be through env.... variable called REACT_APP_API  url:`${process.env.REACT_APP_API}/signup`,
      url: `https://newsapp-node.herokuapp.com/api/login`,
      data: { email, password },
    })
      .then((response) => {
        toast.success(response.data.message);
        console.log("Login SUCCESS", response.data.message);
        authenticate(response, () => {
          setValues({
            ...values,
            email: "",
            password: "",
            buttonText: "Log In",
          });
          console.log(isAuth());

          isAuth() ? history.push("/") : history.push("/login");
        });
      })
      .catch((error) => {
        toast.error(error.response.data.error);
        console.log("SIGNIN ERROR", error);
        setValues({ ...values, buttonText: "Log In" });
      });
  };
  return (
    <>
      <div className="navbar">
        <div className="nav__container">
          <div className="nav__logo">
            <img
              src="\assets\journalism.png"
              alt=""
              className="navlogin__companylogo"
            />
            <div className="nav__companyname">Why-News?</div>
          </div>
          <div className="nav__logs">
            <a href="https://www.facebook.com" className="nav__link">
              <FacebookIcon className="nav__facebooklogo" />
            </a>
            <a href="https://www.instagram.com" className="nav__link">
              <InstagramIcon className="nav__facebooklogo" />
            </a>
            <a href="https://www.twitter.com" className="nav__link">
              <TwitterIcon className="nav__facebooklogo" />
            </a>
          </div>
        </div>
      </div>

      <div className="login">
        <div className="login__container">
          <div className="login__Left">
            <img src="\assets\News-amico.svg" alt="" className="login__img" />
            <div className="login__company">
              {/* <img
                src="\assets\journalism.png"
                alt=""
                className="companylogo"
              /> */}
              {/* <div className="companyname__container">
                <span className="companyname">Why-News?</span>
              </div> */}
            </div>
            {/* <hr className="hr__linelogin" /> */}
            {/* <hr className="sidebar__hr" /> */}
            <span className="login__Desc">
              <small> Find the Latest and Exclusive News, with Why-News?</small>
            </span>
          </div>

          <div className="login__right">
            <form className="login__Box">
              <div className="Email__container">
                <span className="Email__span">
                  <small> Email </small>
                </span>
                <input
                  type="email"
                  name="email"
                  className="login__Input"
                  required
                  onChange={handleChange}
                  value={values.email}
                />
              </div>
              <div className="Password__container">
                <span className="Password__span">
                  <small> Password </small>
                </span>
                <input
                  type="password"
                  className="login__Input"
                  required
                  minLength="6"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  value={values.password}
                />
              </div>
              <button className="login__Button" onClick={handleSubmit}>
                {buttonText}
              </button>
              <Link to="/Signup" className="loginRegisterButtonLink">
                <button className="loginRegisterButton">
                  Create a New Account
                </button>
              </Link>
            </form>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Login;
