import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  console.log(tasks)
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}></Task>
      ))}
    </>
  );
};

export default Tasks;
