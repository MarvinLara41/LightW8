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
import EditProfileScreen from "./screens/EditProfileScreen";
import DashBoardScreen from "./screens/DashBoardScreen";

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
            <Link className="brand" to="/mine">
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
                  <Link to="/addworkout">Add a Workout</Link>
                </li>
                <li>
                  <Link to="/editprofile">Edit Profile</Link>
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
        <main>
          <Switch>
            <Route path="/signin" component={SigninScreen}></Route>
            <Route path="/register" component={RegisterScreen}></Route>
            <Route path="/editprofile" component={EditProfileScreen}></Route>
            <Route path="/mine" component={DashBoardScreen}></Route>
            <Route path="/" component={LandingScreen} exact></Route>
          </Switch>
        </main>
        <footer className="row center">All rights reserverd.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
