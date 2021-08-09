import React, { useState } from "react";
import "./Topbar.css";
import Avatar from "@material-ui/core/Avatar";
import Searchbar from "../Searchbar/Searchbar";
import { Button } from "@material-ui/core";
import { Signout } from "../helpers";
import { useHistory, Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
// import { Dropdown, DropdownButton } from "react-bootstrap";
// import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
// import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
// import DropdownItem from "react-bootstrap/esm/DropdownItem";

const Topbar = (props) => {
  const [select, setSelect] = useState("");

  const changeselect = async (e) => {
    await e.preventDefault();
    setSelect(e.target.value);
    if (select === "profile") {
      await history.push("/profile");
      // <Link to="/profile"></Link>;
    } else {
      history.push("/");
    }
  };

  console.log(select);

  const history = useHistory();
  return (
    <div className="Topbar__container">
      <div className="Topbar__logo">
        <div className="login__company">
          <img
            src="\assets\journalism.png"
            alt=""
            className="login__companylogo"
          />
          <div className="login__companynamecontainer">
            <Link to="/" className="logo__link">
              <span className="login__companyname">Why-News?</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="Topbar__searchbar">
        <Searchbar
          searchBarTerm={props.searchBarTerm}
          setSearchBarTerm={props.setSearchBarTerm}
          setSearchTerm={props.setSearchTerm}
        />
      </div>
      <div className="Topbar__usericon">
        <Button
          className="user__button"
          onClick={() => {
            // console.log("Hello");
            history.push("/profile");
          }}
        >
          User Profile
        </Button>
        {/* <select
          className="Topbar__select"
          onClick={async (e) => changeselect(e)}
        >
          <option
            className="Topbar__option"
            selected="selected"
            value="Welcome user"
          >
            Welcome user
          </option>

          <option
            className="Topbar__option"
            value="profile"
            // onSelect={() => {
            //   history.push("/profile");
            // }}
          >
            Profile
          </option>
        </select> */}
        {/* <div className="dropdown">
          <Dropdown>
            <Dropdown.Toggle variant="secondary btn-sm" id="dropdown-basic">
              Language
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ backgroundColor: "#73a47" }}>
              <Dropdown.Item href="#">Arabic</Dropdown.Item>
              <Dropdown.Item href="#">English</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div> */}
        <Avatar alt="User_img" src="" className="avatar" />
        {/* <MenuIcon className="menu" onClick={handleClick}> */}
        <Button
          className="signout__button"
          onClick={() => {
            Signout(() => {
              // console.log("Hello");
              history.push("/login");
            });
          }}
        >
          Signout
        </Button>
        {/* </MenuIcon> */}
      </div>
    </div>
  );
};

export default Topbar;
