import "./tasksform.css";
import { Button, FormControl, Input, InputLabel } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { v4 } from "uuid";
export default function TasksForm({ tasks, setTasks }) {
  const [inputTaskValue, setInputTaskValue] = useState("");

  const inputTaskHandler = (event) => {
    setInputTaskValue(event.target.value);
  };

  const addNewTaskHandle = (e) => {
    e.preventDefault();
    if (inputTaskValue.trim() !== "") {
      setTasks([
        ...tasks,
        { id: v4(), text: inputTaskValue, completed: false },
      ]);
    }
    setInputTaskValue("");
  };

  return (
    <form className="tasks-form" onSubmit={addNewTaskHandle}>
      <FormControl>
        <InputLabel htmlFor="task">To do task</InputLabel>
        <Input
          onChange={inputTaskHandler}
          id="inputTaskValue"
          name="inputTaskValue"
          aria-describedby="my-helper-text"
          value={inputTaskValue}
        />
      </FormControl>
      <Button
        color="primary"
        variant="contained"
        type="submit"
        size="large"
        startIcon={<AddIcon />}
      >
        Add
      </Button>
    </form>
  );
}
