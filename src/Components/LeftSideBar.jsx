import { useContext, useState } from "react";
import { ProjectContext } from "../Contexts/ProjectContext";

function LeftSideBar({ onStartClick, selectedProjectId }) {
  const { Projects, onClickProjectList } = useContext(ProjectContext);
  const [open, setOpen] = useState(false);
  const handleClick = (id) => {
    onClickProjectList(id);
  };

  if (!Projects) {
    return <div>Empty</div>;
  }
  return (
    <section
      className={`${
        open ? " w-1/5 duration-500 " : " -translate-x-[rem] w-0 duration-500 "
      }  bg-slate-950 h-screen py-4 relative select-none `}
    >
      <button
        className="text-white absolute -right-4 bg-slate-950 rounded-xl py-4 pl-4  border-r-4 border-transparent  hover:border-orange-400 z-50 "
        onClick={() => setOpen((prevState) => !prevState)}
      >
        <div className=" ">
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-5 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M13.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                clip-rule="evenodd"
              />
              <path
                fill-rule="evenodd"
                d="M19.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                clip-rule="evenodd"
              />
            </svg>
          )}
        </div>
      </button>
      <h1 className="font-anta text-orange-300 tracking-wider text-2xl text-center font-semibold mb-7 ">
        Your Projects
      </h1>
      <div className="text-center">
        <button
          className="text-slate-400 bg-slate-700  px-2 py-2  mb-2 border border-slate-400 hover:bg-slate-900 rounded-3xl hover:border-slate-700 font-semibold transition ease-in duration-300 "
          onClick={onStartClick}
        >
          <span className="flex gap-3">
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
                d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
              />
            </svg>
            Add Project
          </span>
        </button>
      </div>
      <hr className="mt-4 h-1 border-none mb-8 bg-orange-500 " />

      <div className="w-full">
        <ul className=" w-full text-center  ">
          {Projects.map((project, idx) => {
            let cssClass = ` w-3/4 text-white ml-auto mr-auto p-3 mb-4 text-center capitalize rounded-l-xl border-r-4 border-transparent font-mono hover:bg-gray-900 transition ease-out duration-500 `;
            if (project.id === selectedProjectId) {
              cssClass +=
                " bg-slate-800 border-r-6 border-r-orange-400 underline underline-offset-4 ";
            } else {
              cssClass += " text-white-500  ";
            }
            return (
              <li key={idx} className="w-full ml-7">
                <button
                  className={cssClass + " flex gap-2"}
                  onClick={() => handleClick(project.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                    />
                  </svg>

                  {project.title}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default LeftSideBar;
