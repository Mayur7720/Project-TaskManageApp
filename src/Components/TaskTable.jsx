import React, { useContext, useState } from "react";
import { ProjectContext } from "../Contexts/ProjectContext";
function TaskTable({ Projects }) {
  const { onEditTask, onInputChange, onSaveTask, onDeleteTask } =
    useContext(ProjectContext);

  let classes = "border-t  px-4 py-2 ";

  const InputChange = (projectID, taskID, field, value) => {
    onInputChange(projectID, taskID, field, value);
  };
  const editTask = (projectID, taskID) => {
    onEditTask(projectID, taskID);
  };
  const saveTask = (projectID, taskID, updatedTask) => {
    onSaveTask(projectID, taskID, updatedTask);
  };
  const deleteTask = (projectID, taskID) => {
    onDeleteTask(projectID, taskID);
  };

  function renderSwitch(param) {
    switch (param) {
      case "done":
        return (
          <p className="rounded-xl w-3/4   ml-auto mr-auto bg-green-500 text-green-100 ">
            Done
          </p>
        );

      case "new":
        return (
          <p className="rounded-xl   ml-auto mr-auto  bg-indigo-600 text-blue-200">
            New
          </p>
        );

      case "unsigned":
        return (
          <p className="rounded-xl  ml-auto mr-auto bg-amber-700 text-amber-200">
            Unsigned
          </p>
        );

      case "block":
        return (
          <p className="rounded-xl  ml-auto mr-auto bg-red-600 text-red-200">
            Block
          </p>
        );

      case "pending":
        return (
          <p className="rounded-xl bg-orange-800  ml-auto mr-auto text-violet-200">
            Pending
          </p>
        );
      default:
        return "No Selection";
    }
  }
  return (
    <section className="mt-5 rounded-xl lg:w-full h-full bg-gray-700 text-center py-2 select-none  ">
      <div className="backdrop-blur-lg bg-white/35 p-2 flex items-center rounded-xl justify-center py-4 mx-2 shadow-sm shadow-slate-100 z-10 ">
        <table className=" table-auto w-full md:w-5/4 md:text-sm ">
          <thead className="bg-slate-700 text-gray-300  ">
            <tr>
              <th className={classes + " font-semibold font-mono p-3 "}>
                Task ID
              </th>
              <th className={classes + " font-semibold font-mono p-3 "}>
                Task Title
              </th>
              <th className={classes + " font-semibold font-mono p-3 "}>
                Task Description
              </th>
              <th className={classes + " font-semibold font-mono p-3 "}>
                Start Date
              </th>
              <th className={classes + " font-semibold font-mono p-3 "}>
                End Date
              </th>
              <th className={classes + " font-semibold font-mono p-3  "}>
                Status
              </th>
              <th className={classes + " font-semibold font-mono p-3 "}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="text-center ">
            {Projects.task.map((Task) => (
              <tr key={Task.taskID} className="hover:bg-slate-500  ">
                <td className={classes}>{Task.taskID}</td>
                <td className={classes}>
                  {" "}
                  {Task.isEditing ? (
                    <input
                      className="rounded-md bg-slate-300 text-center outline-none focus:ring-2 focus:ring-zinc-900 md:w-3/4"
                      type="text"
                      value={Task.taskTitle}
                      onChange={(e) =>
                        InputChange(
                          Projects.id,
                          Task.taskID,
                          "taskTitle",
                          e.target.value
                        )
                      }
                    />
                  ) : (
                    Task.taskTitle
                  )}{" "}
                </td>
                <td className={classes}>
                  {" "}
                  {Task.isEditing ? (
                    <input
                      className="rounded-md bg-slate-300 text-center outline-none focus:ring-2 focus:ring-zinc-900 md:w-3/4"
                      type="text"
                      value={Task.taskDescription}
                      onChange={(e) =>
                        InputChange(
                          Projects.id,
                          Task.taskID,
                          "taskDescription",
                          e.target.value
                        )
                      }
                    />
                  ) : (
                    Task.taskDescription
                  )}
                </td>
                <td className={classes + " md:w-28 "}>{Task.taskStartDate}</td>
                <td className={classes + " md:w-28 "}>{Task.taskEndDate}</td>
                <td className={classes}>
                  {Task.isEditing ? (
                    <select
                      className="rounded-md bg-slate-300 text-center outline-none focus:ring-2 focus:ring-zinc-900"
                      value={Task.taskStatus}
                      onChange={(e) =>
                        InputChange(
                          Projects.id,
                          Task.taskID,
                          "taskStatus",
                          e.target.value
                        )
                      }
                    >
                      <option value="new">New</option>
                      <option value="block">Block</option>
                      <option value="done">Done</option>
                      <option value="unsigned">Unsigned</option>
                      <option value="pending">Pending</option>
                    </select>
                  ) : (
                    renderSwitch(Task.taskStatus)
                  )}
                </td>
                <td className={classes}>
                  {Task.isEditing ? (
                    <button
                      onClick={() =>
                        saveTask(Projects.id, Task.taskID, {
                          isEditing: false,
                        })
                      }
                      className="bg-green-500 text-white px-2 py-1 rounded-md hover:bg-green-600"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => editTask(Projects.id, Task.taskID)}
                      className="bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600 md:text-sm"
                    >
                      Edit
                    </button>
                  )}
                  <button
                    onClick={() => deleteTask(Projects.id, Task.taskID)}
                    className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 ml-2 md:text-sm"
                  >
                    <span class="material-symbols-outlined">delete</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default TaskTable;
