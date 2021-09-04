import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

/**adding this private route to prevent users from seeing an error screen after updating their profile then signing out */

export default function PrivateRoute({ component: Component, ...rest }) {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  return (
    <Route
      {...rest}
      render={(props) =>
        userInfo ? (
          <Component {...props}></Component>
        ) : (
          <Redirect to="/signin" />
        )
      }
    ></Route>
  );
}
