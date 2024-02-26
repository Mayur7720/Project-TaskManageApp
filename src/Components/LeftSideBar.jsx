import React from "react";
import ProjectList from "./ProjectList";
function LeftSideBar() {
  return (
    <section className="bg-slate-950 w-1/4 h-screen rounded-tr-[3rem] py-4  ">
      <h1 className="text-white font-sans text-xl font-semibold ml-16 mb-7">
        Your Projects
      </h1>
      <div className="pl-6">
        <button className="text-stone-200 px-2 py-2  mb-2 border hover:bg-slate-900 ">
          <span className="">+ Add Project</span>
        </button>
      </div>
      <hr className="mt-3 mb-5" />
      <div>
        <ProjectList />
      </div>
    </section>
  );
}

export default LeftSideBar;
