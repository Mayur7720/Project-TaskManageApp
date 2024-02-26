import React from "react";

function CreateTask() {
  return (
    <section className="backdrop-blur-sm bg-white/30 w-4/5 h-4/5 absolute top-8 left-[5.9rem] flex justify-center items-center rounded-xl  ">
      <div className="w-3/4 border-2 border-black  h-2/3 ml-auto mr-auto  rounded-lg shadow-neutral-700  shadow-lg">
        <div className="border-b-gray-700 border-b-2 p-2 mb-4">
          <h2 className="px-4 text-xl font-semibold font-mono">
            Enter Task Details
          </h2>
        </div>
        <div className="px-5">
          <label className=" font-customFont text-stone-900 font-semibold">
            Task Title :{" "}
          </label>
          <input
            type="text"
            className="w-full p-1 mt-1 mb-3 rounded-lg outline-none focus:ring-purple-800 ring-2 ring-transparent bg-zinc-300"
          />
        </div>
        <div className="px-5">
          <label className="font-customFont text-stone-900 font-semibold">
            Description :{" "}
          </label>
          <input
            type="text"
            className="w-full p-1 mt-1 mb-3  rounded-lg outline-none focus:ring-purple-800 ring-2 ring-transparent bg-zinc-300"
          />
        </div>
        <div className="px-5">
          <label className="font-customFont text-stone-900 font-semibold">
            End Date :{" "}
          </label>
          <input
            type="date"
            className="w-full p-1 mt-1 mb-3 rounded-lg outline-none focus:ring-purple-800 ring-2 ring-transparent bg-zinc-300"
          />
        </div>
        <div className="text-center block">
          <button className=" px-2 py-2 bg-purple-700 text-white rounded font-semibold font-sans shadow-sm shadow-black  hover:shadow-none    hover:bg-purple-800 duration-300">
            Create Task
          </button>
        </div>
      </div>
    </section>
  );
}

export default CreateTask;
