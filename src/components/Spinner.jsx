import React from "react";
import "../App.css";

const Spinner = () => {
  return (
    <div className="grid gap-3 items-center ">
      <div className="flex items-center justify-center ">
        <svg
          className="animate-spin border-indigo-300"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
        >
          <circle
            cx="15"
            cy="15"
            r="14"
            stroke="#4F46E5"
            stroke-width="2"
            stroke-dasharray="6 6"
          />
        </svg>
      </div>
    </div>
  );
};

export default Spinner;
