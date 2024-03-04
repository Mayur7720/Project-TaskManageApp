import { createContext } from "react";

export const ProjectContext = createContext({
  Projects: [],
  Tasks: [],
  onAddProject: (data) => {},
  onDeleteProject: (projectId) => {},
  onClickProjectList: (id) => {},
  onTaskCreated: (data, projectID) => {},
  onEditTask: (projectID, taskID) => {},
  onInputChange: (projectID, taskID, field, value) => {},
  onSaveTask: (projectID, taskID, updatedTask) => {},
  onDeleteTask: (projectID, TaskID) => {},
});

