import Header from "./Header";
import { useState } from "react";
import Tasks from "./Tasks";
import AddTask from "./AddTask";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 0,
      text: "Meeting at School",
      day: "Feb 6th at 2:30",
      reminder: true,
    },
    {
      id: 1,
      text: "Meeting at Work",
      day: "Feb 8th at 2:30",
      reminder: false,
    },
    {
      id: 2,
      text: "Meeting at Home",
      day: "Feb 10th at 2:30",
      reminder: true,
    },
  ]);
  const [showAddTask, setShowAddTask] = useState(false)

  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000 + 1)
    const newList = tasks.concat({id, ...task})
    console.log(newList)
    setTasks(newList)
  };

  //Delete Task
  const deleteTask = (id) => {
    console.log("delete", id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : { ...task }
      )
    );
  };

  return (
    <>
      <Header onShow={() => setShowAddTask(!showAddTask)} />
     {showAddTask && <AddTask  onShow={() => setShowAddTask(!showAddTask)} onAdd={addTask}/>}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        <h3>There are no tasks!</h3>
      )}
    </>
  );
}

export default App;
