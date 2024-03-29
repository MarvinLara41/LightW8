import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailUser, updateUserProfile } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox.js";
import MessageBox from "../components/MessageBox.js";
import { USER_UPDATE_PROFILE_RESET } from "../constants/userConstants";

export default function EditProfileScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const {
    success: successUpdate,
    error: errorUpdate,
    loading: loadingUpdate,
  } = userUpdateProfile;

  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      dispatch({ type: USER_UPDATE_PROFILE_RESET });
      dispatch(detailUser(userInfo._id));
    } else {
      setName(user.name);
      setEmail(user.email);
    }
  }, [dispatch, userInfo._id, user]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password and confirm password do not match.");
    } else {
      dispatch(updateUserProfile({ userId: user._id, name, email, password }));
    }
  };
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>User Profile</h1>
        </div>

        <div>
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <>
              {loadingUpdate && <LoadingBox></LoadingBox>}
              {errorUpdate && (
                <MessageBox variant="danger">{errorUpdate}</MessageBox>
              )}
              {successUpdate && (
                <MessageBox variant="success">
                  Profile successfully updated.
                </MessageBox>
              )}
              <div>
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </div>

              <div>
                <label htmlFor="email">email</label>
                <input
                  id="email"
                  type="text"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>
              <div>
                <label htmlFor="password">password</label>
                <input
                  id="password"
                  type="password"
                  placeholder="password"
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
              </div>
              <div>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                ></input>
              </div>
              <div>
                <label />
                <button className="primary" type="submit">
                  Update
                </button>
              </div>
            </>
          )}
        </div>
      </form>
    </div>
  );
}
