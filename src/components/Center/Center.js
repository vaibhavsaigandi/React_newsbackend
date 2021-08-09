import axios from "axios";
import React, { useState, useEffect } from "react";
import Myarticle from "../myarticle/Myarticle";
import "./Center.css";

const Center = (props) => {
  const key = process.env.REACT_APP_KEY;
  console.log(key);
  console.log(props.searchTerm);
  const [myarticles, setMyarticles] = useState([]);
  useEffect(() => {
    const loadPage = async () => {
      const res = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKe=${key}`
      );
      setMyarticles(res.data.articles);
    };
    loadPage();
  }, []);
  useEffect(() => {
    const loadPage = async () => {
      const res = await axios.get(
        // `https://newsapi.org/v2/top-headlines?country=in&apiKey=${key}`
        `https://newsapi.org/v2/everything?q=${props.searchTerm}&apiKe=${key}`
      );
      setMyarticles(res.data.articles);
    };
    loadPage();
  }, [props.searchTerm]);
  console.log(myarticles);
  return (
    <div className="Center">
      <div className="Center__container">
        {myarticles.map((myarticle) => (
          <>
            <Myarticle myarticle={myarticle} key={myarticle.content} />
            <hr className="Center__hr" />
          </>
        ))}
      </div>
    </div>
  );
};

export default Center;
