import { useRef } from "react";
import Input from "./Input";
import { ProjectContext } from "../Contexts/ProjectContext";
import { useContext } from "react";
import Modal from "./Modal";
function RightSideBar({ onCancel }) {
  const { onAddProject } = useContext(ProjectContext);

  const Reftitle = useRef();
  const Refdescription = useRef();
  const Refdate = useRef();
  const modal = useRef();

  const handleClick = () => {
    const title = Reftitle.current.value;
    const description = Refdescription.current.value;
    const dueDate = Refdate.current.value;

    if (
      title.trim() === "" ||
      description.trim() === "" ||
      dueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }
    onAddProject({ title, description, dueDate });
  };

  return (
    <>
      <Modal ref={modal} buttonCaption={"Close"}>
        <h1 className="text-4xl text-center font-extrabold">Invalid data!</h1>
        <p className="p-4 font-semibold text-xl">
          Oops... looks like you forgot to enter a value
        </p>
      </Modal>
      <section className="h-screen w-full bg-slate-500  p-3 flex flex-col items-center justify-center select-none z-0 ">
        <div className="bg-zinc-700 w-2/3 rounded-md h-3/4 p-4 shadow-lg shadow-gray-950">
          <h3 className="mb-2 font-anta text-2xl font-semibold text-stone-300 text-center ">
            Create A Project
          </h3>
          <hr className="mb-8 border-none h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500" />
          <Input ref={Reftitle} label={"Project Title :"} type="text" />
          <Input ref={Refdescription} textarea label={"Description :"} />
          <Input ref={Refdate} type="date" label={"Due Date :"} />
          <button
            onClick={handleClick}
            className="float-right mt-6 bg-green-600 text-md p-2 rounded text-white font-semibold hover:bg-green-700 mr-8 shadow-sm shadow-black hover:shadow-none "
          >
            Add Project
          </button>
          <button
            onClick={onCancel}
            className="float-left ml-8 mt-6 bg-red-600 text-md p-2 rounded text-white font-semibold hover:bg-red-700 shadow-sm shadow-black hover:shadow-none "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
              />
            </svg>
          </button>
        </div>
      </section>
    </>
  );
}

export default RightSideBar;
