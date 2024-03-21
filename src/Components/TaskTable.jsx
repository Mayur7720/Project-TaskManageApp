import { useContext } from "react";
import { ProjectContext } from "../Contexts/ProjectContext";

function TaskTable({ Projects }) {
  const { onEditTask, onInputChange, onSaveTask, onDeleteTask } =
    useContext(ProjectContext);

  let classes = "border-t  px-2 py-2 ";

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
          <p className="rounded-xl h-5   ml-auto mr-auto  bg-green-500 text-white ">
            Done
          </p>
        );

      case "new":
        return (
          <p className="rounded-xl h-5   ml-auto mr-auto   bg-indigo-600 text-white">
            New
          </p>
        );

      case "unsigned":
        return (
          <p className="rounded-xl h-5  ml-auto mr-auto  bg-amber-500 text-white">
            Unsigned
          </p>
        );

      case "block":
        return (
          <p className="rounded-xl h-5  ml-auto mr-auto  bg-red-500 text-white">
            Block
          </p>
        );

      case "pending":
        return (
          <p className="rounded-xl h-5 bg-orange-700  ml-auto mr-auto  text-white">
            Pending
          </p>
        );
      default:
        return "No Selection";
    }
  }
  return (
    <section className="mt-2 rounded-xl  w-full h-full  text-center py-2 select-none  ">
      <div className="    ">
        <span className="flex justify-center gap-2">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-7"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0 1 12 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5"
            />
          </svg>
          <h2 className="font-semibold font-anta text-xl mb-3">Your Tasks :</h2>
        </span>
      </div>
      <div className="p-2 flex items-center rounded-xl justify-center py-4 mx-2 shadow-lg  shadow-slate-700 z-10 border-t-2 border-slate-400 ">
        <table className=" table-auto w-full md:w-5/4 md:text-sm ">
          <thead className="bg-slate-600 text-gray-200  ">
            <tr>
              <th
                className={classes + " font-semibold text-base font-mono p-3 "}
              >
                Task ID
              </th>
              <th
                className={classes + " font-semibold text-base font-mono p-3 "}
              >
                Task Title
              </th>
              <th
                className={classes + " font-semibold text-base font-mono p-3 "}
              >
                Task Description
              </th>
              <th
                className={classes + " font-semibold text-base font-mono p-3 "}
              >
                Start Date
              </th>
              <th
                className={classes + " font-semibold text-base font-mono p-3 "}
              >
                End Date
              </th>
              <th
                className={classes + " font-semibold text-base font-mono p-3  "}
              >
                Status
              </th>
              <th
                className={classes + " font-semibold text-base font-mono p-3 "}
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="text-center ">
            {Projects.task.map((Task) => (
              <tr
                key={Task.taskID}
                className="hover:bg-slate-400 odd:bg-gray-200 even:bg-gray-300 "
              >
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
                    <div className="font-semibold "> {Task.taskTitle}</div>
                  )}{" "}
                </td>
                <td className={classes}>
                  {" "}
                  {Task.isEditing ? (
                    <textarea
                      className="rounded-md bg-slate-300 text-center outline-none focus:ring-2 focus:ring-zinc-900 md:w-3/4 max-w-md resize-none"
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
                      className="bg-green-500 text-white px-2 py-1 rounded-md hover:bg-green-600 md:text-sm ml-2 md:mt-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-5 stroke-2 "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859M12 3v8.25m0 0-3-3m3 3 3-3"
                        />
                      </svg>
                    </button>
                  ) : (
                    <button
                      onClick={() => editTask(Projects.id, Task.taskID)}
                      className="bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-600 md:text-sm ml-2 md:mt-1 shadow-sm shadow-neutral-800"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                        />
                      </svg>
                    </button>
                  )}
                  <button
                    onClick={() => deleteTask(Projects.id, Task.taskID)}
                    className="bg-red-500  text-white px-2 py-1 rounded-md hover:bg-red-600  md:text-sm ml-2 md:mt-1 shadow-sm shadow-neutral-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
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
