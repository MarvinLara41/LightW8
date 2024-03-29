import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";

/**Reducers */
import {
  userSigninReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
  userDetailsReducer,
} from "./reducers/userReducer.js";

import { workoutPersonalListReducer } from "./reducers/workoutReducer";

const initialState = {
  userSignin: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
};

const reducer = combineReducers({
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  workoutPersonalList: workoutPersonalListReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
