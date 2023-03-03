import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import TasksForm from "./components/tasks/tasksform/TasksForm";
import TasksList from "./components/tasks/taskslist/TasksList";

function App() {
  const savedTasks = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];
  console.log(savedTasks);
  const [tasks, setTasks] = useState(savedTasks);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  let savedShowCompletedTasks = "";
  if (localStorage.getItem("showCompletedTasks") === null) {
    savedShowCompletedTasks = true;
  } else {
    savedShowCompletedTasks =
      localStorage.getItem("showCompletedTasks") === "true";
  }

  const [showCompletedTasks, setShowCompletedTasks] = useState(
    savedShowCompletedTasks
  );

  useEffect(() => {
    localStorage.setItem("showCompletedTasks", showCompletedTasks.toString());
  }, [showCompletedTasks]);

  return (
    <div className="App">
      <Header
        showCompletedTasks={showCompletedTasks}
        setShowCompletedTasks={setShowCompletedTasks}
      />
      <TasksForm tasks={tasks} setTasks={setTasks} />
      <TasksList
        tasks={tasks}
        setTasks={setTasks}
        showCompleted={showCompletedTasks}
      />
    </div>
  );
}

export default App;
