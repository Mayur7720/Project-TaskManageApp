import React, { forwardRef } from "react";

const Input = forwardRef(function Input(
  { children, textarea, label, ...props },
  ref
) {
  return (
    <div className="font-bold font-sans">
      <label
        className="w-full text-gray-200 text-md font-customFont"
        htmlFor="title"
        {...props}
      >
        {label}
      </label>
      {!textarea ? (
        <input
          ref={ref}
          className="w-full mb-4 p-1 text-sm bg-stone-300 rounded mt-1 "
          {...props}
        />
      ) : (
        <textarea
          ref={ref}
          className="w-full mb-4 p-1 text-sm bg-stone-300 rounded mt-1 "
          {...props}
        />
      )}
    </div>
  );
});

export default Input;
