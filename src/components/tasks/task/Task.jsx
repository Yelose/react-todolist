import "./task.css";
import { useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ClearSharpIcon from "@mui/icons-material/ClearSharp";

export default function Task({
  task,
  completedToggle,
  editTaskText,
  deleteTask,
}) {
  const [editingTask, setEditingTask] = useState(false);
  const [taskText, setTaskText] = useState(task.text);

  const editingTaskHandler = () => {
    setEditingTask(!editingTask);
  };

  const taskTextEdited = (event) => {
    setTaskText(event.target.value);
  };
  const changeTaskTextHandler = (e) => {
    e.preventDefault();
    editTaskText(task.id, taskText);
    editingTaskHandler();
  };

  const deleteTaskHandler = (e) => {
    deleteTask(task.id);
  };
  return (
    <Grid container className="task-item">
      <Grid item xs={1} sm={1} md={1}>
        {task.completed ? (
          <CheckBoxOutlinedIcon
            className="icon"
            onClick={() => completedToggle(task.id)}
            color="primary"
          />
        ) : (
          <CheckBoxOutlineBlankIcon
            className="icon"
            onClick={() => completedToggle(task.id)}
            color="primary"
          />
        )}
      </Grid>
      <Grid item xs={9} sm={9} md={9}>
        {editingTask ? (
          <form className="edit-task-form" onSubmit={changeTaskTextHandler}>
            <input
              type="text"
              defaultValue={taskText}
              onChange={taskTextEdited}
            />
            <Button variant="outlined" onClick={changeTaskTextHandler}>
              Update
            </Button>
          </form>
        ) : (
          <Typography color="black" variant="body1">
            {task.text}
          </Typography>
        )}
      </Grid>
      {!editingTask ? (
        <>
          <Grid className="icon" item xs={1} sm={1} md={1}>
            <EditOutlinedIcon onClick={editingTaskHandler} />
          </Grid>{" "}
          <Grid className="icon" item xs={1} sm={1} md={1}>
            <ClearSharpIcon onClick={deleteTaskHandler} />
          </Grid>
        </>
      ) : (
        <p></p>
      )}
    </Grid>
  );
}
