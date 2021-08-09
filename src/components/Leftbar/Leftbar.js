import React, { useState } from "react";
import "./Leftbar.css";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import CardTravelIcon from "@material-ui/icons/CardTravel";
import DevicesIcon from "@material-ui/icons/Devices";
import SportsCricketIcon from "@material-ui/icons/SportsCricket";
import SportsIcon from "@material-ui/icons/Sports";
import { Button } from "@material-ui/core";
import Center from "../Center/Center";
const Leftbar = (props) => {
  // const [searchterm, setSearchterm] = useState("");
  console.log(props);
  const handleclick = async (e) => {
    // e.preventDefault();
    // const value = await e.target.value;
    console.log(e.target.innerHTML);
    props.setSearchTerm(e.target.innerHTML);
  };
  // console.log(searchterm);
  return (
    <div className="leftbar">
      {/* <Center searchterm={searchterm} /> */}
      <div className="leftbar__container">
        <div className="leftbarheading"> Categorical News </div>
        <hr className="leftbar__hr" />
        <div className={`leftbaritem`}>
          <Button
            name="Trending"
            onClick={(e) => handleclick(e)}
            className="Button"
          >
            <WhatshotIcon className="leftbar__icon icon" />
            <div className="leftbar__title">Trending </div>
          </Button>
        </div>
        <div className={`leftbaritem`}>
          <Button name="Travel" onClick={handleclick} className="Button">
            <CardTravelIcon className="leftbar__icon" />
            <div className="leftbar__title">Travel</div>
          </Button>
        </div>
        <div className={`leftbaritem`}>
          <Button name="Technology" onClick={handleclick} className="Button">
            <DevicesIcon className="leftbar__icon" />
            <div className="leftbar__title">Technology</div>
          </Button>
        </div>
        <div className={`leftbaritem`}>
          <Button name="Cricket" onClick={handleclick} className="Button">
            <SportsCricketIcon className="leftbar__icon" />
            <div className="leftbar__title">Cricket </div>
          </Button>
        </div>
        <div className={`leftbaritem`}>
          <Button name="Sports" onClick={handleclick} className="Button">
            <SportsIcon className="leftbar__icon" />
            <div className="leftbar__title">Sports </div>
          </Button>
        </div>
        <div className={`leftbaritem`}>
          <Button name="Olympics" onClick={handleclick} className="Button">
            <img src="assets/olympics.png" alt="olympics" />
            <div className="leftbar__title">Olympics </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
