import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Center from "../Center/Center";
import { isAuth } from "../helpers";
import Leftbar from "../Leftbar/Leftbar";
import Login from "../Login/Login";
import Rightbar from "../Rightbar/Rightbar";
import Topbar from "../TopBar/Topbar";
import "./Home.css";
const Home = (props) => {
  // Have a state here, searchTerm set cheyali.
  const history = useHistory();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchBarTerm, setSearchBarTerm] = useState("");
  // const [checkAuth, setCheckAuth] = useState(false);
  // console.log(checkAuth);
  return (
    // <>
    //   {setCheckAuth(isAuth)}
    //   {checkAuth ? (
    <>
      {isAuth() ? history.push("/") : history.push("/login")}
      <Topbar
        searchBarTerm={searchBarTerm}
        setSearchBarTerm={setSearchBarTerm}
        setSearchTerm={setSearchTerm}
      />
      <div className="Homepage__container">
        {/* leftbar */}
        <Leftbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        {/* center */} <Center searchTerm={searchTerm} />
        {/* rightbar */} <Rightbar />
      </div>
    </>
    // )
    // : (
    //   history.push("/login")
    // )}
    // </>
  );
};

export default Home;
