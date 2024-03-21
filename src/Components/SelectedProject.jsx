import { useContext, useState, useRef } from "react";
import { ProjectContext } from "../Contexts/ProjectContext";
import TaskTable from "./TaskTable";

function SelectedProject({ project }) {
  const { onDeleteProject, onTaskCreated } = useContext(ProjectContext);
  const [errors, setError] = useState({});
  const [newWindow, setNewWindow] = useState(false);

  let enteredTitle = useRef();
  let enteredDescription = useRef();
  let enteredEndDate = useRef();
  let enteredStartDate = useRef();
  let enteredStatus = useRef();

  const newTaskWindow = () => {
    setNewWindow((prevstate) => !prevstate);
  };
  const onCloseTaskWindow = () => {
    setNewWindow((prevstate) => !prevstate);
  };
  const deleteProject = (projectId) => {
    onDeleteProject(projectId);
  };

  const createTasks = () => {
    let taskTitle = enteredTitle.current.value;
    let taskDescription = enteredDescription.current.value;
    let taskStartDate = enteredStartDate.current.value;
    let taskEndDate = enteredEndDate.current.value;
    let taskID = Date.now();
    let taskStatus = enteredStatus.current.value;
    let isEditing = false;
    const today = new Date().toISOString().split("T")[0];

    const errors = {};
    if (!taskTitle.trim()) {
      errors.taskTitle = "Please enter a task Title";
    }
    if (!taskDescription.trim()) {
      errors.taskDescription = "Please enter task Description";
    }
    if (!taskStatus.trim()) {
      errors.taskStatus = "Please select task status";
    }
    if (!taskStartDate) {
      errors.taskStartDate = "Please select a start date";
    } else if (taskStartDate < today) {
      errors.taskStartDate = "Start date must be after today.";
    } else if (!taskEndDate) {
      errors.taskEndDate = "Please select a end date";
    } else if (taskStartDate >= taskEndDate) {
      errors.taskEndDate = "End date must be after start date";
    } else {
      onTaskCreated(
        {
          taskTitle,
          taskDescription,
          taskStartDate,
          taskEndDate,
          taskID,
          taskStatus,
          isEditing,
        },
        project.id
      );
    }
    setError(errors);
    console.log(errors);

  };

  return (
    <section className="bg-gradient-to-r from-cyan-300 to-blue-400 h-screen w-full p-3 relative overflow-x-auto">
      <div className="w-full   ">
        <div className="text-center w-1/2 border-4 border-l-orange-300 border-t-orange-300 border-r-orange-500 border-b-orange-500 bg-slate-200 ml-1 mt-2 p-4 font-mono text-gray-600   rounded-tl-full rounded-br-full shadow-md shadow-gray-700 ">
          <span className="font-Basic text-2xl font-semibold ml-6">
            {/* Project Name: */}
          </span>{" "}
          <span className="font-anta tracking-widest font-semibold  text-slate-600 text-2xl uppercase ">
            {project.title}
          </span>
        </div>
        <div className="bg-slate-200 h-2/5  p-4 rounded-lg mt-3 shadow-md shadow-black ">
          <div className=" ">
            <div className="w-full mb-10 ">
              {" "}
              <div className="ml-8 mt-2">
                <span className="font-sans text-xl text-slate-600 font-semibold">
                  Description :
                </span>{" "}
                <span className=" capitalize font-semibold text-gray-700 text-lg tracking-wide">
                  {project.description}
                </span>
              </div>
              <div className="ml-8 mt-2  ">
                <span className="font-sans text-xl text-slate-600 font-semibold">
                  Due Date :
                </span>{" "}
                <span className="font-sans capitalize font-semibold text-gray-700 text-lg tracking-wide">
                  {project.dueDate}
                </span>
              </div>
              <div className="w-full block h-4 mb-2">
                <button
                  onClick={newTaskWindow}
                  className="font-semibold shadow-neutral-600 shadow-sm float-right  mr-20 bg-blue-700  text-white px-2 py-1 rounded border-2 border-transparent   hover:bg-blue-800 hover:shadow-none transition ease-in"
                >
                  + New Task
                </button>
                <button
                  onClick={() => deleteProject(project.id)}
                  className="font-semibold shadow-neutral-600 shadow-sm float-right  mr-8 bg-red-600 text-white px-2 py-1 rounded border-2 border-transparent   hover:bg-red-700   hover:shadow-none transition ease-in "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <hr className="bg-slate-400 border-none h-0.5 rounded " />

            {/* ******************|Task Form Started|********************* */}
            {newWindow && (
              <section className="w-full h-full backdrop-blur-sm bg-gray-600/50  absolute top-[0rem] left-[0] flex justify-center items-center rounded-xl z-40 ">
                <div className="w-[45rem] h-[38rem] bg-stone-200 ml-auto mr-auto   rounded-lg shadow-neutral-900  shadow-md px-1 ">
                  <div className="border-b-gray-700 border-b-2 p-2 mb-4 flex justify-center items-center ">
                    <span className="flex gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-8 stroke-2 stroke-purple-800"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>

                      <h2 className="text-2xl font-semibold font-mono  hover:underline select-none text-purple-800 ">
                        Add Task Details..
                      </h2>
                    </span>
                    <button
                      className="bg-red-500 px-4 font-semibold py-1 text-white rounded hover:bg-red-600 shadow-sm hover:shadow-gray-500 ml-auto mr-4"
                      onClick={onCloseTaskWindow}
                    >
                      X
                    </button>
                  </div>
                  <div className="px-5  h-[6rem] ">
                    <label className="  font-kode text-md font-bold select-none ">
                      Task Title :{" "}
                    </label>

                    <input
                      ref={enteredTitle}
                      type="text"
                      className="w-full p-1 h-10 mt-1 rounded-lg  outline-none border border-gray-600 text-gray-800 font-semibold focus:border-none focus:ring-purple-700   select-none  ring-2 ring-transparent text-lg  "
                    />
                    {errors.taskTitle && (
                      <span className="text-red-500 font-mono text-sm ">
                        {errors.taskTitle}
                      </span>
                    )}
                  </div>

                  <div className="px-5 mb-1 h-[7rem] ">
                    <label className=" font-kode text-md font-bold select-none">
                      Description :{" "}
                    </label>
                    <textarea
                      ref={enteredDescription}
                      type="text"
                      className="w-full mt-1 rounded-lg outline-none border border-gray-600 text-gray-800 font-semibold  focus:border-none focus:ring-purple-700  select-none  ring-2 ring-transparent text-lg "
                    />
                    {errors.taskDescription && (
                      <span className="text-red-500 font-mono text-sm  ">
                        {errors.taskDescription}
                      </span>
                    )}
                  </div>
                  <div className="px-5 h-[6rem] ">
                    <label className=" font-kode text-md font-bold select-none">
                      Task Status :{" "}
                    </label>
                    <select
                      ref={enteredStatus}
                      className=" w-full p-1 h-10 mt-1  rounded-lg  outline-none border border-gray-600 text-gray-800 font-semibold focus:border-none focus:ring-purple-700  select-none  ring-2 ring-transparent text-lg"
                    >
                      <option value="">Not Selected</option>
                      <option value="new">New</option>
                      <option value="block">Block</option>
                      <option value="done">Done</option>
                      <option value="unsigned">Unsigned</option>
                      <option value="pending">Pending</option>
                    </select>
                    {errors.taskStatus && (
                      <span className="text-red-500 font-mono text-sm  ">
                        {errors.taskStatus}
                      </span>
                    )}
                  </div>
                  <div className="px-5 h-[6rem]">
                    <label className=" font-kode text-md font-bold select-none">
                      Start Date :{" "}
                    </label>
                    <input
                      ref={enteredStartDate}
                      type="date"
                      className="w-full p-1 h-10 mt-1  rounded-lg  outline-none border border-gray-600 text-gray-800 font-semibold focus:border-none focus:ring-purple-700  select-none  ring-2 ring-transparent text-lg"
                    />
                    {errors.taskStartDate && (
                      <span className="text-red-500 font-mono text-sm  ">
                        {errors.taskStartDate}
                      </span>
                    )}
                  </div>
                  <div className="px-5 h-[5rem]">
                    <label className=" font-kode text-md font-bold select-none">
                      End Date :{" "}
                    </label>
                    <input
                      ref={enteredEndDate}
                      type="date"
                      className="w-full p-1 h-10  mt-1  rounded-lg  outline-none border border-gray-600 text-gray-800 font-semibold focus:border-none focus:ring-purple-700  select-none  ring-2 ring-transparent text-lg"
                    />
                    {errors.taskEndDate && (
                      <span className="text-red-500 font-mono text-sm  ">
                        {errors.taskEndDate}
                      </span>
                    )}
                  </div>
                  <div className="text-center ">
                    <button
                      onClick={createTasks}
                      className=" px-3 py-2 bg-purple-600 text-white rounded font-medium font-sans shadow-sm shadow-black  hover:shadow-none duration-300  "
                    >
                      Add Task
                    </button>
                  </div>
                </div>
              </section>
            )}
          </div>
          {project.task !== undefined ? (
            project.task.length === 0 ? (
              <div className="ml-32 mt-6 w-3/4 rounded-xl bg-red-500 text-center font-semibold text-red-300 animate-pulse">
                No Task is Add In This Project !
              </div>
            ) : (
              <TaskTable Projects={project} />
            )
          ) : (
            <div className="ml-32 mt-6 w-3/4 rounded-xl bg-red-500 text-center font-semibold text-red-300 animate-pulse ">
              No Task is Add In This Project !
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default SelectedProject;
