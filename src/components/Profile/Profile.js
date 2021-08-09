import React, { useEffect, useState } from "react";
import "./Profile.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Link, useHistory } from "react-router-dom";
import { getUser, Signout } from "../helpers";
import Button from "bootstrap";

const Profile = () => {
  const history = useHistory();
  const [user, setUser] = useState([]);
  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("user"));

    setUser(users);
  }, []);
  console.log(user);
  return (
    <>
      <div className="profilenavbar">
        <div className="profilenav__container">
          <div className="profilenav__logo">
            <img
              src="\assets\journalism.png"
              alt=""
              className="profilenavlogin__companylogo"
            />
            <div className="profilenav__companyname">
              <Link to="/" class="logo__link">
                Why-News?
              </Link>
            </div>
          </div>

          <div className="profilenav__logs">
            <div>
              <Link to="/" className="home_buttonlink">
                <button className="home__button">Home</button>
              </Link>
            </div>
            <a href="https://www.facebook.com" className="profilenav__link">
              <FacebookIcon className="profilenav__facebooklogo" />
            </a>
            <a href="https://www.instagram.com" className="profilenav__link">
              <InstagramIcon className="profilenav__facebooklogo" />
            </a>
            <a href="https://www.twitter.com" className="profilenav__link">
              <TwitterIcon className="profilenav__facebooklogo" />
            </a>
          </div>
        </div>
      </div>
      <div className="profile__page">
        <div className="profilepage__container">
          <div className="profile__image">
            <img
              src="assets/profileimage.png"
              alt=""
              className="profile__img"
              style={{ width: "100px", height: "100px" }}
            />
          </div>
          <div className="profile__name">
            Username : <small>{user.username}</small>
          </div>
          <div className="profile__email">
            Email : <small>{user.email}</small>
          </div>
          <div className="profile__createdAt">
            Created Account on : <small>{user.createdAt}</small>
          </div>
          <div className="profile__signout">
            <button
              className="signout__profilebutton"
              onClick={() => {
                Signout(() => {
                  {
                    history.push("/login");
                  }
                });
              }}
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
