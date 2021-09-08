import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { listMyWorkOuts } from "../actions/workoutActions";
import MessageBox from "../components/MessageBox.js";

export default function DashBoardScreen(props) {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const workoutPersonalList = useSelector((state) => state.workoutPersonalList);
  const {
    loading: loadingWorkouts,
    workouts,
    error: errorWorkouts,
  } = workoutPersonalList;

  // const deleteHandler = (workout) => {
  //   dispatch(deleteWorkOut(workout._id));
  // };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listMyWorkOuts());
    return () => {};
  }, [dispatch, userInfo]);

  return (
    <div>
      DashBoardScreen
      <div>
        {loadingWorkouts ? (
          <div>Loading...</div>
        ) : errorWorkouts ? (
          <div>{errorWorkouts} </div>
        ) : (
          <div>
            <table className="profile-table">
              <thead>
                <tr>
                  <th>Exercise </th>
                  <th> Reps </th>
                  <th>Sets</th>
                  <th> Weight</th>
                  <th>Date</th>
                  <th>Time </th>
                </tr>
              </thead>
              <tbody>
                {workouts.length === 0 ? (
                  <MessageBox variant="danger">
                    Workout log is empty.{" "}
                    <Link to="/addworkout">Add a workout</Link>
                  </MessageBox>
                ) : (
                  workouts.map((workout) => (
                    <tr key={workout._id}>
                      <td>{workout.exercise}</td>
                      <td>{workout.reps}</td>
                      <td>{workout.sets}</td>
                      <td>{workout.weight}</td>
                      <td>{workout.date}</td>
                      <td>{workout.time}</td>
                      <td>
                        {/* <button onClick={() => deleteHandler(workout)}>
													Delete
												</button> */}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
