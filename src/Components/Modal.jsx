import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 p-4 h-1/3 rounded-md shadow-md border-b-4 border-orange-500"
    >
      {children}
      <form method="dialog" className=" text-center">
        <button className="bg-red-600 text-white shadow-black shadow-sm mt-4 hover:bg-red-700 px-4 py-2 font-semibold rounded-md">
          {buttonCaption}
        </button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
