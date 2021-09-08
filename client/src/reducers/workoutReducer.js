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

export const workoutPersonalListReducer = (
  state = { workouts: [] },
  action
) => {
  switch (action.type) {
    case WORKOUT_PERSONAL_LIST_REQUEST:
      return { loading: true };
    case WORKOUT_PERSONAL_LIST_SUCCESS:
      return { loading: false, workouts: action.payload };
    case WORKOUT_PERSONAL_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
