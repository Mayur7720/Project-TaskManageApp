import { useEffect, useState } from "react";
import LeftSideBar from "./Components/LeftSideBar";
import NoProjectSelected from "./Components/NoProjectSelected";
import RightSideBar from "./Components/RightSideBar";
import SelectedProject from "./Components/SelectedProject";
import { ProjectContext } from "./Contexts/ProjectContext";
import { Dummy_Data } from "../Dummy_Data";

function App() {
  const [projectState, setProjectState] = useState({
    projectSelectedID: undefined,
    Projects: [],
  });
  //**********************************Task Section Started**************************************

  //Adding Task
  function handleTaskCreated(tasks, projectID) {
    const updatedProjects = projectState.Projects.map((project) => {
      if (project.id === projectID) {
        if (project.task === undefined)
        {
          console.log(project.task)
          return { ...project, task: [tasks] };
        }
        return { ...project, task: [...project.task, tasks] };
      }
      return project;
    });
    console.log(updatedProjects);
    setProjectState({ ...projectState, Projects: updatedProjects });
  }

  //Editing Task
  function handleTaskEdit(projectID, taskID) {
    const updatedProjects = projectState.Projects.map((project) =>
      project.id === projectID
        ? {
            ...project,
            task: project.task.map((task) =>
              task.taskID == taskID ? { ...task, isEditing: true } : task
            ),
          }
        : project
    );
    setProjectState({ ...projectState, Projects: updatedProjects });
  }

  //handling InputChange on table
  const handleInputChange = (projectID, taskID, field, value) => {
    const updatedProjects = projectState.Projects.map((project) =>
      project.id === projectID
        ? {
            ...project,
            task: project.task.map((task) =>
              task.taskID === taskID ? { ...task, [field]: value } : task
            ),
          }
        : project
    );
    setProjectState({ ...projectState, Projects: updatedProjects });
  };

  // Saving Edited Task
  const handleSaveTask = (projectID, taskID, updatedTask) => {
    const updatedProjects = projectState.Projects.map((project) =>
      project.id === projectID
        ? {
            ...project,
            task: project.task.map((task) =>
              task.taskID === taskID
                ? { ...task, ...updatedTask, isEditing: false }
                : task
            ),
          }
        : project
    );
    setProjectState({ ...projectState, Projects: updatedProjects });
  };

  //Deleting task
  const handleDeleteTask = (projectID, TaskID) => {
    const updatedProjects = projectState.Projects.map((project) =>
      project.id === projectID
        ? {
            ...project,
            task: project.task.filter((task) => task.taskID !== TaskID),
          }
        : project
    );
    setProjectState({ ...projectState, Projects: updatedProjects });
  };

  //**********************************Project Section Started**************************************

  function onProjectStart() {
    setProjectState((prevState) => {
      return { ...prevState, projectSelectedID: null };
    });
  }

  //Project List
  const handleClickProjectList = (id) => {
    setProjectState((prevState) => {
      return { ...prevState, projectSelectedID: id };
    });
  };

  //Add Project
  const handleAddProject = (ProjectData) => {
    setProjectState((prevState) => {
      const newProject = {
        id: Date.now(),
        ...ProjectData,
      };
      return {
        ...prevState,
        projectSelectedID: undefined,
        Projects: [...prevState.Projects, newProject],
      };
    });
  };

  //Delete Project
  const handleDeleteProject = (projectId) => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projectSelectedID: undefined,
        Projects: projectState.Projects.filter(
          (project) => project.id !== projectId
        ),
      };
    });
  };

  //***************************LocalStorage Section Started**********************************/

  useEffect(() => {
    let projectData = localStorage.getItem("Projects");

    if (projectData) {
      const formattedProjects = JSON.parse(projectData);

      let projects;

      if (formattedProjects) {
        projects = [...formattedProjects, ...projectState.Projects];
      } else {
        projects = [...projectState.Projects];
      }

      const projectSet = new Set();
      const uniqueProjects = projects.filter((project) => {
        const projectID = project.id
        const isUnique =!projectSet.has(projectID);
        if (isUnique) {
          projectSet.add(JSON.stringify(project));
        }
        return isUnique;
      });

      localStorage.setItem("Projects", JSON.stringify(uniqueProjects));
    } else {
      localStorage.setItem("Projects", JSON.stringify([]));
    }
  }, [projectState.Projects]);

  // load project data
  useEffect(() => {
    const projectData = localStorage.getItem("Projects");

    setProjectState((prevState) => ({
      ...prevState,
      Projects: JSON.parse(projectData),
    }));
  }, []);
  // ***********************************Selected Project*********************************

  const selectedProject = projectState.Projects.find(
    (project) => project.id === projectState.projectSelectedID
  );

  //**********************************|Condition's for Rendering|***************************

  let content = <SelectedProject project={selectedProject} />;
  if (projectState.projectSelectedID === null) {
    content = <RightSideBar />;
  } else if (projectState.projectSelectedID === undefined) {
    content = <NoProjectSelected onStartClick={onProjectStart} />;
  }

  //Context
  const context = {
    Projects: projectState.Projects,
    Tasks: projectState.Tasks,
    onAddProject: handleAddProject,
    onDeleteProject: handleDeleteProject,
    onClickProjectList: handleClickProjectList,
    onTaskCreated: handleTaskCreated,
    onEditTask: handleTaskEdit,
    onInputChange: handleInputChange,
    onSaveTask: handleSaveTask,
    onDeleteTask: handleDeleteTask,
  };
  return (
    <ProjectContext.Provider value={context}>
      <section className="bg-slate-900 w-full h-screen flex">
        <LeftSideBar onStartClick={onProjectStart} />
        {content}
      </section>
    </ProjectContext.Provider>
  );
}

export default App;
