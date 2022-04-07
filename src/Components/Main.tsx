import { FC, useState, ChangeEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faSearch } from "@fortawesome/free-solid-svg-icons";

interface TaskList {
  taskname: string;
  isComplete: boolean;
}

const Main: FC = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState<TaskList[]>([]);

  //Add new tasks
  const addTask = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const newTaskList: Array<TaskList> = [...taskList];
    newTaskList.push({ taskname: task, isComplete: false });
    setTaskList(newTaskList);
    setTask("");
  };

  //Delete task
  const deleteTask = (index: number) => {
    const newTaskList = [...taskList];
    newTaskList.splice(index, 1);
    setTaskList(newTaskList);
  };

  //Complete task
  const handleCheck = (index: number) => {
    const newTaskList = [...taskList];
    newTaskList[index].isComplete = !newTaskList[index].isComplete;
    setTaskList(newTaskList);
  };

  //Search task - without case limitation
  const [search, setsearch] = useState("");
  const searchedTaskList = taskList.filter((item) => {
    return item.taskname.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="main container subcontainer">
      {/* Form */}
      <form onSubmit={addTask} className="form">
        <input
          type="text"
          name="task"
          value={task}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setTask(event.target.value)
          }
          placeholder="new task"
        />
        <input type="submit" value="Add Task" className="btn" />
      </form>

      {/* Search tasks */}
      <div className="search form">
        <label>
          <FontAwesomeIcon icon={faSearch} /> <span>Search for :</span>
        </label>
        <input
          type="text"
          name="search"
          value={search}
          onChange={(event) => setsearch(event.target.value)}
        />
      </div>

      {/* Display tasks */}
      <div className="tasklist">
        {(search ? searchedTaskList : taskList).map((item, index) => {
          return (
            item !== null && (
              <div className="task" key={index}>
                <div className="task__left">
                  <input
                    type="checkbox"
                    name="taskComplete"
                    checked={item.isComplete}
                    onChange={() => handleCheck(index)}
                  />
                  <span>{item.taskname}</span>
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faTrashAlt}
                    onClick={() => deleteTask(index)}
                  />
                </div>
              </div>
            )
          );
        })}
      </div>

      {/* List of completed tasks */}
      <div className="completeTaskList">
        {taskList
          .filter((task) => task.isComplete)
          .map((item, index) => {
            return <div key={index}>{item.taskname}</div>;
          })}
      </div>
    </div>
  );
};

export default Main;
