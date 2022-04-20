import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, resetList } from "../../actions";
import useStyles from "./style";
const initialState = {
  task: "",
};
const TaskForm = () => {
  const classes = useStyles();
  const [form, setForm] = useState(initialState);

  const dispatch = useDispatch();
  //HANDLE FORM SUBMISSION
  const handleSubmit = (e) => {
    e.preventDefault();
    let task = form;
    task.id = uuid().slice(0, 8);

    task.isComplete = false;
    setForm(task);

    dispatch(addTodo(form));
    setForm(initialState);
  };
  //RESET TASKS LIST
  const reset = () => {
    dispatch(resetList());
  };
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  return (
    <div style={{ padding: "10px" }}>
      <h2 className={classes.h2}>TODO-APP</h2>
      <div className={classes.form}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="task"
            onChange={handleChange}
            value={form.task}
            required
            className={classes.input}
          />
          <button type="submit" className={classes.button}>
            submit
          </button>
        </form>
        <button className={classes.button} onClick={reset}>
          reset
        </button>
      </div>
    </div>
  );
};
export default TaskForm;
