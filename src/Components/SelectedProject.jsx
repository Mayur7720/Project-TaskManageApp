import React, { useContext, useState } from "react";
import CreateTask from "./CreateTask";
import { ProjectContext } from "../Contexts/ProjectContext";

function SelectedProject({ project }) {
  const { onDeleteProject } = useContext(ProjectContext);
  const [newWindow, setNewWindow] = useState(false);

  const newTaskWindow = () => {
    setNewWindow((prevstate) => !prevstate);
  };
  const deleteProject = (projectId) => {
    onDeleteProject(projectId);
  };

  
  return (
    <section className="w-3/4 bg-slate-400 p-3 relative">
      <div className="w-full h-full ">
        <div className="bg-slate-300 h-2/5 w-3/4 ml-auto mr-auto p-4 rounded-xl mt-4 shadow-md shadow-black border-t-4 border-b-4 border-orange-500">
          <div className="w-full block h-8 ">
            <button
              onClick={newTaskWindow}
              className="font-semibold float-right  mr-8 bg-blue-700  text-white px-3 py-2 rounded border hover:bg-blue-800"
            >
              + New Task
            </button>
            <button
              onClick={() => deleteProject(project.id)}
              className="font-semibold float-right  mr-8 bg-red-600 text-white px-3 py-2 rounded border hover:bg-red-700"
            >
              Delete
            </button>
          </div>
          <div className=" mt-6">
            <div className=" mb-4 ">
              <span className="font-serif underline underline-offset-2 text-xl font-semibold">
                Project Name:
              </span>{" "}
              {project.title}
            </div>
            <div className="text-md mb-4 ">
              <span className="font-serif underline underline-offset-2 text-xl font-semibold">
                Description:
              </span>{" "}
              {project.description}
            </div>
            <div className="ialic mb-4 ">
              <span className="font-serif underline underline-offset-2 text-xl font-semibold">
                DueDate:{" "}
              </span>
              {project.dueDate}
            </div>
            {newWindow && <CreateTask />}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SelectedProject;
