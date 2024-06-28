import React from "react";
import clsx from "clsx";

interface ToastProps {
  message: string;
  type: "success" | "error";
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => {
  return (
    <div
      className={clsx(
        "fixed bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded shadow-lg text-white flex items-center gap-2 z-20",
        {
          "bg-green-600": type === "success",
          "bg-red-600": type === "error",
        }
      )}
    >
      <span>{message}</span>
      <button
        onClick={onClose}
        className="ml-auto bg-transparent border-none text-white cursor-pointer"
      >
        &times;
      </button>
    </div>
  );
};

export default Toast;
