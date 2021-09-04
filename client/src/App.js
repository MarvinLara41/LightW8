import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { signout } from "./actions/userActions";
// import PrivateRoute from "./components/PrivateRoute";
// import AdminRoute from "./components/AdminRoute";

/** Screens */
import RegisterScreen from "./screens/RegisterScreen";
import SigninScreen from "./screens/SigninScreen";
import LandingScreen from "./screens/LandingScreen";

function App() {
  const userSignin = useSelector((state) => state.userSignin);

  const { userInfo } = userSignin;

  const dispatch = useDispatch();

  const signoutHandler = () => {
    /**connected to actions and constant */
    dispatch(signout());
  };

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">
              LightW8
            </Link>
          </div>

          {userInfo ? (
            <div className="dropdown">
              <Link to="#">
                {userInfo.name} <i className="fa fa-caret-down"></i>
              </Link>

              <ul className="dropdown-content">
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/workouthistory">Work-OutHistory</Link>
                </li>
                <li>
                  <Link to="#signout" onClick={signoutHandler}>
                    Sign Out
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/signin">Sign In</Link>
          )}
        </header>

        <Switch>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/" component={LandingScreen} exact></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
