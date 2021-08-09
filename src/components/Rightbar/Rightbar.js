import React from "react";
import "./Rightbar.css";
const Rightbar = () => {
  return (
    <div className="Rightbar">
      <div className="rightbar__container">
        <a
          href="https://netflix-cloneapp-vaibhav.netlify.app"
          className="rightbar__anchor"
        >
          <img src="assets/netflix add.jpg" alt="" className="rightbar__img" />
        </a>
        <a
          href="https://www.primevideo.com/storefront/home/ref=atv_nb_logo"
          className="rightbar__anchor"
        >
          <img
            src="assets/amazon-prime-video.png"
            alt=""
            className="rightbar__imgprime"
          />
        </a>
        <a href="https://www.bk.com" className="rightbar__anchor">
          <img
            src="assets/burgerkingadd.png"
            alt=""
            className="rightbar__img"
          />
        </a>
      </div>
    </div>
  );
};

export default Rightbar;
