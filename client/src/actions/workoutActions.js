import {
  WORKOUT_SAVE_REQUEST,
  WORKOUT_SAVE_SUCCESS,
  WORKOUT_SAVE_FAIL,
  WORKOUT_LIST_REQUEST,
  WORKOUT_LIST_SUCCESS,
  WORKOUT_LIST_FAIL,
  WORKOUT_PERSONAL_LIST_REQUEST,
  WORKOUT_PERSONAL_LIST_SUCCESS,
  WORKOUT_PERSONAL_LIST_FAIL,
  WORKOUT_DELETE_REQUEST,
  WORKOUT_DELETE_SUCCESS,
  WORKOUT_DELETE_FAIL,
} from "../constants/workoutConstants";
import axios from "axios";

export const listMyWorkOuts = () => async (dispatch, getState) => {
  dispatch({ type: WORKOUT_PERSONAL_LIST_REQUEST });

  const {
    userSignin: { userInfo },
  } = getState();

  try {
    const { data } = await axios.get("/api/workout/mine", {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: WORKOUT_PERSONAL_LIST_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({ type: WORKOUT_PERSONAL_LIST_FAIL, payload: message });
  }
};
