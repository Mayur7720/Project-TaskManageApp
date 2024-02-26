import { useEffect, useState } from "react";
import LeftSideBar from "./Components/LeftSideBar";
import RightSideBar from "./Components/RightSideBar";
import { ProjectContext } from "./Contexts/ProjectContext";
import SelectedProject from "./Components/SelectedProject";
import NoProjectSelected from "./Components/NoProjectSelected";
import CreateTask from "./Components/CreateTask";

function App() {
  const [projectState, setProjectState] = useState({
    projectSelectedID: undefined,
    Projects: [
      {
        id: 45,
        title: "react",
        description: "it was good",
        dueDate: "2001/5/6",
      },
      {
        id: 4,
        title: "nodejs",
        description: "not so good",
        dueDate: "2001/5/6",
      },
      {
        id: 5,
        title: "django",
        description: "not so bad",
        dueDate: "2001/5/6",
      },
    ],
    Tasks: [],
  });
  const [selectedProject, setSelectedProject] = useState();

  function onProjectStart() {
    setProjectState((prevState) => {
      return { ...prevState, projectSelectedID: null };
    });
  }

  const handleClickProjectList = (id) => {
    setProjectState((prevState) => {
      return { ...prevState, projectSelectedID: id };
    });
  };

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

  const handleDeleteProject = (projectId) => {
    setProjectState((prevState) => {
      const newData = projectState.Projects.filter(
        (project) => project !== projectId
      );
      return { ...prevState, projectSelectedID: undefined, newData };
    });
  };

  //   Storing and loading data in LocalStorage

  // Storing item
  useEffect(() => {
    console.log(projectState.Projects);
    if (projectState.Projects) {
      localStorage.setItem("Projects", JSON.stringify(projectState.Projects));
    }
  }, [projectState.Projects]);

  // load project data
  useEffect(() => {
    if (window.localStorage) {
      const projectData = localStorage.getItem("Projects");
      console.log(projectData);

      return setProjectState(JSON.parse(projectData));
    }
  }, [window.localStorage]);

  useEffect(() => {
    //finding project by ID
    if (projectState.Projects) {
      setSelectedProject(
        projectState.Projects.find(
          (project) => project.id === projectState.projectSelectedID
        )
      );
    }
  }, [projectState.Projects]);

  //Condition's for Rendering
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
  };
  return (
    <ProjectContext.Provider value={context}>
      <section className="bg-slate-900 flex">
        <LeftSideBar />
        {content}
      </section>
    </ProjectContext.Provider>
  );
}

export default App;
