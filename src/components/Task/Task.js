import React from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useDispatch } from "react-redux";
import { markCompleted, removeTodo } from "../../actions";
import useStyles from "./style";
const Task = ({ task }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const taskComplete = (taskitem) => {
    if (task.isComplete === false) {
      taskitem.isComplete = true;
      dispatch(markCompleted(taskitem));
    }
  };
  const deleteTask = (id) => {
    dispatch(removeTodo(id));
  };
  if (task.isComplete === false)
    return (
      <div className={classes.task}>
        <span className={classes.taskName} onClick={() => taskComplete(task)}>
          {task.task}
        </span>
        <IconButton aria-label="delete" onClick={() => deleteTask(task.id)}>
          <CloseIcon className={classes.button} />
        </IconButton>
      </div>
    );
  else
    return (
      <div className={classes.task}>
        <span className={classes.taskName} onClick={() => taskComplete(task)}>
          {task.task}
        </span>
        <IconButton
          aria-label="delete"
          style={{ color: "green" }}
          onClick={() => deleteTask(task.id)}
        >
          <CheckCircleIcon />
        </IconButton>
      </div>
    );
};
export default Task;
