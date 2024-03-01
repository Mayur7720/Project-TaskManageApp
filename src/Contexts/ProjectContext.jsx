import { createContext } from "react";

export const ProjectContext = createContext({
  Projects: [],
  Tasks: [],
  onAddProject: (data) => {},
  onDeleteProject: (projectId) => {},
  onClickProjectList: (id) => {},
  onTaskCreated: (data,projectID) => {},
  onEditTask:(projectID,taskID)=>{},
  onInputChange:(projectID,taskID,field,value)=>{},
  onSaveTask:(projectID, taskID, updatedTask)=>{},
  onDeleteTask:(projectID,TaskID)=>{},
});

// {
//     id: 45,
//     title: "react",
//     description: "it was good",
//     dueDate: "2001/5/6",
//    task:[]
//   },
//   {
//     id: 4,
//     title: "nodejs",
//     description: "not so good",
//     dueDate: "2001/5/6",
// task:[]
//   },
//   {
//     id: 5,
//     title: "django",
//     description: "not so bad",
//     dueDate: "2001/5/6",
// task:[]
//   },
