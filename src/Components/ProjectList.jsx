// import React, { useContext, useState } from "react";
// import { ProjectContext } from "../Contexts/ProjectContext";

// function ProjectList() {
// const { Projects, onClickProjectList } = useContext(ProjectContext);

// const handleClick = (id) => {
//   onClickProjectList(id);
// };

// if (!Projects) {
//   return <div>Empty</div>;
// }
//   return (
//     <ul className="text-center ml-auto  ">
//       {Projects.map((project) => (
//         <li key={project.id}>
//           <button
//             className={`w-3/4 text-white ml-auto mr-auto p-2 mb-4 text-center capitalize  rounded-xl font-mono border
//          hover:bg-slate-900 hover:border-transparent`}
//             onClick={() => handleClick(project.id)}
//           >
//             {project.title}
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default ProjectList;
