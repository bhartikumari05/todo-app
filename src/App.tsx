import React from "react";
import CompletedTask from "./component/CompletedTask";
import TaskList from "./component/TaskList";

export const App = () => {
  return (
    <>
      <div className="todo_app_section">
        <div className="todo_app_container">
          <div className="new_task_list task_list">
            <h2>Task List</h2>
          </div>
          <TaskList />
        </div>
      </div>

      <div className="completed_task_list task_list">
        <h2>Completed Task</h2>
        <div>
          <CompletedTask />
        </div>
      </div>
    </>
  );
};
export default App;
