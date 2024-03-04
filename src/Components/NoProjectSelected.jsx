import React from "react";

function NoProjectSelected({ onStartClick }) {
  return (
    <section className="w-full bg-slate-600 h-screen m-auto  text-center flex flex-col gap-4 justify-center ">
      <h1 className="font-semibold text-center text-3xl text-slate-400">
        No Project Selected
      </h1>
      <p className="text-xl text-center text-slate-400 italic">
        To create Project Click on Create Project Button
      </p>
      <div>
        <button
          onClick={onStartClick}
          className="font-serif rounded bg-slate-800 text-stone-200  px-3 py-2 border-2 border-transparent hover:border-slate-400  "
        >
          Create Project
        </button>
      </div>
    </section>
  );
}

export default NoProjectSelected;
