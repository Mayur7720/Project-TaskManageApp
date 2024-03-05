import { useContext } from "react";
import { ProjectContext } from "../Contexts/ProjectContext";

function LeftSideBar({ onStartClick }) {
  const { Projects, onClickProjectList } =
    useContext(ProjectContext);

  const handleClick = (id) => {
    onClickProjectList(id);
  };

  if (!Projects) {
    return <div>Empty</div>;
  }

  return (
    <section className="bg-slate-950 w-1/5 h-screen rounded-tr-[3rem] py-4  ">
      <h1 className="text-white font-anta  text-2xl font-semibold ml-16 mb-7">
        Your Projects
      </h1>
      <div className="pl-6">
        <button
          className="text-stone-200 px-2 py-2  mb-2 border hover:bg-slate-900 hover:rounded-md hover:border-slate-700 font-mono hover:transition ease-in  "
          onClick={onStartClick}
        >
          <span className="">+ Add Project</span>
        </button>
      </div>
      <hr className="mt-3 mb-5" />
      <div>
        <ul className="text-center ml-auto  ">
          {Projects.map((project, idx) => (
            <li key={idx}>
              <button
                className={`w-3/4 text-white ml-auto mr-auto p-2 mb-4 text-center capitalize  rounded-xl font-mono border hover:bg-slate-900 hover:border-transparent`}
                onClick={() => handleClick(project.id)}
              >
                {project.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default LeftSideBar;
