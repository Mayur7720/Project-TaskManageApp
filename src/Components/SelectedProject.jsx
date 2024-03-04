import React, { useContext, useState, useRef } from "react";
import { ProjectContext } from "../Contexts/ProjectContext";
import TaskTable from "./TaskTable";

function SelectedProject({ project }) {
  const { onDeleteProject, onTaskCreated } = useContext(ProjectContext);
  const [error, setError] = useState("");
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

    if (taskTitle.length < 5) {
      setError("Enter the Task title with Minimum 5 Character");
    } else if (taskEndDate === "" || taskStartDate === "") {
      setError("Please select both start and end dates of Task");
    } else if (new Date(taskStartDate) >= new Date(taskEndDate)) {
      setError("End date must be after start date");
    } else if (taskDescription.length < 8) {
      setError("Enter task Description with minimum 8 character");
    } else if (taskStatus === "Not Selected") {
      setError("Select Status for Task");
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
    setTimeout(() => {
      setError("");
    }, 4000);
  };

  return (
    <section className=" w-full  bg-slate-400 p-3 overflow-x-hidden ">
      <div className="w-full relative  ">
        <div className="bg-slate-300 h-2/5 w-3/4 ml-auto mr-auto p-4 rounded-xl mt-4 shadow-md shadow-black border-t-4 border-b-4 border-orange-500">
          <div className=" mt-6">
            <div className=" mb-4 ">
              <span className="font-serif underline underline-offset-2 text-xl font-semibold">
                Project Name:
              </span>{" "}
              <span className="font-anta capitalize text-md">
                {project.title}
              </span>
            </div>
            <div className="text-md mb-4 ">
              <span className="font-serif underline underline-offset-2 text-xl font-semibold">
                Description:
              </span>{" "}
              <span className="font-anta capitalize text-md">
                {project.description}
              </span>
            </div>
            <div className="ialic mb-4 ">
              <span className="font-serif underline underline-offset-2 text-xl font-semibold">
                DueDate:
              </span>{" "}
              <span className="font-anta capitalize text-md">
                {project.dueDate}
              </span>
              <div className="w-full block h-8 ">
                <button
                  onClick={newTaskWindow}
                  className="font-semibold shadow-neutral-600 shadow-md float-right  mr-8 bg-blue-700  text-white px-3 py-2 rounded border hover:bg-blue-800 hover:shadow-none transition ease-in"
                >
                  + New Task
                </button>
                <button
                  onClick={() => deleteProject(project.id)}
                  className="font-semibold shadow-neutral-600 shadow-md float-right  mr-8 bg-red-600 text-white px-3 py-2 rounded border hover:bg-red-700 hover:shadow-none transition ease-in "
                >
                  Delete
                </button>
              </div>
            </div>

            {/* ******************|Task Form Started|********************* */}

            {newWindow && (
              <section className="backdrop-blur-sm bg-stone-800/25 w-4/5 h-[35rem]  absolute top-1 left-[5.9rem] flex justify-center items-center rounded-xl z-50">
                <div className="w-3/4 border-2 border-gray-500  ml-auto mr-auto  rounded-lg shadow-neutral-700  shadow-lg py-3 ">
                  <div className="border-b-gray-700 border-b-2 p-2 mb-4 flex justify-center items-center ">
                    <h2 className="px-4 text-xl font-semibold font-mono underline underline-offset-4 hover:no-underline ">
                      Enter Task Details
                    </h2>

                    <button
                      className="bg-red-500 px-3 font-semibold py-1 text-white rounded hover:bg-red-600 shadow-sm hover:shadow-black ml-auto"
                      onClick={onCloseTaskWindow}
                    >
                      X
                    </button>
                  </div>
                  <div className="px-5  mb-3">
                    <label className=" font-customFont font-semibold">
                      Task Title :{" "}
                    </label>

                    <input
                      ref={enteredTitle}
                      type="text"
                      className="w-full p-1 mt-1 rounded-lg outline-none focus:ring-green-700  ring-2 ring-transparent bg-zinc-300 "
                    />
                  </div>
                  <div className="px-5 mb-3">
                    <label className="font-customFont font-semibold">
                      Description :{" "}
                    </label>
                    <input
                      ref={enteredDescription}
                      type="text"
                      className="w-full p-1 mt-1   rounded-lg outline-none focus:ring-green-700  ring-2 ring-transparent bg-zinc-300"
                    />
                  </div>
                  <div className="px-5 mb-3">
                    <label className="font-customFont font-semibold">
                      Task Status :{" "}
                    </label>
                    <select
                      ref={enteredStatus}
                      className=" w-full p-1 mt-1  rounded-lg outline-none focus:ring-green-700  ring-2 ring-transparent bg-zinc-300"
                    >
                      <option value="new">Not Selected</option>
                      <option value="new">New</option>
                      <option value="block">Block</option>
                      <option value="done">Done</option>
                      <option value="unsigned">Unsigned</option>
                      <option value="pending">Pending</option>
                    </select>
                  </div>
                  <div className="px-5 mb-3">
                    <label className="font-customFont font-semibold">
                      Start Date :{" "}
                    </label>
                    <input
                      ref={enteredStartDate}
                      type="date"
                      className="w-full p-1 mt-1  rounded-lg outline-none focus:ring-green-700  ring-2 ring-transparent bg-zinc-300"
                    />
                  </div>
                  <div className="px-5 mb-3">
                    <label className="font-customFont font-semibold">
                      End Date :{" "}
                    </label>
                    <input
                      ref={enteredEndDate}
                      type="date"
                      className="w-full p-1 mt-1  rounded-lg outline-none focus:ring-green-700  ring-2 ring-transparent bg-zinc-300"
                    />
                  </div>
                  <div className="text-center block">
                    <button
                      onClick={createTasks}
                      className=" px-2 py-2 bg-green-600 text-white rounded font-semibold font-sans shadow-sm shadow-black  hover:shadow-none    hover:bg-green-700 duration-300"
                    >
                      Create Task
                    </button>
                  </div>
                  <div className="w-full text-center mt-4 ">
                    <span className="bg-red-500 text-white font-mono ">
                      {error}
                    </span>
                    ;
                  </div>
                </div>
              </section>
            )}
          </div>
        </div>
        {project.task !== undefined ? (
          project.task.length === 0 ? (
            <div className="ml-32  mt-6 w-3/4 rounded-lg bg-red-500 text-center font-bold text-red-300 ">
              No Task is Add In This Project !
            </div>
          ) : (
            <TaskTable Projects={project} />
          )
        ) : (
          <div className="ml-32  mt-6 w-3/4 rounded-lg bg-red-500 text-center font-bold text-red-300 ">
            No Task is Add In This Project !
          </div>
        )}
      </div>
    </section>
  );
}

export default SelectedProject;
