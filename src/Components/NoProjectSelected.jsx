import React from "react";

function NoProjectSelected({ onStartClick }) {
  return (
    <section className="w-3/4 bg-slate-600 h-screen m-auto  text-center flex flex-col gap-4 justify-center ">
      <h1 className="font-semibold text-center text-3xl text-slate-400">
        No Project Selected
      </h1>
      <p className="text-xl text-center text-slate-400 italic">
        To create Project Click on Create Project Button
      </p>
      <div>
        <button
          onClick={onStartClick}
          className="text-sans rounded bg-slate-800 text-stone-200 font-serif px-3 py-2  "
        >
          Create Project
        </button>
      </div>
    </section>
  );
}

export default NoProjectSelected;
