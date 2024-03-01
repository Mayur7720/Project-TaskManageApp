import React, { useContext, useState } from "react";
import { ProjectContext } from "../Contexts/ProjectContext";
function TaskTable({ Projects }) {
  // const { Projects, onEditTask, onInputChange, onSaveTask, onDeleteTask } =
  //   useContext(ProjectContext);
  const { onEditTask, onInputChange, onSaveTask, onDeleteTask } =
    useContext(ProjectContext);

  let classes = "border px-4 py-2";

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

  return (
    <section className="mt-5 rounded-xl w-full h-full bg-gray-700 text-center py-2">
      <div className="backdrop-blur-lg bg-white/30 p-2 flex items-center rounded-xl justify-center py-4 mx-2 shadow-sm shadow-slate-100 z-10 ">
        <table className=" table-auto w-full">
          <thead>
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
                Final Date
              </th>
              <th className={classes + " font-semibold font-mono p-3 "}>
                Status
              </th>
              <th className={classes + " font-semibold font-mono p-3 "}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="text-center ">
            {Projects.task.map((Task) => (
              <tr key={Task.taskID}>
                <td className={classes}>{Task.taskID}</td>
                <td className={classes}>
                  {" "}
                  {Task.isEditing ? (
                    <input
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
                <td className={classes}>{Task.taskEndDate}</td>
                <td className={classes}>
                  {Task.isEditing ? (
                    <select
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
                    </select>
                  ) : (
                    Task.taskStatus
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
                      className="bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600"
                    >
                      Edit
                    </button>
                  )}
                  <button
                    onClick={() => deleteTask(Projects.id, Task.taskID)}
                    className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 ml-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
    // <section className="mt-5 rounded-xl w-full h-full bg-gray-700 text-center py-2">
    //   {Projects.map((project) => (
    //     <div
    //       key={project.key}
    //       className="backdrop-blur-lg bg-white/30 p-2 flex items-center rounded-xl justify-center py-4 mx-2 shadow-sm shadow-slate-100 z-10 "
    //     >
    //       <table className=" table-auto w-full">
    //         <thead>
    //           <tr>
    //             <th className={classes + " font-semibold font-mono p-3 "}>
    //               Task ID
    //             </th>
    //             <th className={classes + " font-semibold font-mono p-3 "}>
    //               Task Title
    //             </th>
    //             <th className={classes + " font-semibold font-mono p-3 "}>
    //               Start Date
    //             </th>
    //             <th className={classes + " font-semibold font-mono p-3 "}>
    //               Final Date
    //             </th>
    //             <th className={classes + " font-semibold font-mono p-3 "}>
    //               Status
    //             </th>
    //             <th className={classes + " font-semibold font-mono p-3 "}>
    //               Actions
    //             </th>
    //           </tr>
    //         </thead>
    //         <tbody className="text-center ">
    //           {project.task.map((task) => (
    //             <tr key={task.taskID}>
    //               <td className={classes}>{task.taskID}</td>
    //               <td className={classes}>
    //                 {" "}
    //                 {task.isEditing ? (
    //                   <input
    //                     type="text"
    //                     value={task.taskTitle}
    //                     onChange={(e) =>
    //                       InputChange(
    //                         project.id,
    //                         task.taskID,
    //                         "taskTitle",
    //                         e.target.value
    //                       )
    //                     }
    //                   />
    //                 ) : (
    //                   task.taskTitle
    //                 )}{" "}
    //               </td>
    //               <td className={classes}>
    //                 {" "}
    //                 {task.isEditing ? (
    //                   <input
    //                     type="text"
    //                     value={task.taskDescription}
    //                     onChange={(e) =>
    //                       InputChange(
    //                         project.id,
    //                         task.taskID,
    //                         "taskDescription",
    //                         e.target.value
    //                       )
    //                     }
    //                   />
    //                 ) : (
    //                   task.taskDescription
    //                 )}
    //               </td>
    //               <td className={classes}>{task.taskDueDate}</td>
    //               <td className={classes}>
    //                 {task.isEditing ? (
    //                   <select
    //                     value={task.taskStatus}
    //                     onChange={(e) =>
    //                       InputChange(
    //                         project.id,
    //                         task.taskID,
    //                         "taskStatus",
    //                         e.target.value
    //                       )
    //                     }
    //                   >
    //                     <option value="new">New</option>
    //                     <option value="block">Block</option>
    //                     <option value="done">Done</option>
    //                     <option value="unsigned">Unsigned</option>
    //                   </select>
    //                 ) : (
    //                   task.taskStatus
    //                 )}
    //               </td>
    //               <td className={classes}>
    //                 {task.isEditing ? (
    //                   <button
    //                     onClick={() =>
    //                       saveTask(project.id, task.taskID, {
    //                         isEditing: false,
    //                       })
    //                     }
    //                     className="bg-green-500 text-white px-2 py-1 rounded-md hover:bg-green-600"
    //                   >
    //                     Save
    //                   </button>
    //                 ) : (
    //                   <button
    //                     onClick={() => editTask(project.id, task.taskID)}
    //                     className="bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600"
    //                   >
    //                     Edit
    //                   </button>
    //                 )}
    //                 <button
    //                   onClick={() => deleteTask(project.id, task.taskID)}
    //                   className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 ml-2"
    //                 >
    //                   Delete
    //                 </button>
    //               </td>
    //             </tr>
    //           ))}
    //         </tbody>
    //       </table>
    //     </div>
    //   ))}
    // </section>
  );
}

export default TaskTable;
