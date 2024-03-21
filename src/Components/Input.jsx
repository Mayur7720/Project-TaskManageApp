import React, { forwardRef } from "react";

const Input = forwardRef(function Input(
  { children, textarea, label, ...props },
  ref
) {
  return (
    <div className="font-bold font-sans">
      <label
        className="w-full text-md text-md font-anta text-stone-400 "
        htmlFor="title"
        {...props}
      >
        {label}
      </label>
      {!textarea ? (
        <input
          ref={ref}
          className="w-full mb-4 p-2 bg-stone-300 rounded mt-1 text-md font-semibold  outline-none  focus:ring-2 focus:ring-fuchsia-600  border-none"
          {...props}
        />
      ) : (
        <textarea
          ref={ref}
          className="w-full mb-4 p-2  bg-stone-300 rounded mt-1 text-md font-semibold outline-none  focus:ring-2 focus:ring-fuchsia-600  resize-none"
          {...props}
        />
      )}
    </div>
  );
});

export default Input;
