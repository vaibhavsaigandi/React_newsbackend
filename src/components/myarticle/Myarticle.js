import "./Myarticle.css";
import React from "react";
import { Button } from "@material-ui/core";

const Myarticle = ({ myarticle }) => {
  console.log(myarticle.url);
  return (
    <div className="myarticle">
      <div className="myarticle__container">
        <div className="myarticle__center">
          <div className="myarticle__images">
            {myarticle.urlToImage ? (
              <img
                src={myarticle.urlToImage}
                alt=""
                className="myarticle__img"
              />
            ) : (
              <img
                src="assets/nopicture.jpg"
                alt="no image"
                className="myarticle__img"
              />
            )}
          </div>
          <div className="myarticle__info">
            <div className="myarticle__title">
              {myarticle.title}
              <div className="myarticle__publishedat">
                {myarticle.publishedAt}
              </div>
            </div>
            <div className="myarticle__verticalline"></div>
            <div className="myarticle__remainingdetails">
              <div className="myarticle__author">
                {myarticle.author ? myarticle.author : "Anonymous Author"}
              </div>
              <hr />
              <div className="myarticle__publisher">
                {myarticle.source.name}
              </div>
              <div className="myarticle__buttoncontainer">
                <a href={myarticle.url} className="myarticle__viewbutton">
                  <Button className="myarticle__button">View</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myarticle;
