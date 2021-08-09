import "./App.css";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
  Link,
} from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import { isAuth } from "./components/helpers";
import Profile from "./components/Profile/Profile";
function App(props) {
  const history = useHistory();
  // const [checkAuth, setCheckAuth] = useState(false);
  // console.log(checkAuth);
  // useEffect(() => {
  //   setCheckAuth(isAuth());
  // }, [checkAuth]);

  // let authenticated = false;
  // authenticated = isAuth()
  // console.log(isAuth());

  return (
    <div className="App">
      {/* {setCheckAuth(isAuth())} */}
      <Router>
        <Switch>
          <Route exact path="/">
            {/* {isAuth() ? <Home /> : <Redirect to="/login" />} */}
            {/* console.log(isAuth()) */}
            <Home />
          </Route>
          {/* {isAuth() ? (
            <Route exact path="/" component={Home} />
          ) : (
            <Route exact path="/login" component={Login}></Route>
            // history.redirect("/login")
          )} */}
          <Route exact path="/login">
            <Login />
            {/* {isAuth() ? <Redirect to="/" /> : <Login />} */}
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
