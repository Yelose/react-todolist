import "./taskslist.css";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import Task from "../task/Task";

export default function TasksList({ tasks, setTasks, showCompleted }) {
  const completedToggle = (id) => {
    console.log("editando tarea id: " + id);
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };

  const editTaskText = (id, newText) => {
    console.log("editando tarea id: " + id);
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, text: newText };
        }
        return task;
      })
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <Box className="tasks-list-container">
      <Grid container>
        {tasks.length > 0 ? (
          tasks.map((task) => {
            if (showCompleted) {
              return (
                <Task
                  task={task}
                  key={task.id}
                  completedToggle={completedToggle}
                  editTaskText={editTaskText}
                  deleteTask={deleteTask}
                />
              );
            } else if (!task.completed) {
              return (
                <Task
                  task={task}
                  key={task.id}
                  completedToggle={completedToggle}
                  editTaskText={editTaskText}
                  deleteTask={deleteTask}
                />
              );
            }
            return;
          })
        ) : (
          <Grid item xs={12} sx={{ padding: "20px" }}>
            <p>There are no tasks</p>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}
