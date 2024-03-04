import  { useRef } from "react";
import Input from "./Input";
import { ProjectContext } from "../Contexts/ProjectContext";
import { useContext } from "react";
import Modal from "./Modal";
function RightSideBar() {
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
    onAddProject({ title, description, dueDate});
  };

  return (
    <>
      <Modal ref={modal} buttonCaption={"Close"}>
        <h1 className="text-4xl text-center font-extrabold">Invalid data!</h1>
        <p className="p-4 font-semibold text-xl">
          Oops... looks like you forgot to enter a value
        </p>
      </Modal>
      <section className="bg-slate-600  w-full h-screen  p-3 flex flex-col items-center ">
        <h2 className="font-bold  text-3xl text-slate-400 mb-4 font-customFont ">
          Project Details
        </h2>
        <div className="bg-slate-700 w-2/3 rounded-md h-3/4 p-4 shadow-lg shadow-gray-950">
          <h3 className="mb-2 font-serif text-2xl font-semibold text-stone-300 ">
            Create A Project
          </h3>
          <hr className="mb-10" />
          <Input ref={Reftitle} label={"Project Title :"} type="text" />
          <Input ref={Refdescription} textarea label={"Description :"} />
          <Input ref={Refdate} type="date" label={"Due Date :"} />
          <button
            onClick={handleClick}
            className="float-right mt-8 bg-green-600 text-md p-2 rounded text-white font-semibold hover:bg-green-700 shadow-sm shadow-black hover:shadow-none "
          >
            Add Project
          </button>
        </div>
      </section>
    </>
  );
}

export default RightSideBar;
