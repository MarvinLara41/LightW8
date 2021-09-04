import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";

/**Reducers */
import {
  userSigninReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
  userDetailsReducer,
} from "./reducers/userReducer.js";

import {
  workoutSaveReducer,
  workoutPersonalListReducer,
  workoutDeleteReducer,
} from "./reducers/workoutReducer";

const initialState = {
  userSignin: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
};

const reducers = combineReducers({
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  workoutSave: workoutSaveReducer,
  workoutPersonalList: workoutPersonalListReducer,
  workoutDelete: workoutDeleteReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
