import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TaskForm, Task } from "./components";
import { fetchAll } from "./actions";
import useStyles from "./style";
const App = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const completeTasks = useSelector((state) => state.complete);
  const incompleteTasks = useSelector((state) => state.incomplete);
  localStorage.setItem("complete", JSON.stringify(completeTasks));
  localStorage.setItem("incomplete", JSON.stringify(incompleteTasks));
  useState(() => {
    dispatch(fetchAll);
  });

  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <TaskForm />
        <div className={classes.tasks}>
          {incompleteTasks?.length > 0 &&
            incompleteTasks.map((item) => <Task key={item.id} task={item} />)}

          {completeTasks?.length > 0 &&
            completeTasks.map((item) => <Task key={item.id} task={item} />)}
          {incompleteTasks?.length === 0 && completeTasks?.length === 0 && (
            <h3 className={classes.h3}>no tasks yet :(</h3>
          )}
        </div>
      </div>
    </div>
  );
};
export default App;
